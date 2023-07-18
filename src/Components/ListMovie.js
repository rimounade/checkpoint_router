import { Route, Routes } from "react-router-dom"
import CardMovie from "./CardMovie"
import Movie from "./Movie"
import AddMovie from './AddMovie';
import FilterMovie from './FilterMovie';
const ListMovie = ({moovie,setMoovie,search,rate,validRate,setSearch,setRate,setValidRate}) =>{
    var x=moovie.filter((el,i,t)=> el.title.toUpperCase().includes(search.toUpperCase())&&el.rating==rate)
    var y=moovie.filter((el,i,t)=> el.title.toUpperCase().includes(search.toUpperCase()))
    return (
        <div >
            <div>
            <FilterMovie  setSearch={setSearch} setRate={setRate} search={search} rate={rate} setValidRate={setValidRate}/>
             <AddMovie moovie={moovie} setMoovie={setMoovie}/>
            </div>
            <div className="Mov">
            {/* affichage de la liste card */}
            {
                // test sur state validrate
                validRate?
                 
                <>
                 {
                    x.length ==0 ? <h1>not found</h1> :x.map((el,i,t)=> <CardMovie key={el.id} el={el} moovie={moovie} setMoovie={setMoovie}/>)
                 }
                </>
                :
                <>
                    {
                        y.length==0?<h1>not found</h1>: y.map((el,i,t)=> <CardMovie key={el.id} el={el} moovie={moovie} setMoovie={setMoovie}/>)
            }
                </>
                
            }
            </div>
            
         
        </div>
    )
}
export default ListMovie