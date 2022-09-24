import { createStyles } from "@mantine/core";
import React from "react";
import Header from "./Header";

const useStyles = createStyles((themes) => ({
  main: {
    width: "100%",
    height: "100%",
  },
}));

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { classes } = useStyles();

  return (
    <>
      <Header />
      <main className={classes.main}>{children}</main>
    </>
  );
};

export default Layout;
