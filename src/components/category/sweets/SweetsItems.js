import React from "react";
import { CategoryHeading } from "../categoryHeading";
import Sweets from "../../../Images/catgory/Sweets.png";







import p1 from "../../../Images/Sweets/p1haldirams-dry-petha.png";
import P2 from "../../../Images/Sweets/p2Haldirams Kaju Katli.png";
import p3 from "../../../Images/Sweets/p3Haldirams Kaju Katli.png";
import p4 from "../../../Images/Sweets/p4Haldirams Peda.png";
import p5 from "../../../Images/Sweets/p5Haldirams Rasmalai.png";
import p6 from "../../../Images/Sweets/p6Jaimin Elaichi Soan Papdi.png";
import p7 from "../../../Images/Sweets/p7alamgeer-rewari.png";
import p8 from "../../../Images/Sweets/p8Jaimin Kesar Soan Papdi.png";
import p9 from "../../../Images/Sweets/p9Royal Gajar Halwa.png";   
import p10 from "../../../Images/Sweets/p10Royal Rasgulla.png";
import p11 from "../../../Images/Sweets/p11Royal Rasmalai.png";
import p12 from "../../../Images/Sweets/p12Laziza Almond Rasmalai.png";
import p13 from "../../../Images/Sweets/p13Taaza Gulab Jamun.png";
import p14 from "../../../Images/Sweets/p14Bombay Chatkaz Gud Revdi.png";
import p15 from "../../../Images/Sweets/p15Taaza Kala Jam.png";




import { CollectionItems } from "../collectionItems";

export const SweetsItems = () => {
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
            <CategoryHeading category="Sweets" img={Sweets} />
            <hr />
            <CollectionItems collection={collection} />
        </div >
    )
}