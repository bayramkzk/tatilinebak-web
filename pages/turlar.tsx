import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import TourCategoryCard from "@/components/TourCategoryCard";
import { SimpleGrid } from "@mantine/core";
import { NextPage } from "next";

const Turlar: NextPage = () => {
  return (
    <Layout>
      <PageHeader title="Turlar" />

      <SimpleGrid
        cols={3}
        breakpoints={[
          { maxWidth: "md", cols: 3, spacing: "md" },
          { maxWidth: "sm", cols: 2, spacing: "sm" },
          { maxWidth: "xs", cols: 1, spacing: "sm" },
        ]}
      >
        <TourCategoryCard
          title="Amsterdam Turları"
          imageUrl="https://www.marcatour.com/images/tour/433_b.jpg"
          id={0}
        />
        <TourCategoryCard
          title="Amsterdam Turları"
          imageUrl="https://www.marcatour.com/images/tour/433_b.jpg"
          id={1}
        />
        <TourCategoryCard
          title="Amsterdam Turları"
          imageUrl="https://www.marcatour.com/images/tour/433_b.jpg"
          id={2}
        />
        <TourCategoryCard
          title="Amsterdam Turları"
          imageUrl="https://www.marcatour.com/images/tour/433_b.jpg"
          id={3}
        />
        <TourCategoryCard
          title="Amsterdam Turları"
          imageUrl="https://www.marcatour.com/images/tour/433_b.jpg"
          id={4}
        />
        <TourCategoryCard
          title="Amsterdam Turları"
          imageUrl="https://www.marcatour.com/images/tour/433_b.jpg"
          id={5}
        />
      </SimpleGrid>
    </Layout>
  );
};

export default Turlar;
