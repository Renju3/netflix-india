import { useState } from "react";
import instance from "../instance";
import { useEffect } from "react";
import './Banner.css';


function Banner({fetchurl}){
    const base_url = "https://image.tmdb.org/t/p/original";
    const [movie,setMovieBanner] = useState();
    const fetchData = async()=>{
        const {data} = await instance.get(fetchurl);

        setMovieBanner(data.results[Math.floor(Math.random()*data.results.length)])
    }
    useEffect(() => {
        fetchData();
    }, []);
   //console.log("movie banner images");
   //console.log(movie)
    return(
        <>
        <div style={{height:"600px",backgroundPosition:"center",backgroundAttachment:"fixed",width:"100%", backgroundImage:`url(${base_url}${movie?.backdrop_path})`}}>
            <div className="banner_content">
                <h1>{movie?.name}</h1>
                <button className="btn btn-danger">play<i class="fa-solid fa-play bg-transparent ms-2"></i></button>
                <button className="btn border-white ms-3 more">More Info<i class="fa-solid fa-caret-down bg-transparent ms-2"></i></button>
                <h2>{movie?.overview?.slice(0,200)}....</h2>  
            </div>
        </div>
        
        </>
    )
}
export default Banner;
        