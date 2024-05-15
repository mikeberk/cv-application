export default function Form({ label, name, value, handleChange, inputType }) {
  return (
    <>
      <label style={{ display: "block" }}>
        {label}{" "}
        {inputType === "text" && (
          <input
            type="text"
            name={name}
            value={value}
            onChange={handleChange}
          />
        )}
        {inputType === "area" && (
          <textarea name={name} value={value} onChange={handleChange} />
        )}
      </label>
    </>
  );
}
