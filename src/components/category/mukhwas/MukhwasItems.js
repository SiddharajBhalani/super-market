import React from "react";
import { CategoryHeading } from "../categoryHeading";
import Mukhwas from "../../../Images/catgory/Mukhwas.png";




import p1 from "../../../Images/Mukhwas/p1bombay-chatkaz-chatpati-candy.png";
import P2 from "../../../Images/Mukhwas/p2bombay-chatkaz-kaccha-aam-candy.png";
import p3 from "../../../Images/Mukhwas/p3bombay-chatkaz-orange-candy.png";
import p4 from "../../../Images/Mukhwas/p4bombay-chatkaz-paan-candy.png";
import p5 from "../../../Images/Mukhwas/p5candy-land-amrood-masala-candy.png";
import p6 from "../../../Images/Mukhwas/p6candy-land-imli-candy.png";
import p7 from "../../../Images/Mukhwas/p7hilal-khopra-candy.png";
import p8 from "../../../Images/Mukhwas/p8hilal-paan-pasand-candy.png";
import p9 from "../../../Images/Mukhwas/p9jaimin-kaccha-aam-candy.png";   
import p10 from "../../../Images/Mukhwas/p10mehar-dil-paan-candy.png";
import p11 from "../../../Images/Mukhwas/p11mehar-mix-fruit-candy.png";
import p12 from "../../../Images/Mukhwas/p12pran-hot-sour-mango-bar.png";
import p13 from "../../../Images/Mukhwas/p13pran-mango-bar.png";
import p14 from "../../../Images/Mukhwas/p14top-op-apple-murabba.png";
import p15 from "../../../Images/Mukhwas/p15top-op-carrot-murabba.png";




import { CollectionItems } from "../collectionItems";

export const MukhwasItems = () => {
    const collection = [
      

        { item: "chatkaz-chatpati-candy", src: p1, pcs: "2kg", price: "$2.30" },
        { item: "chatkaz-kaccha-aam-candy", src: P2, pcs: "2kg", price: "$2.30" },
        { item: "chatkaz-orange-candy", src: p3, pcs: "2kg", price: "$2.30" },
        { item: "paan-candy", src: p4, pcs: "2kg", price: "$2.30" },
        { item: "candy-amrood-masala-candy", src: p5, pcs: "2kg", price: "$2.30" },
        { item: "candy-imli-candy", src: p6, pcs: "2kg", price: "$2.30" },
        { item: "hilal-khopra-candy", src: p7, pcs: "2kg", price: "$2.30" },
        { item: "hilal-paan-pasand-candy", src: p8, pcs: "2kg", price: "$2.30" },
        { item: "jaimin-kaccha-aam-candy", src: p9, pcs: "2kg", price: "$2.30" },
        { item: "mehar-dil-paan-candy", src: p10, pcs: "2kg", price: "$2.30" },
        { item: "mehar-mix-fruit-candy", src: p11, pcs: "2kg", price: "$2.30" },
        { item: "pran-hot-sour-mango-bar", src: p12, pcs: "2kg", price: "$2.30" },
        { item: "pran-mango-bar", src: p13, pcs: "2kg", price: "$2.30" },
        { item: "top-op-apple-murabba", src: p14, pcs: "2kg", price: "$2.30" },
        { item: "top-op-carrot-murabba", src: p15, pcs: "2kg", price: "$2.30" },
        

     


    ]
    return (
        <div style={{
            maxWidth: 1300,
            margin: '0 auto'
        }}>
            <CategoryHeading category="Mukhwas" img={Mukhwas} />
            <hr />
            <CollectionItems collection={collection} />
        </div >
    )
}