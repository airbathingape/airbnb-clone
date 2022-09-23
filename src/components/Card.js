import React from "react"
import Star from '../assets/star.png'

export default function Card(props) {
    return (

        <section>
            <div className="card">
                <img src={`/images/${props.img}`} alt="katie" className="card--photo" />
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
