import React from "react";
import { Link } from "react-router-dom";

export const CollectionItems = (props) => {
    const { collection } = props;
    return (
        <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6">
                {collection.map((item, index) => (
                    <Link to={`/product/${encodeURIComponent(item.item)}`}>
                        <div
                            key={index}
                            className="bg-white rounded-lg p-4 text-center"
                        >
                            <img
                                src={item.src}
                                alt={item.item}
                                className="w-full h-40 rounded-lg"
                            />
                            <span className="block mt-4 text-lg font-semibold">
                                {item.item}
                            </span>
                            <span className="block">
                                {item.pcs}
                            </span>
                            <span className="block">
                                {item.price}
                            </span>
                            <button className="addcard bg-blue-900 text-white font-semibold px-6 py-2 rounded">
                                Add to card
                            </button>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}