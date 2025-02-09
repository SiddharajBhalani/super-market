import React from "react";
import { CategoryHeading } from "../categoryHeading";
import Flours from "../../../Images/catgory/Flours.png";
import Flour from "../../../Images/flour/p1Aashirvaad Chakki Atta.png";
import AashirvaadMultigrainChapattiFlour from "../../../Images/flour/p2Aashirvaad Multigrain Chapatti Flour.png";
import AashirvaadWholeWheatFlour from "../../../Images/flour/p3Aashirvaad Whole Wheat Flour.png";
import AlNoorCornFlour from "../../../Images/flour/p4Al Noor Corn Flour.png";
import BombayChatkazCoarseLapsi from "../../../Images/flour/p5Bombay Chatkaz Coarse Lapsi.png";
import p6 from "../../../Images/flour/p6Bombay Chatkaz Fine Semolina.png";
import p7 from "../../../Images/flour/p7Bombay Chatkaz Milk Powder.png";
import p8 from "../../../Images/flour/p8Brown & Polson Corn Flour.png";
import p9 from "../../../Images/flour/p9Champion No.1 Light Atta.png";
import p10 from "../../../Images/flour/p10East End Gold Chakki Aata.png";
import p11 from "../../../Images/flour/p11Elephant Fine White Chapatti Flour.png";
import p12 from "../../../Images/flour/p12Elephant Medium Chapatti Flour.png";
import p13 from "../../../Images/flour/p13Eurostar Gluten Free Medium Brown Chapatti Flour.png";
import p14 from "../../../Images/flour/p14Ferrero Medium Couscous.png";
import p15 from "../../../Images/flour/p15Heera Gram Flour.png";

import { CollectionItems } from "../collectionItems";

export const FlourItems = () => {
    const collection = [
        //{ item: " Paratha", src: Flour, pcs: "4pcs", price: "$6" },
        { item: "Aashirvaad Chakki Atta", src: Flour, pcs: "4pcs", price: "$2.30" },
        { item: "Aashirvaad Multigrain Chapatti Flour", src: AashirvaadMultigrainChapattiFlour, pcs: "4pcs", price: "$2.30" },
        { item: "Aashirvaad Whole Wheat Flour", src: AashirvaadWholeWheatFlour, pcs: "4pcs", price: "$2.30" },
        { item: "Al Noor Corn Flour", src: AlNoorCornFlour, pcs: "4pcs", price: "$2.30" },
        { item: "Bombay Chatkaz Coarse Lapsi", src: BombayChatkazCoarseLapsi, pcs: "4pcs", price: "$2.30" },
        { item: "Bombay Chatkaz Fine Semolina", src: p6, pcs: "4pcs", price: "$2.30" },
        { item: "Bombay Chatkaz Milk Powder", src: p7, pcs: "4pcs", price: "$2.30" },
        { item: "Brown & Polson Corn Flour", src: p8, pcs: "4pcs", price: "$2.30" },
        { item: "Champion No.1 Light Atta", src: p9, pcs: "4pcs", price: "$2.30" },
        { item: "East End Gold Chakki Aata", src: p10, pcs: "4pcs", price: "$2.30" },
        { item: "Elephant Fine White Chapatti Flour", src: p11, pcs: "4pcs", price: "$2.30" },
        { item: "Elephant Medium Chapatti Flour", src: p12, pcs: "4pcs", price: "$2.30" },
        { item: "Eurostar Gluten Free Medium Brown Chapatti Flour", src: p13, pcs: "4pcs", price: "$2.30" },
        { item: "Ferrero Medium Couscous", src: p14, pcs: "4pcs", price: "$2.30" },
        { item: "Heera Gram Flour", src: p15, pcs: "4pcs", price: "$2.30" },
    ]
    return (
        <div style={{
            maxWidth: 1300,
            margin: '0 auto'
        }}>
            <CategoryHeading category="Frours" img={Flours} />
            <hr />
            <CollectionItems collection={collection} />
        </div >
    )
}