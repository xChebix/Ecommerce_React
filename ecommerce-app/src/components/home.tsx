import React from 'react';
import Card from "./card";


const Home: React.FC = () => {
  const onAddToCart = () => {
    console.log("Added to cart");
  }
  return (
    <div>
      
      <Card
        imageSrc="./assets/polera.jpg"
        title="Product Name"
        price={19.99}
        onAddToCart= {onAddToCart}
      />
      <Card
        imageSrc="your-image-url.jpg"
        title="Product Name"
        price={19.99}
        onAddToCart= {onAddToCart}
      />
      
      
    </div>
    
  );
  
}
export default Home;