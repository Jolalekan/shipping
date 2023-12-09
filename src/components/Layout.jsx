import { Outlet } from "react-router-dom"
import { Footer } from "./Footer"
import { Nav } from "./Nav"
import { NavBar } from "./NavBar"

export const Layout = () => {
    return (
        <div>
            {/* <Nav/> */}
            <NavBar />
            <Outlet />
            <Footer />
        </div>
    )
}