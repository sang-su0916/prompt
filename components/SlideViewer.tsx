import React from 'react';
import type { SlideViewerProps } from '../types';

const SlideViewer: React.FC<SlideViewerProps> = ({ slide }) => {
  const renderContent = (content: typeof slide.content[0]) => {
    switch (content.type) {
      case 'title':
        if (typeof content.data === 'object' && 'title' in content.data) {
          return (
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl font-bold text-gray-800 mb-6 tracking-tight">
                {content.data.title}
              </h1>
              {content.data.subtitle && (
                <p className="text-xl text-gray-600 mb-12 font-medium">
                  {content.data.subtitle}
                </p>
              )}
              {content.data.author && (
                <div className="text-lg text-gray-700 font-medium">
                  {content.data.author}
                </div>
              )}
            </div>
          );
        }
        break;

      case 'text':
        return (
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            {content.data as string}
          </p>
        );

      case 'list':
        return (
          <ul className="space-y-3 mb-6">
            {(content.data as string[]).map((item, index) => (
              <li key={index} className="flex items-start">
                <span className="inline-block w-2 h-2 bg-red-500 rounded-full mt-3 mr-4 flex-shrink-0"></span>
                <span className="text-gray-700 leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        );

      case 'example':
        return (
          <div className="bg-gray-50 border-l-4 border-red-500 p-6 mb-6 rounded-r-lg">
            <pre className="whitespace-pre-wrap text-sm text-gray-800 font-mono leading-relaxed">
              {content.data as string}
            </pre>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      {slide.content[0]?.type !== 'title' && (
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">{slide.title}</h1>
          {slide.subsection && (
            <p className="text-red-500 font-medium">{slide.subsection}</p>
          )}
        </div>
      )}

      <div className="space-y-6">
        {slide.content.map((content, index) => (
          <div key={index}>
            {renderContent(content)}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SlideViewer;