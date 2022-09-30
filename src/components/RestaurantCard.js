import { View, Text, TouchableOpacity, Image } from "react-native";
import { StarIcon } from "react-native-heroicons/solid";
import { LocationMarkerIcon } from "react-native-heroicons/outline";
import { useNavigation } from "@react-navigation/native";

export function RestaurantCard({
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
}) {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      className="mr-3 bg-white shadow"
      onPress={() =>
        navigation.navigate("restaurant", {
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
}
