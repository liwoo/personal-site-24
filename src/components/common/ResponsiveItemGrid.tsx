import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
// import { Icon } from 'astro-icon/components';

interface CallToAction {
  text: string;
  href?: string;
}

interface Item {
  title: string;
  description?: string;
  icon?: string;
  callToAction?: CallToAction;
  classes?: {
    panel?: string;
    icon?: string;
    title?: string;
    description?: string;
  };
}

interface ResponsiveItemGridProps {
  items: Item[];
  columns: 2 | 3 | 4;
  defaultIcon?: string;
}

const ResponsiveItemGrid: React.FC<ResponsiveItemGridProps> = ({
                                                                 items,
                                                                 columns,
                                                                 defaultIcon
                                                               }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % items.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  if (!isMobile) {
    return (
      <div className={`mx-12 grid gap-8 gap-x-12 sm:gap-y-8 ${
        columns === 4
          ? 'lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2'
          : columns === 3
            ? 'lg:grid-cols-3 sm:grid-cols-2'
            : 'sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2'
      }`}>
        {items.map((item, index) => (
          <GridItem key={index} item={item} defaultIcon={defaultIcon} />
        ))}
      </div>
    );
  }

  return (
    <div className="relative w-full">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {items.map((item, index) => (
            <div key={index} className="w-full flex-shrink-0">
              <GridItem item={item} defaultIcon={defaultIcon} />
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={prevSlide}
        className="absolute z-50 left-4 top-8 -translate-y-1/2 bg-white/80 dark:bg-gray-800/80 p-2 rounded-full shadow-lg"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute z-50 right-4 top-8 -translate-y-1/2 bg-white/80 dark:bg-gray-800/80 p-2 rounded-full shadow-lg"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      <div className="flex justify-center gap-2 mt-4">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full ${
              currentIndex === index
                ? 'bg-primary'
                : 'bg-gray-300 dark:bg-gray-600'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

interface GridItemProps {
  item: Item;
  defaultIcon?: string;
}

const GridItem: React.FC<GridItemProps> = ({ item, defaultIcon }) => {
  const { title, description, icon, callToAction } = item;

  return (
    <div className="relative flex flex-col rounded-lg shadow-[0_4px_30px_rgba(0,0,0,0.1)] dark:shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur border border-[#ffffff29] bg-card p-6">
      {(icon || defaultIcon) && (
        <span className="mb-2 w-10 h-10 text-primary">
          {/*<Icon name={icon || defaultIcon} className="w-full h-full" />*/}
        </span>
      )}
      <div className="text-xl font-bold">{title}</div>
      {description && (
        <p className="text-muted mt-2" dangerouslySetInnerHTML={{ __html: description }} />
      )}
      {callToAction && (
        <div className="mt-2">
          <button className="px-4 py-2 text-white bg-primary rounded hover:bg-primary/90">
            {callToAction.text}
          </button>
        </div>
      )}
    </div>
  );
};

export default ResponsiveItemGrid;
