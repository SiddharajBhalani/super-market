import React from "react";
import { CategoryHeading } from "../categoryHeading";
import dals from "../../../Images/catgory/Whole-Spices.png";



import p1 from "../../../Images/Whole Spices/p1variety-ajwain-seeds.png";
import P2 from "../../../Images/Whole Spices/p2variety brown mustard seeds.png";
import p3 from "../../../Images/Whole Spices/p3 variety cinnamon sticks.png";
import p4 from "../../../Images/Whole Spices/p4variety coarse black pepper.png";
import p5 from "../../../Images/Whole Spices/p5variety coriander seeds.png";
import p6 from "../../../Images/Whole Spices/p6variety cumin seeds.png";
import p7 from "../../../Images/Whole Spices/p7variety-dagar-na-phool.png";
import p8 from "../../../Images/Whole Spices/p8variety green cardamom.png";
import p9 from "../../../Images/Whole Spices/p9variety katira goond.png";   
import p10 from "../../../Images/Whole Spices/p10variety-kokum-phool.png";
import p11 from "../../../Images/Whole Spices/p11variety methi seeds.png";
import p12 from "../../../Images/Whole Spices/p12variety whole black pepper.png";
import p13 from "../../../Images/Whole Spices/p13variety whole cloves.png";
import p14 from "../../../Images/Whole Spices/p14variety whole cubeb pepper.png";
import p15 from "../../../Images/Whole Spices/p15variety whole dhanya.png";




import { CollectionItems } from "../collectionItems";

export const WholespicesItems = () => {
    const collection = [
      
  
        { item: "variety-ajwain-seeds", src: p1, pcs: "2kg", price: "$2.30" },
        { item: "variety brown mustard seeds", src: P2, pcs: "2kg", price: "$2.30" },
        { item: "variety cinnamon sticks", src: p3, pcs: "2kg", price: "$2.30" },
        { item: "variety coarse black pepper", src: p4, pcs: "2kg", price: "$2.30" },
        { item: "variety coriander seeds", src: p5, pcs: "2kg", price: "$2.30" },
        { item: "variety cumin seeds", src: p6, pcs: "2kg", price: "$2.30" },
        { item: "variety-dagar-na-phool", src: p7, pcs: "2kg", price: "$2.30" },
        { item: "variety green cardamom", src: p8, pcs: "2kg", price: "$2.30" },
        { item: "variety katira goond", src: p9, pcs: "2kg", price: "$2.30" },
        { item: "variety-kokum-phool", src: p10, pcs: "2kg", price: "$2.30" },
        { item: "variety methi seeds", src: p11, pcs: "2kg", price: "$2.30" },
        { item: "variety whole cloves", src: p12, pcs: "2kg", price: "$2.30" },
        { item: "variety whole cloves", src: p13, pcs: "2kg", price: "$2.30" },
        { item: "variety whole cubeb pepper", src: p14, pcs: "2kg", price: "$2.30" },
        { item: "variety whole dhanya", src: p15, pcs: "2kg", price: "$2.30" },
        // { item: "", src: p1, pcs: "2kg", price: "$2.30" },
        // { item: "", src: P2, pcs: "2kg", price: "$2.30" },
        // { item: "", src: p3, pcs: "2kg", price: "$2.30" },
        // { item: "", src: p4, pcs: "2kg", price: "$2.30" },
        // { item: "", src: p5, pcs: "2kg", price: "$2.30" },
        // { item: "", src: p6, pcs: "2kg", price: "$2.30" },
        // { item: "", src: p7, pcs: "2kg", price: "$2.30" },
        // { item: "", src: p8, pcs: "2kg", price: "$2.30" },
        // { item: "", src: p9, pcs: "2kg", price: "$2.30" },
        // { item: "", src: p10, pcs: "2kg", price: "$2.30" },
        // { item: "", src: p11, pcs: "2kg", price: "$2.30" },
        // { item: "", src: p12, pcs: "2kg", price: "$2.30" },
        // { item: "", src: p13, pcs: "2kg", price: "$2.30" },
        // { item: "", src: p14, pcs: "2kg", price: "$2.30" },
        // { item: "", src: p15, pcs: "2kg", price: "$2.30" },
        

     


    ]
    return (
        <div style={{
            maxWidth: 1300,
            margin: '0 auto'
        }}>
            <CategoryHeading category="Whole Spices" img={dals} />
            <hr />
            <CollectionItems collection={collection} />
        </div >
    )
}