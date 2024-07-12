import { useSQLiteContext } from "expo-sqlite";
import React, { useEffect, useState } from "react";
import { View } from "react-native";
import TodoItem from "./ui/todo-item";

export default function TodoList() {
  const db = useSQLiteContext();
  const [todos, setTodos] = useState<Todo[]>([]);
  useEffect(() => {
    async function getAllTodos() {
      const res = await db.getAllAsync<Todo>("SELECT * FROM todos");
      setTodos(res);
    }
    getAllTodos();
  }, [todos]);
  return (
    <View className="flex flex-row flex-wrap">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          id={todo.id}
          title={todo.title}
          content={todo.content}
        />
      ))}
    </View>
  );
}
