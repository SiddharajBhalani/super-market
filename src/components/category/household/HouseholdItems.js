import React from "react";
import { CategoryHeading } from "../categoryHeading";
import Household from "../../../Images/catgory/Household.png";



import p1 from "../../../Images/Household/p1alamgeer laundry starch.png";
import P2 from "../../../Images/Household/p2alamgeer neel powder.png";
import p3 from "../../../Images/Household/p3domestos thick bleach.png";
import p4 from "../../../Images/Household/p4easy window cleaner.png";
import p5 from "../../../Images/Household/p5fairy lemon dishwashing gel.png";
import p6 from "../../../Images/Household/p6fairy original dishwashing gel.png";
import p7 from "../../../Images/Household/p7harpic citrus active fresh cleaning gel.png";
import p8 from "../../../Images/Household/p8harpic mountain pine active fresh cleaning gel.png";
import p9 from "../../../Images/Household/p9mr muscle advance power kitchen cleaner.png";   
import p10 from "../../../Images/Household/p10mr muscle advance power window glass cleaner.png";
import p11 from "../../../Images/Household/p11mr muscle advanced power bathroom cleaner.png";
import p12 from "../../../Images/Household/p12raid fly and wasp killer.png";
import p13 from "../../../Images/Household/p13top op tapioca starch.png";




import { CollectionItems } from "../collectionItems";

export const HouseholdItems = () => {
    const collection = [
      
  
        { item: "", src: p1, pcs: "2kg", price: "$2.30" },
        { item: "", src: P2, pcs: "2kg", price: "$2.30" },
        { item: "", src: p3, pcs: "2kg", price: "$2.30" },
        { item: "", src: p4, pcs: "2kg", price: "$2.30" },
        { item: "", src: p5, pcs: "2kg", price: "$2.30" },
        { item: "", src: p6, pcs: "2kg", price: "$2.30" },
        { item: "", src: p7, pcs: "2kg", price: "$2.30" },
        { item: "", src: p8, pcs: "2kg", price: "$2.30" },
        { item: "", src: p9, pcs: "2kg", price: "$2.30" },
        { item: "", src: p10, pcs: "2kg", price: "$2.30" },
        { item: "", src: p11, pcs: "2kg", price: "$2.30" },
        { item: "", src: p12, pcs: "2kg", price: "$2.30" },
        { item: "", src: p13, pcs: "2kg", price: "$2.30" },
       
        

     


    ]
    return (
        <div style={{
            maxWidth: 1300,
            margin: '0 auto'
        }}>
            <CategoryHeading category="Household" img={Household} />
            <hr />
            <CollectionItems collection={collection} />
        </div >
    )
}