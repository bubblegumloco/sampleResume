import React from "react"
import Logo from '../assets/myLogo.png';
import {FaMapLocationDot, FaPhone, FaLinkedin} from 'react-icons/fa6'
import { IoIosMail } from "react-icons/io"

const HeaderSection = () => {
    return (
        <div className="p-12 py-0">
        {/* Logo,Name & Profession */}
        <header className="px-12 pt-10 pb-8 border-b border-gray-200">

            {/* Name + Initials watermark stacked */}
            <div className="relative flex flex-col items-center justify-center min-h-27.5">

                {/* Initials — absolute, behind everything */}
                <span
                className="font-monte absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-[-54%]
                            text-[9rem] leading-none tracking-[-0.04em] select-none pointer-events-none
                            text-green-700 opacity-15"
                aria-hidden="true"
                >
                DCR
                </span>

                {/* Name — on top of initials */}
                <h1
                className="font-nunito relative z-10 text-[2.6rem] leading-tight tracking-[0.04em] font-light text-gray-900"
                >
                Deinococcus (Conan) Radiodurans
                </h1>

                {/* Profession */}
                <p
                className="relative z-10 mt-1.5 text-[0.9rem] tracking-[0.3em] uppercase text-black font-extralight"
                style={{ fontFamily: "'Jost', sans-serif" }}
                >
                Polyextremophile
                </p>
            </div>
        </header>

            {/* Contact Info Flex Boxes */}
        <div className="flex flex-col md:flex-row flex-wrap justify-center md:gap-16 gap-4">
                {/* Location */}
                <div className="flex items-center gap-2 p-2 md:p-4">
                    <span className="text-green-700 text-xl opacity-70">
                    <FaMapLocationDot />
                    </span>
                    <p>Earth</p>
                </div>

                {/* Phone */}
                <div className="flex items-center gap-2 p-2 md:p-4">
                    <span className="text-green-700 text-xl opacity-70">
                    <FaPhone />
                    </span>
                    <p>777-777-7777</p>
                </div>

                {/* Email */}
                <div className="flex items-center gap-2 p-2 md:p-4">
                    <span className="text-green-700 text-xl opacity-70">
                    <IoIosMail />
                    </span>
                    <p>undestroyable@extremophile.org</p>
                </div>

                {/* LinkedIn */}
                <div className="flex items-center gap-2 p-2 md:p-4">
                    <span className="text-green-700 text-xl opacity-70">
                    <FaLinkedin />
                    </span>
                    <a href="http://www.linkedin.com/in/mohani-somwaru"
                    className="hover:text-green-700 hover:opacity-70 hover:no-underline">
                        LinkedIn
                    </a>
                </div>
            </div>
        </div>
    );
};

export default HeaderSection;

