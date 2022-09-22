import React from "react"

export default function Card() {
    return (

        <section>
            <div className="card">
                <img src="../images/katie-zaferes.png" className="card--photo"/>
                    <div className="review">
                        <img src="../images/star.png" className="card--star"/>
                        <p>5.0 USA</p>
                    </div>
                <p>Life lessons with Katie Zaferes</p>
                <p><strong>From $136 / </strong> person</p>
                <span className="sold">SOLD OUT</span>
            </div>
        </section>
    );
}
