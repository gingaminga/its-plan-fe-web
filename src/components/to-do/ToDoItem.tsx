"use client";

import { ToDoProperty } from "@/types/to-do";
import { Clock, Pencil, Trash } from "lucide-react";

export interface ToDoItemProps extends ToDoProperty {}

export default function ToDoItem({ content, id, isChecked }: ToDoItemProps) {
  return (
    <li className="join flex items-center justify-between">
      <label className="label cursor-pointer" htmlFor={`checkbox-todo-${id}`}>
        <input
          className={`checkbox ${isChecked ? "checkbox-success checked:bg-none" : ""}`}
          checked={isChecked}
          onChange={(e) => !e.target.value}
          id={`checkbox-todo-${id}`}
          type="checkbox"
        />
        <span className="label-text ml-4 mr-2 max-w-2xl break-words max-lg:max-w-96 max-sm:max-w-40">{content}</span>
      </label>
      <div className="flex justify-end">
        <button aria-label="Edit" className="btn btn-circle btn-ghost btn-sm mr-2" type="button">
          <Pencil className="h-4 w-4" />
        </button>
        <button aria-label="Alarm" className="btn btn-circle btn-ghost btn-sm mr-2" type="button">
          <Clock className="h-4 w-4" />
        </button>
        <button aria-label="Remove" className="btn btn-circle btn-ghost btn-sm mr-2" type="button">
          <Trash className="h-4 w-4" />
        </button>
      </div>
    </li>
  );
}
