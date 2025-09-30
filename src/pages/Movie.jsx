import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Movie = () => {
const [data, setData] = useState([])

    const API =
    "https://www.omdbapi.com/?i=tt3896198&apikey=1c12799f&s=titanic&page=1";

   const getMovieData = async ()=>{
     try {
        const res = await axios.get(API)
        console.log(res.data.search);
        setData(res.data.search)
        
     } catch (error) {
        console.log(error);
        
     }
   }


    useEffect(()=>{
        getMovieData();
    },[])


  return (
    <ul>{
        data.map((curElem) => {
            return <Card key={curElem.imbID} movieData = {curElem} />
        })
        }
    </ul>
  )
}

export default Movie