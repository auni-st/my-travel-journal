function Card(props) {
  console.log(props.item)

  return (
    <div className="card">
      <div>
        <img src= {props.item.img} alt="mount batur" className="spot-image"/>
      </div>
      <div>
        <div className="location">
          <img src="pinpoint.png" alt="pinpoint" className="pinpoint"/>
          <p className="country">{props.item.country}</p>
          <p className="maps">View on Google Maps</p>
        </div>
        <h2 className="spot">{props.item.spot}</h2>
        <p className="date">{props.item.date}</p>
        <p>{props.item.desc}</p>
      </div>
    </div>
  )
}

export default Card;