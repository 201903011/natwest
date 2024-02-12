import { useState, useEffect } from "react";
// form
import { useForm } from "react-hook-form";
// @mui
import DatePicker from "@mui/lab/DatePicker";
import { LoadingButton } from "@mui/lab";
import { Stack } from "@mui/material";
// redux
import { useDispatch, useSelector } from "../../redux/store";
import { getWeatherByCity } from "../../redux/slices/weather";
// routes
// components
import Page from "../../components/page";
import { FormProvider, RHFTextField } from "../../components/hook-form";
//
import useIsMountedRef from "../../hooks/use_ismounted_ref";

const selectedEventSelector = (state) => {
  const { data } = state.weather;
  if (data != null) {
    return data;
  }
  return null;
};

function WeatherSearch() {
  const dispatch = useDispatch();

  const [page, setPage] = useState(1);
  const booksData = useSelector(selectedEventSelector);

  const handleChangepag = (event, value) => {
    console.log(value);
    setPage(value);
    // dispatch(getBookslist(value));
  };

  useEffect(() => {
    // dispatch(getBookslist(page));
  }, [dispatch]);

  const isMountedRef = useIsMountedRef();

  const defaultValues = {
    bookname: "",
    author: "",
    isbn: 9874,
    remeber: true,
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
      // dispatch(getCustomBookslist(data.bookname, data.author, data.isbn));
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

  return (
    <Page title="App">
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <Stack
          spacing={2}
          direction={{ xs: "column", sm: "row" }}
          sx={{ p: 3, bgcolor: "background.neutral" }}
        >
          <RHFTextField name="bookname" label="City Name" />

          <LoadingButton
            fullWidth
            size="large"
            type="submit"
            variant="contained"
            loading={isSubmitting}
          >
            Search
          </LoadingButton>
        </Stack>
      </FormProvider>
    </Page>
  );
}

export default WeatherSearch;
