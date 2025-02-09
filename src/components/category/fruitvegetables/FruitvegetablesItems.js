import React from "react";
import { CategoryHeading } from "../categoryHeading";
import Fruitvegetables from "../../../Images/catgory/Fruit-and-Vegetables.png";


import p1 from "../../../Images/Fruitvegetables/p1Coriander Bunch.png";
import P2 from "../../../Images/Fruitvegetables/p2Curry Leaves Bunch.png";
import p3 from "../../../Images/Fruitvegetables/p3Methi Bunch.png";
import p4 from "../../../Images/Fruitvegetables/p4Okra.png";
import p5 from "../../../Images/Fruitvegetables/p5Birds eye Chillies.png";
import p6 from "../../../Images/Fruitvegetables/p6Bombay Onions.png";
import p7 from "../../../Images/Fruitvegetables/p7Brazilian Guava.png";
import p8 from "../../../Images/Fruitvegetables/p8Tindori.png";
import p9 from "../../../Images/Fruitvegetables/p9Amla.png";   
import p10 from "../../../Images/Fruitvegetables/p10Chickoo.png";
import p11 from "../../../Images/Fruitvegetables/p11Ginger.png";
import p12 from "../../../Images/Fruitvegetables/p12Guwar.png";
import p13 from "../../../Images/Fruitvegetables/p13Beetroot.png.png";
import p14 from "../../../Images/Fruitvegetables/p14Loose-Tomatoes.png";
import p15 from "../../../Images/Fruitvegetables/p15Raw Mangoes.png";


import { CollectionItems } from "../collectionItems";

export const FruitvegetablesItems = () => {
    const collection = [

        { item: "Coriander Bunch", src: p1, pcs: "2kg", price: "$2.30" },
        { item: "Curry Leaves Bunch", src: P2, pcs: "2kg", price: "$2.30" },
        { item: "Methi Bunch", src: p3, pcs: "2kg", price: "$2.30" },
        { item: "Okra", src: p4, pcs: "2kg", price: "$2.30" },
        { item: "Birds eye Chillies", src: p5, pcs: "2kg", price: "$2.30" },
        { item: "Bombay Onions", src: p6, pcs: "2kg", price: "$2.30" },
        { item: "brazilian Guava", src: p7, pcs: "2kg", price: "$2.30" },
        { item: "Tindori", src: p8, pcs: "2kg", price: "$2.30" },
        { item: "Amla", src: p9, pcs: "2kg", price: "$2.30" },
        { item: "Chickoo", src: p10, pcs: "2kg", price: "$2.30" },
        { item: "Ginger", src: p11, pcs: "2kg", price: "$2.30" },
        { item: "Guwar", src: p12, pcs: "2kg", price: "$2.30" },
        { item: "Beetroot", src: p13, pcs: "2kg", price: "$2.30" },
        { item: "Loose-Tomatoes", src: p14, pcs: "2kg", price: "$2.30" },
        { item: "Raw Mangoes", src: p15, pcs: "2kg", price: "$2.30" },

    ]
    return (
        <div style={{
            maxWidth: 1300,
            margin: '0 auto'
        }}>
            <CategoryHeading category="Fruitvegetables" img={Fruitvegetables} />
            <hr />
            <CollectionItems collection={collection} />
        </div >
    )
}