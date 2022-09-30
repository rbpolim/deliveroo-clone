import { View, Text, ScrollView } from "react-native";
import React from "react";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import { useQuery } from "@apollo/client";

import RestaurantCard from "./RestaurantCard";

import { GET_RESTAURANTS } from "../graphql/queries/get.restaurants.query";

const FeaturedRow = ({ id, title, description }) => {
  const { data, loading, error } = useQuery(GET_RESTAURANTS);

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>`Error! ${error.message}`</Text>;

  return (
    <View>
      <View className="flex-row items-center justify-between px-4 mt-4">
        <Text className="text-lg font-bold">{title}</Text>
        <ArrowRightIcon size={20} color="#00CCBB" />
      </View>

      <Text className="px-4 text-xs text-gray-500">{description}</Text>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 15, paddingTop: 10 }}
        className="pt-4"
      >
        {/* RESTAURANT CARDS */}
        {data?.restaurants.map((restaurant) => {
          return (
            <RestaurantCard
              key={restaurant.id}
              image={restaurant.image.url}
              title={restaurant.name}
              rating={restaurant.rating}
              genre={restaurant.genres}
              address={restaurant.address}
              description={restaurant.description}
              // dishes={[]}
              lon={restaurant.coordinates.longitude}
              lat={restaurant.coordinates.latitude}
            />
          );
        })}
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
