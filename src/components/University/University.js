import React from 'react';
import './University.css'


const University = (props) => {
    const {university,setVarsity} = props;
    const {name,type,location,photo,rank,fee} = university; 
    return (
        <div className="col-4">

            {/* every-single-university-details */}
           <div className="card text-capitalize p-3 my-2">
                   <img src={photo} height="200" width="100"className="card-img-top rounded" alt="..."/>
               <div style={{backgroundColor: 'white'}} className="card-body p-0 pt-3">
                   <h3 className="card-title text-black">{name}</h3>
                    <p className="card-text clr">{location}</p>
                    <p className="card-text clr">Type : {type}</p>
                    <h5 className="clr">fee per month<span style={{color: 'orange'}}> ${fee}</span></h5>
                   <p className="clr">rank {rank}</p>

                   {/* university-adding-handler */}
                   <button onClick={()=> setVarsity(university)} className="btn btn-warning fw-bold"><i className="fas fa-th-list"></i>Add to list</button>
               </div>
            </div>
        </div>
    );
};

export default University;