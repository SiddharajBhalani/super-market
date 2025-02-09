import React from "react";
import { CategoryHeading } from "../categoryHeading";
import Papadfarfar from "../../../Images/catgory/Papad-and-Far-Far.png";







import p1 from "../../../Images/Papadfarfar/p1bombay-chatkaz-coloured-sago.png";
import P2 from "../../../Images/Papadfarfar/p2bombay-chatkaz-far-far-coloured-fans.png";
import p3 from "../../../Images/Papadfarfar/p3bombay-chatkaz-farari-sago-sticks.png";
import p4 from "../../../Images/Papadfarfar/p4bombay-chatkaz-pani-puri.png";
import p5 from "../../../Images/Papadfarfar/p5bombay-chatkaz-green-chilli-papad.png";
import p6 from "../../../Images/Papadfarfar/p6bombay-chatkaz-jali-potato-far-far.png";
import p7 from "../../../Images/Papadfarfar/p7bombay-chatkaz-long-tube-far-far.png";
import p8 from "../../../Images/Papadfarfar/p8bombay-chatkaz-mari-rice-papad.png";
import p9 from "../../../Images/Papadfarfar/p9bombay-chatkaz-methi-rice-papad.png";   
import p10 from "../../../Images/Papadfarfar/p10bombay-chatkaz-rajwadi-rice-papad.png";
import p11 from "../../../Images/Papadfarfar/p11bombay-chatkaz-small-tubes-far-far.png";
import p12 from "../../../Images/Papadfarfar/p12bombay-chatkaz-square-far-far.png";
import p13 from "../../../Images/Papadfarfar/p13kirtiraj-double-mari-punjabi-masala-papad.png";
import p14 from "../../../Images/Papadfarfar/p14kirtiraj-garlic-papad.png";
import p15 from "../../../Images/Papadfarfar/p15kirtiraj-jeera-mari-papad.png";




import { CollectionItems } from "../collectionItems";

export const PapadfarfarItems = () => {
    const collection = [
      

        { item: "bombay-chatkaz-coloured-sago", src: p1, pcs: "2kg", price: "$2.30" },
        { item: "bombay-chatkaz-far-far-coloured-fans", src: P2, pcs: "2kg", price: "$2.30" },
        { item: "bombay-chatkaz-farari-sago-sticks", src: p3, pcs: "2kg", price: "$2.30" },
        { item: "bombay-chatkaz-pani-puri", src: p4, pcs: "2kg", price: "$2.30" },
        { item: "bombay-chatkaz-green-chilli-papad", src: p5, pcs: "2kg", price: "$2.30" },
        { item: "bombay-chatkaz-jali-potato-far-far", src: p6, pcs: "2kg", price: "$2.30" },
        { item: "bombay-chatkaz-long-tube-far-far", src: p7, pcs: "2kg", price: "$2.30" },
        { item: "bombay-chatkaz-mari-rice-papad", src: p8, pcs: "2kg", price: "$2.30" },
        { item: "bombay-chatkaz-methi-rice-papad", src: p9, pcs: "2kg", price: "$2.30" },
        { item: "bombay-chatkaz-rajwadi-rice-papad", src: p10, pcs: "2kg", price: "$2.30" },
        { item: "bombay-chatkaz-small-tubes-far-far", src: p11, pcs: "2kg", price: "$2.30" },
        { item: "bombay-chatkaz-square-far-far", src: p12, pcs: "2kg", price: "$2.30" },
        { item: "kirtiraj-double-mari-punjabi-masala-papad", src: p13, pcs: "2kg", price: "$2.30" },
        { item: "kirtiraj-garlic-papad", src: p14, pcs: "2kg", price: "$2.30" },
        { item: "kirtiraj-jeera-mari-papad", src: p15, pcs: "2kg", price: "$2.30" },
        

     


    ]
    return (
        <div style={{
            maxWidth: 1300,
            margin: '0 auto'
        }}>
            <CategoryHeading category="Papadfarfar" img={Papadfarfar} />
            <hr />
            <CollectionItems collection={collection} />
        </div >
    )
}