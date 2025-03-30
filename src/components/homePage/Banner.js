import React from "react";
import WinterImage from "../../Images/catgory/WinterBanner.png";

export const Banner = () => {
    return (
       <div>
  <img style={{ width: "100%" }} src={WinterImage}></img>

       </div>
    );
};



// <div className="relative bg-blue-500 text-white overflow-hidden">
//             {/* Background */}
//             <div
//                 className="absolute inset-0 bg-cover bg-center"
//                 style={{
//                     backgroundImage: `url(${WinterImage})`,
//                     // backgroundColor: "lightblue",
//                 }}
//             ></div>

//             {/* Overlay */}
//             <div className="relative z-10 flex flex-row md:flex-row justify-between items-center p-6 md:p-12">
//                 <div className="text-center md:text-left">
//                     <h1 className="text-3xl md:text-5xl font-bold mb-4">
//                         Warm Up Your Winter
//                     </h1>
//                     <p className="text-lg md:text-2xl mb-6">
//                         With Essentials for Comfort, Health, & Flavour!
//                     </p>
//                 </div>
//                 {/* <button className="bg-blue-700 hover:bg-blue-900 text-white font-semibold px-6 py-2 rounded">
//                     ORDER NOW!
//                 </button> */}
//             </div>
//         </div>
