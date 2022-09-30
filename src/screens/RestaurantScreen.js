import React, { useLayoutEffect } from "react";
import { ScrollView, Image, TouchableOpacity } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { ArrowLeftIcon } from "react-native-heroicons/outline";

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

      {/* <Text>{title}</Text> */}
    </ScrollView>
  );
}
