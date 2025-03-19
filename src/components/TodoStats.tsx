import React from 'react';
import { CheckCircle, Circle, Clock } from 'lucide-react';
import { Todo } from '../types/todo';

interface TodoStatsProps {
  todos: Todo[];
}

const TodoStats: React.FC<TodoStatsProps> = ({ todos }) => {
  const completed = todos.filter(todo => todo.completed).length;
  const total = todos.length;
  const percentage = total > 0 ? Math.round((completed / total) * 100) : 0;

  return (
    <div className="bg-white rounded-lg shadow-sm p-4 mb-6 border border-gray-100">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-sm font-medium text-gray-500">Progress</h3>
        <span className="text-sm font-medium text-indigo-600">{percentage}%</span>
      </div>
      
      <div className="w-full bg-gray-100 rounded-full h-2.5 mb-4">
        <div 
          className="bg-indigo-500 h-2.5 rounded-full transition-all duration-500 ease-out" 
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
      
      <div className="flex justify-between text-sm">
        <div className="flex items-center">
          <CheckCircle size={16} className="text-green-500 mr-1" />
          <span className="text-gray-600">{completed} completed</span>
        </div>
        <div className="flex items-center">
          <Circle size={16} className="text-indigo-500 mr-1" />
          <span className="text-gray-600">{total - completed} remaining</span>
        </div>
        <div className="flex items-center">
          <Clock size={16} className="text-gray-400 mr-1" />
          <span className="text-gray-600">{total} total</span>
        </div>
      </div>
    </div>
  );
};

export default TodoStats;
