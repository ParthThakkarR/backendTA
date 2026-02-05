"use client";

import { useEffect, useState } from "react";

type User = {
  id: number;
  name: string;
};

export default function Page() {
  const [users, setUsers] = useState<User[]>([]);
  const [editId, setEditId] = useState<number | null>(null);
  const [name, setName] = useState("");

  async function getUsers() {
    const res = await fetch("/api/user");
    const data = await res.json();
    setUsers(Array.isArray(data) ? data : []);
  }

  useEffect(() => {
    getUsers();
  }, []);


  async function addOrUpdate() {
    if (!name) return;

    const isEdit = editId !== null;

    const url = isEdit
      ? `/api/user/${editId}`
      : `/api/user`;

    const method = isEdit ? "PUT" : "POST";

    await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name }),
    });

    setName("");
    setEditId(null);
    getUsers();
  }

  async function removeUser(id: number) {
    await fetch(`/api/user/${id}`, {
      method: "DELETE",
    });

    getUsers();
  }

  function editUser(user: User) {
    setEditId(user.id);
    setName(user.name);
  }

  return (
    <div className="container mt-4">
      <h4 className="mb-3">Users</h4>


      <div className="row mb-3">
        <div className="col-4">
          <input
            type="text"
            className="form-control"
            placeholder="Name"
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </div>

        <div className="col-2">
          <button
            className="btn btn-primary w-100"
            onClick={addOrUpdate}
          >
            {editId ? "Update" : "Add"}
          </button>
        </div>
      </div>


      <table className="table table-bordered">
        <thead>
          <tr>
            <th style={{ width: "80px" }}>Id</th>
            <th>Name</th>
            <th style={{ width: "180px" }}>Action</th>
          </tr>
        </thead>

        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>
                <button
                  className="btn btn-sm btn-warning me-2"
                  onClick={() => editUser(user)}
                >
                  Edit
                </button>

                <button
                  className="btn btn-sm btn-danger"
                  onClick={() => removeUser(user.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}

          {users.length === 0 && (
            <tr>
              <td colSpan={3} className="text-center">
                No users found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
