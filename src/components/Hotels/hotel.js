import { useLocation } from 'react-router-dom';
import styles from "./hotel.module.css";

function Hotel() {
    const location = useLocation();
    const { hotel } = location.state;
    const formattedLoremIpsum = "\tLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aenean sed adipiscing diam donec adipiscing tristique risus nec. Varius vel pharetra vel turpis nunc eget lorem dolor. Orci eu lobortis elementum nibh tellus molestie. Vulputate mi sit amet mauris commodo. Duis convallis convallis tellus id interdum velit laoreet id donec. Pellentesque pulvinar pellentesque habitant morbi. Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi tristique. Aliquam malesuada bibendum arcu vitae elementum curabitur. Tincidunt arcu non sodales neque sodales ut etiam. Arcu bibendum at varius vel pharetra vel. Sagittis purus sit amet volutpat consequat mauris nunc.\n\n\tDui vivamus arcu felis bibendum ut. Mattis nunc sed blandit libero volutpat sed cras ornare arcu. Lobortis elementum nibh tellus molestie nunc non blandit massa enim. A diam sollicitudin tempor id eu nisl nunc mi ipsum. At augue eget arcu dictum. Volutpat est velit egestas dui id ornare arcu odio. Etiam erat velit scelerisque in dictum non consectetur. Condimentum id venenatis a condimentum vitae sapien pellentesque habitant. Lobortis elementum nibh tellus molestie nunc non blandit massa enim. Morbi quis commodo odio aenean sed adipiscing diam donec adipiscing. Imperdiet dui accumsan sit amet nulla facilisi morbi tempus. Amet risus nullam eget felis. Amet justo donec enim diam. Placerat in egestas erat imperdiet sed euismod.\n\n\tNisl pretium fusce id velit ut. Consequat ac felis donec et. Augue mauris augue neque gravida in. Urna neque viverra justo nec ultrices dui sapien eget mi. Nibh praesent tristique magna sit amet purus gravida quis blandit. Sagittis orci a scelerisque purus semper. Amet justo donec enim diam vulputate ut pharetra sit. Et malesuada fames ac turpis egestas maecenas pharetra convallis posuere. Augue interdum velit euismod in pellentesque massa. Id aliquet risus feugiat in ante metus dictum. Augue ut lectus arcu bibendum at varius vel pharetra vel. Sagittis eu volutpat odio facilisis mauris sit amet. Placerat vestibulum lectus mauris ultrices eros in cursus turpis. Vel quam elementum pulvinar etiam non quam lacus suspendisse. Consequat ac felis donec et odio pellentesque diam volutpat. Aliquet enim tortor at auctor urna. Orci porta non pulvinar neque laoreet suspendisse interdum consectetur.";
    return (
        <>
            <div className={styles.card}>
                <img src={hotel.image} class={styles.card__image} />
                <h2 className={styles.card__title}>{hotel.name}</h2>
                <p className={styles.card__address}>Address: {hotel.address}</p>
                <p className={styles.card__availability}>Rooms available: {hotel.availability}</p>
                <p className={styles.card__description}> 
                    {formattedLoremIpsum}
                    {/* TODO: replace with description */}
                </p>

            </div>
        </>
    );
}

// hotelData = {name:hotel.name,address:hotel.address,availability:count,image:hotel.image}

export default Hotel;