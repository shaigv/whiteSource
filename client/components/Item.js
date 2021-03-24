import React from 'react';
import StarRatings from 'react-star-ratings';



const Item = (props) => {

    return (

        < div className="item" >
            <div className="content">
                <div className="description"><strong>{props.header}</strong>
                    {props.header === "Score: " ?
                        <StarRatings
                            rating={parseInt(props.data)}
                            starRatedColor="yellow"
                            //changeRating={}
                            starDimension="28px"
                            numberOfStars={5}
                            name='rating'
                        /> :

                        props.data}
                </div>
                <br></br>
            </div>
        </div >

    );
}
export default Item;