import React from "react";
import { IoIosSchool } from "react-icons/io";

const EducationSection = () => {
    return (
        <div className="space-y-8">
        {/* Work Experience / Education Section */}
        <section>
            <h2 className="flex items-center text-xl font-bold border-b pb-1 mb-4 gap-2">
                <IoIosSchool className="text-green-700 opacity-60" />
                Education
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
                Ph.D. in Cellular Biology <span className="text-gray-500"></span>
                </p>
                <p className="uppercase text-gray-500 text-sm">
                Earned via 2.5 billion years of natural selection
                </p>
            </div>
            </div>

            {/* Another Exp */}
            <div className="flex space-x-4 mt-6">
            <div className="shrink-0 mt-1">
                {/* star bullet point */}
                <div 
                    className="w-3 h-3 bg-gray-800" 
                    style={{ clipPath: 'polygon(50% 0%, 65% 35%, 100% 50%, 65% 65%, 50% 100%, 35% 65%, 0% 50%, 35% 35%)' }}
                ></div>
            </div>
            <div className="space-y-1">
                <p className="font-semibold uppercase text-sm">
                World's Most Radiation-Resistant Lifeform<span className="text-gray-500"></span>
                </p>
                <p className="uppercase text-gray-500 text-sm">
                Guinness World Records 
                </p>
            </div>
            </div>
        </section>
        </div>
    );
};
export default EducationSection;

