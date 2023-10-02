import Card from "./Card"
export default function CardConatiner(){
    return(
        <div className="CardContainer">
        <Card pic="src\assets\pexels-the-glorious-studio-10475791.jpg" title="Ice Lake" price="$899" info={["Round Cut","1.0 karts","White Gold", "2022 Collection"]}/>
        <Card pic="src\assets\pexels-the-glorious-studio-10475793.jpg" title="Princess" onSale={true} />
        <Card pic="src\assets\pexels-the-glorious-studio-10475794.jpg" title="Swan" price="$1,399" onSale={true} info={["Round Cut","1.0 karts","White Gold", "2022 Collection"]}/>

        </div>
    )
}