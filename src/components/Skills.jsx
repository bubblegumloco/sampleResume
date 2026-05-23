import React from "react"
import LanguageSkills from "./Languages";
import CircularProgress from "./CircleProgress";

const SkillsSection = () => {
  return (
    <div className="w-64 mx-auto overflow-hidden">
      {/* Arch Section */}
      <div className="bg-green-700 text-white rounded-t-full pt-24 px-6 pb-8 text-center opacity-65">
        <h2 className="text-4xl font-bold mb-6 font-xanh">Skills</h2>

        <div className="mb-9">
          <h3 className="text-lg font-semibold ">Capabilities</h3>
          <div class="h-0.5 w-full bg-linear-to-r from-transparent via-white to-transparent"></div>
          <div className="flex flex-col gap-1">
            <span>Radiation Resistance</span>
            <span>Extreme Desiccation Management</span>
            <span>Rapid DNA Reassembly</span>
            <span>Antioxidant Shielding</span>
            <span>Vacuum & Thermal Adaptability</span>
          </div>
        </div>

        <div className="mb-9">
          <h3 className="text-lg font-semibold">Interpersonal Skills</h3>
          <div class="h-0.5 w-full bg-linear-to-r from-transparent via-white to-transparent"></div>
          <div className="flex flex-col gap-1">
            <span>Conflict Resolution</span>
            <span>Team Player</span>
            <span>Crisis Management</span>
            <span>Boundary Setting</span>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2">Languages</h3>
          <div class="h-0.5 w-full bg-linear-to-r from-transparent via-white to-transparent mb-5"></div>
          <div className="flex flex-col items-center gap-4 mt-2">
            <div className="flex justify-between items-center w-40">
              <span>Quorum</span>
              <CircularProgress percentage={90}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SkillsSection;