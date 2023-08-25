/* eslint-disable react/prop-types */
const Btn = ({ title, onClick, icon: Icon }) => {
  return (
    <button
      className="px-6 py-2 text-md font-semibold border-black/10 border-2 rounded-xl flex flex-row items-center justify-center"
      onClick={onClick}
    >
      {Icon && <Icon className="icon" />}
      <span>{title}</span>
    </button>
  );
};

export default Btn;
