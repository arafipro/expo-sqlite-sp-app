import { useSQLiteContext } from "expo-sqlite";
import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";

export default function TodoList() {
  const db = useSQLiteContext();
  const [todos, setTodos] = useState<Todo[]>([]);
  useEffect(() => {
    async function getAllTodos() {
      const res = await db.getAllAsync<Todo>("SELECT * FROM todos");
      setTodos(res);
    }
    getAllTodos();
  }, []);
  return (
    <View className="flex flex-row flex-wrap">
      {todos.map((todo) => (
        <View key={todo.id} className="bg-gray-300 m-2 rounded-md">
          <Text className="text-2xl p-2">
            {todo.title} - {todo.content}
          </Text>
        </View>
      ))}
    </View>
  );
}
