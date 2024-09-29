import { Outlet } from "react-router-dom"
import Navbar from "../shared/Navbar"

const MainLayout = () => {
    return (
        <div className="max-w-[1220px]  mx-auto">
            <div className="grid grid-cols-12">
                <div className="col-span-10 py-5 m-10">
                    <Outlet />
                </div>
                <div className="border-l col-span-2">
                    <Navbar />
                </div>
            </div>
        </div>
    )
}

export default MainLayout