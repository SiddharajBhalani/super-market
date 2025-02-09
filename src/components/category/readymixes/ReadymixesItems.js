import React from "react";
import { CategoryHeading } from "../categoryHeading";
import Readymixes from "../../../Images/catgory/Ready-Mixes.png";



import p1 from "../../../Images/Ready Mixes/p1gits dahi vada instant mix.png";
import P2 from "../../../Images/Ready Mixes/p2gits-dosa-instant-mix.png";
import p3 from "../../../Images/Ready Mixes/p3Gits Gulab Jamun Mix.png";
import p4 from "../../../Images/Ready Mixes/p4gits-handvo-instant-mix.png";
import p5 from "../../../Images/Ready Mixes/p5gits idli rava instant mix.png";
import p6 from "../../../Images/Ready Mixes/p6gits khaman dhokla instant mix.png";
import p7 from "../../../Images/Ready Mixes/p7gits khatta dhokla instant mix.png";
import p8 from "../../../Images/Ready Mixes/p8gits-moong dall-vada instant mix.png";
import p9 from "../../../Images/Ready Mixes/p9gits nylon khaman instant mix.png";   
import p10 from "../../../Images/Ready Mixes/p10gits rava dosai instant mix.png";
import p11 from "../../../Images/Ready Mixes/p11gits idli instant mix.png";
import p12 from "../../../Images/Household/p12raid fly and wasp killer.png";
import p13 from "../../../Images/Household/p13top op tapioca starch.png";
import p14 from "../../../Images/Ready Mixes/p14gits uttappam instant mix.png";
import p15 from "../../../Images/Ready Mixes/p15gits vadai medu instant mix.png";



// import p1 from "../../../Images/";
// import P2 from "../../../Images/";
// import p3 from "../../../Images/";
// import p4 from "../../../Images/";
// import p5 from "../../../Images/";
// import p6 from "../../../Images/";
// import p7 from "../../../Images/";
// import p8 from "../../../Images/";
// import p9 from "../../../Images/";   
// import p10 from "../../../Images";
// import p11 from "../../../Images/";
// import p12 from "../../../Images/";
// import p13 from "../../../Images/";
// import p14 from "../../../Images/";
// import p15 from "../../../Images/";




import { CollectionItems } from "../collectionItems";

export const ReadymixesItems = () => {
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
            <CategoryHeading category="Readymixes" img={Readymixes} />
            <hr />
            <CollectionItems collection={collection} />
        </div >
    )
}