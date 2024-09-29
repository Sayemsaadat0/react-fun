import { Link, useLocation } from "react-router-dom";

const menuItems = [
    { name: 'Love', path: '/' },
    { name: 'What To DO', path: '/what-to-do' },
];

const Navbar = () => {
    const location = useLocation();

    return (
        <div className="w-full ">
            <nav className="p-5">
                <div className="flex flex-col gap-2 w-full">
                    {menuItems.map(item => (
                        <Link
                            key={item.name}
                            to={item.path}
                            className={`border p-2 rounded-full text-center ${location.pathname === item.path ? 'bg-[#9BEC00]' : 'hover:bg-[#F3FF90]'}`}
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
