import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import styles from './search.module.css';
import { Link } from 'react-router-dom';
import { Button } from "react-bootstrap";
import axiosInstance from "../../API/axiosInstance";

function Search() 
{
    const [attractions,setAttractions] = useState([]);
    const location = useLocation();
    const { val, dat } = location.state;    
    const [isSaved,setSaved] = useState([]);
    const [date, setDate] = useState('');
  
    const save = async (e) => {
      e.preventDefault();
  
      let place = dat[0];
  
      console.log(`Saving:
        placeId: ${place._id},
        date: ${date}`);
  
      try{
          console.log("doing my best here");
          const { data: res } = await axiosInstance.post(`cart/places`, {
                visitingDate: date,
                placeId: place._id,
              });
          console.log(res);
          console.log("done");
          setSaved(69);
      }catch(e){
        console.log(e.stack);
      }
    }


    useEffect(() => {
        console.log('Hi ')
        console.log(dat)
        console.log(val)
        search();
    }, [])
    
    async function search() {
        try{
          for(let i=0;i<dat.length;i++) {
            console.log("for "+i);
            let place = dat[i];
            if(place.name===val){
              console.log(place)
              const { data: res } = await axiosInstance.get(`place/${place._id}`);
                // let resJson = await res.json();
                if(res.status === 200){
                    console.log(res);
                    // console.log(res.place.attractions);
                    setAttractions(res.place.attractions);
                    // console.log(attractions);
                    // console.log(JSON.stringify(resJson.place.attractions));
                    // console.log(JSON.stringify(resJson.place,null,4));
                }
            }
          }
        }catch(e){
        }   
      }

    function Card(props) {
        return (
          <div className={styles.card}>
            <div className={styles.card__body}>
              <img alt="error" src={props.a.image} class={styles.card__image} />
              <h2 className={styles.card__title}>{props.a.name}</h2>
              <p className={styles.card__description}>{props.a.address}</p>
            </div>
            <Link to="/searchResult" state={{ hotel: props.a }}>
              <Button className={styles.card__btn}>View Details</Button>
            </Link>
          </div>
        );
      }

    return (
        <div>
            <h2>Hey</h2>
            <h2>{dat[0].name}</h2>
                {/* TODO: this date thing will belong somewhere else and be required */}
                <label htmlFor="date">Date:</label>
                <input
                    type="date"
                    id="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                />
            {!(isSaved == 69) && <Button className={styles.card__btn} onClick={save}>Save {dat[0].name} to itinerary</Button>}
            {(isSaved == 69) && <p className={styles.saved}>Saved</p>}
            {dat[0].attractions && dat[0].attractions.map(attraction =>   {
                    return <Card a = {attraction} />
                }
                )} 
            {/* {val}
            {dat} */}
            {/* {resJson.place.attractions} */}
        </div>
        
    )
};

export default Search;