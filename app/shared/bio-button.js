const BioButton = ({ label, active, onClick }) => (
  <button
    onClick={onClick}
    className={`mr-4 last:mr-0 btn btn-primary btn-xs ${
      active ? 'btn-active' : 'btn-outline'
    }`}
  >
    {label}
  </button>
);

export default BioButton;
