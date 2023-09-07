const NewTable = (props) => {
  const {
    fat_mass_td,
    fat_mass_percentage_td,
    bone_mass_td,
    bone_mass_percentage_td,
    residual_mass_td,
    residual_mass_percentage_td,
    muscle_mass_td,
    muscle_mass_percentage_td,
    density_h3,
  } = props;

  return (
    <div className="bg-white rounded p-4 shadow-md px-8 pt-6 pb-8 mr-2 mt-2 justify-center w-2/3">
      <div>
        <h2 className="text-lg font-semibold mb-2">Resultados</h2>
        <p className="mb-1">Densidad Corporal: {density_h3}</p>

        <table className="w-full border rounded-lg overflow-hidden">
          <thead className="bg-blue-400 text-white">
            <tr>
              <th className="py-2 px-4">Componente</th>
              <th className="py-2 px-4">Porcentaje(%)</th>
              <th className="py-2 px-4">Peso(kg)</th>
            </tr>
          </thead>
          <tbody className="bg-gray-100">
            <tr className="border-t">
              <td className="py-2 px-4">Masa grasa</td>
              <td className="py-2 px-4">{fat_mass_percentage_td}</td>
              <td className="py-2 px-4">{fat_mass_td}</td>
            </tr>
            <tr className="border-t">
              <td className="py-2 px-4">Masa ósea</td>
              <td className="py-2 px-4">{bone_mass_percentage_td}</td>
              <td className="py-2 px-4">{bone_mass_td}</td>
            </tr>
            <tr className="border-t">
              <td className="py-2 px-4">Masa residual</td>
              <td className="py-2 px-4">{residual_mass_percentage_td}</td>
              <td className="py-2 px-4">{residual_mass_td}</td>
            </tr>
            <tr className="border-t">
              <td className="py-2 px-4">Masa muscular</td>
              <td className="py-2 px-4">{muscle_mass_percentage_td}</td>
              <td className="py-2 px-4">{muscle_mass_td}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default NewTable;
