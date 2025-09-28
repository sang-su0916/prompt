import React from 'react';
import type { SideNavProps } from '../types';

const SideNav: React.FC<SideNavProps> = ({ slides, activeSlideIndex, onNavigate }) => {
  const groupedSlides = slides.reduce((acc, slide, index) => {
    if (!acc[slide.section]) {
      acc[slide.section] = [];
    }
    acc[slide.section].push({ ...slide, index });
    return acc;
  }, {} as Record<string, Array<typeof slides[0] & { index: number }>>);

  return (
    <nav className="w-72 bg-white border-r border-gray-200 fixed h-screen overflow-y-auto sidebar-shadow">
      {/* 헤더 */}
      <div className="p-5 border-b border-gray-200">
        <h1 className="text-lg font-bold text-red-500 mb-1">AI 활용 완벽 가이드</h1>
        <p className="text-xs text-gray-500">프롬프트 & 컨텍스트 엔지니어링</p>
      </div>

      {/* 네비게이션 */}
      <div className="py-4">
        {Object.entries(groupedSlides).map(([section, sectionSlides]) => (
          <div key={section} className="mb-6">
            <div className="px-5 py-2 text-sm font-semibold text-gray-700 bg-gray-50 border-l-4 border-red-500">
              {section}
            </div>
            {sectionSlides.map((slide) => (
              <div
                key={slide.id}
                className={`px-5 py-2 text-sm cursor-pointer transition-all duration-200 ${
                  slide.subsection ? 'pl-8' : ''
                } ${
                  activeSlideIndex === slide.index
                    ? 'nav-item-active'
                    : 'text-gray-600 nav-item-hover'
                }`}
                onClick={() => onNavigate(slide.index)}
              >
                {slide.title}
              </div>
            ))}
          </div>
        ))}
      </div>
    </nav>
  );
};

export default SideNav;