export default function Todo(props) {
  const { todo, setTodos } = props;

  const updateTodo = async (todoId, todoStatus) => {
    const res = await fetch(`/api/todos/${todoId}`, {
      method: "PUT",
      body: JSON.stringify({ status: todoStatus }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const json = await res.json();

    if (json.acknowledged) {
      setTodos((currentTodos) =>
        currentTodos.map((currentTodo) => {
          if (currentTodo._id === todoId) {
            return { ...currentTodo, status: !currentTodo.status };
          }
          return currentTodo;
        })
      );
    }
  };

  const deleteTodo = async (todoId) => {
    const res = await fetch(`/api/todos/${todoId}`, {
      method: "DELETE",
    });

    const json = await res.json();

    if (json.acknowledged) {
      setTodos((currentTodos) =>
        currentTodos.filter((currentTodo) => currentTodo._id !== todoId)
      );
    }
  };

  return (
    <div className="todo">
      <button
        className="todo__status"
        onClick={() => updateTodo(todo._id, todo.status)}
      >
        {todo.status ? "✔" : ""}
      </button>

      <p className={`todo__text ${todo.status ? "completed" : ""}`}>
        {todo.todo}
      </p>

      <button
        className="todo__delete"
        onClick={() => deleteTodo(todo._id)}
      >
        🗑
      </button>
    </div>
  );
}