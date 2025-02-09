import React from "react";
import { CategoryHeading } from "../categoryHeading";
import Cannedtins from "../../../Images/catgory/Canned-Tins.png";




import p1 from "../../../Images/Canned Tins/p1ktc-canned-alphonso-mango-slice.png";
import P2 from "../../../Images/Canned Tins/p2ktc-canned-boiled-chick-peas.png";
import p3 from "../../../Images/Canned Tins/p3ktc-canned-boiled-kala-chana.png";
import p4 from "../../../Images/Canned Tins/p4ktc-canned-chopped-tomatoes.png";
import p5 from "../../../Images/Canned Tins/p5ktc-canned-coconut-milk.png";
import p6 from "../../../Images/Canned Tins/p6ktc-canned-kesar-mango-pulp.png";
import p7 from "../../../Images/Canned Tins/p7ktc-canned-light-coconut-milk.png";
import p8 from "../../../Images/Canned Tins/p8ktc-canned-red-kidney-beans.png";
import p9 from "../../../Images/Canned Tins/p9ktc-canned-rosecoco-beans.png";   
import p10 from "../../../Images/Canned Tins/p10ktc-canned-white-kidney-beans.png";
import p11 from "../../../Images/Canned Tins/p11cerelac-canned-baby-cereal-honey.png";
import p12 from "../../../Images/Canned Tins/p12cerelac-canned-baby-cereal.png";
import p13 from "../../../Images/Canned Tins/p13cerelac-canned-baby-cereal.png";
import p14 from "../../../Images/Canned Tins/p14del-monte-canned-fruit-cocktail-in-juice.png";
import p15 from "../../../Images/Canned Tins/p15del-monte-canned-fruit-cocktail.png";




import { CollectionItems } from "../collectionItems";

export const CannedtinsItems = () => {
    const collection = [
      

        { item: "ktc-canned-alphonso-mango-slice", src: p1, pcs: "2kg", price: "$2.30" },
        { item: "ktc-canned-boiled-chick-peas", src: P2, pcs: "2kg", price: "$2.30" },
        { item: "ktc-canned-boiled-kala-chana", src: p3, pcs: "2kg", price: "$2.30" },
        { item: "ktc-canned-chopped-tomatoes", src: p4, pcs: "2kg", price: "$2.30" },
        { item: "ktc-canned-coconut-milk", src: p5, pcs: "2kg", price: "$2.30" },
        { item: "ktc-canned-kesar-mango-pulp", src: p6, pcs: "2kg", price: "$2.30" },
        { item: "ktc-canned-light-coconut-milk", src: p7, pcs: "2kg", price: "$2.30" },
        { item: "ktc-canned-red-kidney-beans", src: p8, pcs: "2kg", price: "$2.30" },
        { item: "ktc-canned-rosecoco-beans", src: p9, pcs: "2kg", price: "$2.30" },
        { item: "ktc-canned-white-kidney-beans", src: p10, pcs: "2kg", price: "$2.30" },
        { item: "cerelac-canned-baby-cereal-honey", src: p11, pcs: "2kg", price: "$2.30" },
        { item: "cerelac-canned-baby-cereal", src: p12, pcs: "2kg", price: "$2.30" },
        { item: "cerelac-canned-baby-cereal", src: p13, pcs: "2kg", price: "$2.30" },
        { item: "del-monte-canned-fruit-cocktail-in-juice", src: p14, pcs: "2kg", price: "$2.30" },
        { item: "del-monte-canned-fruit-cocktail", src: p15, pcs: "2kg", price: "$2.30" },
        

     


    ]
    return (
        <div style={{
            maxWidth: 1300,
            margin: '0 auto'
        }}>
            <CategoryHeading category="Cannedtins" img={Cannedtins} />
            <hr />
            <CollectionItems collection={collection} />
        </div >
    )
}