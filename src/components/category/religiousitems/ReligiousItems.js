import React from "react";
import { CategoryHeading } from "../categoryHeading";
import ReligiousItems from "../../../Images/catgory/Religious-Items.png";






import p1 from "../../../Images/Religious-Items/p1variety-hawan-lakda.png";
import P2 from "../../../Images/Religious-Items/p2krishan-apple-cinnamon-incense.png";
import p3 from "../../../Images/Religious-Items/p3krishan-chandan-incense.png";
import p4 from "../../../Images/Religious-Items/p4krishan-jasmine-incense.png";
import p5 from "../../../Images/Religious-Items/p5krishan-lily-of-valley-floral-aroma-incense.png";
import p6 from "../../../Images/Religious-Items/p6krishan-musk-incense.png";
import p7 from "../../../Images/Religious-Items/p7krishan-prabhu-darshan-incense.png.png";
import p8 from "../../../Images/Religious-Items/p8krishan-lily-of-valley-floral-aroma-incense.png";
import p9 from "../../../Images/Religious-Items/p9krishan-musk-incense.png";   
import p10 from "../../../Images/Religious-Items/p10krishan-prabhu-darshan-incense.png";
import p11 from "../../../Images/Religious-Items/p11gsd-matches.png";
import p12 from "../../../Images/Religious-Items/p12krishna-cinnamon-incense.png";
import p13 from "../../../Images/Religious-Items/p13satya-champa-incense.png";
import p14 from "../../../Images/Religious-Items/p14satya-jasmine-blossom-incense.png.webp";
import p15 from "../../../Images/Religious-Items/p15satya-musk-incense.png";




import { CollectionItems } from "../collectionItems";

export const ReligiousItemsItems = () => {
    const collection = [
      

        { item: "variety-hawan-lakda", src: p1, pcs: "2kg", price: "$2.30" },
        { item: "krishan-apple-cinnamon-incense", src: P2, pcs: "2kg", price: "$2.30" },
        { item: "krishan-chandan-incense", src: p3, pcs: "2kg", price: "$2.30" },
        { item: "krishan-jasmine-incense", src: p4, pcs: "2kg", price: "$2.30" },
        { item: "krishan-lily-of-valley-floral-aroma-incense", src: p5, pcs: "2kg", price: "$2.30" },
        { item: "krishan-musk-incense", src: p6, pcs: "2kg", price: "$2.30" },
        { item: "krishan-prabhu-darshan-incense", src: p7, pcs: "2kg", price: "$2.30" },
        { item: "krishan-lily-of-valley-floral-aroma-incense", src: p8, pcs: "2kg", price: "$2.30" },
        { item: "krishan-musk-incense", src: p9, pcs: "2kg", price: "$2.30" },
        { item: "krishan-prabhu-darshan-incense", src: p10, pcs: "2kg", price: "$2.30" },
        { item: "gsd-matches", src: p11, pcs: "2kg", price: "$2.30" },
        { item: "krishna-cinnamon-incense", src: p12, pcs: "2kg", price: "$2.30" },
        { item: "satya-champa-incense", src: p13, pcs: "2kg", price: "$2.30" },
        { item: "satya-jasmine-blossom-incense", src: p14, pcs: "2kg", price: "$2.30" },
        { item: "satya-musk-incense", src: p15, pcs: "2kg", price: "$2.30" },
        

     


    ]
    return (
        <div style={{
            maxWidth: 1300,
            margin: '0 auto'
        }}>
            <CategoryHeading category="Religious-Items" img={ReligiousItems} />
            <hr />
            <CollectionItems collection={collection} />
        </div >
    )
}