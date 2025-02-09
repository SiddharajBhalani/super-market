import React from "react";
import { CategoryHeading } from "../categoryHeading";
import Biscuitsbakery from "../../../Images/catgory/Biscuits-and-Bakery.png";
import { collection } from "../productCollection";


import { CollectionItems } from "../collectionItems";

export const BiscuitsbakeryItems = () => {
    return (
        <div style={{
            maxWidth: 1300,
            margin: '0 auto'
        }}>
            <CategoryHeading category="Biscuits-bakery" img={Biscuitsbakery} />
            <hr />
            <CollectionItems collection={collection.Biscuitsbakery} />
        </div >
    )
}