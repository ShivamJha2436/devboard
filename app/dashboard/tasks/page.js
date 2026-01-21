"use client";

import { useState } from "react";
import { useFetch } from "@/hooks/useFetch";

export default function TasksPage() {
  const { data: tasks, loading, refetch } = useFetch("/api/tasks");
  const [title, setTitle] = useState("");

  const addTask = async () => {
    if (!title.trim()) return;

    await fetch("/api/tasks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title }),
    });

    setTitle("");
    refetch();
  };

  const deleteTask = async (id) => {
    await fetch(`/api/tasks?id=${id}`, {
      method: "DELETE",
    });

    refetch();
  };

  return (
    <div className="p-6 max-w-3xl">
      <h1 className="text-2xl font-bold mb-6">Tasks</h1>

      <div className="flex gap-2 mb-6">
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Add a new task..."
          className="flex-1 border border-gray-300 rounded-lg px-4 py-2"
        />
        <button
          onClick={addTask}
          className="bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-800"
        >
          Add
        </button>
      </div>

      {loading ? (
        <p className="text-gray-500">Loading tasks...</p>
      ) : tasks.length === 0 ? (
        <p className="text-gray-500">No tasks yet.</p>
      ) : (
        <ul className="space-y-3">
          {tasks.map((task) => (
            <li
              key={task.id}
              className="flex justify-between items-center bg-white p-4 rounded-lg shadow-sm"
            >
              <span>{task.title}</span>
              <button
                onClick={() => deleteTask(task.id)}
                className="text-sm text-red-500 hover:text-red-600"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
