import Search from "../Search/search";
import styles from "./home.module.css";
import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import axiosInstance from "../../API/axiosInstance";
import {Link } from "react-router-dom";

const getCitiesOne = async (str) => {
  try {
    let searchableCity = str.replace(/,/g, "");
    let url = "search/" + searchableCity;

    let { data } = await axiosInstance.get(url);
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

  return (
    <div className={styles.container}>  
    {/* class={styles.bg} */}
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
        <Link to="/search" state={{ val: value, dat: data }}>
        {/* <Link to="/search" state={{ val: value, dat: data, dest: place }}> */}
          <button style={{marginTop:15}} onClick={Search.search}>Search</button>
        </Link>
        {/* <Button on */}
        
      </div>
      <h1>{attractions}</h1>
    </div>
  );
}