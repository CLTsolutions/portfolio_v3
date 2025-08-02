const BioButton = ({ label, active, onClick }) => (
  <button
    onClick={onClick}
    className={`btn btn-primary btn-xs md:btn-sm capitalize w-24 ${active ? 'btn-active' : 'btn-outline'}`}
  >
    {label}
  </button>
);

export default BioButton;
