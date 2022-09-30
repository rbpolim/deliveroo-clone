import { View, Text, Image, TextInput, ScrollView } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  UserIcon,
  ChevronDownIcon,
  SearchIcon,
  AdjustmentsIcon,
} from "react-native-heroicons/outline";

import Categories from "../components/Categories";
import FeaturedRow from "../components/FeaturedRow";

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className="pt-5 bg-white">
      {/* HEADER */}
      <View className="flex-row items-center pb-3 mx-4 space-x-2 ">
        <Image
          source={{ uri: "https://github.com/rbpolim.png" }}
          className="p-4 bg-gray-700 rounded-full h-10 w-10"
        />

        <View className="flex-1">
          <Text className="text-xs font-bold text-gray-400">Delivery Now!</Text>

          <Text className="text-xl font-bold">
            Current Location
            <ChevronDownIcon size={20} color="#00CCBB" />
          </Text>
        </View>

        <UserIcon size={35} color="#00CCBB" />
      </View>

      {/* SEARCH */}
      <View className="flex-row items-center pb-2 mx-4 space-x-2">
        <View className="flex-row items-center flex-1 p-3 space-x-2 bg-gray-200">
          <SearchIcon size={20} color="gray" />
          <TextInput
            placeholder="Restaurants and cuisines"
            keyboardType="default"
          />
        </View>

        <AdjustmentsIcon size={20} color="#00CCBB" />
      </View>

      {/* BODY */}
      <ScrollView
        className="bg-gray-100"
        contentContainerStyle={{ paddingBottom: 180 }}
      >
        {/* CATEGORIES */}
        <Categories />
        {/* FEATURED ROWS */}
        <FeaturedRow
          id="1"
          title="Featured"
          description="Paid placements from our partners"
        />
        <FeaturedRow
          id="2"
          title="Tasty Discounts"
          description="Everyone been enjoying these juicy discounts"
        />
        <FeaturedRow
          id="3"
          title="Offers near you"
          description="Why not support your local restaurants tonight"
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
