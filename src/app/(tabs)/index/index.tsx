import React, { useRef, useState } from "react";
import {
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from "react-native";
import { captureRef } from "react-native-view-shot";
import { shareAsync } from "expo-sharing";

import { Card } from "@/components/Card";
import { Link } from "expo-router";

export default function Index() {
  const viewToSnapshoot = useRef();
  const [shot, setShot] = useState("");

  const { width } = useWindowDimensions();

  async function snapshot() {
    const result = await captureRef(viewToSnapshoot);
    setShot(result);
  }

  async function saveImage(uri: string) {
    shareAsync(uri);
  }

  return (
    <ScrollView className="p-4 flex-1 space-y-6 bg-neutral-900">
      <View>
        <Text className="text-2xl text-white font-bold">
          Crie seu cartão Digitel Dev
        </Text>
        <Text className="text-sm text-neutral-300 font-bold">
          Venha criar cartões incríveis com o nosso app para distribuir para
          teus, familiares e para todos mundo que você conhece!
        </Text>
      </View>
      <Card windowWidth={width} ref={viewToSnapshoot} />
      {shot && (
        <Image
          source={{ uri: shot }}
          className={`w-[${width - 2}] h-48`}
          resizeMode="contain"
        />
      )}
      <TouchableOpacity
        onPress={snapshot}
        className="w-full bg-emerald-500 py-4 rounded-md items-center justify-center"
      >
        <Text className="text-white">Criar um cartão</Text>
      </TouchableOpacity>
      {shot && (
        <TouchableOpacity
          onPress={() => saveImage(shot)}
          className="w-full bg-blue-500 py-4 rounded-md items-center justify-center"
        >
          <Text className="text-white">Salvar Imagem</Text>
        </TouchableOpacity>
      )}

      <Link href={'/(tabs)/settings'} className="w-full bg-blue-500 py-4 rounded-md items-center justify-center text-center text-white">Ir para Tela de scaner</Link>
    </ScrollView>
  );
}
