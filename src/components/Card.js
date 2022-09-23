import React from "react"
import Star from '../images/star.png'

export default function Card(props) {
    return (

        <section>
            <div className="card">
                <img src={props.img}/>
                    <div className="review">
                        <img src={Star} alt="star" className="card--star"/>
                        <p>{props.rating} ({props.reviewCount}) {props.country}</p>
                    </div>
                <p>{props.title}</p>
                <p><strong>From ${props.price} / </strong> person</p>
                <span className="sold">SOLD OUT</span>
            </div>
        </section>
    );
}
