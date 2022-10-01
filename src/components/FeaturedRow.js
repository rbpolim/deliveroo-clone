import { View, Text, ScrollView } from "react-native";
import { useQuery } from "@apollo/client";
import { ArrowRightIcon } from "react-native-heroicons/outline";

import { GET_RESTAURANTS } from "../graphql/queries/get.restaurants.query";

import { RestaurantCard } from "./RestaurantCard";

export function FeaturedRow({ title, description }) {
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
        className="pt-4"
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 15, paddingTop: 10 }}
      >
        {data?.restaurants.map((restaurant) => (
          <RestaurantCard
            key={restaurant.id}
            image={restaurant.image.url}
            title={restaurant.name}
            rating={restaurant.rating}
            genre={restaurant.genres}
            address={restaurant.address}
            description={restaurant.description}
            dishes={restaurant.dishes}
            lon={restaurant.coordinates.longitude}
            lat={restaurant.coordinates.latitude}
          />
        ))}
      </ScrollView>
    </View>
  );
}
