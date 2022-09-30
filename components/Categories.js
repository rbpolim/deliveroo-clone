import React from "react";
import { useQuery } from "@apollo/client";
import { ScrollView, Text } from "react-native";

import { GET_CATEGORIES } from "../graphql/queries/get.categories.query";

import CategoryCard from "./CategoryCard";

const Categories = () => {
  const { data, loading, error } = useQuery(GET_CATEGORIES);

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>`Error! ${error.message}`</Text>;

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingHorizontal: 15, paddingTop: 10 }}
    >
      {data?.categories.map((category) => (
        <CategoryCard
          key={category.id}
          name={category.name}
          image={category.image.url}
        />
      ))}
    </ScrollView>
  );
};

export default Categories;
