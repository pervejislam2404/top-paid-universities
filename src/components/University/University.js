import React from 'react';
import './University.css'


const University = (props) => {
    const {university,setVarsity} = props;
    const {name,location,photo,rank,fee} = university; 
    return (
        <div className="col-4">

            {/* every-single-university-details */}
           <div className="card text-capitalize">
                   <img src={photo} height="200" width="100"className="card-img-top" alt="..."/>
               <div style={{backgroundColor: '#150050'}} className="card-body">
                   <h3 className="card-title">{name}</h3>
                    <p className="card-text text-light">{location}</p>
                    <h5 className="text-light">fee per month ${fee}</h5>
                   <p className="text-light">ranking {rank}</p>

                   {/* university-adding-handler */}
                   <button onClick={()=> setVarsity(university)} className="btn btn-warning fw-bold"><i className="fas fa-th-list"></i>Add to list</button>
               </div>
            </div>
        </div>
    );
};

export default University;