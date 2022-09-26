import { Button, Card, createStyles, Stack, Text } from "@mantine/core";
import Link from "next/link";
import React from "react";

const useStyles = createStyles((theme) => ({
  card: {
    width: "100%",
    height: "100%",
  },

  stack: {
    height: "100%",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-evenly",
    textAlign: "center",
  },

  title: {
    fontSize: 32,
    fontWeight: 700,
  },

  date: {
    fontSize: theme.fontSizes.lg,
    fontWeight: 700,
    color: theme.colors.blue[7],
  },

  highlight: {
    fontSize: theme.fontSizes.lg,
    fontWeight: 700,
    color: theme.colors.orange[7],
  },

  percent: {
    fontSize: theme.fontSizes.lg,
    fontWeight: 700,
    color: theme.colors.green[7],
  },

  button: {
    height: 48,
    textTransform: "uppercase",
  },
}));

export interface DealCardProps {}

const DealCard: React.FC<DealCardProps> = () => {
  const { classes } = useStyles();

  return (
    <Card shadow="sm" p="lg" radius="md" withBorder className={classes.card}>
      <Stack className={classes.stack}>
        <Text className={classes.title}>Günün Fırsatı!</Text>
        <Text>
          <Text component="span" className={classes.date}>
            22-30 Eylül
          </Text>{" "}
          tarihlerine özel{" "}
          <Text component="span" className={classes.highlight}>
            Kapadokya
          </Text>{" "}
          turlarında{" "}
          <Text component="span" className={classes.percent}>
            20%
          </Text>{" "}
          indirim
        </Text>
        <Link href="/turlar" passHref>
          <a>
            <Button className={classes.button}>Fırsatı yakala</Button>
          </a>
        </Link>
      </Stack>
    </Card>
  );
};

export default DealCard;
