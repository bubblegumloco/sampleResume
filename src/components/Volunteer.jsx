import React from "react"
import { MdVolunteerActivism } from "react-icons/md";
import pplMoneyPreview from "../assets/pplMoney.png"

const VolunteerSection = () => {
    return (
        <div className="space-y-8 pb-6">
        {/* volunteer Section */}
        <section>
            <h2 className="flex items-center text-xl font-bold border-b pb-1 mb-4 gap-2">
               <MdVolunteerActivism className="text-green-700 opacity-60" />
                VOLUNTEER
            </h2>

            <div className="flex space-x-4">
            <div className="shrink-0 mt-1">
                {/* star bullet point */}
                <div 
                    className="w-3 h-3 bg-gray-800" 
                    style={{ clipPath: 'polygon(50% 0%, 65% 35%, 100% 50%, 65% 65%, 50% 100%, 35% 65%, 0% 50%, 35% 35%)' }}
                ></div>
            </div>

            {/* Content */}
            <div className="space-y-1">
                <p className="font-semibold uppercase text-sm">
                Exterior Astronaut <span className="text-gray-500">| 2015 - 2016 </span>
                </p>
                <p className="uppercase text-gray-500 text-sm">
                JAXA / Tanpopo Mission (Outside the International Space Station)
                </p>
                <ul className="list-disc list-inside text-gray-700">
                <li>Commuted outside the ISS for 365 consecutive days, enduring raw cosmic rays, solar UV blasts, and zero atmospheric pressure</li>
                <li>Validated the Panspermia hypothesis by remaining completely viable after a year in deep space</li>
                </ul>
            </div>
            </div>
        </section>
        </div>
    );
};
export default VolunteerSection;

{/*https://codeconvey.com/en/tools/css-clip-path-generator*/}