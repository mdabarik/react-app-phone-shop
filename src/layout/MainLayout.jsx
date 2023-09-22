import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/Header/Header";
import { useEffect } from "react";

const MainLayout = () => {

    const location = useLocation();
    // console.log(location);

    useEffect(() => {
        console.log(location.pathname);
        document.title = `Phone ${location.pathname.replace('/', '-')}`
        
        if (location.pathname === '/') {
            document.title = "Phone Home"
        }

        // ...

        if (location.state) {
            document.title = location.state;
        }


    }, [location.pathname])

    return (
        <div className="container mx-auto">
            <Header></Header>
            <Outlet></Outlet>
            <footer>Footer</footer>

            <Outlet context={"ami context api"}></Outlet>
        </div>
    );
};

export default MainLayout;