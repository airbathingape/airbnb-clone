import React from "react"
import Star from '../assets/star.png'

export default function Card(props) {

    let badgeText
    if (props.openSpots === 0) {
      badgeText = "SOLD OUT";
    } else if (props.country === "Online") {
      badgeText = "ONLINE";
    }
  return (

    <section>
      <div className="card">
        <img src={`/images/${props.img}`} alt="katie" className="card--photo" />
        <div className="review">
          <img src={Star} alt="star" className="card--star" />
          <p>{props.rating} ({props.reviewCount}) {props.country}</p>
        </div>
        <p>{props.title}</p>
        <p><strong>From ${props.price} / </strong> person</p>
        {badgeText && <div className="sold">{badgeText}</div>}
      </div>
    </section>
  );
}
