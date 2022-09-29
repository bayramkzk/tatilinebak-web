import { Card, Image, Text } from "@mantine/core";
import React from "react";

export interface TourCategoryCardProps {
  title: string;
  imageUrl: string;
  id: number;
}

const TourCategoryCard: React.FC<TourCategoryCardProps> = (props) => {
  return (
    <Card shadow="sm" p="lg" radius="md" withBorder>
      <Card.Section>
        <Image src={props.imageUrl} alt={props.title} />
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

export default TourCategoryCard;
