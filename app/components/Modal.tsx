import React from 'react';

interface ModalProps {
  imageSrc: string;
  onClose: () => void;
}

// Displays the lightbox gallery with the product image in full size

const Modal: React.FC<ModalProps> = ({ imageSrc, onClose }) => {

  const handleButtonClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onClose();
  };

  return (
    <div className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-black bg-opacity-80">
      <img className="max-h-full max-w-full" src={imageSrc} alt="Large view" />
      <button 
        onClick={handleButtonClick} 
        className="absolute top-4 right-12 bg-white text-gray-900 rounded-full h-10 w-10 flex items-center justify-center hover:bg-gray-900 hover:text-white transition-colors duration-100 ease-in">
          X
      </button>
    </div>
  );
};

export default Modal;
