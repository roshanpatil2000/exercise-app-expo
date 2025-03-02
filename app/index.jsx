import {
  Button,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { Link, useNavigation } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { colors, fontSize, fontWeight, gradient } from "../constants/colors";
import { LinearGradient } from "expo-linear-gradient";

const index = () => {
  const navigation = useNavigation();

  const handleStart = () => {
    console.log("start");
    navigation.navigate("onboaring");
  }
  return (
    <SafeAreaView style={styles.rootContainer}>
      <LinearGradient
        colors={gradient.primary}
        style={StyleSheet.absoluteFill}
        start={{ x: 0, y: 0.05 }}
        end={{ x: 1, y: 0.1 }}
      >
        <StatusBar hidden />
        <View style={styles.container}>
          <View style={{gap:15}}>
            <Image
              source={require("../assets/images/logo_white.png")}
              style={{
                width: 162,
                height: 35,
                objectFit: "fill",
              }}
            />
            <Text style={{ fontSize: fontSize.medium, color: colors.gray1 }}>
              Everybody Can Train{" "}
            </Text>
          </View>
        </View>
        <View
          style={{
            justifyContent: "center ",
            alignItems: "center",
            marginBottom: 50,
          }}
        >
          <TouchableOpacity
            style={{
              paddingVertical: 18,
              backgroundColor: colors.white,
              borderRadius: 99,
              width: "80%",
            }}
            activeOpacity={0.8}
            onPress={handleStart}
          >
            <Text
              style={{
                textAlign: "center",
                fontSize: fontSize.normal,
                fontWeight: fontWeight.bold,
                color: colors.primary1,
              }}
            >
              Get Started
            </Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default index;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
