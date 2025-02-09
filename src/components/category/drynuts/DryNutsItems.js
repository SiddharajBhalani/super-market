import React from "react";
import { CategoryHeading } from "../categoryHeading";
import DryNuts from "../../../Images/catgory/Dry-Fruits.png";

import p1 from "../../../Images/drynuts/p1Alamgeer Munakka.png";
import p2 from "../../../Images/drynuts/p2Alamgeer Tara Mera Seeds.png";
import p3 from "../../../Images/drynuts/p3Alamgeer Whole Anab.png";
import p4 from "../../../Images/drynuts/p4Bombay Chatkaz Almonds.png";
import p5 from "../../../Images/drynuts/p5Variety Black Sesame Seeds.png";
import p6 from "../../../Images/drynuts/p6Variety Almonds.png";
import p7 from "../../../Images/drynuts/p7Variety Blanched Peanuts.png";
import p8 from "../../../Images/drynuts/p8Variety Cashew Nuts.png";
import p9 from "../../../Images/drynuts/p9Variety Dry Dates.png";
import p10 from "../../../Images/drynuts/p10Variety Golden Raisins.png";
import p11 from "../../../Images/drynuts/p11Variety Jumbo Pistachio.png";
import p12 from "../../../Images/drynuts/p12Variety Lin Seeds.png";
import p13 from "../../../Images/drynuts/p13Variety Natural Sesame Seeds.png";
import p14 from "../../../Images/drynuts/p14Variety Green Sultana.png";
import p15 from "../../../Images/drynuts/p15Variety Golden Sultana.png";





import { CollectionItems } from "../collectionItems";

export const DryItems = () => {
    const collection = [
      
       
     
        { item: "Alamgeer Munakka", src: p1, pcs: "2kg", price: "$2.30" },
        { item: "Alamgeer Tara Mera Seeds", src: p2, pcs: "2kg", price: "$2.30" },
        { item: "Alamgeer Whole Anab", src: p3, pcs: "2kg", price: "$2.30" },
        { item: "Bombay Chatkaz Almonds", src: p4, pcs: "2kg", price: "$2.30" },
        { item: "Variety Black Sesame Seeds", src: p5, pcs: "2kg", price: "$2.30" },
        { item: "Variety Almonds", src: p6, pcs: "2kg", price: "$2.30" },
        { item: "Variety Blanched Peanuts", src: p7, pcs: "2kg", price: "$2.30" },
        { item: "Variety Dry Dates", src: p8, pcs: "2kg", price: "$2.30" },
        { item: "Variety Dry Dates", src: p9, pcs: "2kg", price: "$2.30" },
        { item: "Variety Golden Raisins", src: p10, pcs: "2kg", price: "$2.30" },
        { item: "Variety Jumbo Pistachio", src: p11, pcs: "2kg", price: "$2.30" },
        { item: "Variety Lin Seeds", src: p12, pcs: "2kg", price: "$2.30" },
        { item: "Variety Natural Sesame Seeds", src: p13, pcs: "2kg", price: "$2.30" },
        { item: "Variety Green Sultana", src: p14, pcs: "2kg", price: "$2.30" },
        { item: "Variety Golden Sultana", src: p15, pcs: "2kg", price: "$2.30" },






    ]
    return (
        <div style={{
            maxWidth: 1300,
            margin: '0 auto'
        }}>
            <CategoryHeading category="Dry Fruits & Nuts" img={DryNuts} />
            <hr />
            <CollectionItems collection={collection} />
        </div >
    )
}