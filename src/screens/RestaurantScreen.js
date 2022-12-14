import React, { useLayoutEffect } from "react";
import { View, Text } from "react-native";
import { ScrollView, Image, TouchableOpacity } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import {
  ArrowLeftIcon,
  ChevronRightIcon,
  LocationMarkerIcon,
  StarIcon,
} from "react-native-heroicons/solid";
import { QuestionMarkCircleIcon } from "react-native-heroicons/outline";
import { DishRow } from "../components/DishRow";

export function RestaurantScreen() {
  const { params } = useRoute();
  const navigation = useNavigation();

  const {
    id,
    image,
    title,
    rating,
    genre,
    address,
    description,
    dishes,
    lon,
    lat,
  } = params;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <ScrollView>
      <Image
        source={{ uri: image }}
        className="relative object-cover w-full h-56 p-4 bg-gray-300"
      />
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        className="absolute p-2 bg-gray-100 rounded-full top-14 left-5 "
      >
        <ArrowLeftIcon size={20} color="#00CCBB" />
      </TouchableOpacity>

      <View className="bg-white px-4 pt-4">
        <Text className="text-3xl font-bold">{title}</Text>

        <View className="flex-row space-x-2 my-1">
          <View className="flex-row items-center space-x-1">
            <StarIcon color="green" opacity={0.5} size={22} />

            <Text className="text-xs text-gray-500">
              <Text className="text-green-500">{rating}</Text> • {genre}
            </Text>
          </View>

          <View className="flex-row items-center space-x-1">
            <LocationMarkerIcon color="gray" opacity={0.4} size={22} />

            <Text className="text-sm text-gray-500">Nearby • {address}</Text>
          </View>
        </View>

        <Text className="text-gray-500 mt-2 pb-4">{description}</Text>
      </View>

      <TouchableOpacity className="flex-row items-center space-x-2 p-4 border-y border-gray-300">
        <QuestionMarkCircleIcon color="gray" opacity={0.6} size={20} />

        <Text className="pl-2 flex-1 text-md font-bold">
          Have a food allergy?
        </Text>

        <ChevronRightIcon color="#00CCbb" />
      </TouchableOpacity>

      <View>
        <Text className="text-xl font-bold mb-3 px-4 pt-6">Menu</Text>

        {dishes.map((dish) => (
          <DishRow
            key={dish.id}
            id={dish.id}
            name={dish.name}
            description={dish.description}
            price={dish.price}
            image={dish.image.url}
          />
        ))}
      </View>
    </ScrollView>
  );
}
