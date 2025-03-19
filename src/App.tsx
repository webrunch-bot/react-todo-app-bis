import React from 'react';
import { CheckSquare, Trash2 } from 'lucide-react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import TodoFilter from './components/TodoFilter';
import TodoStats from './components/TodoStats';
import { useTodos } from './hooks/useTodos';

function App() {
  const { 
    todos, 
    addTodo, 
    toggleTodo, 
    deleteTodo, 
    editTodo, 
    filter, 
    setFilter, 
    todoCount, 
    clearCompleted,
    allTodos
  } = useTodos();

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 py-12 px-4 sm:px-6">
      <div className="max-w-lg mx-auto">
        <header className="mb-8 text-center">
          <div className="flex justify-center mb-4">
            <div className="bg-indigo-500 text-white p-3 rounded-lg shadow-lg">
              <CheckSquare size={32} />
            </div>
          </div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">TaskMaster</h1>
          <p className="text-gray-600">Organize your tasks with ease</p>
        </header>

        <main>
          <TodoForm onAdd={addTodo} />
          
          {allTodos.length > 0 && (
            <>
              <TodoStats todos={allTodos} />
              <TodoFilter 
                filter={filter} 
                onFilterChange={setFilter} 
                todoCount={todoCount} 
              />
            </>
          )}
          
          <TodoList 
            todos={todos} 
            onToggle={toggleTodo} 
            onDelete={deleteTodo} 
            onEdit={editTodo} 
          />
          
          {todoCount.completed > 0 && (
            <div className="mt-6 flex justify-center">
              <button 
                onClick={clearCompleted}
                className="flex items-center text-sm text-gray-500 hover:text-red-500 transition-colors"
              >
                <Trash2 size={16} className="mr-1" />
                Clear completed tasks
              </button>
            </div>
          )}
        </main>
        
        <footer className="mt-12 text-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} TaskMaster. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
