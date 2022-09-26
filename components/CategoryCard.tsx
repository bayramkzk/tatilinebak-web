import { Card, Image, Text } from "@mantine/core";
import React from "react";

export interface CategoryCardProps {
  title: string;
  imageUrl: string;
  id: number;
}

const CategoryCard: React.FC<CategoryCardProps> = (props) => {
  return (
    <Card shadow="sm" p="lg" radius="md" withBorder>
      <Card.Section>
        <Image src={props.imageUrl} />
      </Card.Section>
      <Text my="md" weight={500} size="xl">
        {props.title}
      </Text>
      <Text size="sm" color="dimmed">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem
        similique perspiciatis aut aspernatur, repellat laboriosam?
      </Text>
    </Card>
  );
};

export default CategoryCard;
