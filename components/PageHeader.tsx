import { Title } from "@mantine/core";
import React from "react";

export interface PageHeaderProps {
  title: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title }) => {
  return (
    <Title order={2} size={32} my="xl">
      {title}
    </Title>
  );
};

export default PageHeader;
