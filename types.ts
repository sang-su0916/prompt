export interface Slide {
  id: string;
  title: string;
  section: string;
  subsection?: string;
  content: {
    type: 'text' | 'list' | 'example' | 'title';
    data: string | string[] | {
      title: string;
      subtitle?: string;
      author?: string;
    };
  }[];
}

export interface SideNavProps {
  slides: Slide[];
  activeSlideIndex: number;
  onNavigate: (index: number) => void;
}

export interface SlideViewerProps {
  slide: Slide;
}

export interface QnaBarProps {
  slideContext: Slide;
}