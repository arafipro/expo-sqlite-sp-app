import { Stack } from "expo-router";
import React from "react";
import "./global.css";

export default function HomeLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
    </Stack>
  );
}
