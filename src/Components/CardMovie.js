import { Card } from "react-bootstrap"
import Rating from '@mui/material/Rating';
import { useState } from "react";
import { Link } from "react-router-dom";
const CardMovie =({el,moovie,setMoovie})=>{
  const [showMore, setShowMore] = useState(false);
  const handleDelete=(a)=>{
    setMoovie(moovie.filter((el,i,t)=> el.id != a))
  }
    return(
        <div>
            <Card style={{ width: '18rem' }}>
       <Link  to={`/moovie/${el.id}`}><Card.Img  style={{width :"280px" , height:"400px"}} variant="top" src={el.poster}/></Link> 
        <Card.Body>
          <Card.Title >{el.title}</Card.Title>
          <Card.Text>
         
            {showMore ? el.desc : el.desc.substring(0,70)}
            <button className={showMore?"btnless" : "btnmore"} onClick={()=>setShowMore(!showMore)}>show more</button>
            </Card.Text>
          <Rating name="read-only" value={el.rating} readOnly />
          <br/>
          <button variant='danger' onClick={()=>handleDelete(el.id)}>DeleteMoovie</button>
          </Card.Body>
      </Card>
        </div>
    )
}
export default CardMovie