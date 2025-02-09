import React from "react";
import { CategoryHeading } from "../categoryHeading";
import Drinks from "../../../Images/catgory/Drinks.png";






import p1 from "../../../Images/Drinks/p1frooti-mango-juice.png";
import P2 from "../../../Images/Drinks/p2kashmira-jeera-masala-soda.png";
import p3 from "../../../Images/Drinks/p3limca-can.png";
import p4 from "../../../Images/Drinks/p4mogu-mogu-coconut-drink.png";
import p5 from "../../../Images/Drinks/p5mogu-mogu-lychee-drink.png";
import p6 from "../../../Images/Drinks/p6mogu-mogu-mango-drink.png";
import p7 from "../../../Images/Drinks/p7mogu-mogu-melon-drink.png";
import p8 from "../../../Images/Drinks/p8mogu-mogu-orange-drink.png";
import p9 from "../../../Images/Drinks/p9mogu-mogu-passion-fruit-drink.png";   
import p10 from "../../../Images/Drinks/p10mogu-mogu-peach-drink.png";
import p11 from "../../../Images/Drinks/p11mogu-mogu-pina-colada-drink.png";
import p12 from "../../../Images/Drinks/p12mogu-mogu-pineapple-drink.png";
import p13 from "../../../Images/Drinks/p13mogu-mogu-pink-guava-drink.png";
import p14 from "../../../Images/Drinks/p14mogu-mogu-strawberry-drink.png";
import p15 from "../../../Images/Drinks/p15mogu-mogu-watermelon-juice.png";




import { CollectionItems } from "../collectionItems";

export const DrinksItems = () => {
    const collection = [
      

        { item: "frooti-mango-juice", src: p1, pcs: "2kg", price: "$2.30" },
        { item: "kashmira-jeera-masala-soda", src: P2, pcs: "2kg", price: "$2.30" },
        { item: "limca-can", src: p3, pcs: "2kg", price: "$2.30" },
        { item: "mogu-coconut-drink", src: p4, pcs: "2kg", price: "$2.30" },
        { item: "mogu-lychee-drink", src: p5, pcs: "2kg", price: "$2.30" },
        { item: "mogu-mango-drink", src: p6, pcs: "2kg", price: "$2.30" },
        { item: "mogu-melon-drink", src: p7, pcs: "2kg", price: "$2.30" },
        { item: "mogu-orange-drink", src: p8, pcs: "2kg", price: "$2.30" },
        { item: "mogu-passion-fruit-drink", src: p9, pcs: "2kg", price: "$2.30" },
        { item: "mogu-peach-drink", src: p10, pcs: "2kg", price: "$2.30" },
        { item: "mogu-pina-colada-drink", src: p11, pcs: "2kg", price: "$2.30" },
        { item: "mogu-pineapple-drink", src: p12, pcs: "2kg", price: "$2.30" },
        { item: "mogu-pink-guava-drink", src: p13, pcs: "2kg", price: "$2.30" },
        { item: "mogu-strawberry-drink", src: p14, pcs: "2kg", price: "$2.30" },
        { item: "mogu-watermelon-juice", src: p15, pcs: "2kg", price: "$2.30" },
        

     


    ]
    return (
        <div style={{
            maxWidth: 1300,
            margin: '0 auto'
        }}>
            <CategoryHeading category="Drinks" img={Drinks} />
            <hr />
            <CollectionItems collection={collection} />
        </div >
    )
}