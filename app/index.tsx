import { SafeAreaView } from "react-native-safe-area-context";
import TodoForm from "../components/todo-form";
import TodoList from "../components/todo-list";

export default function index() {
  return (
    <SafeAreaView>
      <TodoForm />
      <TodoList />
    </SafeAreaView>
  );
}
