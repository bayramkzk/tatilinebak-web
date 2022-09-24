import { Container, createStyles, MantineNumberSize } from "@mantine/core";
import React from "react";
import Header from "./Header";

const useStyles = createStyles((themes) => ({
  container: {
    width: "100%",
  },
  main: {
    width: "100%",
    height: "100%",
  },
}));

interface LayoutProps {
  children: React.ReactNode;
  size?: MantineNumberSize;
}

const Layout: React.FC<LayoutProps> = ({ children, size = "xl" }) => {
  const { classes } = useStyles();

  return (
    <>
      <Header size={size} mb="lg" />
      <Container size={size} className={classes.container}>
        <main className={classes.main}>{children}</main>
      </Container>
    </>
  );
};

export default Layout;
