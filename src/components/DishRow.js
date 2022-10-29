import { useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { MinusCircleIcon, PlusCircleIcon } from "react-native-heroicons/solid";
import { useDispatch, useSelector } from "react-redux";

import {
  addToBasket,
  removeFromBasket,
  selectBasketItemsById,
} from "../slices/basketSlice";

export function DishRow({ id, name, description, price, image }) {
  const [isPressed, setIsPressed] = useState();

  const dispatch = useDispatch();
  const items = useSelector((state) => selectBasketItemsById(state, id));

  const handleAddItemToBasket = () => {
    dispatch(addToBasket({ id, name, description, price, image }));
  };

  const handleRemoveItemFromBasket = () => {
    if (!items.length > 0) return;

    dispatch(removeFromBasket({ id }));
  };

  return (
    <>
      <TouchableOpacity
        onPress={() => setIsPressed(!isPressed)}
        className={`bg-white p-4 border border-gray-200 ${
          isPressed ? "border-b-0" : ""
        }`}
      >
        <View className="flex-row">
          <View className="flex-1 pr-2">
            <Text className="mb-1 text-lg capitalize">{name}</Text>
            <Text className="text-gray-400">{description}</Text>
            <Text className="mt-2 text-gray-400">${price}</Text>
          </View>

          <View>
            <Image
              style={{ borderWidth: 1, borderColor: "#F3F3F4" }}
              source={{ uri: image }}
              className="object-cover w-20 h-20 p-4 bg-gray-300 rounded-sm"
            />
          </View>
        </View>
      </TouchableOpacity>

      {isPressed ? (
        <View className="px-4 bg-white">
          <View className="flex-row items-center pb-3 space-x-2">
            <TouchableOpacity
              disabled={!items.length}
              onPress={handleRemoveItemFromBasket}
            >
              <MinusCircleIcon
                color={items.length > 0 ? "#00CCBB" : "gray"}
                size={40}
              />
            </TouchableOpacity>

            <Text>{items.length}</Text>

            <TouchableOpacity onPress={handleAddItemToBasket}>
              <PlusCircleIcon color="#00CCBB" size={40} />
            </TouchableOpacity>
          </View>
        </View>
      ) : null}
    </>
  );
}
