import "../App.css"
import data from "../redux/redux"
function Main(){

    return (
        <div className="Main">
            <img className="Main_background" src="./images/background1.png"></img>
            <div className="movies_block">
                {
                    data.map((d)=>(
                        <div className="movie_block" key={d.id}>
                            <p>Name: {d.name}</p>
                            <p>Genre: {d.genre}</p>
                        </div>
                    ))
                }
            </div> 
            
        </div>
    )
}

export default Main;