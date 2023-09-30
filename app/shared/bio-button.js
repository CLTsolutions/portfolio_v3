const BioButton = ({ label, active, onClick }) => (
  <button
    onClick={onClick}
    className={`btn btn-primary btn-xs ${
      active ? 'btn-active' : 'btn-outline'
    }`}
  >
    {label}
  </button>
);

export default BioButton;
