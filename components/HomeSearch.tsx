import { Autocomplete, Button, createStyles, Grid } from "@mantine/core";
import { DateRangePicker } from "@mantine/dates";
import { useForm } from "@mantine/form";
import { IconCalendar, IconMapPin, IconSearch } from "@tabler/icons";
import "dayjs/locale/tr";
import React from "react";

const INPUT_SIZE = "md";
const MOBILE_BREAKPOINT = "sm";

const useStyles = createStyles((theme) => ({
  form: {
    width: "100%",
  },
  grid: {
    width: "100%",
    background:
      theme.colorScheme === "light"
        ? theme.colors.gray[0]
        : theme.colors.dark[7],
    border:
      theme.colorScheme === "light"
        ? theme.colors.gray[2]
        : theme.colors.dark[6],
    borderRadius: theme.radius.sm,
  },
  location: {
    flexGrow: 2,
    [theme.fn.smallerThan(MOBILE_BREAKPOINT)]: {
      width: "100%",
    },
  },
  date: {
    flexGrow: 1,
    [theme.fn.smallerThan(MOBILE_BREAKPOINT)]: {
      width: "100%",
    },
  },
  submit: {
    textTransform: "uppercase",
    width: "100%",
    [theme.fn.smallerThan(MOBILE_BREAKPOINT)]: {
      width: "100%",
    },
  },
}));

export interface HomeSearchProps {}

const HomeSearch: React.FC<HomeSearchProps> = () => {
  const { classes } = useStyles();
  const form = useForm({
    initialValues: {
      location: "",
      date: [null, null],
    },
    validate: {
      location: (value) => (value.length ? undefined : "Bu alan zorunludur"),
      date: (value) => (!value.includes(null) ? null : "Bu alan zorunludur"),
    },
  });

  const onSubmit = form.onSubmit((values) => {
    console.log(values);
  });

  return (
    <form className={classes.form} onSubmit={onSubmit}>
      <Grid className={classes.grid}>
        <Grid.Col md={5} sm={6}>
          <Autocomplete
            size={INPUT_SIZE}
            placeholder="Nasıl bir tatil istersin?"
            data={[
              "Yurtiçi turları",
              "Yurtdışı turları",
              "Avrupa turları",
              "Vizesiz turlar",
              "Kültür turları",
            ]}
            icon={<IconMapPin />}
            className={classes.location}
            {...form.getInputProps("location")}
          />
        </Grid.Col>

        <Grid.Col md={5} sm={6}>
          <DateRangePicker
            locale="tr"
            size={INPUT_SIZE}
            placeholder="Giriş ve çıkış tarihi"
            icon={<IconCalendar />}
            className={classes.date}
            {...form.getInputProps("date")}
          />
        </Grid.Col>

        <Grid.Col md={2} sm={12}>
          <Button
            size={INPUT_SIZE}
            leftIcon={<IconSearch />}
            className={classes.submit}
            type="submit"
          >
            Ara
          </Button>
        </Grid.Col>
      </Grid>
    </form>
  );
};

export default HomeSearch;
