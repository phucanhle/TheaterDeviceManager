import { useState } from "react";
import { Link } from "react-router-dom";

import BurgerMenuIcon from "../assets/icons/BurgerMenuIcon.svg?react";
import CloseIcon from "../assets/icons/CloseIcon.svg?react";
import OverviewIcon from "../assets/icons/OverviewIcon.svg?react";
import InventoryIcon from "../assets/icons/InventoryIcon.svg?react";
import ReportIcon from "../assets/icons/ReportIcon.svg?react";
import SettingIcon from "../assets/icons/SettingIcon.svg?react";

function ExpandableMenu() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    const MenuCategories = [
        { icon: <OverviewIcon className="text-white w-6 h-6" />, label: "Overview", link: "/overview" },
        { icon: <InventoryIcon className="text-white w-6 h-6" />, label: "Inventory", link: "/inventory" },
        { icon: <ReportIcon className="text-white w-6 h-6" />, label: "Reports", link: "/report" },
        { icon: <SettingIcon className="text-white w-6 h-6" />, label: "Settings", link: "/setting" },
    ];

    return (
        <div
            className={`flex flex-col py-5 items-center bg-blue-500 text-white transition-all duration-300 ${
                isOpen ? "w-64" : "w-16"
            }`}
        >
            {/* Hamburger Icon */}
            <div className={isOpen ? `w-full text-right px-4` : `w-full text-center`}>
                <button onClick={toggleMenu} className="mt-4 relative">
                    <BurgerMenuIcon
                        className={`w-6 h-6 transform transition-transform duration-300 ${
                            isOpen ? "opacity-0 rotate-180" : "opacity-100 rotate-0"
                        }`}
                        style={{ position: isOpen ? "absolute" : "static" }}
                    />
                    <CloseIcon
                        className={`w-6 h-6 transform transition-transform duration-300 ${
                            isOpen ? "opacity-100 rotate-0" : "opacity-0 rotate-180"
                        }`}
                        style={{ position: isOpen ? "static" : "absolute" }}
                    />
                </button>
            </div>

            {/* Menu Items */}
            <nav className="mt-2 w-full p-2">
                <ul className="space-y-4">
                    {MenuCategories.map((item, index) => (
                        <li key={index} className="hover:bg-blue-600 p-2 rounded-lg w-full">
                            <Link to={item.link} className={`w-full flex ${isOpen ? "justify-start" : "justify-center"}`}>
                                {item.icon}
                                {isOpen && <span className="ml-3">{item.label}</span>}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
}

export default ExpandableMenu;
