import React, { useState } from 'react';
import { Header } from './components/Header';
import { FoodCategories, categories } from './components/FoodCategories';
import { ToppingsSection } from './components/ToppingsSection';
import { Footer } from './components/Footer';
export function App() {
  const [selectedCategoryId, setSelectedCategoryId] = useState(2); // Default to BURGERS
  return <div className="flex flex-col min-h-screen w-full bg-gray-50">
      <Header />
      <FoodCategories selectedCategoryId={selectedCategoryId} onSelectCategory={setSelectedCategoryId} />
      <main className="flex-grow px-4 md:px-16 py-8 max-w-7xl mx-auto w-full">
        <ToppingsSection selectedCategoryId={selectedCategoryId} />
      </main>
      <Footer />
    </div>;
}