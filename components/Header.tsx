import {
  Burger,
  Container,
  createStyles,
  Group,
  Header as BaseHeader,
  Paper,
  Transition,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import Link from "next/link";
import BrandLogo from "./BrandLogo";
import LinkGroup from "./LinkGroup";
import SocialLinkGroup from "./SocialLinkGroup";

const HEADER_HEIGHT = 75;

const useStyles = createStyles((theme) => ({
  root: {
    position: "relative",
    zIndex: 1,
    borderBottomWidth: 2,
  },

  dropdown: {
    position: "absolute",
    top: HEADER_HEIGHT,
    left: 0,
    right: 0,
    zIndex: 0,
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
    borderTopWidth: 0,
    overflow: "hidden",

    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },

  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "100%",
  },

  links: {
    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },

  burger: {
    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },

  burgerSocials: {
    padding: theme.spacing.md,
    justifyContent: "space-evenly",
    "& > *": {
      flexGrow: 1,
      display: "flex",
      justifyContent: "center",
    },
  },
}));

const mainLinks = (
  <LinkGroup
    links={[
      { link: "/turlar", content: "Turlar" },
      { link: "/oteller", content: "Oteller" },
    ]}
  />
);

const asideLinks = (
  <LinkGroup
    links={[
      { link: "/hakkimizda", content: "Hakkımızda" },
      { link: "/iletisim", content: "İletişim" },
    ]}
  />
);

const socialLinks = <SocialLinkGroup />;

export interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  const [opened, { toggle }] = useDisclosure(false);
  const { classes, cx } = useStyles();

  return (
    <BaseHeader height={HEADER_HEIGHT} className={classes.root}>
      <Container size="xl" className={classes.header}>
        <Group>
          <Link href="/" passHref>
            <a>
              <BrandLogo size={20} />
            </a>
          </Link>

          <Group spacing={5} className={classes.links}>
            {mainLinks}
          </Group>
        </Group>

        <Group className={classes.links}>
          <Group spacing={5}>{asideLinks}</Group>
          <Group spacing={2}>{socialLinks}</Group>
        </Group>

        <Burger
          opened={opened}
          onClick={toggle}
          className={classes.burger}
          size="sm"
        />

        <Transition transition="pop-top-right" duration={200} mounted={opened}>
          {(styles) => (
            <Paper className={classes.dropdown} withBorder style={styles}>
              {mainLinks} {asideLinks}
              <Group className={classes.burgerSocials}>{socialLinks}</Group>
            </Paper>
          )}
        </Transition>
      </Container>
    </BaseHeader>
  );
};

export default Header;
