import './App.css';
import Header from './components/Header/Header';
import {useState,useEffect} from 'react';
import University from './components/University/University';
import Cart from './components/Cart/Cart';

function App() {
  // total-university
  const [items,setItems] = useState([]);

  // total-added-university
  const [added,setAdded] = useState([]);

  // fetching-all-university
useEffect(() =>{
  fetch('./myData.json')
  .then(res => res.json())
  .then(data => setItems(data))
},[])

// handling-added-university
function setUniversityList(university) {
  const newAdded = [...added,university];
  setAdded(newAdded);
}


  return (
    <div className="App">
      <main style={{backgroundColor: '#C8C6C6',overflow: 'hidden'}}>
           <Header></Header>
           <div className="display-universities row mt-5 px-5">

             {/* university-name-display-section */}
             <div className="col-9 row px-5">
                {
                  items.map(university => <University key={university.key} setVarsity={setUniversityList} university={university}/>)
                }
             </div>

             {/* quantity-name-price-calculate-cart-section */}
              <div className="col-3">
                  <Cart addedVarsity={added}/>
              </div>
           </div>
      </main>
    </div>
  );
}

export default App;
