import React from 'react';

interface CardProps {
  imageSrc: string;
  title: string;
  price: number;
  onAddToCart: () => void; // Callback for the "Add to Cart" button
}

const Card: React.FC<CardProps> = ({ imageSrc, title, price, onAddToCart }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 m-4 w-1/5 mt-5 pt-20">
      <img src={imageSrc} alt={title} className="w-full h-48 object-cover object-center" />
      <div className="mt-4">
        <h2 className="text-xl font-semibold">{title}</h2>
        <p className="text-gray-600">${price.toFixed(2)}</p>
        <button
          onClick={onAddToCart}
          className="bg-blue-500 text-white py-2 px-4 rounded mt-2"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Card;
