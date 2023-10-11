import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-blue-500 p-4 w-full fixed top-0">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div className="text-white text-2xl font-bold">Your Logo</div>
          <ul className="flex space-x-4">
            <li>
              <a href="/" className="text-white">Home</a>
            </li>
            <li>
              <a href="#" className="text-white">Cart</a>
            </li>
            <li>
              <a href="/login" className="text-white">Log in</a>
            </li>
            <li>
              <a href="/register" className="text-white">Register</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
