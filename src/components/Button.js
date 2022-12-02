export const Button = ({ type, name, component, onClick }) => {
  return (
    <>
      <button type={type} onClick={onClick}>
        {name}
      </button>
      <h2>{component}</h2>
    </>
  );
};
