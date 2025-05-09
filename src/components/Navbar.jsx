import React from 'react';

const Navbar = ({ setCategory }) => {
  return (
    <nav className="bg-black p-4 sticky top-0 z-10 border-blue-300 border-2">
      <div className="container mx-auto flex flex-wrap justify-between items-center">
        {/* Logo */}
        <div className="text-white text-xl font-bold flex items-center gap-2 mb-2 md:mb-0">
          <img src="/icon.avif" className="w-[25px]" alt="logo" />
          <span>NewsApp</span>
        </div>

        <div className="flex flex-wrap justify-center gap-4 w-full md:w-auto">
          {['technology', 'business', 'health', 'sports', 'entertenment'].map((cat) => (
            <div
              key={cat}
              onClick={() => setCategory(cat)}
              className="text-white cursor-pointer hover:text-gray-300"
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
