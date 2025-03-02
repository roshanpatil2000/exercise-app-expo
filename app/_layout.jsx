import { View, Text } from 'react-native'
import React from 'react'
import { Slot, Stack } from 'expo-router'

const _layout = () => {
  return (
    <Slot
    screenOptions={{headerShown: true}}
    />
  )
}

export default _layout