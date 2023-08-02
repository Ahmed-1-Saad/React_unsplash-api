import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import ImageList from './components/ImageList';
import SearchImages from './api';


function App() {

const [images , setImages] = useState([])

  const handleSubmit = async(term )=> {
  const result = await SearchImages(term)

  setImages(result)
  };

  return (
    <div>
      <h1>Start Hear</h1>

      <SearchBar onSubmite={handleSubmit} />

      <ImageList images={images}/>
    </div>
  );
}

export default App;
