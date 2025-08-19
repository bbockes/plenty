import React from 'react';
import { CheckIcon } from 'lucide-react';
interface ToppingCardProps {
  name: string;
  calories: string;
  image: string;
  price?: string;
  isSelected: boolean;
  onToggle: () => void;
}
export function ToppingCard({
  name,
  calories,
  image,
  price,
  isSelected,
  onToggle
}: ToppingCardProps) {
  return <div className={`relative border ${isSelected ? 'border-red-600 border-2' : 'border-gray-300'} rounded p-4 flex flex-col items-center cursor-pointer transition-all hover:shadow-md`} onClick={onToggle}>
      {isSelected && <div className="absolute top-2 right-2 bg-red-600 rounded-full p-1">
          <CheckIcon className="h-4 w-4 text-white" />
        </div>}
      <div className="h-24 w-24 flex items-center justify-center mb-2">
        <img src={image} alt={name} className="max-h-full max-w-full object-contain" />
      </div>
      <div className="text-center">
        <p className="text-red-600 font-bold text-sm">{name}</p>
        <p className="text-xs text-gray-600">{calories}</p>
        {price && <p className="text-xs font-bold mt-1">{price}</p>}
      </div>
    </div>;
}