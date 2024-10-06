import ToDoItem, { ToDoItemProps } from "@/components/to-do/ToDoItem";

export interface ToDoListProps {
  toDos: ToDoItemProps[];
}

export default function ToDoList({ toDos }: ToDoListProps) {
  return (
    <ul>
      {toDos.map((toDo) => {
        const { content, id, isChecked } = toDo;

        return (
          <>
            <ToDoItem content={content} id={id} isChecked={isChecked} key={`todo-item-${id}-${isChecked}-${content}`} />
            <div className="divider mb-1 mt-1" />
          </>
        );
      })}
    </ul>
  );
}
