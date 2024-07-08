import { SafeAreaView } from "react-native-safe-area-context";
import TodoList from "../components/todo-list";

export default function index() {
  return (
    <SafeAreaView>
      <TodoList />
    </SafeAreaView>
  );
}
