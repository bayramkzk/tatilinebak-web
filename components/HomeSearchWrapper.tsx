import { Container, createStyles } from "@mantine/core";
import React from "react";
import HomeSearch from "./HomeSearch";
import { CONTAINER_SIZE } from "./Layout";

const useStyles = createStyles((theme) => ({
  section: {
    backgroundImage: `url(${
      theme.colorScheme === "dark"
        ? "/images/paris-night.jpg"
        : "/images/paris-day.jpg"
    })`,
    backgroundSize: "cover",
    backgroundPosition: theme.colorScheme === "dark" ? "50% 85%" : "50% 75%",
  },
  container: {
    width: "100%",
    height: 400,
    display: "flex",
    alignItems: "center",
  },
}));

export interface HomeSearchWrapperProps {}

const HomeSearchWrapper: React.FC<HomeSearchWrapperProps> = () => {
  const { classes } = useStyles();

  return (
    <section className={classes.section}>
      <Container size={CONTAINER_SIZE} className={classes.container}>
        <HomeSearch />
      </Container>
    </section>
  );
};

export default HomeSearchWrapper;
