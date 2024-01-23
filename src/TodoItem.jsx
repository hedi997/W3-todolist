export default function TodoItem({ item, handleDelete, handleDone }) {
  return (
    <li
      key={item.id}
      style={{ textDecoration: item.done ? "line-through" : "none" }}
    >
      {item.title}
      <button onClick={() => handleDone(item.id)}>
        {item.done ? "Undo" : "Done"}
      </button>
      <button onClick={() => handleDelete(item.id)}>Delete</button>
    </li>
  );
}
