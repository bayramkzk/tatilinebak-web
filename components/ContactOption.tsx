import { Card, Center, createStyles, Group, Text } from "@mantine/core";
import Link from "next/link";
import React from "react";

const useStyles = createStyles((theme) => ({
  card: {
    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[8]
          : theme.colors.gray[0],
    },
  },
}));

export interface ContactOptionProps {
  icon: React.ReactNode;
  href?: string;
  label: string;
  title: string;
}

const ContactOption: React.FC<ContactOptionProps> = ({
  icon,
  href,
  label,
  title,
}) => {
  const { classes } = useStyles();

  const card = (
    <Card shadow="md" radius="md" title={title} className={classes.card}>
      <Center>
        <Group align="center" noWrap>
          {icon}
          <Text size="lg" weight={500}>
            {label}
          </Text>
        </Group>
      </Center>
    </Card>
  );

  return href ? (
    <Link href={href} passHref>
      <a>{card}</a>
    </Link>
  ) : (
    card
  );
};

export default ContactOption;
