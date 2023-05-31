import React from "react";
import Menu from "./components/menu";
import Banner from "./components/banner";
import Fetuares from "./components/fetuares";
import Testemunho from "./components/testemunho";
import Footer from "./components/footer";

function Site() {
    return <div>
        <Menu />
        <Banner />
        <Fetuares />
        <Testemunho />
        <Footer />
    </div>;
}

export default Site;