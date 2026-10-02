import { useEffect, useState } from "react";
import axios from "axios";

interface Todo {
    id: string;
    name: string;
    price: number;
    location: string;
    type: string;
  }
function ListPage() {
  const [todos, setTodos] = newState<Todo[]>([])

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-6">Danh sách</h1>

      <div className="overflow-x-auto">
        <table className="w-full border border-gray-300 rounded-lg">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 border border-gray-300 text-left">ID</th>
              <th className="px-4 py-2 border border-gray-300 text-left">
                Name
              </th>
              <th className="px-4 py-2 border border-gray-300 text-left">
                Description
              </th>
              <th className="px-4 py-2 border border-gray-300 text-left">
                Actions
              </th>
            </tr>
          </thead>

          <tbody>
            <tr className="hover:bg-gray-50">
              <td className="px-4 py-2 border border-gray-300">1</td>
              <td className="px-4 py-2 border border-gray-300">Mark</td>
              <td className="px-4 py-2 border border-gray-300">Description</td>
              <td className="px-4 py-2 border border-gray-300">Edit</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ListPage;
