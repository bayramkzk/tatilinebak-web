import {
  Container,
  ContainerProps,
  createStyles,
  MantineNumberSize,
} from "@mantine/core";
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
  containerProps?: ContainerProps;
  omitPadding?: boolean;
}

const Layout: React.FC<LayoutProps> = ({
  children,
  size = "xl",
  containerProps,
  omitPadding,
}) => {
  const { classes } = useStyles();

  return (
    <>
      <Header size={size} mb={omitPadding ? undefined : "lg"} />
      <Container size={size} className={classes.container} {...containerProps}>
        <main className={classes.main}>{children}</main>
      </Container>
    </>
  );
};

export default Layout;
