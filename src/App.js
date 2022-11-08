import {useState, useEffect} from 'react'
import Shop from "./components/Shop";
import axios from 'axios';
function App() {
  const [ShopItems, setShopItems]=useState([]);
  const [loading, setLoading]= useState(true);
useEffect(()=>{
  axios.get("https://fakestoreapi.com/products").then(({data})=>{
    setLoading(false)
    setShopItems(data);
  });

},[])


  return (
    <div>
      <Shop loading={loading} items={ShopItems} onItemAdd={itemData=>{
        setShopItems([...ShopItems,itemData])
      }}/>
  
    </div>
  );
}

export default App;
