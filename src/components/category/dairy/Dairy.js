import React from "react";
import { CategoryHeading } from "../categoryHeading";
import Dairy from "../../../Images/catgory/Dairy.png";






import p1 from "../../../Images/dariy/p1amul-butter.png";
import P2 from "../../../Images/dariy/p1amul-butter.png.webp";
import p3 from "../../../Images/dariy/p3Amul Processed Cheese.png";
import p4 from "../../../Images/dariy/p4dairy-valley-paneer-block.png";
import p5 from "../../../Images/dariy/p5east-end-vegetable-margarine.png";
import p6 from "../../../Images/dariy/p6home-ville-paneer-block.png";
import p7 from "../../../Images/dariy/p7home-ville-paneer-cubes.png";
import p8 from "../../../Images/dariy/p8variety-khoya-mawa.png";


import { CollectionItems } from "../collectionItems";

export const DairyItems = () => {
    const collection = [
      

        { item: "amul-butter", src: p1, pcs: "2kg", price: "$2.30" },
        { item: "amul-butter", src: P2, pcs: "2kg", price: "$2.30" },
        { item: "Amul Processed Cheese", src: p3, pcs: "2kg", price: "$2.30" },
        { item: "dairy-valley-paneer-block", src: p4, pcs: "2kg", price: "$2.30" },
        { item: "east-end-vegetable-margarine", src: p5, pcs: "2kg", price: "$2.30" },
        { item: "home-ville-paneer-block", src: p6, pcs: "2kg", price: "$2.30" },
        { item: "home-ville-paneer-cubes", src: p7, pcs: "2kg", price: "$2.30" },
        { item: "variety-khoya-mawa", src: p8, pcs: "2kg", price: "$2.30" },
     

    ]
    return (
        <div style={{
            maxWidth: 1300,
            margin: '0 auto'
        }}>
            <CategoryHeading category="Dairy" img={Dairy} />
            <hr />
            <CollectionItems collection={collection} />
        </div >
    )
}