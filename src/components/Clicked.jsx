// Clicked.js
import React, { useEffect, useState,useRef } from 'react';
import { useSelector } from 'react-redux';
import { AiOutlineShareAlt } from 'react-icons/ai';
import { HiOutlineHeart } from 'react-icons/hi';
import {BiLeftArrowCircle} from 'react-icons/bi'
import './clicke.css';
import Posts from './Posts';
import { NavLink } from 'react-router-dom';

const Clicked = () => {
  const { postdata, curr } = useSelector((state) => state);
  const [display, setDisplay] = useState(null);
  const [activeButton, setActiveButton] = useState('details');
  const detailSectionRef = useRef(null);
  useEffect(() => {
    const post = postdata.find((d) => d.id === curr);
    setDisplay(post || null);

    if (detailSectionRef.current) {
      detailSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [curr, postdata]);

  return (
    <div className='clicked-container'>
      {display && (
        <>
         <div className="back">
        <NavLink to='/'> <BiLeftArrowCircle style={{color:'black',backgroundColor:'#fff',fontSize:'40px',marginRight:'7px',border:'none'}}/></NavLink>
          <h1>Post Number #{display.id}</h1>
         </div>
          <div className='postdetail' ref={detailSectionRef}>
            <div className='d'>
              <div
                className='imgdiv'
                style={{
                  backgroundImage: `url(https://picsum.photos/200?random=${display.id})`,
                }}
              >
                <div className='con'>
                  <p className='ttl'>{display.title}</p>
                  <div className='right'>
                    <AiOutlineShareAlt style={{marginRight:'10px'}}/>
                    <HiOutlineHeart style={{marginRight:'20px'}}/>
                  </div>
                </div>
              </div>
            </div>
            <div className='uinfo'>
             <div className="btn">
             <button
                className={activeButton === 'details' ? 'acti' : ''}
                onClick={() => setActiveButton('details')}
              >
                Details
              </button>
              <button
                className={activeButton === 'userInfo' ? 'acti' : ''}
                onClick={() => setActiveButton('userInfo')}
              >
                User Info
              </button>
             </div>
             <div className="div">
             <p>
                {activeButton === 'details' ? display.body : `Post Was Posted By ${display.userId}.`}
              </p>
             </div>
            </div>
          </div>

          <h1>More Posts</h1>
          <Posts />
        </>
      )}
    </div>
  );
};

export default Clicked;





