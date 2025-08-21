import React from 'react';
export const categories = [{
  id: 1,
  name: 'Classic Combo',
  icon: '🥤'
}, {
  id: 2,
  name: 'Burgers',
  icon: '🍔'
}, {
  id: 3,
  name: 'Hot Dogs',
  icon: '🌭'
}, {
  id: 4,
  name: 'Sandwiches',
  icon: '🥪'
}, {
  id: 5,
  name: 'Fries',
  icon: '🍟'
}, {
  id: 6,
  name: 'Drinks',
  icon: '🥤'
}, {
  id: 7,
  name: 'Catering',
  icon: '📦'
}, {
  id: 8,
  name: 'Sides',
  icon: '🍟'
}, {
  id: 9,
  name: 'Desserts',
  icon: '🍦'
}, {
  id: 10,
  name: 'Specials',
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
      <div className="max-w-7xl mx-auto overflow-x-auto pt-8 pb-6">
        <div className="flex justify-evenly min-w-max px-4 gap-2 sm:gap-4">
          {categories.map(category => <div key={category.id} className="flex flex-col items-center gap-2 cursor-pointer" onClick={() => onSelectCategory(category.id)}>
              <div className={`w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-full flex items-center justify-center transition-all
                  ${selectedCategoryId === category.id ? 'border-2 border-red-600' : 'border border-gray-300'}`}>
                <span className="text-lg sm:text-xl md:text-xl lg:text-2xl">{category.icon}</span>
              </div>
              <p className={`text-xs sm:text-xs md:text-xs font-bold text-center whitespace-nowrap ${selectedCategoryId === category.id ? 'text-red-600' : ''}`}>
                {category.name}
              </p>
            </div>)}
        </div>
      </div>
    </div>;
}