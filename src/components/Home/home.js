// import Head from "next/head";
import styles from "./home.module.css";
import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import axios from "axios";
import { Button } from "react-bootstrap";

const getCitiesOne = async (str) => {
  try {
    let searchableCity = str.replace(/,/g, "");
    let url = "http://localhost:8080/search/" + searchableCity;

    let { data } = await axios.get(url);
    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
  }
};

export default function Home() {
  const [optionsOne, setOptionsOne] = useState([]);
  const [value, setValue] = useState("");
  const [data,setData] = useState([]);
  const [attractions,setAttractions] = useState([]);

  const onChangeOne = async (e) => {
    if (e.target.value) {
      let d = await getCitiesOne(e.target.value);
      setOptionsOne(d);
      setData(d);
      console.log(data+"here");
    }
  };
  const search = async () => {
    try{
      for(let i=0;i<data.length;i++) {
        let place = data[i];
        if(place.name===value){
          console.log(place)
          let res = await fetch(`http://localhost:8080/place/${place._id}`,{
            method: "GET",
            credentials: 'include'
        })
          let resJson = await res.json();
          // console.log(JSON(resJson));
          if(resJson.status === 200){
            // setData(JSON.stringify(resJson.data,null,4));
            console.log(resJson.place.attractions);
            console.log(JSON.stringify(resJson.place.attractions));
            console.log(JSON.stringify(resJson.place,null,4));
          }
        }
      }
    }catch(e){
      console.log(e.stack);
    }
  }

  return (
    <div className={styles.container}>
      
      
      <div style={{ marginTop: 50 }}>
      <h2 style={{marginBottom:15}}>Search your next destination</h2>
        <Autocomplete
          freeSolo
          filterOptions={(x) => x}
          onChange={(e) => setValue(e.target.innerText)}
          options={optionsOne ? optionsOne.map((obj) => obj.name) : []}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Search One"
              onChange={(e) => onChangeOne(e)}
            />
          )}
        />
        <button style={{marginTop:15}} onClick={search}>Search</button>
        {/* <Button on */}
        
      </div>
      <h1>{attractions}</h1>
    </div>
  );
}