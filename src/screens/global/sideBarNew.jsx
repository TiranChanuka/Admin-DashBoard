import React from "react";
import classNames from "classnames";
import { Link, useLocation } from "react-router-dom";
import { SideBarLinks } from "../../components/SideLinks";

const linkClass =
    "flex items-start font-semibold hover:text-white text-gray-400 hover:no-underline rounded-sm text-25px ";

const Sidebar = () => {
    return (
        <div className=" w-100 p-14 flex flex-col">
            <div className="transform -translate-y-1/4 absolute left-28">
                <div className=" w-[29px] h-[29px] rounded-full bg-iconRed  text-center text-white">4</div>
            </div>
            <div className="flex items-center gap-2 px-1 py-3">
                <img
                    alt="profile-user"
                    width="72px"
                    height="72px"
                    src="./Assets/profile.png"
                    className={`cursor-pointer duration-500 rounded-md`}
                />
            </div>
            <div className="text-white">
                <div className="text-30px font-semibold">Samantha</div>
                <div className="text-17px">samantha@email.com</div>
            </div>
            <div className="py-8 pt-20 flex flex-1 flex-col gap-5 ">
                {SideBarLinks.map((link) => (
                    <SidebarLink key={link.key} link={link} />
                ))}
            </div>
        </div>
    );
};

function SidebarLink({ link }) {
    const { pathname } = useLocation();

    return (
        <Link
            to={link.path}
            className={classNames(
                pathname === link.path
                    ? "text-white"
                    : "text-neutral-400",
                linkClass
            )}
        >
            <span className="text-25px"></span>
            {link.label}
        </Link>
    );
};
export default Sidebar;