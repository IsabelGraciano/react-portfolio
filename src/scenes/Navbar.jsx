import { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll"; // allows to navigate through pages
import useMediaQuery from "../hooks/useMediaQuery";

const Link = ({ page, selectedPage, setSelectedPage }) => {
    const lowerCasePage = page.toLowerCase();
    return (
        <AnchorLink className={`${selectedPage === lowerCasePage ? "text-yellow" : ""}
        hover:text-yellow transition duration-500`}
        href={`#${lowerCasePage}`}
        onClick={() => setSelectedPage(lowerCasePage)}
        >
            {page}
        </AnchorLink>
    )
}

const Navbar = ({selectedPage, setSelectedPage}) => {
    const [isMenuToggled, setIsMenuToggled] = useState(false);
    const isAboveSmallScreens = useMediaQuery("(min-width: 768px)");

    const links = (classes) => (
        <div className={classes}>
            <Link
                page="Home"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
            />
            <Link
                page="Skills"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
            />
            <Link
                page="Projects"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
            />
            <Link
                page="Testimonials"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
            />
            <Link
                page="Contact"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
            />
        </div>
    )

    const navbarFullLinks = (
        <div>
           {links('flex justify-between gap-16 font-opensans text-sm font-semibold')}
        </div>
    );

    const navbarIconForLinks = (
        <button
            className="rounded-full bg-red p-2"
            onClick={() => setIsMenuToggled(!isMenuToggled)}
        >
            <img src="../assets/menu-icon.svg" alt="menu-icon" />
        </button>
    );
    
    const smallScreenView = (
        <div className="fixed right-0 bottom-0 h-full bg-blue w-[300px]">
            {/* CLOSE ICON */}
            <div className="flex justify-end p-12">
                <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                    <img src="../assets/close-icon.svg" alt="close-icon" />
                </button>
            </div>

            {/* MENU ITEMS */}
            <div className="flex flex-col gap-10 ml-[33%] text-2xl text-deep-blue">
                {links}
            </div>
        </div>
    )

    return (
        <nav className={`z-40 w-full fixed top-0 py-6`}>
            <div className="flex items-center justify-between mx-auto w-5/3">
                <h4 className="font-playfair text-3xl font-bold">
                    {/* Desktop nav */}
                    {isAboveSmallScreens ? navbarFullLinks : navbarIconForLinks}
                    
                    {/* Mobile nav */}
                    {!isAboveSmallScreens && isMenuToggled && smallScreenView}

                </h4>
            </div>
        </nav>
    )
};

export default Navbar;