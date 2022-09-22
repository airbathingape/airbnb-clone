import React from "react"
import Katie from '../images/katie-zaferes.png'
import Star from '../images/star.png'

export default function Card() {
    return (

        <section>
            <div className="card">
                <img src={Katie} alt="katie zaferes" className="card--photo"/>
                    <div className="review">
                        <img src={Star} alt="star" className="card--star"/>
                        <p>5.0 USA</p>
                    </div>
                <p>Life lessons with Katie Zaferes</p>
                <p><strong>From $136 / </strong> person</p>
                <span className="sold">SOLD OUT</span>
            </div>
        </section>
    );
}
