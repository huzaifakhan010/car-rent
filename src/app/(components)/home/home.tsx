import React from 'react';
import Image from 'next/image'; // Import the Next.js Image component

// Define the Car type
interface Car {
  image: string;
  title: string;
  type: string;
  price: number;
}

// Sample car data 
const cars: Car[] = [
  {
    image: "/car.png",
    title: 'Koenigsegg',
    type: 'Sport',
    price: 99,
  },
  {
    image: '/images/car2.jpg',
    title: 'Nissan GT-R',
    type: 'Sport',
    price: 80,
  },
  {
    image: '/images/car3.jpg',
    title: 'Rolls Royce',
    type: 'Sedan',
    price: 96,
  },
  {
    image: '/images/car4.jpg',
    title: 'All New Rush',
    type: 'SUV',
    price: 72,
  },
];

const HomePage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <h1 className="text-gray-500 text-lg sm:text-xl">Popular Cars</h1>

      {/* Grid of cars */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {cars.map((car) => (
          <div
            key={car.title}
            className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center"
          >
            {/* Car Image */}
            <div className="relative w-full h-48">
              <Image
                src={car.image}
                alt={car.title}
                layout="fill"
                objectFit="cover"
                className="rounded-t-lg"
              />
            </div>

            {/* Car Title */}
            <h2 className="text-xl font-bold mt-4">{car.title}</h2>

            {/* Car Type */}
            <p className="text-gray-600 capitalize">{car.type}</p>

            {/* Price */}
            <p className="text-2xl font-bold mt-2">${car.price}/day</p>

            {/* Rent Now Button */}
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
              Rent Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
