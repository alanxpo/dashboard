"use client";
import React, { useState } from "react";
import NewForm from "../components/NewForm";
import NewTable from "../components/NewTable";
import PieChart from "../components/PieChart";

const Page = () => {
  const [results, setResults] = useState(null);

  const receiveResults = (newResults) => {
    setResults(newResults);
  };

  return (
    <div className="from-gray-50 to-gray-200 items-center justify-center grid mt-16">
      <NewForm sendResults={receiveResults} />
      <div className="flex">
        {results != null && (
          <NewTable
            fat_mass_td={results.fat_mass}
            fat_mass_percentage_td={results.fat_percentage}
            bone_mass_td={results.bone_mass}
            bone_mass_percentage_td={results.bone_mass_percentage}
            residual_mass_td={results.residual_mass}
            residual_mass_percentage_td={results.residual_mass_percentage}
            muscle_mass_td={results.muscle_mass}
            muscle_mass_percentage_td={results.muscle_mass_percentage}
            density_h3={results.density_result}
          />
        )}
        {results != null && (
          <PieChart
            fat_mass_percentage_pie={results.fat_percentage}
            bone_mass_percentage_pie={results.bone_mass_percentage}
            residual_mass_percentage_pie={results.residual_mass_percentage}
            muscle_mass_percentage_pie={results.muscle_mass_percentage}
          />
        )}
      </div>
    </div>
  );
};

export default Page;
