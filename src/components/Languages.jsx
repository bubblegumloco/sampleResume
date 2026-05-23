import React from "react";

const LanguageSkills = () => {
  return (
    <div className="w-64 bg-green-700 text-white rounded-t-full pt-24 px-4 pb-6">
      <div className="text-center mb-4 font-bold text-xl">Languages</div>

      <div className="mb-4">
        <div className="flex justify-between mb-1">
          <span>Latin</span>
          <span>90%</span>
        </div>
        <div className="w-full bg-green-800 rounded-full h-4">
          <div className="bg-white h-4 rounded-full" style={{ width: '50%' }}></div>
        </div>
      </div>
    </div>
  );
};

export default LanguageSkills;;