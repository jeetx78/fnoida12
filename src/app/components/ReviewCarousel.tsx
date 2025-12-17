// src/app/components/ReviewCarousel.tsx
"use client"; // REQUIRED for interaction (scrolling, button clicks)

import { useRef } from 'react';
import StaticReview from "./StaticReview";
import { ArrowLeft, ArrowRight } from 'lucide-react';

// Define the shape of a single review object (should match lib/reviews.ts)
interface Review {
  clientName: string;
  rating: number;
  reviewText: string;
  source: string;
}

interface ReviewCarouselProps {
  reviews: Review[];
}

const ReviewCarousel: React.FC<ReviewCarouselProps> = ({ reviews }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  // Function to scroll the carousel left or right
  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      // Calculate scroll distance based on the currently visible item width
      const scrollAmount = scrollRef.current.clientWidth * 0.95; // Scroll about 95% of the viewport width

      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="relative">
      
      {/* Scrollable Container */}
      <div
        ref={scrollRef}
        // Tailwind classes for horizontal scrolling and hidden scrollbar
        className="flex overflow-x-scroll snap-x snap-mandatory space-x-6 pb-6"
        style={{ scrollBehavior: 'smooth' }}
      >
        {reviews.map((review, index) => (
          // Card Width: W-95% on mobile, W-48% on medium screens, W-32% on large screens
          <div 
            key={index} 
            className="flex-shrink-0 w-[95%] sm:w-[48%] lg:w-[32%] snap-start"
          >
            <StaticReview
              clientName={review.clientName}
              rating={review.rating}
              reviewText={review.reviewText}
              source={review.source}
            />
          </div>
        ))}
      </div>

      {/* Navigation Arrows (Hidden on small screens, visible on desktop) */}
      <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 hidden lg:block">
        <div className="container mx-auto px-4 flex justify-between">
          <button
            onClick={() => scroll('left')}
            className="bg-white p-3 rounded-full shadow-xl border border-slate-200 text-slate-700 hover:bg-slate-200 transition -ml-12"
            aria-label="Previous Review"
          >
            <ArrowLeft size={20} />
          </button>
          <button
            onClick={() => scroll('right')}
            className="bg-white p-3 rounded-full shadow-xl border border-slate-200 text-slate-700 hover:bg-slate-200 transition -mr-12"
            aria-label="Next Review"
          >
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewCarousel;