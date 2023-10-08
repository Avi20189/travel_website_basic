import {useState} from 'react';
function Card({id, name, info, image, price,removeTour}) {

    const [readmore, setReadmore] = useState(false);
    const description = readmore ? info : `${info.substring(0,200)}....`;


//this function readmoreHandler is switching between readmore and show less. 

    function readmoreHandler(){
        setReadmore(!readmore);
    }

     return (
        <div className="card">

            <img src = {image} className="image" alt=""></img>
            <div>
            <div className="tour-details">
                <h4 className="tour-price">₹{price}</h4>
                <h4 className="tour-name">{name}</h4>
            </div>

            <div className="description">
                {description}
                <span className="read-more" onClick={readmoreHandler}>
                    {readmore ? `show less`: `read more`}
                </span>
            </div>
            </div>

            <button className="btn-red" onClick={() => removeTour(id)}>
                Not interested
            </button>
        </div>
     )
}

export default Card;