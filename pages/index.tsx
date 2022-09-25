import HomeSearchWrapper from "@/components/HomeSearchWrapper";
import Layout, { CONTAINER_SIZE } from "@/components/Layout";
import { Container, createStyles } from "@mantine/core";
import type { NextPage } from "next";

const useStyles = createStyles((theme) => ({}));

const Home: NextPage = () => {
  const { classes } = useStyles();

  return (
    <Layout omitPadding omitContainer>
      <HomeSearchWrapper />
      <Container size={CONTAINER_SIZE}></Container>
    </Layout>
  );
};

export default Home;
