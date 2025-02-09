import React from "react";
import { CategoryHeading } from "../categoryHeading";
import dals from "../../../Images/catgory/Dals-and-Beans.png";

import Gungo from "../../../Images/dals/p1Variety Gungo Peas.png";
import BlackEyeBeans from "../../../Images/dals/p2Variety Black Eye Beans.png";
import BrownLentils from "../../../Images/dals/p3Variety Brown Lentils.png";
import ButterBeans from "../../../Images/dals/p4Variety Butter Beans.png";
import ChanaDal from "../../../Images/dals/p5Variety Chana Dal.png";
import ChickPeas from "../../../Images/dals/p6Variety Chick Peas.png";
import DryToorDal from "../../../Images/dals/p7Variety Dry Toor Dal.png";
import GreenLentils from "../../../Images/dals/p8Variety Green Lentils.png";
import KalaChana from "../../../Images/dals/p9Variety Kala Chana.png";
import KodoMillet from "../../../Images/dals/p10Variety Kodo Millet.png";
import Kodri from "../../../Images/dals/p11Variety Kodri.png";
import LargeMoongBeans from "../../../Images/dals/p12Variety Large Moong Beans.png";
import MixedDal from "../../../Images/dals/p13Variety Mixed Dal.png";
import  MothBeans from "../../../Images/dals/p14Variety Moth Beans.pmg.webp";
import PoppingPopcorn from "../../../Images/dals/p15Variety Popping Popcorn.png";



import { CollectionItems } from "../collectionItems";

export const DalsItems = () => {
    const collection = [
      
        { item: "Gungo Peas", src: Gungo, pcs: "2kg", price: "$2.30" },
        { item: "Black Eye Beans", src: BlackEyeBeans, pcs: "2kg", price: "$2.30" },

        { item: "Brown Lentils", src: BrownLentils, pcs: "2kg", price: "$2.30" },
        { item: "Butter Beans", src: ButterBeans, pcs: "2kg", price: "$2.30" },
        { item: " Chana Dal", src:  ChanaDal, pcs: "2kg", price: "$2.30" },
        { item: "Chick Peas", src: ChickPeas, pcs: "2kg", price: "$2.30" },
        { item: "Dry Toor Dal", src: DryToorDal, pcs: "2kg", price: "$2.30" },
        { item: "Green Lentils", src: GreenLentils, pcs: "2kg", price: "$2.30" },
        { item: "Kala Chana", src: KalaChana, pcs: "2kg", price: "$2.30" },
        { item: " Kodo Millet", src: KodoMillet, pcs: "2kg", price: "$2.30" },
        { item: "Kodri", src: Kodri, pcs: "2kg", price: "$2.30" },
        { item: "Large Moong Beans", src: LargeMoongBeans, pcs: "2kg", price: "$2.30" },
        { item: "Mixed Dal", src: MixedDal, pcs: "2kg", price: "$2.30" },
        { item: " Moth Beans", src:  MothBeans, pcs: "2kg", price: "$2.30" },
        { item: "Popping Popcorn", src: PoppingPopcorn, pcs: "2kg", price: "$2.30" },



    ]
    return (
        <div style={{
            maxWidth: 1300,
            margin: '0 auto'
        }}>
            <CategoryHeading category="Dals&Beans" img={dals} />
            <hr />
            <CollectionItems collection={collection} />
        </div >
    )
}