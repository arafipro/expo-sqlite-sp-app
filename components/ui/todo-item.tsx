import { useSQLiteContext } from "expo-sqlite";
import React from "react";
import { Alert, Text, TouchableHighlight, View } from "react-native";

export default function TodoItem(todo: Todo) {
  const db = useSQLiteContext();
  function deleteTodoAlert() {
    Alert.alert("削除します", "よろしいですか？", [
      {
        text: "キャンセル",
        style: "cancel",
      },
      {
        text: "削除",
        onPress: async () =>
          await db.runAsync("DELETE FROM todos WHERE id = ?", todo.id!),
      },
    ]);
  }
  return (
    <TouchableHighlight
      onLongPress={() => {
        deleteTodoAlert();
      }}
      activeOpacity={0.5}
      underlayColor="transparent"
    >
      <View className="bg-gray-300 m-2 rounded-md">
        <Text className="text-2xl p-2">
          {todo.title} - {todo.content}
        </Text>
      </View>
    </TouchableHighlight>
  );
}
