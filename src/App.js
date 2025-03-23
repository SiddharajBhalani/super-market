import React from "react";
import { Header } from "./components/header";
import { HomePage } from "./components/homePage";
import { Login } from "./components/Login";
import { Shipping } from "./components/shippingpolicy"
import { Contact } from "./components/contact"
import { SignupForm } from "./components/singup";
import { Addtocard } from "./components/addtocard"
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { Footer } from "./components/footer";
import { FrozenItems } from "./components/category/frozen";
import { RiceItems } from "./components/category/rice";
import { FlourItems } from "./components/category/flour";
import { DalsItems } from "./components/category/dals";
import { DryItems } from "./components/category/drynuts";
import { SpiceItems } from "./components/category/groundspices";
import { WholespicesItems } from "./components/category/wholespices";
import { GheeoilsItems } from "./components/category/gheeoils";
import { HouseholdItems } from "./components/category/household";
import { ReadymixesItems } from "./components/category/readymixes";
import { SweetsItems } from "./components/category/sweets";
import { PicklesItems } from "./components/category/pickles";
//model not 
import { SaucespastesItems } from "./components/category/saucespastes";
import { DairyItems } from "./components/category/dairy";
import { FruitvegetablesItems } from "./components/category/fruitvegetables";
import { PapadfarfarItems } from "./components/category/papadfarfar";



import { NoodlespastaItems } from "./components/category/noodlespasta";
import { CannedtinsItems } from "./components/category/cannedtins";
import { DrinksItems } from "./components/category/drinks";
import { MukhwasItems } from "./components/category/mukhwas";

import { SnacksItems } from "./components/category/snacks";
import { BiscuitsbakeryItems } from "./components/category/biscuitsbakery";
import { HealthbeautyItems } from "./components/category/healthbeauty";
import { ReligiousItemsItems } from "./components/category/religiousitems";
import { ProductDetail } from "./components/category/productDetail";
import { CartProvider } from "./components/cartContext";

export default function App() {
  return (
    <>
      <CartProvider>
        <BrowserRouter>
          <Header />
          {/* Main Routes */}
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/Shipping" element={<Shipping />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Addtocard" element={<Addtocard />} />
            <Route path="/signup" element={<SignupForm />} />
            <Route path="/collection/frozen" element={<FrozenItems />} />
            <Route path="/collection/rice" element={<RiceItems />} />
            <Route path="/collection/flour" element={<FlourItems />} />
            <Route path="/collection/dals" element={<DalsItems />} />
            <Route path="/collection/dry-fruits" element={<DryItems />} />
            <Route path="/collection/ground-spices" element={<SpiceItems />} />
            <Route path="/collection/whole-spices" element={<WholespicesItems />} />
            <Route path="/collection/ghee-oils" element={<GheeoilsItems />} />
            <Route path="/collection/Household" element={< HouseholdItems />} />
            <Route path="/collection/readymixes" element={< ReadymixesItems />} />
            <Route path="/collection/Sweets" element={< SweetsItems />} />
            <Route path="/collection/Pickles" element={< PicklesItems />} />


            <Route path="/collection/Saucespastes" element={<SaucespastesItems />} />
            <Route path="/collection/dairy" element={<DairyItems />} />
            <Route path="/collection/fruitvegetables" element={<FruitvegetablesItems />} />
            <Route path="/collection/papadfarfara" element={<PapadfarfarItems />} />

            <Route path="/collection/noodlespasta" element={<NoodlespastaItems />} />
            <Route path="/collection/cannedtins" element={< CannedtinsItems />} />
            <Route path="/collection/drinks" element={< DrinksItems />} />
            <Route path="/collection/mukhwas" element={< MukhwasItems />} />

            <Route path="/collection/snacks" element={<SnacksItems />} />
            <Route path="/collection/biscuitsbekery" element={< BiscuitsbakeryItems />} />
            <Route path="/collection/healthbeauty" element={< HealthbeautyItems />} />
            <Route path="/collection/religiousitems" element={<ReligiousItemsItems />} />

            <Route path="/product/:productName" element={<ProductDetail />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </CartProvider>
    </>
  );
}

