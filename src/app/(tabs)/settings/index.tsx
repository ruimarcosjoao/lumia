import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';

export default function Settings() {
  return (
    <View className='flex-1'>
      <LinearGradient colors={['rgb(236, 72, 153)', 'rgb(239, 68, 68)', 'rgb(234, 179, 8)']}
        style={StyleSheet.absoluteFill} className='z-0'/>
        <Text>Hello world</Text>
    </View>
  )
}