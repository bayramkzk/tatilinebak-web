import DealCard from "@/components/DealCard";
import HomeSearchWrapper from "@/components/HomeSearchWrapper";
import Layout, { CONTAINER_SIZE } from "@/components/Layout";
import { Carousel } from "@mantine/carousel";
import { Container, createStyles, Grid } from "@mantine/core";
import Autoplay from "embla-carousel-autoplay";
import type { NextPage } from "next";
import { useRef } from "react";

const useStyles = createStyles((theme) => ({
  container: {
    marginTop: theme.spacing.xl,
  },

  carousel: {
    borderRadius: theme.radius.md,
  },

  slide: {
    height: 400,
    width: 400,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.black,
    background:
      theme.colorScheme === "dark"
        ? theme.colors.dark[6]
        : theme.colors.gray[2],
    fontSize: 64,
    fontWeight: 700,
  },
}));

const Home: NextPage = () => {
  const { classes } = useStyles();
  const autoplay = useRef(Autoplay({ delay: 4000 }));

  return (
    <Layout omitPadding omitContainer>
      <HomeSearchWrapper />
      <Container size={CONTAINER_SIZE} className={classes.container}>
        <Grid>
          <Grid.Col sm={4}>
            <DealCard />
          </Grid.Col>

          <Grid.Col sm={8}>
            <Carousel
              withIndicators
              height={400}
              className={classes.carousel}
              mx="auto"
              plugins={[autoplay.current]}
              onMouseEnter={autoplay.current.stop}
              onMouseLeave={autoplay.current.reset}
            >
              <Carousel.Slide
                className={classes.slide}
                sx={{
                  backgroundImage: "url('/images/amsterdam.jpg')",
                  backgroundSize: "cover",
                  backgroundPosition: "bottom",
                }}
              />
              <Carousel.Slide
                className={classes.slide}
                sx={{
                  backgroundImage: "url('/images/cullinan.jpg')",
                  backgroundSize: "cover",
                  backgroundPosition: "bottom",
                }}
              />
            </Carousel>
          </Grid.Col>
        </Grid>
      </Container>
    </Layout>
  );
};

export default Home;
