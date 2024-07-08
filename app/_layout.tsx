import { Stack } from "expo-router";
import { SQLiteProvider } from "expo-sqlite";
import React from "react";
import { migrateDbIfNeeded } from "../utils/db";
import "./global.css";

export default function HomeLayout() {
  return (
    <SQLiteProvider databaseName="test.db" onInit={migrateDbIfNeeded}>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
      </Stack>
    </SQLiteProvider>
  );
}
