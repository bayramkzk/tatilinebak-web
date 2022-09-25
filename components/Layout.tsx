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
  },
}));

interface LayoutProps {
  children: React.ReactNode;
  size?: MantineNumberSize;
  containerProps?: ContainerProps;
  omitPadding?: boolean;
  omitContainer?: boolean;
}

export const CONTAINER_SIZE = "lg";

const Layout: React.FC<LayoutProps> = ({
  children,
  size = CONTAINER_SIZE,
  containerProps,
  omitPadding,
  omitContainer,
}) => {
  const { classes } = useStyles();
  const main = <div className={classes.main}>{children}</div>;

  return (
    <>
      <Header size={size} mb={omitPadding ? undefined : "lg"} />
      {omitContainer ? (
        main
      ) : (
        <Container
          size={size}
          className={classes.container}
          {...containerProps}
        >
          {main}
        </Container>
      )}
    </>
  );
};

export default Layout;
