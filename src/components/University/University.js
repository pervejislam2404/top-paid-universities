import React from 'react';
import './University.css'


const University = (props) => {
    const {university,setVarsity} = props;
    const {name,type,location,photo,rank,fee,yt,fb,ldn} = university; 
    return (
        <div className="col-12 col-md-6 col-lg-4">

            {/* every-single-university-details */}
           <div className="card text-capitalize p-3 my-2">
                   <img src={photo} height="200" width="100"className="card-img-top rounded" alt="..."/>
               <div style={{backgroundColor: 'white'}} className="card-body p-0 pt-3">
                   <h3 className="card-title text-black">{name}</h3>
                    <p className="card-text clr">{location}</p>
                    <p className="card-text clr">Type : {type}</p>
                    <h5 className="clr">fee per month<span style={{color: 'orange'}}> ${fee}</span></h5>
                   <p className="clr">rank {rank}</p>

                   {/* university-event-handler */}
                   <button onClick={()=> setVarsity(university)} className="btn btn-warning fw-bold"><i className="fas fa-th-list"></i>Add to list</button>
                   {/* social-media-link */}
                   <div className="fs-1">
                   <a href={ldn} target="blank"><i className="fab fa-linkedin text-primary mx-2"></i></a>
                     <a href={fb} target="blank"><i className="fab fa-facebook-square text-primary mx-2"></i></a>
                      <a href={yt} target="blank"><i className="fab fa-youtube-square text-danger mx-2"></i></a>
                   </div>
               </div>
            </div>
        </div>
    );
};

export default University;