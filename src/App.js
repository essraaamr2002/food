
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './component/Navbar';
import Head from './component/Head';

import Buttons from './component/Buttons';
import Card from './component/Card'
import { Container } from 'react-bootstrap';
import { useState } from 'react';
import { items } from './data';
// import Zoom from 'react-reveal/Zoom';

// import { NavScrollExample } from './Navbar'; // Correct


function App() {
  const [dataList,setData]=useState(items);
  const itemsCard=(items)=>{
  setData([items])
}
const search =(word)=>{
  if(word !== ''){
    const newsearch=items.filter((item)=>item.title===word)
    setData(newsearch);
}
  }
  
const filterButton=(cat)=>{
  if (cat==='الكل'){
    setData(items)}
  else{
    const newArr=items.filter((item)=>item.category===cat)
    setData(newArr)
  }
  }
  
const allCategory=['الكل',...new Set(items.map((i)=>i.category))]




  return (
     <div>
      <Navbar search={search}/>
      <Container>
      <Head />
      
      <Buttons filterButton={filterButton} allCategory={allCategory} />
      
      
      <Card dataList={dataList}/>
      </Container>
     
      
    
     </div>
      
  );
}

export default App;
