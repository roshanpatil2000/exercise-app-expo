import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const home = () => {
  return (
    <SafeAreaView>
      <Text>home</Text>
            <Link href='/'>Go to Index</Link>
      
    </SafeAreaView>
  )
}

export default home