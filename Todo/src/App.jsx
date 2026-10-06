import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import TodoList from './pages/TodoList';
import AddTodo from './pages/AddTodo';
import EditTodo from './pages/EditTodo';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col font-sans">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8 max-w-3xl">
        <Routes>
          <Route path="/" element={<Navigate to="/todos" replace />} />
          <Route path="/todos" element={<TodoList />} />
          <Route path="/add-todo" element={<AddTodo />} />
          <Route path="/edit-todo/:id" element={<EditTodo />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;