import React from "react";
import { CategoryHeading } from "../categoryHeading";
import Pickles from "../../../Images/catgory/Pickles.png";




import p1 from "../../../Images/Pickles/p1ahmed amla murabba.png";
import P2 from "../../../Images/Pickles/p2ahmed chilli pickle.png";
import p3 from "../../../Images/Pickles/p3ahmed extra hot mango pickle.png";
import p4 from "../../../Images/Pickles/p4ahmed garlic pickle.png";
import p5 from "../../../Images/Pickles/p5ahmed harda in sugar syrup.png";
import p6 from "../../../Images/Pickles/p6ahmed hyderabadi mango pickle.png";
import p7 from "../../../Images/Pickles/p7ahmed hyderabadi mixed pickle.png";
import p8 from "../../../Images/Pickles/p8ahmed foods hyderabadi mixed pickle.png";
import p9 from "../../../Images/Pickles/p9ahmed-lime-pickle.png";   
import p10 from "../../../Images/Pickles/p10ahmed mango pickle.png";
import p11 from "../../../Images/Pickles/p11ahmed foods mango pickle.png";
import p12 from "../../../Images/Pickles/p12ahmed mixed pickle.png";
import p13 from "../../../Images/Pickles/p13ashoka brinjal pickle.png";
import p14 from "../../../Images/Pickles/p14ashoka chhundo pickle.png";
import p15 from "../../../Images/Pickles/p15ashoka chilli pickle.png";




import { CollectionItems } from "../collectionItems";

export const PicklesItems = () => {
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
            <CategoryHeading category="Pickles" img={Pickles} />
            <hr />
            <CollectionItems collection={collection} />
        </div >
    )
}