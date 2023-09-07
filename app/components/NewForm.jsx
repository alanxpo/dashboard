import React, { useState, useEffect } from "react";
import NewInput from "./NewInput";

function NewForm({ sendResults }) {
  const initialInputValues = {
    gender: "",
    weight: "",
    age: "",
    height: "",
    biciptal: "",
    triciptal: "",
    subscapular: "",
    suprailiac: "",
    femur: "",
    bistyloid: "",
  };

  const [inputValues, setInputValues] = useState(initialInputValues);

  useEffect(() => {
    const storedInputValues = localStorage.getItem("formInputValues");
    if (storedInputValues) {
      setInputValues(JSON.parse(storedInputValues));
    }
  }, []);

  const handleInputChange = (e) => {
    const { name, value, type } = e.target;

    let parsedValue = value;

    if (type === "number" && value !== "") {
      parsedValue = parseFloat(value);
    }

    const newInputValues = {
      ...inputValues,
      [name]: parsedValue,
    };

    localStorage.setItem("formInputValues", JSON.stringify(newInputValues));

    setInputValues(newInputValues);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const femur = parseFloat(inputValues.femur) / 100;
    const bistyloid = parseFloat(inputValues.bistyloid) / 100;

    const density =
      inputValues.gender == "hombre"
        ? 1.1765 -
          0.0744 *
            Math.log10(
              inputValues.biciptal +
                inputValues.triciptal +
                inputValues.subscapular +
                inputValues.suprailiac
            )
        : 1.1567 -
          0.0717 *
            Math.log10(
              inputValues.biciptal +
                inputValues.triciptal +
                inputValues.subscapular +
                inputValues.suprailiac
            );

    const fatPercentage = 495 / density - 450;

    const boneMass =
      Math.pow(
        Math.pow(inputValues.height, 2) * bistyloid * femur * 400,
        0.712
      ) * 3.02;

    const residualMass =
      inputValues.gender === "1"
        ? inputValues.weight * 0.24
        : inputValues.weight * 0.21;

    const boneMassPercentage = (boneMass / inputValues.weight) * 100;

    const residualMassPercentage = (residualMass / inputValues.weight) * 100;

    const fatWeight = (fatPercentage / 100) * inputValues.weight;

    const muscularMass =
      100 - boneMassPercentage - fatPercentage - residualMassPercentage;

    const muscularWeight =
      inputValues.weight - boneMass - residualMass - fatWeight;

    const results = {
      bone_mass: boneMass.toFixed(2),
      residual_mass: residualMass.toFixed(2),
      fat_percentage: fatPercentage.toFixed(2),
      bone_mass_percentage: boneMassPercentage.toFixed(2),
      residual_mass_percentage: residualMassPercentage.toFixed(2),
      fat_mass: fatWeight.toFixed(2),
      muscle_mass_percentage: muscularMass.toFixed(2),
      muscle_mass: muscularWeight.toFixed(2),
      density_result: density.toFixed(4),
    };
    sendResults(results);
  };

  const handleReset = () => {
    localStorage.removeItem("formInputValues");
    setInputValues(initialInputValues);
    sendResults(null);
  };

  return (
    <form
      className="bg-white shadow-md rounded px-8 pt-6 pb-8"
      onSubmit={handleSubmit}
    >
      <h2 className="text-lg font-semibold mb-2">Composición Corporal</h2>
      <div className="flex">
        <div className="w-full md:w-1/2 px-3 mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Género
          </label>
          <select
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            name="gender"
            value={inputValues.gender}
            onChange={handleInputChange}
            required
          >
            <option value="">Seleccione el género</option>
            <option value="hombre">Hombre</option>
            <option value="mujer">Mujer</option>
          </select>
        </div>

        <NewInput
          label="Peso (kg)"
          name="weight"
          type="number"
          value={inputValues.weight}
          onChange={handleInputChange}
          placeholder="Peso"
        />
      </div>
      <div className="flex">
        <NewInput
          label="Altura (m)"
          name="height"
          type="number"
          value={inputValues.height}
          onChange={handleInputChange}
          placeholder="Altura"
        />
        <NewInput
          label="Edad"
          name="age"
          type="number"
          value={inputValues.age}
          onChange={handleInputChange}
          placeholder="Edad"
        />
      </div>
      <div className="flex">
        <NewInput
          label="Femur (cm)"
          name="femur"
          type="number"
          value={inputValues.femur}
          onChange={handleInputChange}
          placeholder="Femur"
        />
        <NewInput
          label="Bistiloideo (cm)"
          name="bistyloid"
          type="number"
          value={inputValues.bistyloid}
          onChange={handleInputChange}
          placeholder="Bistiloideo"
        />
      </div>
      <div className="flex">
        <NewInput
          label="Bicipital (mm)"
          name="biciptal"
          type="number"
          value={inputValues.biciptal}
          onChange={handleInputChange}
          placeholder="Bicipital"
        />
        <NewInput
          label="Tricipital (mm)"
          name="triciptal"
          type="number"
          value={inputValues.triciptal}
          onChange={handleInputChange}
          placeholder="Edad"
        />
        <NewInput
          label="Subescapular (mm)"
          name="subscapular"
          type="number"
          value={inputValues.subscapular}
          onChange={handleInputChange}
          placeholder="Subescapular"
        />
        <NewInput
          label="Supraileaco (mm)"
          name="suprailiac"
          type="number"
          value={inputValues.suprailiac}
          onChange={handleInputChange}
          placeholder="Supraileaco"
        />
      </div>
      <div className="pt-4 px-4 flex">
        <input
          className="bg-blue-500 text-white w-1/3 rounded-md p-1 mx-auto hover:bg-blue-400"
          type="submit"
          value="Calcular"
        />
        <button
          className="bg-white text-blue-500 border border-blue-500 w-1/3 rounded-md p-1 mx-auto hover:bg-blue-100"
          onClick={handleReset}
        >
          Limpiar
        </button>
      </div>
    </form>
  );
}
export default NewForm;
