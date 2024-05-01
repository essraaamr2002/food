import React from 'react';
import { Button,Row ,Col} from 'react-bootstrap';


const Buttons = ({filterButton,allCategory}) => {
  const btngan=(cat)=>{
    filterButton(cat);
  }
  
  return (
    <Row className="my-2 mb-5  ">
    <Col className='d-flex justify-content-center' >
    {
      allCategory.length >=1 ? (allCategory.map(
        (cat)=>{
          return(
            <Button  onClick={()=>btngan(cat)}  className="btn mx-2" style={{background:'#B45B35',color:'black'}}>{cat}</Button>
          )
        }
      )):null
    }
    
    </Col>
    

    </Row>
  )
}

export default Buttons
