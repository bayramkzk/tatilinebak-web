import { createStyles } from "@mantine/core";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const useStyles = createStyles((theme) => ({
  link: {
    display: "block",
    lineHeight: 1,
    padding: "12px 16px",
    borderRadius: theme.radius.sm,
    textDecoration: "none",
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[0]
        : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,
    transition: "background-color 100ms ease-in-out",

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
    },

    [theme.fn.smallerThan("sm")]: {
      borderRadius: 0,
      padding: theme.spacing.md,
    },
  },

  linkActive: {
    "&, &:hover": {
      backgroundColor: theme.fn.variant({
        variant: "light",
        color: theme.primaryColor,
      }).background,
      color: theme.fn.variant({ variant: "light", color: theme.primaryColor })
        .color,
    },
  },
}));

export interface LinkGroupProps {
  links: { link: string; content: React.ReactNode | string }[];
}

const LinkGroup: React.FC<LinkGroupProps> = ({ links }) => {
  const router = useRouter();
  const { classes, cx } = useStyles();

  const items = links.map((link) => (
    <Link href={link.link} key={link.link} passHref>
      <a
        className={cx(classes.link, {
          [classes.linkActive]: router.pathname === link.link,
        })}
      >
        {link.content}
      </a>
    </Link>
  ));

  return <>{items}</>;
};

export default LinkGroup;
