import React from "react";
import { Link } from "react-router-dom";
import Frozen from "../../Images/catgory/Frozen.png";
import Rice from "../../Images/catgory/Rice.png";
import Flours from "../../Images/catgory/Flours.png";
import DalsBeans from "../../Images/catgory/Dals-and-Beans.png";
import DryFruitsNuts from "../../Images/catgory/Dry-Fruits.png";
import GroundSpices from "../../Images/catgory/Ground-Spices.png";
import WholeSpices from "../../Images/catgory/Whole-Spices.png";
import GheeOils from "../../Images/catgory/Ghee-and-Oils.png";
import ReadyMixes from "../../Images/catgory/Ready-Mixes.png";
import sweets from "../../Images/catgory/Sweets.png"
import Household from "../../Images/catgory/Household.png"
import Pickles from "../../Images/catgory/Pickles.png";
import SaucesPastes from "../../Images/catgory/Sauces-and-Pastes.png";
import Dairy from "../../Images/catgory/Dairy.png";
import FruitVegetables from "../../Images/catgory/Fruit-and-Vegetables.png";
// import ChilliHerbs from "../../Images/catgory/Chilli-and-Herbs.png";
import PapadFarFara from "../../Images/catgory/Papad-and-Far-Far.png";
// import PawaMamraitem from "../../Images/catgory/Pawa-Mamra-and-Other-Items.png";
import NoodlesPasta from "../../Images/catgory/Noodles-and-Pasta.png";
import CannedTins from "../../Images/catgory/Canned-Tins.png";
import Drinks from "../../Images/catgory/Drinks.png";
// import HotBeverages from "../../Images/catgory/Hot-Beverages.png";
// import JaggerySaltSugar from "../../Images/catgory/Jaggery-Salt-and-Sugar.png";
import Mukhwas from "../../Images/catgory/Mukhwas.png";
import Snacks from "../../Images/catgory/Indian-Snacks.png";
import BiscuitsBekery from "../../Images/catgory/Biscuits-and-Bakery.png";
import HealthBeauty from "../../Images/catgory/Health-and-Beauty.png";
import ReligiousItems from "../../Images/catgory/Religious-Items.png";

export const Categories = () => {
    const categories = [
        { category: "Frozen", src: Frozen, url: "/collection/frozen" },
        { category: "Rice", src: Rice , url:"/collection/rice" },
        { category: "Flours", src: Flours,  url:"/collection/flour" },
        { category: "Dals & Beans", src: DalsBeans,url:"/collection/Dals" },
        { category: "Dry Fruits & Nuts", src: DryFruitsNuts, url:"/collection/dry-fruits" },
        { category: "Ground Spices", src: GroundSpices, url:"/collection/ground-spices" },
        { category: "Whole Spices", src: WholeSpices,url:"/collection/whole-spices" },
        { category: "GheeOils", src: GheeOils,url:"/collection/ghee-oils" },
        { category: "ReadyMixes", src: ReadyMixes,url:"/collection/readymixes" },
        { category: "Household", src: Household,url:"/collection/Household" },
        { category: "sweets", src: sweets,url:"/collection/sweets" },
        { category: "Pickles", src: Pickles,url:"/collection/Pickles" },
        { category: "SaucesPastes", src: SaucesPastes,url:"/collection/saucespastes" },
        { category: "Dairy", src: Dairy,url:"/collection/dairy" },
        { category: "FruitVegetables", src: FruitVegetables,url:"/collection/fruitvegetables" },
        { category: "PapadFarFara", src: PapadFarFara,url:"/collection/papadfarfara" },


        { category: "NoodlesPasta", src: NoodlesPasta,url:"/collection/noodlespasta" },
        { category: "CannedTins", src: CannedTins,url:"/collection/cannedtins" },
        { category: "Drinks", src: Drinks,url:"/collection/drinks" },
        { category: "Mukhwas", src: Mukhwas,url:"/collection/mukhwas" },
        { category: "Snacks", src: Snacks,url:"/collection/snacks" },
        { category: "BiscuitsBekery", src: BiscuitsBekery,url:"/collection/biscuitsbekery" },
        { category: "HealthBeauty", src: HealthBeauty,url:"/collection/healthbeauty"},
        { category: "ReligiousItems", src: ReligiousItems,url:"/collection/religiousitems" },
    ];

    return (
        <div className="p-6">
          <h4 className=" text-2xl font-bold mb-8 text-blue-500">Shop By Categories</h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                {categories.map((item, index) => (
                    <Link to= {item.url}>
                        <div
                            key={index}
                            className="bg-white shadow-md rounded-lg p-4 text-center"
                        >
                            <img
                                src={item.src}
                                alt={item.category}
                                className="w-full h-40 rounded-lg"
                            />
                            <span className="block mt-4 text-lg font-semibold">
                                {item.category}
                            </span>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};


    // { category: "ChilliHerbs", src: ChilliHerbs },
  // { category: "PawaMamraitem", src: PawaMamraitem },
    // { category: "HotBeverages", src: HotBeverages },
        // { category: "JaggerySaltSugar", src: JaggerySaltSugar },