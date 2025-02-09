import React from "react";
import { CategoryHeading } from "../categoryHeading";
import dals from "../../../Images/catgory/Ghee-and-Oils.png";

import p1 from "../../../Images/Ghee & Oils/p1natco edible almond oil.png";
import p2 from "../../../Images/Ghee & Oils/p2natco ghee.png";
import p3 from "../../../Images/Ghee & Oils/p3natco olive pomace oil blend.png";
import p4 from "../../../Images/Ghee & Oils/p4natco pomace oil blend.png";
import p5 from "../../../Images/Ghee & Oils/p5natco pure ghee.png";
import p6 from "../../../Images/Ghee & Oils/p6natco pure groundnut oil.png";
import p7 from "../../../Images/Ghee & Oils/p7natco pure linseed oil.png";
import p8 from "../../../Images/Ghee & Oils/p8natco pure olive pomace oil.png";
import p9 from "../../../Images/Ghee & Oils/p9natco sesame oil.png";
import p10 from "../../../Images/Ghee & Oils/p10amul cow ghee.png";
import p11 from "../../../Images/Ghee & Oils/p11amul ghee.png";
import p12 from "../../../Images/Ghee & Oils/p12ktc virgin coconut oil.png";
import p13 from "../../../Images/Ghee & Oils/p13ktc pure olive pomace oil.png";
import p14 from "../../../Images/Ghee & Oils/p14ktc rapeseed oil.png";
import p15 from "../../../Images/Ghee & Oils/p15ktc pure linseed oil.png";
      





import { CollectionItems } from "../collectionItems";

export const GheeoilsItems = () => {
    const collection = [
      
        { item: "natco edible almond oil", src: p1, pcs: "2kg", price: "$2.30" },
        { item: "natco ghee", src: p2, pcs: "2kg", price: "$2.30" },
        { item: "natco olive pomace oil blend", src: p3, pcs: "2kg", price: "$2.30" },
        { item: "natco pomace oil blend", src: p4, pcs: "2kg", price: "$2.30" },
        { item: "natco pure ghee", src: p5, pcs: "2kg", price: "$2.30" },
        { item: "natco pure groundnut oil", src: p6, pcs: "2kg", price: "$2.30" },
        { item: "natco pure linseed oil", src: p7, pcs: "2kg", price: "$2.30" },
        { item: "natco pure olive pomace oil", src: p8, pcs: "2kg", price: "$2.30" },
        { item: "natco sesame oil", src: p9, pcs: "2kg", price: "$2.30" },
        { item: "amul cow ghee", src: p10, pcs: "2kg", price: "$2.30" },
        { item: "amul ghee", src: p11, pcs: "2kg", price: "$2.30" },
        { item: "ktc virgin coconut oil", src: p12, pcs: "2kg", price: "$2.30" },
        { item: "ktc pure olive pomace oil", src: p13, pcs: "2kg", price: "$2.30" },
        { item: "ktc rapeseed oil", src: p14, pcs: "2kg", price: "$2.30" },
        { item: "ktc pure linseed oil", src: p15, pcs: "2kg", price: "$2.30" },

     



    ]
    return (
        <div style={{
            maxWidth: 1300,
            margin: '0 auto'
        }}>
            <CategoryHeading category="Ghee & Oils" img={dals} />
            <hr />
            <CollectionItems collection={collection} />
        </div >
    )
}