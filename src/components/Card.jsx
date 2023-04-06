import React from "react"
import location from "/src/assets/location.png"

export default function Card() {
    return (
        <div className="card">
            <img className="card--image"src="https://source.unsplash.com/WLxQvbMyfas" />
            <div className="card--stats">

            <p className="card--location">Japan<a href="https://goo.gl/maps/1DGM5WrWnATgkSNB8">View on Google Maps</a></p>
            <h1>Mount Fuji</h1>
            <h5>12 Jan, 2021 - 24 Jan, 2021</h5>
            <p>Mount Fuji is the tallest mountain in Japan,
                standing at 3,776 meters (12,380 feet).
                Mount Fuji is the single most popular tourist
                site in Japan, for both Japanese and foreign tourists.
                </p>
            </div>
        
        
        </div>






    )
}


// title: "Mount Fuji",
// location: "Japan",
// googleMapsUrl: "https://goo.gl/maps/1DGM5WrWnATgkSNB8",
// startDate: "12 Jan, 2021",
// endDate: "24 Jan, 2021",
// description: "Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.",
// imageUrl: "https://source.unsplash.com/WLxQvbMyfas"
// }