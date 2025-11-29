import React from "react";

const Gallery = () => {
  return (
    <div className="gallery-container px-4 py-8 mt-[100px]"
    id="gallery"
    >
      <h1 className="text-3xl font-bold text-center mb-6">Gallery</h1>
      
      {/* Placeholder for gallery images */}
      <div className="gallery-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {/* Example images */}
        <div className="bg-gray-200 h-40 rounded-lg flex items-center justify-center">
          Image 1
        </div>
        <div className="bg-gray-200 h-40 rounded-lg flex items-center justify-center">
          Image 2
        </div>
        <div className="bg-gray-200 h-40 rounded-lg flex items-center justify-center">
          Image 3
        </div>
        <div className="bg-gray-200 h-40 rounded-lg flex items-center justify-center">
          Image 4
        </div>
        <div className="bg-gray-200 h-40 rounded-lg flex items-center justify-center">
          Image 5
        </div>
        <div className="bg-gray-200 h-40 rounded-lg flex items-center justify-center">
          Image 6
        </div>
      </div>
    </div>
  );
};

export default Gallery;
