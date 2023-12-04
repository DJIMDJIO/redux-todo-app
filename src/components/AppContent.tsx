import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";
import { Todo } from "../model/Todo";
function AppContent() {
  const todoList: Todo[] = useSelector((state) => state.todo.todoList);

  return (
    <div>
      {todoList && todoList.length > 0
        ? todoList.map((todo) => <TodoItem todo={todo} key={todo.id} />)
        : "no task found"}
    </div>
  );
}

export default AppContent;
