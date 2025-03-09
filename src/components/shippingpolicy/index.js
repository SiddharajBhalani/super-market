import React, { useState } from "react";
import axios from "axios";

export const Shipping = () => {
    return (
      <div className="flex flex-col items-center p-8 text-gray-900">
        <h1 className="text-3xl font-bold text-blue-900">Shipping policy</h1>
        <h2 className="text-xl font-bold text-gray-900 mt-2">UK Nationwide Delivery.</h2>
        <p className="mt-1 text-gray-700">Order Before 12:00 PM for same-day dispatch (Monday to Thursday)*.</p>
        
        <div className="mt-6 border rounded-lg shadow-md w-full max-w-lg">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-200">
                <th className="p-3 border">Order Value</th>
                <th className="p-3 border">Delivery Fee</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border">
                <td className="p-3 border">Under £20</td>
                <td className="p-3 border">£6.99</td>
              </tr>
              <tr className="border">
                <td className="p-3 border">Between £20 to £59.99</td>
                <td className="p-3 border">£4.99</td>
              </tr>
              <tr className="border">
                <td className="p-3 border">Above £60</td>
                <td className="p-3 border">Free Delivery</td>
              </tr>
            </tbody>
          </table>
        </div>
  
        <div className="mt-6 text-gray-700 text-sm">
          <p><span className="font-bold">Phone number:</span> <a href="tel:02084761665" className="text-blue-600">02084761665</a></p>
          <p><span className="font-bold">Email:</span> <a href="mailto:support@xayleyfood.co.uk" className="text-blue-600">support@xayleyfood.co.uk</a></p>
          <ul className="list-disc mt-3 ml-5">
            <li>Once you place your order, you will receive an email confirmation.</li>
            <li>Once your order is shipped, you will receive a notification with Tracking Details. We use DPD’s Next-day delivery service.</li>
            <li>Next-Day Morning you will receive a 1 hour delivery slot.</li>
          </ul>
        </div>
        
        <p className="mt-4 text-xs text-gray-600 max-w-lg">
          *Please note deliveries can be delayed due to unforeseen reasons. We will try our level best to get it delivered in the given time. Same-day dispatch is done subject to all products in stock. We are not responsible for parcels once delivered to gated accommodations (e.g., apartments, campuses). Please track your parcel and arrange for collection accordingly.
        </p>
  
        <button className="mt-6 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          Back to top
        </button>
      </div>
    );
  }
  