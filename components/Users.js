"use client";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "@/redux/features/users/usersSlice";

export default function Users() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  if (users.loading) {
    <h3>Loading</h3>;
  }
  return (
    <div>
      <h2>Users</h2>
      <ul>
        {users.users.length ? (
          users.users.map((item) => <li key={item.id}>{item.name}</li>)
        ) : (
          <h3>Not Found</h3>
        )}
      </ul>
    </div>
  );
}
