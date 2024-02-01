export function TextField(props) {
  const { label, value, name, className, hideLabelOnFocus, ...rest } = props;
  const id = name ? name + "-input" : label + "-input";
  return (
    <div className="w-full min-w-[200px] h-10 flex relative bg-inherit rounded-full">
      <input
        required
        name={name}
        className="bg-inherit text-white outline outline-0 py-2.5 px-3 rounded-full border border-primary-500 w-full h-full peer focus:border-accent-300 valid:border-accent-300"
        id={id}
        value={value}
        {...rest}
      />
      <label
        htmlFor={id}
        className="text-white absolute left-3 top-2 peer-valid:-translate-y-5  peer-focus:-translate-y-5 px-[2px] bg-inherit transition-all duration-300 pointer-events-none"
      >
        {label}
      </label>
    </div>
  );
}
