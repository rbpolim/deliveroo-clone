import { Text, TouchableOpacity, Image } from "react-native";

export function CategoryCard({ name, image }) {
  return (
    <TouchableOpacity className="relative mr-2">
      <Image source={{ uri: image }} className="w-20 h-20 rounded" />

      <Text className="absolute font-bold text-white bottom-1 left-1">
        {name}
      </Text>
    </TouchableOpacity>
  );
}
