import { Store } from "tinybase";
import { useDelRowCallback } from "tinybase/ui-react";
import { Todo, TODO_TABLE } from "./consts";

export function addTodo(store: Store, todo: Todo, reset: () => void) {
  store.addRow(TODO_TABLE, todo);
  reset();
}

export function deleteTodo(todoId: string) {
  useDelRowCallback<Todo>(TODO_TABLE, todoId);
}
