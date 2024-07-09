import { useSQLiteContext } from "expo-sqlite";
import React, { useState } from "react";
import { Text, TextInput, TouchableHighlight, View } from "react-native";

export default function TodoForm() {
  const db = useSQLiteContext();
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  return (
    <View className="p-2 w-full">
      <View className="flex flex-row pb-2">
        <TextInput
          onChangeText={setTitle}
          placeholder="タイトル"
          value={title}
          className="w-1/4 p-1 border-2 border-gray-300 rounded-md text-xl"
        />
        <TextInput
          onChangeText={setContent}
          placeholder="内容"
          value={content}
          className="w-3/4 p-1 border-2 border-gray-300 rounded-md text-xl"
        />
      </View>
      <TouchableHighlight
        onPress={async () => {
          if (!title || !content) return;
          await db.runAsync(
            "INSERT INTO todos(title,content) VALUES(?,?)",
            title,
            content
          );
          setTitle("");
          setContent("");
        }}
        activeOpacity={0.5}
        underlayColor="gray"
        className={`${
          !title || !content ? "bg-gray-300" : "bg-black"
        } rounded-md`}
      >
        <Text className="p-1 text-center text-white font-bold text-xl">
          保存
        </Text>
      </TouchableHighlight>
    </View>
  );
}
