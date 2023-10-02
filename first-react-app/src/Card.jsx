// import diamond1 from "./assets/pexels-the-glorious-studio-10475791.jpg"
export default function Card({pic, title, price = "$1,000", onSale = false, info=[]}){
    const styles = {boxShadow: onSale && "0 0 10px 5px #48abe0"}
    return(
        
        <div className="card" style={styles}>
            <img src={pic} alt="" width="100"/>
            <h2>{title}</h2>
            <p>{price}</p>
            <ul>
                {
                info.map((item) => (<li>{item}</li>))
                }
            </ul>
            {onSale && <div className="onSale" ><p>SALE!</p></div>}
        </div>
    )
}