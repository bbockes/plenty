import React from 'react';
export const categories = [{
  id: 1,
  name: 'CLASSIC COMBO',
  icon: '🥤'
}, {
  id: 2,
  name: 'BURGERS',
  icon: '🍔'
}, {
  id: 3,
  name: 'HOT DOGS',
  icon: '🌭'
}, {
  id: 4,
  name: 'SANDWICHES',
  icon: '🥪'
}, {
  id: 5,
  name: 'FRIES',
  icon: '🍟'
}, {
  id: 6,
  name: 'DRINKS',
  icon: '🥤'
}, {
  id: 7,
  name: 'CATERING',
  icon: '📦'
}, {
  id: 8,
  name: 'SIDES',
  icon: '🍟'
}, {
  id: 9,
  name: 'DESSERTS',
  icon: '🍦'
}, {
  id: 10,
  name: 'SPECIALS',
  icon: '🎁'
}];
interface FoodCategoriesProps {
  selectedCategoryId: number;
  onSelectCategory: (categoryId: number) => void;
}
export function FoodCategories({
  selectedCategoryId,
  onSelectCategory
}: FoodCategoriesProps) {
  return <div className="w-full bg-white py-6 border-b border-gray-200">
      <div className="max-w-7xl mx-auto overflow-x-auto pt-2">
        <div className="flex gap-4 justify-center min-w-max px-4">
          {categories.map(category => <div key={category.id} className="flex flex-col items-center gap-2 cursor-pointer" onClick={() => onSelectCategory(category.id)}>
              <div className={`w-16 h-16 rounded-full flex items-center justify-center transition-all
                  ${selectedCategoryId === category.id ? 'border-2 border-red-600' : 'border border-gray-300'}`}>
                <span className="text-2xl">{category.icon}</span>
              </div>
              <p className={`text-xs font-bold text-center ${selectedCategoryId === category.id ? 'text-red-600' : ''}`}>
                {category.name}
              </p>
            </div>)}
        </div>
      </div>
    </div>;
}