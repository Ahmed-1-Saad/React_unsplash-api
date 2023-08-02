import { useState } from "react";



const SearchBar = ({ onSubmite }) => {

const [term, setTerm] = useState('');

  const handleFormSubmit = event => {
    event.preventDefault();

    onSubmite(term);
  };


const onchangeHandler = (event)=>{
  setTerm(event.target.value);
  console.log(event.target.value)
  }


  return (
    <form  onSubmit={handleFormSubmit}>
      <input value={term}  onChange={onchangeHandler}></input>
    </form>
  );
};

export default SearchBar;
