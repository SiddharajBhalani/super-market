import React from "react";
import { CategoryHeading } from "../categoryHeading";
import Saucespastes from "../../../Images/catgory/Sauces-and-Pastes.png";



import p1 from "../../../Images/Sauces & Pastes/p1al noor bbq sauce.png";
import P2 from "../../../Images/Sauces & Pastes/p2 al noor chilli garlic sauce.png";
import p3 from "../../../Images/Sauces & Pastes/p3Al Noor Dates & Tamarind Sauce.png";
import p4 from "../../../Images/Sauces & Pastes/p4al noor garlic herbs sauce.png";
import p5 from "../../../Images/Sauces & Pastes/p5al noor hot spicy sauce.png";
import p6 from "../../../Images/Sauces & Pastes/p6al noor mango chilli sauce.png";
import p7 from "../../../Images/Sauces & Pastes/p7al noor mint sauce.png";
import p8 from "../../../Images/Sauces & Pastes/p8al noor peri peri sauce.png";
import p9 from "../../../Images/Sauces & Pastes/p9al noor plum sauce.png";   
import p10 from "../../../Images/Sauces & Pastes/p10al noor sweet chilli sauce.png";
import p11 from "../../../Images/Sauces & Pastes/p11al noor tamarind chilli sauce.png";
import p12 from "../../../Images/Sauces & Pastes/p12al noor tamarind sauce.png";
import p13 from "../../../Images/Sauces & Pastes/p13 al noor tomato ketchup.png";
import p14 from "../../../Images/Sauces & Pastes/p14al noor vinegar.png";
import p15 from "../../../Images/Sauces & Pastes/p15ktc lemon juice.png";




import { CollectionItems } from "../collectionItems";

export const SaucespastesItems = () => {
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
        { item: "", src: p14, pcs: "2kg", price: "$2.30" },
        { item: "", src: p15, pcs: "2kg", price: "$2.30" },
        

     


    ]
    return (
        <div style={{
            maxWidth: 1300,
            margin: '0 auto'
        }}>
            <CategoryHeading category="Saucespastes" img={Saucespastes} />
            <hr />
            <CollectionItems collection={collection} />
        </div >
    )
}