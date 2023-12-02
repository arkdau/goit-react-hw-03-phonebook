const Filter = ({ onChange }) => {
  return (
    <>
      <p>Find contacts by name</p>
      <input type="text" name="find" onChange={onChange} />
    </>
  );
};

export default Filter;
