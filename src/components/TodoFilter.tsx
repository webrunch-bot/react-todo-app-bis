import React from 'react';

type FilterType = 'all' | 'active' | 'completed';

interface TodoFilterProps {
  filter: FilterType;
  onFilterChange: (filter: FilterType) => void;
  todoCount: {
    all: number;
    active: number;
    completed: number;
  };
}

const TodoFilter: React.FC<TodoFilterProps> = ({ filter, onFilterChange, todoCount }) => {
  const filters: { value: FilterType; label: string }[] = [
    { value: 'all', label: 'All' },
    { value: 'active', label: 'Active' },
    { value: 'completed', label: 'Completed' }
  ];

  return (
    <div className="flex justify-center mb-6">
      <div className="inline-flex bg-white rounded-lg shadow-sm p-1 border border-gray-100">
        {filters.map((item) => (
          <button
            key={item.value}
            onClick={() => onFilterChange(item.value)}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors relative ${
              filter === item.value
                ? 'text-indigo-700 bg-indigo-50'
                : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
            }`}
          >
            {item.label}
            <span className="ml-1 text-xs inline-flex items-center justify-center bg-gray-100 text-gray-600 rounded-full h-5 min-w-[20px] px-1">
              {todoCount[item.value]}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default TodoFilter;
