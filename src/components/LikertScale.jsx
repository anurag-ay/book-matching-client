// A custom component that renders a Likert scale
function LikertScale(props) {
  const { question, options, onChange } = props;

  return (
    <div className="likert-scale">
      <p>{question}</p>
      <div className="likert-options">
        {options.map((option, index) => (
          <label key={index}>
            <input
              type="radio"
              name={question}
              value={index}
              onChange={onChange}
            />
            {option}
          </label>
        ))}
      </div>
    </div>
  );
}

export default LikertScale;
