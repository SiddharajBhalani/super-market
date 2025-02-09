import React from "react";
import { CategoryHeading } from "../categoryHeading";
import Snacks from "../../../Images/catgory/Indian-Snacks.png";


import p1 from "../../../Images/Snacks/p1balaji-aloo-sev.png";
import P2 from "../../../Images/Snacks/p2balaji-bhel-mix.png";
import p3 from "../../../Images/Snacks/p3balaji-chana-jor-garam.png";
import p4 from "../../../Images/Snacks/p4balaji-chat-chaska-wafers.png";
import p5 from "../../../Images/Snacks/p5balaji-classic-sev.png";
import p6 from "../../../Images/Snacks/p6balaji-farari-chevda.png";
import p7 from "../../../Images/Snacks/p7balaji-gathiya.png";
import p8 from "../../../Images/Snacks/p8balaji-masala-pop-rings.png";
import p9 from "../../../Images/Snacks/p9balaji-masala-sev-mamra.png";   
import p10 from "../../../Images/Snacks/p10balaji-masala-wafers.png";
import p11 from "../../../Images/Snacks/p11balaji-masala-wheels.png";
import p12 from "../../../Images/Snacks/p12balaji-ratlami-sev.png";
import p13 from "../../../Images/Snacks/p13balaji-pudina-wafers.png";
import p14 from "../../../Images/Snacks/p14balaji-tomato-wafers.png";
import p15 from "../../../Images/Snacks/p15balaji-snack-chana-dal.png";




import { CollectionItems } from "../collectionItems";

export const SnacksItems = () => {
    const collection = [
      

        { item: "balaji-aloo-sev", src: p1, pcs: "2kg", price: "$2.30" },
        { item: "balaji-bhel-mix", src: P2, pcs: "2kg", price: "$2.30" },
        { item: "balaji-chana-jor-garam", src: p3, pcs: "2kg", price: "$2.30" },
        { item: "balaji-chat-chaska-wafers", src: p4, pcs: "2kg", price: "$2.30" },
        { item: "balaji-classic-sev", src: p5, pcs: "2kg", price: "$2.30" },
        { item: "balaji-farari-chevda", src: p6, pcs: "2kg", price: "$2.30" },
        { item: "balaji-gathiya", src: p7, pcs: "2kg", price: "$2.30" },
        { item: "balaji-masala-pop-rings", src: p8, pcs: "2kg", price: "$2.30" },
        { item: "balaji-masala-sev-mamra", src: p9, pcs: "2kg", price: "$2.30" },
        { item: "balaji-masala-wafers", src: p10, pcs: "2kg", price: "$2.30" },
        { item: "balaji-masala-wheels", src: p11, pcs: "2kg", price: "$2.30" },
        { item: "balaji-ratlami-sev", src: p12, pcs: "2kg", price: "$2.30" },
        { item: "balaji-pudina-wafers", src: p13, pcs: "2kg", price: "$2.30" },
        { item: "balaji-tomato-wafers", src: p14, pcs: "2kg", price: "$2.30" },
        { item: "balaji-snack-chana-dal", src: p15, pcs: "2kg", price: "$2.30" },
        

     


    ]
    return (
        <div style={{
            maxWidth: 1300,
            margin: '0 auto'
        }}>
            <CategoryHeading category="Snacks" img={Snacks} />
            <hr />
            <CollectionItems collection={collection} />
        </div >
    )
}