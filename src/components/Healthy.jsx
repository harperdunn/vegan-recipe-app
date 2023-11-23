import { useEffect, useState } from "react";
import styled from "styled-components";
import {Splide, SplideSlide} from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import {Link} from "react-router-dom";


function Healthy(){
    const [healthy, setHealthy ]= useState([]);
    useEffect(()=>{
        getHealthy(); //running as soon as component gets mounted
    },[]);

    const getHealthy= async () => { //async bc theres data we need to wait for

        const check = localStorage.getItem('healthy');
        if(check){
            setHealthy(JSON.parse(check));
        }else{
        const api= await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_APIKEY}&number=4&diet=vegan&sort=random&minfiber=5`);
        const data = await  api.json();
        localStorage.setItem('healthy', JSON.stringify(data.results));
        setHealthy(data.results);
        console.log(data.results);
        }

        
    };
//gets all data from array and maps over it, go thru each recipe and output something
    return (<div>
                <Wrapper>
                    <h3>Healthier Picks</h3>
                    <Splide options={{
                        perPage: 4,
                        arrows: false,
                        pagination: false,
                        drag: 'free',
                        gap: '5rem',
                    }}>
                    {healthy.map((recipe)=>{
                        return(
                            <SplideSlide key={recipe.id}>
                            <Card>
                                <Link to = {"/recipe/"+recipe.id}>
                                <p>{recipe.title}</p>
                                <img src={recipe.image}alt={recipe.title} />
                                <Gradient />
                                </Link>
                            </Card>
                            </SplideSlide>
                        );
                    })}
                    </Splide>
                </Wrapper>
        </div>
        ); 
                };

const Wrapper = styled.div`
    margin: 4rem 0rem;
    `;
const Card = styled.div`
    min-height: 25rem;
    border-radius: 2rem;
    overflow: hidden;
    position: relative;
    img{
        border-radius: 2rem;
        position: absolute;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;

    }
    p{
        position: absolute;
        z-index: 10;
        left: 50%;
        bottom: 0%;
        transform: translate(-50%, 0%);
        color: white;
        width: 100%;
        text-align: center;
        font-weight: 600;
        font-size: 1rem;
        height: 40%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

const Gradient = styled.div` 
    z-index: 3;
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.5));

`;
export default Healthy