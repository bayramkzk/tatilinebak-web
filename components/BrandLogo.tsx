import { createStyles, Group, Title } from "@mantine/core";
import React from "react";

const useStyles = createStyles((theme) => ({
  group: {
    background: theme.fn.linearGradient(45, ...theme.colors.brandGradient),
    padding: "8px 12px",
    borderRadius: "4px",
    userSelect: "none",
  },
  logo: {
    color: "#eee",
  },
  title: {
    color: "#eee",
    fontFamily: "Fira Sans, sans-serif",
    fontWeight: 700,
  },
}));

const SvgLogo = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="icon icon-tabler icon-tabler-plane-departure"
    viewBox="0 0 24 24"
    strokeWidth={2}
    stroke="currentColor"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M0 0h24v24H0z" stroke="none" />
    <path d="m14.639 10.258 4.83-1.294a2 2 0 1 1 1.035 3.863L6.015 16.71l-4.45-5.02 2.897-.776 2.45 1.414 2.897-.776-3.743-6.244 2.898-.777 5.675 5.727zM3 21h18" />
  </svg>
);

interface BrandLogoProps {
  size: number;
  withCaption?: boolean;
}

const BrandLogo: React.FC<BrandLogoProps> = ({ size, withCaption = true }) => {
  const { classes } = useStyles();
  const logoSize = size * 1.25;

  return (
    <Group spacing="sm" align="center" className={classes.group}>
      <SvgLogo width={logoSize} height={logoSize} className={classes.logo} />

      {withCaption && (
        <Title order={1} sx={{ fontSize: size }} className={classes.title}>
          tatilinebak.com
        </Title>
      )}
    </Group>
  );
};

export default BrandLogo;
