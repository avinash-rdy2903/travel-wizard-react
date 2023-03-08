// const HotelCards = () => {
//   return (
//     <h1>Hello</h1>
//   );
// };

// export default HotelCards;
import axios from 'axios';
import React, {ReactDOM} from 'react';
import Button from 'react-bootstrap/Button';
import styles from "./hotelcards.module.css";
// import Hotel from './hotel';
function HotelCards(hotels) {
  // var hotels = getServerSideProps(); // TODO uncomment
  // hotels = [{name:"The Hilton Suites",address:"Illinois, Chicago",availability:1,image:"https://images.unsplash.com/photo-1678107657724-19cb8d478f56?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1964&q=80"}, 
  //               {name:"Hyatt Grand",address:"Manhattan, New York",availability:2,image:"https://images.unsplash.com/photo-1535827841776-24afc1e255ac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8aG90ZWxzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"},
  //               {name:"Indiana Memorial Union",address:"Bloomington, Indiana",availability:0,image:"https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGhvdGVsc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"}
  //           ]
    console.log(hotels);
    if (hotels.length == 0) return (<div><h1>No results.</h1></div>)
    return (
      <div className={styles.wrapper}>
        {hotels.map(hotelData =>   {
          return (hotelData.availability)? 
            <Card
              img = {hotelData.image}
              title = {hotelData.name}
              address = {hotelData.address}
            /> 
            : <></>
          }
        )} 
        {/* <Card
            img="https://images.unsplash.com/photo-1678107657724-19cb8d478f56?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1964&q=80"
            title="The Hilton Suites"
            address="Illinois, Chicago"
        />
        <Card
            img="https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
            title="The Hilton Suites"
            address="Illinois, Chicago"
        />
  
        <Card
            img="https://images.unsplash.com/photo-1535827841776-24afc1e255ac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8aG90ZWxzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            title="Hyatt Grand"
            address="Manhattan, New York"
        />
  
        <Card
            img="https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGhvdGVsc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
            title="Indiana Memorial Union"
            address="Bloomington, Indiana"
        /> */}
      </div>
    )
  }
  
  function Card(props) {
    return (
      <div className={styles.card}>
        <div className={styles.card__body}>
          <img src={props.img} class={styles.card__image} />
          <h2 className={styles.card__title}>{props.title}</h2>
          <p className={styles.card__description}>{props.address}</p>
        </div>
        <Button className={styles.card__btn}>View Details</Button>
      </div>
    );
  }

  // pull data
  export async function getServerSideProps() {
    // TODO: make sure this gets ALL hotel data
    const { data } = await axios.get("https://localhost:8080/hotels?place=placeId&");
    return data.data;
  }
  // {status:200, data:hotelData}
  // hotelData = {name:hotel.name,address:hotel.address,availability:count,image:hotel.image}
  
  export default HotelCards;
//   ReactDOM.render(<App />, document.getElementById("root"));
  