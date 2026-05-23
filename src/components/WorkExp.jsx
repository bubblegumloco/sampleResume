import React from "react"
import { MdOutlineWork } from "react-icons/md";
import lungPreview from '../assets/lungDash.png'

const WorkSection = () => {
    return (
        <div className="space-y-8 pb-6 lg:pt-8">
        {/* Work Experience / Education Section */}
        <section>
            <h2 className="flex items-center text-xl font-bold border-b pb-1 mb-4 gap-2">
            <MdOutlineWork className="text-green-700 opacity-60" />
            WORK EXPERIENCE
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
                Chief Genomic Architect & Structural Welder <span className="text-gray-500">| 2.5 Million Years Ago - Present</span>
                </p>
                <p className="uppercase text-gray-500 text-sm">
                The Cellular Nucleus 
                </p>
                <ul className="list-disc list-inside text-gray-700">
                <li>Successfully managed large-scale emergency reconstruction projects, repairing hundreds of double-strand DNA breaks in under 24 hours.</li>
                <li>Utilized specialized DdrC proteins to instantly anchor and glue shattered genetic fragments, preventing data loss during catastrophic radiation events</li>
                <li>Maintained 4 to 10 identical structural backups of the corporate genome to ensure zero mutation rates during crisis events</li>
                </ul>
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
                Bio-Remediation Specialist & Heavy Metal Detoxifier <span className="text-gray-500">| 1995 - Present</span>
                </p>
                <p className="uppercase text-gray-500 text-sm">
                Department of Nuclear Waste Cleanup 
                </p>
                <ul className="list-disc list-inside text-gray-700">
                <li>Successfully degraded ionic mercury, toluene, and organic solvents inside highly radioactive environments where all other biological contractors died</li>
                <li>Maintained 100% operational uptime while floating in high-level nuclear waste storage tanks</li>
                </ul>
            </div>
            </div>
        </section>
        </div>
    );
};

export default WorkSection;