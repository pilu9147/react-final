import React, { useState, useEffect } from 'react';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { useSelector, useDispatch } from 'react-redux';
import './post.css';
import { NavLink } from 'react-router-dom';
import { fetchpost } from '../redux/actiontypes/postaction';
import { getclicked } from '../redux/actiontypes/postaction';

const Posts = () => {
  const { loading, postdata, error, curr } = useSelector((state) => state);
  const [postIdToShowFullBody, setPostIdToShowFullBody] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchpost());
  }, []); // Empty dependency array ensures the effect runs only once on mount

  const toggleReadMore = (post) => {
    if (postIdToShowFullBody === post.id) {
      setPostIdToShowFullBody(null);
    } else {
      setPostIdToShowFullBody(post.id);
    }
  };

  return (
    <>
      {loading ? (
        <div class="loader-container">
    <div class="loader"></div>
  </div>

      ) : (
        <div className='cards'>
          {postdata.map((post) => {
            const isFullBody = postIdToShowFullBody === post.id;

            return (
              <div className='card' key={post.id}>
                <img src={`https://picsum.photos/200?random=${post.id}`} alt={post.id} />
                <p>
                {isFullBody ? post.title : post.title.slice(0,40)}
                    <span
                      onClick={() => toggleReadMore(post)}
                      style={{ color: '#F05A22', fontWeight: '700' }}
                    >
                      {isFullBody ? ' Read less...' : ' Read more...'}
                    </span>
                </p>
                <div className='below'>
                  <p className='desc'>
                    {isFullBody ? post.body : post.body.slice(0,100)}
                    <span
                      onClick={() => toggleReadMore(post)}
                      style={{ color: '#F05A22', fontWeight: '700' }}
                    >
                      {isFullBody ? ' Read less...' : ' Read more...'}
                    </span>
                  </p>
                  <div className='leftarr'>
                    <span className='sp' onClick={() => dispatch(getclicked(post.id))}>
                      <NavLink to='/item/:id'>
                        <MdOutlineKeyboardArrowRight style={{ fontSize: '40px', color: '#fff' }} />
                      </NavLink>
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default Posts;

// import React, { useState } from 'react';
// import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
// import { useSelector, useDispatch } from 'react-redux';
// import './post.css';
// import {NavLink} from 'react-router-dom'
// import { useEffect } from 'react';
// import { fetchpost } from '../redux/actiontypes/postaction';
// import { getclicked } from '../redux/actiontypes/postaction';
// const Posts = () => {
//   let { loading, postdata, error,curr } = useSelector((state) => state);
//   const [postIdToShowFullBody, setPostIdToShowFullBody] = useState(null);
//   console.log(loading, postdata, error);
//   let dispatch = useDispatch();


//     dispatch(fetchpost());
 

//   const toggleReadMore = (post) => {
//     if (postIdToShowFullBody === post.id) {
//       setPostIdToShowFullBody(null);
//     } else {
//       setPostIdToShowFullBody(post.id);
//     }
//   };

//   return (
//     <>
//       {loading ? (
//         <div className="spinner">
//         </div>
//       ) : (
//         <div className='cards'>
//           {postdata.map((post) => {
//             const isFullBody = postIdToShowFullBody === post.id;

//             return (
//               <div className='card' key={post.id}>
//                 <img src={`https://picsum.photos/200?random=${post.id}`} alt={post.id} />
//                 <p>{post.title}</p>
//                 <div className='below'>
//                   <p className='desc'>
//                     {isFullBody ? post.body : post.body.substring(0, 100)}
//                     <span
//                       onClick={() => toggleReadMore(post)}
//                       style={{ color: '#F05A22', fontWeight: '700' }}
//                     >
//                       {isFullBody ? ' Read less...' : ' Read more...'}
//                     </span>
//                   </p>
//                   <div className='leftarr'>
//                     <span className='sp' onClick={()=>dispatch(getclicked(post.id))}>
//                     <NavLink to='/item/:id'>
//                       <MdOutlineKeyboardArrowRight style={{ fontSize: '40px' , color:'#fff'}} />
//                     </NavLink>
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       )}
//     </>
//   );
// };

// export default Posts;














