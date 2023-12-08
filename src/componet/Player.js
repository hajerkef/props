import React from 'react'
import Data from '../database/Data'
import 'bootstrap/dist/css/bootstrap.css'
import Playerlist from './Playerlist'

export default function Player() {
  return (
    <div>
        {
            Data.map((ele)=>(
                <div class="card" style={{width: '18rem'}} key={ele.id}  >
  <img src={ele.image} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">{ele.name}</h5>
    <p class="card-text">Some quick example text to build on</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">{ele.jersynumber}</li>
    <li class="list-group-item">{ele.nationality}</li>
    <li class="list-group-item">A thi</li>
  </ul>
  <div class="card-body">
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
  </div>
  <Playerlist playerName={ele.name} playerImage={ele.image}/>
</div>


            )



            )


        }
        
      
    </div>
  )
}
