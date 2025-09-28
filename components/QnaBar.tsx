import React, { useState } from 'react';
import type { QnaBarProps } from '../types';

const QnaBar: React.FC<QnaBarProps> = ({ slideContext }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      // Here you would typically send the query to an AI service
      console.log('Query:', query, 'Context:', slideContext.title);
      setQuery('');
    }
  };

  return (
    <div className="border-t border-gray-200 p-6">
      <form onSubmit={handleSubmit} className="max-w-4xl mx-auto">
        <div className="relative">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={`'${slideContext.title}' 슬라이드에 대해 질문해보세요...`}
            className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-full text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200 pr-16"
          />
          <button
            type="submit"
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition-colors duration-200 disabled:opacity-50"
            disabled={!query.trim()}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
          </button>
        </div>
        <p className="text-xs text-gray-500 mt-2 text-center">
          현재 슬라이드: {slideContext.section} - {slideContext.title}
        </p>
      </form>
    </div>
  );
};

export default QnaBar;