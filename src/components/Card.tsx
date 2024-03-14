import { View, Text, useWindowDimensions } from "react-native";
import React, {forwardRef} from "react";

type Props = {
    windowWidth: number
}


export const Card = forwardRef<any, Props>(
    ({windowWidth}, ref) => {
  return (
    <View ref={ref}  className={`w-[${
        windowWidth - 20
      }] mt-8 flex-col space-y-4 border border-neutral-700 rounded-lg p-4`}>
      <View className="flex-row items-center justify-between">
        <View>
          <Text className="text-white text-xl">
            Build your card in this app
          </Text>
          <Text className="text-neutral-400 text-[10px]">
            Build your card in this app
          </Text>
        </View>
        <View className="bg-emerald-400 h-11 w-11 rounded-md"></View>
      </View>
      <Text className="text-neutral-400 text-[12px]" numberOfLines={3}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut libero
        ullam odio omnis saepe, illum officiis dignissimos ipsa impedit
        veritatis quibusdam numquam veniam nihil quas alias officia architecto
        ipsum culpa?
      </Text>
      <View className="flex-row items-center space-x-2">
        <View className="flex-col">
          <Text className="text-neutral-500 text-xs">23, Fev de 2024</Text>
          <Text className="text-neutral-400 font-bold">Published</Text>
        </View>
        <View className="flex-col">
          <Text className="text-neutral-500 text-xs">23, Fev de 2024</Text>
          <Text className="text-neutral-400 font-bold">Published</Text>
        </View>
      </View>
    </View>
  );
})
