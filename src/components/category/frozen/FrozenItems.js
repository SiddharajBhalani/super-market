import React from "react";
import { CategoryHeading } from "../categoryHeading";
import Frozen from "../../../Images/catgory/Frozen.png";
import { CollectionItems } from "../collectionItems";
import { collection } from "../productCollection";

export const FrozenItems = () => {
    return (
        <div style={{
            maxWidth: 1300,
            margin: '0 auto'
        }}>
            <CategoryHeading category="Frozen" img={Frozen} />
            <hr />
            <CollectionItems collection={collection.Frozen} />
        </div > 
    )
}