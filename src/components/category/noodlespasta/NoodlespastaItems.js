import React from "react";
import { CategoryHeading } from "../categoryHeading";
import Noodlespasta from "../../../Images/catgory/Noodles-and-Pasta.png";






import p1 from "../../../Images/Noodlespasta/p1chings-egg-hakka-noodles.png";
import P2 from "../../../Images/Noodlespasta/p2chings-hot-garlic-noodles.png";
import p3 from "../../../Images/Noodlespasta/p3chings-manchurian-noodles.png";
import p4 from "../../../Images/Noodlespasta/p4chings-schezwan-noodles.png";
import p5 from "../../../Images/Noodlespasta/p5chings-singapore-curry-noodles.png";
import p6 from "../../../Images/Noodlespasta/p6chings-veg-hakka-noodles.png";
import p7 from "../../../Images/Noodlespasta/p7maggi-masala-noodles.png";
import p8 from "../../../Images/Noodlespasta/p8napolina-fusilli.png";
import p9 from "../../../Images/Noodlespasta/p9knorr-chatt-patta-instant-noodles.png";   
import p10 from "../../../Images/Noodlespasta/p10pran-lachcha-semai-pheni.png";
import p11 from "../../../Images/Noodlespasta/p11alamgeer-vermicelli.png";
import p12 from "../../../Images/Noodlespasta/p12bambino-vermicelli.png";
import p13 from "../../../Images/Noodlespasta/p13buitoni-maccheroni.png";
import p14 from "../../../Images/Noodlespasta/p14buldak-hot-chicken-ramen-noodles.png";
import p15 from "../../../Images/Noodlespasta/p15buldak-ramen-cheese-noodles.png";




import { CollectionItems } from "../collectionItems";

export const NoodlespastaItems = () => {
    const collection = [
      

        { item: "chings-egg-hakka-noodles", src: p1, pcs: "2kg", price: "$2.30" },
        { item: "chings-hot-garlic-noodles", src: P2, pcs: "2kg", price: "$2.30" },
        { item: "chings-manchurian-noodles", src: p3, pcs: "2kg", price: "$2.30" },
        { item: "chings-schezwan-noodles", src: p4, pcs: "2kg", price: "$2.30" },
        { item: "chings-singapore-curry-noodles", src: p5, pcs: "2kg", price: "$2.30" },
        { item: "chings-veg-hakka-noodles", src: p6, pcs: "2kg", price: "$2.30" },
        { item: "maggi-masala-noodles", src: p7, pcs: "2kg", price: "$2.30" },
        { item: "napolina-fusilli", src: p8, pcs: "2kg", price: "$2.30" },
        { item: "knorr-chatt-patta-instant-noodles", src: p9, pcs: "2kg", price: "$2.30" },
        { item: "pran-lachcha-semai-pheni", src: p10, pcs: "2kg", price: "$2.30" },
        { item: "alamgeer-vermicelli", src: p11, pcs: "2kg", price: "$2.30" },
        { item: "bambino-vermicelli", src: p12, pcs: "2kg", price: "$2.30" },
        { item: "buitoni-maccheroni", src: p13, pcs: "2kg", price: "$2.30" },
        { item: "buldak-hot-chicken-ramen-noodles", src: p14, pcs: "2kg", price: "$2.30" },
        { item: "buldak-ramen-cheese-noodles", src: p15, pcs: "2kg", price: "$2.30" },
        

     


    ]
    return (
        <div style={{
            maxWidth: 1300,
            margin: '0 auto'
        }}>
            <CategoryHeading category="Noodlespasta" img={Noodlespasta} />
            <hr />
            <CollectionItems collection={collection} />
        </div >
    )
}