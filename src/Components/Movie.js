import { useNavigate, useParams } from "react-router-dom"
import { Button } from "react-bootstrap"

const Movie = ({moovie})=>{
    const {id} = useParams()
   const found= moovie.find((el,i,t)=>el.id==id)
   const navigate = useNavigate()
    return(
        <div className="big">
          <div className="moviestyle">
          <img src={found.poster} alt="not found"/>
            <div className="descmovie">
                <h1 >{found.title}</h1>
                <p>{found.desc}</p>
            </div>
                <iframe width="560" height="315" src={found.trailer}></iframe>
            </div>
                <br/>
                <div className="d-grid gap-2">
                  <Button variant="secondary" size="lg" onClick={()=>navigate('/')}>
                     Home
                  </Button>
                 </div>
               
       
            
        </div>
    )
}
export default Movie