// A custom component that renders a dropdown menu
function DropdownMenu(props) {
  const { question, options, value, onChange } = props;

  return (
    <div className="dropdown-menu">
      <p>{question}</p>
      <select value={value} onChange={onChange}>
        {options.map((option, index) => (
          <option key={index} value={index}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

export default DropdownMenu;
