import React from "react";
import { CategoryHeading } from "../categoryHeading";
import Rice from "../../../Images/catgory/Rice.png";
import akashbasmatirice from "../../../Images/rice/p1akash basmatirice.png";
import badshahBasmathiRice from "../../../Images/rice/p2badshahBasmathiRice.png";
import ArkRedBiniRice from "../../../Images/rice/p3ArkRedBiniRice.png";
import DaawatExtraLongBasmatiRice from "../../../Images/rice/p4Daawat Extra Long Basmati Rice.png";
import DaawatSonaMasooriRice from "../../../Images/rice/p5Daawat Sona Masoori Rice.webp";
import GodavariSonaMasooriRice from "../../../Images/rice/p6Godavari Sona Masoori Rice.png";
import KohinoorAromaticBasmatiRice from "../../../Images/rice/p7Kohinoor Aromatic Basmati Rice.png";
import  KohinoorGoldBasmatiRice from "../../../Images/rice/p8Kohinoor Gold Basmati Rice.png";
import KohinoorSilverBasmatiRice from "../../../Images/rice/p9Kohinoor Silver Basmati Rice.png";

import LailaBasmatiRice from "../../../Images/rice/p10Laila Basmati Rice.png";

import LailaExtraLongBasmatiRice from "../../../Images/rice/p11Laila Extra Long Basmati Rice.png";

import LailaGoldSuperiorLongBasmatiRice from "../../../Images/rice/p12Laila Gold Superior Long Basmati Rice.png";

import LailaGoldenSellaBasmatiRice from "../../../Images/rice/p13Laila Golden Sella Basmati Rice.png";

import NatcoPonniBoiledRice from "../../../Images/rice/p14Natco Ponni Boiled Rice.png";

import NatcoSonaMasooriRice from "../../../Images/rice/p15Natco Sona Masoori Rice.png";




import { CollectionItems } from "../collectionItems";

export const RiceItems = () => {
    const collection = [
        { item: "Akash basmatirice", src: akashbasmatirice, pcs: "1kg", price: "$2.30" },
        { item: "badshahBasmathiRice", src: badshahBasmathiRice, pcs: "1kg", price: "$2.30" },
        { item: "ArkRedBiniRice", src: ArkRedBiniRice, pcs: "1kg", price: "$2.30" },
        { item: "Daawat Extra Long Basmati Rice", src: DaawatExtraLongBasmatiRice, pcs: "1kg", price: "$2.30" },
        { item: "Daawat Sona Masoori Rice", src: DaawatSonaMasooriRice, pcs: "1kg", price: "$2.30" },
    
        { item: "Godavari Sona Masoori Rice", src: GodavariSonaMasooriRice, pcs: "1kg", price: "$2.30" },
        { item: "Kohinoor Aromatic Basmati Rice", src: KohinoorAromaticBasmatiRice, pcs: "1kg", price: "$2.30" },
        { item: "Kohinoor Gold Basmati Rice", src: KohinoorGoldBasmatiRice, pcs: "1kg", price: "$2.30" },
        { item: "Kohinoor Silver Basmati Rice", src: KohinoorSilverBasmatiRice, pcs: "1kg", price: "$2.30" },
        { item: "Laila Basmati Rice", src: LailaBasmatiRice, pcs: "1kg", price: "$2.30" },
        { item: "Laila Extra Long Basmati Rice", src: LailaExtraLongBasmatiRice, pcs: "1kg", price: "$2.30" },
        { item: "Laila Gold Superior Long Basmati Rice", src: LailaGoldSuperiorLongBasmatiRice, pcs: "1kg", price: "$2.30" },
        { item: "Laila Golden Sella Basmati Rice", src: LailaGoldenSellaBasmatiRice , pcs: "1kg", price: "$2.30" },
        { item: "Natco Ponni Boiled Rice", src: NatcoPonniBoiledRice, pcs: "1kg", price: "$2.30" },
        { item: "Natco Sona Masoori Rice", src: NatcoSonaMasooriRice, pcs: "1kg", price: "$2.30" },
     
    ]
    return (
        <div style={{
            maxWidth: 1300,
            margin: '0 auto'
        }}>
            <CategoryHeading category="Rice" img={Rice} />
            <hr />
            <CollectionItems collection={collection} />
        </div >
    )
}