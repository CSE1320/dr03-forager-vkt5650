import React from 'react';
import MushroomCard from '@/components/Mushroom/MushroomCard';

export default function MushroomList({ mushrooms }) {
    if (!mushrooms || mushrooms.length === 0) {
        return <p className="text-gray-500 text-center">No mushrooms found.</p>;
    }

    return (
        <div className="grid grid-cols-3 gap-1">
          {mushrooms.map((mushroom) => (
            <MushroomCard 
              key={mushroom.id} 
              image={mushroom.image} 
              name={mushroom.name} 
              toxic={mushroom.toxic} 
            />
          ))}
        </div>
      );
      
}