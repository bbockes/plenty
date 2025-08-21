import React from 'react';
export const categories = [{
  id: 1,
  name: 'CLASSIC\nCOMBO',
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
  return <div className="w-full bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto overflow-x-auto pt-5 pb-10 md:pt-10 md:pb-[80px] px-4 md:px-16">
      <div className="max-w-7xl mx-auto overflow-x-auto pt-5 pb-5 md:pt-10 md:pb-10 px-4 md:px-16">
        <div className="flex gap-3 min-w-max">
          {categories.map(category => (
            <div 
              key={category.id}
              className="flex flex-col items-center gap-2 cursor-pointer flex-shrink-0"
              onClick={() => onSelectCategory(category.id)}
            >
              <div className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-18 lg:h-18 rounded-full flex items-center justify-center transition-all
                  ${selectedCategoryId === category.id ? 'border-2 border-red-600' : 'border border-gray-300'}`}>
                <span className="text-xl sm:text-2xl md:text-2xl lg:text-3xl">{category.icon}</span>
              </div>
              <p className={`text-xs sm:text-xs md:text-sm font-bold text-center leading-tight ${selectedCategoryId === category.id ? 'text-red-600' : 'text-black'}`}>
                {category.name.split('\n').map((line, index) => (
                  <React.Fragment key={index}>
                    {line}
                    {index < category.name.split('\n').length - 1 && <br />}
                  </React.Fragment>
                ))}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>;
}