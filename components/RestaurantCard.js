import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { StarIcon } from "react-native-heroicons/solid";
import { LocationMarkerIcon } from "react-native-heroicons/outline";
import { useNavigation } from "@react-navigation/native";

const RestaurantCard = ({
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
}) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("Restaurant", {
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
        })
      }
      className="mr-3 bg-white shadow"
    >
      <Image
        source={{ uri: image }}
        className="object-cover w-64 rounded-sm h-36"
      />

      <View className="px-3 pb-4">
        <Text className="pt-2 text-lg font-bold">{title}</Text>

        <View className="flex-row items-center space-x-1">
          <StarIcon color="green" opacity={0.5} size={22} />
          <Text className="text-xs text-gray-500">
            <Text className="text-green-500">{rating}</Text> • {genre}
          </Text>
        </View>

        <View className="flex-row items-center space-x-1">
          <LocationMarkerIcon color="gray" size={22} opacity={0.4} />
          <Text className="text-xs text-gray-500">Nearby • {address}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default RestaurantCard;
