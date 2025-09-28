import React, { useState, useMemo } from 'react';
import { slides } from './constants';
import type { Slide } from './types';
import SideNav from './components/SideNav';
import SlideViewer from './components/SlideViewer';
import QnaBar from './components/QnaBar';

const App: React.FC = () => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  const currentSlide: Slide | undefined = useMemo(() => slides[activeSlideIndex], [activeSlideIndex]);

  return (
    <div className="bg-gray-50 w-screen h-screen font-pretendard">
      <div className="w-full h-full bg-white flex text-gray-800">
        <SideNav
          slides={slides}
          activeSlideIndex={activeSlideIndex}
          onNavigate={setActiveSlideIndex}
        />
        <main className="flex-1 flex flex-col overflow-hidden ml-72">
          <div className="flex-1 overflow-y-auto px-20 py-16">
            {currentSlide && <SlideViewer slide={currentSlide} />}
          </div>
          {currentSlide && <QnaBar slideContext={currentSlide} />}
        </main>
      </div>
    </div>
  );
};

export default App;