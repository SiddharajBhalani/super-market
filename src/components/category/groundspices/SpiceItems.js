import React from "react";
import { CategoryHeading } from "../categoryHeading";
import Groundspices from "../../../Images/catgory/Ground-Spices.png";


import p1 from "../../../Images/spices/p1badshah-biryani-masala-mix.png";
import p2 from "../../../Images/spices/p2Badshah Chana Masala Spice Mix.png";
import p3 from "../../../Images/spices/p3Badshah Dry Mango Powder.png";
import p4 from "../../../Images/spices/p4Badshah Jiralu Powder.png";
import p5 from "../../../Images/spices/p5Badshah Madras Sambar Masala.png";
import p6 from "../../../Images/spices/p6Badshah Mathura'S Jaljira Powder.png";
import p7 from "../../../Images/spices/p7Badshah Momo Masala.png";
import p8 from "../../../Images/spices/p8Badshah Mumbai Pau Bhaji Masala.png";
import p9 from "../../../Images/spices/p9Badshah Pani Puri Masala.png";
import p10 from "../../../Images/spices/p10Badshah Rajwadi Garam Masala Powder.png";
import p11 from "../../../Images/spices/p11Badshah Sabji Masala.png";
import p12 from "../../../Images/spices/p12Badshah Sindhi Biryani Mix.png";
import p13 from "../../../Images/spices/p13Badshah Thandai Mix Masala.png";
import p14 from "../../../Images/spices/p14Badshah Undhiyu Mix Masala.png";
import p15 from "../../../Images/spices/p15Ahmed Tehari Masala Mix.png";





import { CollectionItems } from "../collectionItems";

export const SpiceItems = () => {
    const collection = [





        { item: "badshah-biryani-masala-mix", src: p1, pcs: "2kg", price: "$2.30" },
        { item: "Badshah Chana Masala Spice Mix", src: p2, pcs: "2kg", price: "$2.30" },
        { item: "Badshah Dry Mango Powder", src: p3, pcs: "2kg", price: "$2.30" },
        { item: "Badshah Jiralu Powder", src: p4, pcs: "2kg", price: "$2.30" },
        { item: "Badshah Madras Sambar Masala", src: p5, pcs: "2kg", price: "$2.30" },
        { item: "Badshah Mathura'S Jaljira Powder", src: p6, pcs: "2kg", price: "$2.30" },
        { item: "Badshah Momo Masala", src: p7, pcs: "2kg", price: "$2.30" },
        { item: "Badshah Mumbai Pau Bhaji Masala", src: p8, pcs: "2kg", price: "$2.30" },
        { item: "Badshah Pani Puri Masala", src: p9, pcs: "2kg", price: "$2.30" },
        { item: "Badshah Rajwadi Garam Masala Powder", src: p10, pcs: "2kg", price: "$2.30" },
        { item: "Badshah Sabji Masala", src: p11, pcs: "2kg", price: "$2.30" },
        { item: "Badshah Sindhi Biryani Mix", src: p12, pcs: "2kg", price: "$2.30" },
        { item: "Badshah Thandai Mix Masala", src: p13, pcs: "2kg", price: "$2.30" },
        { item: "Badshah Undhiyu Mix Masala", src: p14, pcs: "2kg", price: "$2.30" },
        { item: "Ahmed Tehari Masala Mix", src: p15, pcs: "2kg", price: "$2.30" },







    ]
    return (
        <div style={{
            maxWidth: 1300,
            margin: '0 auto'
        }}>
            <CategoryHeading category="Ground Spices" img={Groundspices} />
            <hr />
            <CollectionItems collection={collection} />
        </div >
    )
}