// src/app/components/StaticReview.tsx
import { Star } from 'lucide-react';

interface Review {
  clientName: string;
  rating: number;
  reviewText: string;
  source: string;
}

const StarRating = ({ count }: { count: number }) => {
  return (
    <div className="flex space-x-0.5">
      {Array.from({ length: 5 }, (_, i) => (
        <Star
          key={i}
          size={18}
          className={i < count ? 'text-yellow-500 fill-yellow-500' : 'text-slate-300'}
        />
      ))}
    </div>
  );
};

export const StaticReview = ({ clientName, rating, reviewText, source }: Review) => {
  return (
    <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-md flex flex-col h-full transition duration-300 hover:shadow-lg">
      <StarRating count={rating} />
      
      <p className="text-slate-700 mt-4 mb-4 flex-grow italic leading-relaxed line-clamp-4">
        "{reviewText}"
      </p>
      
      <div className="mt-auto pt-4 border-t border-slate-100">
        <p className="font-bold text-slate-900">{clientName}</p>
        <p className="text-sm text-slate-500">{source}</p>
      </div>
    </div>
  );
};

export default StaticReview;