import React from 'react';
import {useParams} from "react-router-dom";

const ResMenu = () => {
    const {resId} = useParams();
    console.log(resId);
  return (
    <div className='menu'>

    </div>
  )
}

export default ResMenu