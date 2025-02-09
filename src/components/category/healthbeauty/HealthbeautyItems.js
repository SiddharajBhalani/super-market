import React from "react";
import { CategoryHeading } from "../categoryHeading";
import Healthbeauty from "../../../Images/catgory/Health-and-Beauty.png";


import p1 from "../../../Images/Health & Beauty/p1himalaya-aloe-vera-face-wash.png";
import P2 from "../../../Images/Health & Beauty/p2himalaya-apricot-face-scrub.png";
import p3 from "../../../Images/Health & Beauty/p3himalaya-kesar-face-cream.png";
import p4 from "../../../Images/Health & Beauty/p4himalaya-neem-face-scrub.png";
import p5 from "../../../Images/Health & Beauty/p5himalaya-neem-face-wash.png";
import p6 from "../../../Images/Health & Beauty/p6himalaya-sandal-soap.png";
import p7 from "../../../Images/Health & Beauty/p7ayumi-arjuna-powder.png";
import p8 from "../../../Images/Health & Beauty/p8ayumi-ashwagandha-powder.png";
import p9 from "../../../Images/Health & Beauty/p9ayumi-bhringraj-powder.png";   
import p10 from "../../../Images/Health & Beauty/p10ayumi-bio-active-repair-hair-oil.png";
import p11 from "../../../Images/Health & Beauty/p11ayumi-brahmi-powder.png";
import p12 from "../../../Images/Health & Beauty/p12ayumi-glycerine.png";
import p13 from "../../../Images/Health & Beauty/p13ayumi-gokshura-powder.png";
import p14 from "../../../Images/Health & Beauty/p14ayumi-harde-churna.png";
import p15 from "../../../Images/Health & Beauty/p15ayumi-intensive-hair-conditioning-treatment.png";




import { CollectionItems } from "../collectionItems";

export const HealthbeautyItems = () => {
    const collection = [
      

        { item: "himalaya-aloe-vera-face-wash", src: p1, pcs: "2kg", price: "$2.30" },
        { item: "himalaya-apricot-face-scrub", src: P2, pcs: "2kg", price: "$2.30" },
        { item: "himalaya-kesar-face-cream", src: p3, pcs: "2kg", price: "$2.30" },
        { item: "himalaya-neem-face-scrub", src: p4, pcs: "2kg", price: "$2.30" },
        { item: "himalaya-neem-face-wash", src: p5, pcs: "2kg", price: "$2.30" },
        { item: "himalaya-sandal-soap", src: p6, pcs: "2kg", price: "$2.30" },
        { item: "ayumi-arjuna-powder", src: p7, pcs: "2kg", price: "$2.30" },
        { item: "ayumi-ashwagandha-powder", src: p8, pcs: "2kg", price: "$2.30" },
        { item: "ayumi-bhringraj-powder", src: p9, pcs: "2kg", price: "$2.30" },
        { item: "ayumi-bio-active-repair-hair-oil", src: p10, pcs: "2kg", price: "$2.30" },
        { item: "ayumi-brahmi-powder", src: p11, pcs: "2kg", price: "$2.30" },
        { item: "ayumi-glycerine", src: p12, pcs: "2kg", price: "$2.30" },
        { item: "ayumi-gokshura-powder", src: p13, pcs: "2kg", price: "$2.30" },
        { item: "ayumi-harde-churna", src: p14, pcs: "2kg", price: "$2.30" },
        { item: "ayumi-intensive-hair-conditioning", src: p15, pcs: "2kg", price: "$2.30" },
        

     


    ]
    return (
        <div style={{
            maxWidth: 1300,
            margin: '0 auto'
        }}>
            <CategoryHeading category="Healthbeauty" img={Healthbeauty} />
            <hr />
            <CollectionItems collection={collection} />
        </div >
    )
}