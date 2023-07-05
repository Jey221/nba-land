import PARQUETS from '../data/Parquets';

export default function ModalPosition({ pos, teamAbv }) {
  console.log(teamAbv);
  const park = PARQUETS[teamAbv];

  // liaison entre le logo et l'équipe
  console.log(park);
  return (
    <div className="parquetBack">
      <img src={park} alt="park" className="parkNba" />
      <span>F</span>
      <span>C</span>
      <span>F</span>
      <span>G</span>
      <span>G</span>
    </div>
  );
}
