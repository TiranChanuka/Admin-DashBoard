import React, { useState } from 'react';
import Sidebar from '../screens/global/sideBarNew';
import { CgMenuGridO } from "react-icons/cg";

const FabButton = () => {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    return (
        <div className="relative">
            <button
                className="fixed bottom-10 text-25px right-10 bg-iconGreen text-white rounded-full p-2 shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                onClick={toggleMenu}
            >
                <CgMenuGridO />
            </button>
            {showMenu && (
                <Sidebar onClose={toggleMenu} />
            )}
        </div>
    );
};

export default FabButton;
