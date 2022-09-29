import { Card, Center, Group, Text } from "@mantine/core";
import Link from "next/link";
import React from "react";

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
  const card = (
    <Card shadow="md" radius="md" title={title}>
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
    <Link href={"#"} passHref>
      <a>{card}</a>
    </Link>
  ) : (
    card
  );
};

export default ContactOption;
