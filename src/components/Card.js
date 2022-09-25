import React from "react"
import Star from '../assets/star.png'

export default function Card(props) {

    let badgeText
    if (props.item.openSpots === 0) {
      badgeText = "SOLD OUT";
    } else if (props.item.location === "Online") {
      badgeText = "ONLINE";
    }


  return (

    <section>
      <div className="card">
        <img src={`/images/${props.item.coverImg}`} alt="katie" className="card--photo" />
        <div className="review">
          <img src={Star} alt="star" className="card--star" />
          <p>{props.item.stats.rating} ({props.item.stats.reviewCount}) {props.item.location}</p>
        </div>
        <p>{props.item.title}</p>
        <p><strong>From ${props.item.price} / </strong> person</p>
        {badgeText && <div className="sold">{badgeText}</div>}
      </div>
    </section>
  );
}
