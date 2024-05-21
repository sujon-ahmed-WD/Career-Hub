import { Outlet } from "react-router-dom";
import Footer from "./Componat/Fotter/Footer";
import Header from "./Componat/Header/Header";

 
const Root = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;