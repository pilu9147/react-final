import React, { useState } from 'react';
import './post.css';
import Posts from './Posts';
import { useSelector, useDispatch } from 'react-redux';

const Homepost = () => {
  const { loading, postdata, error, curr } = useSelector((state) => state);
  const dispatch = useDispatch();
  const [search, setSearch] = useState('');

  const handleSearch = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    setSearch(searchTerm);
  
    const filteredData = searchTerm!== ''
      ? postdata.filter((post) =>
          post.title.toLowerCase().includes(searchTerm)
        )
      : postdata; 
  
    dispatch({ type: 'POSTSUCCESS', payload: filteredData });
  };
  

  return (
    <>
      <div className='post'>
        <h1>Social Media For Travellers</h1>
        <input
          type='text'
          placeholder='search'
          value={search}
          onChange={handleSearch}
        />
        <Posts posts={postdata} />
      </div>
    </>
  );
};

export default Homepost;
