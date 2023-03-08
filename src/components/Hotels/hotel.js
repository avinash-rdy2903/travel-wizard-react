

function Hotel(props) { // TODO: add info to prop
    return (
        <>
            <div className="">
                <div className="">
                <img src={props.img} class="" />
                <h2 className="">{props.title}</h2>
                <p className="">{props.address}</p>
                </div>
                <button className="">View Details</button>
            </div>
        </>
    );
}