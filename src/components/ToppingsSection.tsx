import React, { useMemo, useState } from 'react';
import { SearchIcon, XIcon } from 'lucide-react';
import { ToppingCard } from './ToppingCard';
import { categories } from './FoodCategories';
// Mock data for toppings
const allToppings = [{
  id: 1,
  name: 'MAYO',
  calories: '+100 Cal.',
  image: "/final.png",
  categories: [2, 3, 4] // Burgers, Hot Dogs, Sandwiches
}, {
  id: 2,
  name: 'KETCHUP',
  calories: '+20 Cal.',
  image: "/final.png",
  categories: [2, 3, 4, 5] // Burgers, Hot Dogs, Sandwiches, Fries
}, {
  id: 3,
  name: 'MUSTARD',
  calories: '+15 Cal.',
  image: "/final.png",
  categories: [2, 3, 4]
}, {
  id: 4,
  name: 'A.1.® STEAK SAUCE',
  calories: '+15 Cal.',
  image: "/final.png",
  categories: [2]
}, {
  id: 5,
  name: 'BBQ SAUCE',
  calories: '+80 Cal.',
  image: "/final.png",
  categories: [2, 3, 4]
}, {
  id: 6,
  name: 'HOT SAUCE',
  calories: '+5 Cal.',
  image: "/final.png",
  categories: [2, 3, 4, 5]
}, {
  id: 7,
  name: 'RELISH',
  calories: '+15 Cal.',
  image: "/final.png",
  categories: [3, 4]
}, {
  id: 8,
  name: 'ONION',
  calories: '+10 Cal.',
  image: "/final.png",
  categories: [2, 3, 4]
}, {
  id: 9,
  name: 'LETTUCE',
  calories: '+10 Cal.',
  image: "/final.png",
  categories: [2, 3, 4]
}, {
  id: 10,
  name: 'PICKLES',
  calories: '+5 Cal.',
  image: "/final.png",
  categories: [2, 3, 4]
}, {
  id: 11,
  name: 'TOMATOES',
  calories: '+10 Cal.',
  image: "/final.png",
  categories: [2, 3, 4]
}, {
  id: 12,
  name: 'JALAPENO PEPPERS',
  calories: '+5 Cal.',
  image: "/final.png",
  categories: [2, 3, 4, 5]
}, {
  id: 13,
  name: 'GREEN PEPPERS',
  calories: '+5 Cal.',
  image: "/final.png",
  categories: [2, 3, 4]
}, {
  id: 14,
  name: 'GRILLED MUSHROOMS',
  calories: '+5 Cal.',
  image: "/final.png",
  categories: [2, 3, 4]
}, {
  id: 15,
  name: 'GRILLED ONIONS',
  calories: '+10 Cal.',
  image: "/final.png",
  categories: [2, 3, 4]
}, {
  id: 16,
  name: 'ADD PATTY',
  calories: '',
  image: "/final.png",
  price: '+$3.00',
  categories: [2]
}, {
  id: 17,
  name: 'CHEESE',
  calories: '+50 Cal.',
  image: "/final.png",
  price: '+$1.00',
  categories: [2, 3, 4]
}, {
  id: 18,
  name: 'BACON',
  calories: '+80 Cal.',
  image: "/final.png",
  price: '+$2.00',
  categories: [2, 3, 4]
}, {
  id: 19,
  name: 'CHEESE SAUCE',
  calories: '+100 Cal.',
  image: "/final.png",
  price: '+$1.50',
  categories: [5]
}, {
  id: 20,
  name: 'CAJUN SEASONING',
  calories: '+5 Cal.',
  image: "/final.png",
  categories: [5]
}, {
  id: 21,
  name: 'REGULAR SODA',
  calories: '+150 Cal.',
  image: "/final.png",
  categories: [1, 6]
}, {
  id: 22,
  name: 'LARGE SODA',
  calories: '+250 Cal.',
  image: "/final.png",
  price: '+$1.00',
  categories: [1, 6]
}, {
  id: 23,
  name: 'PLAIN',
  calories: '',
  image: "/final.png",
  categories: [2, 3, 4, 5]
}];
interface ToppingsSectionProps {
  selectedCategoryId: number;
}
export function ToppingsSection({
  selectedCategoryId
}: ToppingsSectionProps) {
  const [selectedToppings, setSelectedToppings] = useState<number[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  // Filter toppings based on the selected category and search query
  const toppings = useMemo(() => {
    let filtered = allToppings.filter(topping => topping.categories.includes(selectedCategoryId));
    
    if (searchQuery.trim()) {
      filtered = filtered.filter(topping => 
        topping.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    
    return filtered;
  }, [selectedCategoryId, searchQuery]);
  // Get the selected category name
  const selectedCategory = categories.find(cat => cat.id === selectedCategoryId);
  const toggleTopping = (id: number) => {
    setSelectedToppings(prev => prev.includes(id) ? prev.filter(toppingId => toppingId !== id) : [...prev, id]);
  };

  const clearSearch = () => {
    setSearchQuery('');
  };
  return <div className="w-full">
      <div className="mb-6">
        <div className="relative max-w-md">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <SearchIcon className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            className="block w-full pl-10 pr-10 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-red-600 placeholder-gray-500 text-sm"
            placeholder={`Search ${selectedCategory?.name.toLowerCase() || 'toppings'}...`}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          {searchQuery && (
            <button
              onClick={clearSearch}
              className="absolute inset-y-0 right-0 pr-3 flex items-center"
            >
              <XIcon className="h-4 w-4 text-gray-400 hover:text-gray-600" />
            </button>
          )}
        </div>
        <div className="flex items-center justify-end mt-3">
          {selectedToppings.length > 0 && (
            <div className="border border-red-600 text-red-600 text-xs font-bold px-4 py-1">
              {selectedToppings.length} SELECTED
            </div>
          )}
        </div>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-4 mt-6">
        {toppings.map(topping => <ToppingCard key={topping.id} name={topping.name} calories={topping.calories} image={topping.image} price={topping.price} isSelected={selectedToppings.includes(topping.id)} onToggle={() => toggleTopping(topping.id)} />)}
      </div>
    </div>;
}