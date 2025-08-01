const BioButton = ({ label, active, onClick }) => (
  <button
    onClick={onClick}
    className={`btn btn-primary btn-xs mr-4 last:mr-0 ${
      active ? 'btn-active' : 'btn-outline'
    }`}
  >
    {label}
  </button>
);

export default BioButton;
