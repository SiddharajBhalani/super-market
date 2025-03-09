import React, { useState } from "react";
import axios from "axios";


export const Contact = () => {
    return (
      <div className="flex flex-col items-center p-6 text-gray-900 text-center">
        <h3 className="text-lg font-bold text-gray-800">Address:</h3>
        <p className="text-gray-700">20 Carlton Terrace, Green Street,</p>
        <p className="text-gray-700">E7 8LH, London</p>
        
        <h3 className="text-lg font-bold text-gray-800 mt-4">Contact:</h3>
        <p className="text-gray-700">02084716365</p>
        <p className="text-gray-700">support@varietyfood.co.uk</p>
  
        <div className="mt-4 flex gap-4">
          <a href="mailto:support@varietyfood.co.uk" className="px-4 py-2 bg-blue-700 text-white rounded-md hover:bg-blue-800">Email Us</a>
          <a href="tel:02084716365" className="px-4 py-2 bg-blue-700 text-white rounded-md hover:bg-blue-800">Call Us</a>
        </div>
      </div>
    );
  }
  