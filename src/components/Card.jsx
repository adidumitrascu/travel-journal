import React from "react"

export default function Card(props) {
    const {title, location, googleMapsUrl, startDate,
    endDate, description, imageUrl} =props.item
    return (
        <div className="card">
            <img className="card--image" src={imageUrl} />
            <div className="card--stats">
                <p className="card--location">{location}<a
                 href={googleMapsUrl}>View on Google Maps</a></p>
                <h1>{title}</h1>
                <h5>{startDate} - {endDate}</h5>
                <p className="card--description">{description}</p>
            </div>
        </div>
    )
}