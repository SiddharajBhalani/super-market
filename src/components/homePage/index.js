import React from "react";
import { Banner } from "./Banner";
import { Categories } from "../category";
import { IntroBanner } from "../bener";
import { RecentlyViewSlider } from "../slider";
export const HomePage = () => {
    return (
        <div>
            <Banner />
            <Categories />
            {/* <RecentlyViewSlider /> */}
            <IntroBanner />
        </div>
    );
};

