import { useState, useEffect } from "react";
// form
import { useForm } from "react-hook-form";
// @mui
import DatePicker from "@mui/lab/DatePicker";
import { LoadingButton } from "@mui/lab";
import { Alert, Box, Card, Container, Stack, Typography } from "@mui/material";
// redux
import { useDispatch, useSelector } from "../../redux/store";
import { getWeatherByCity } from "../../redux/slices/weather";
// routes
// components
import Page from "../../components/page";
import { FormProvider, RHFTextField } from "../../components/hook-form";
//
import useIsMountedRef from "../../hooks/use_ismounted_ref";
import useResponsive from "../../hooks/use_responsive";
import LoadingScreen from "../../components/loading_screen";
import InfoCard from "../../sections/app/infocard";

const selectedEventSelector = (state) => {
  const { weather } = state;
  // console.log(weather);
  if (weather != null) {
    return weather;
  }
  return null;
};

function WeatherSearch() {
  const dispatch = useDispatch();

  const [page, setPage] = useState(1);
  const weatherData = useSelector(selectedEventSelector);

  useEffect(() => {
    // dispatch(getWeatherByCity());
  }, [dispatch]);

  const isMountedRef = useIsMountedRef();

  const defaultValues = {
    city: "Mumbai",
  };

  const methods = useForm({
    defaultValues,
  });

  const {
    reset,
    setError,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = methods;

  const onSubmit = async (data) => {
    try {
      console.log(data);
      dispatch(getWeatherByCity(data.city));
    } catch (error) {
      console.error(error);
      reset();
      if (isMountedRef.current) {
        setError("afterSubmit", {
          ...error,
          message: error.response.statusText,
        });
      }
    }
  };
  const isDesktop = useResponsive("up", "lg");

  return (
    <Page title="App">
      {weatherData.error != null && (
        <Alert severity="error">No data Found</Alert>
      )}

      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <Stack
          spacing={2}
          direction={{ xs: "column", sm: "row" }}
          sx={{ p: 3, bgcolor: "background.neutral" }}
        >
          <RHFTextField name="city" type="name" label="City" />

          <Box width={isDesktop ? 200 : "lg"}>
            <LoadingButton
              fullWidth
              size="large"
              type="submit"
              variant="contained"
              loading={isSubmitting}
            >
              Get weather
            </LoadingButton>
          </Box>
        </Stack>
      </FormProvider>
      <Box height={15} />
      {weatherData.isLoading && <LoadingScreen />}
      <Box p={3}>
        <InfoCard info={weatherData} />
      </Box>
    </Page>
  );
}

export default WeatherSearch;
