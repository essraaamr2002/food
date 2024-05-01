import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {Row,Col} from 'react-bootstrap';

function BasicExample({dataList}) {
 
  return (
      <Row >
      {
        dataList.length >=1 ? (dataList.map((items)=>{
              return(
                <Col  sm="12" className="mb-3 ">
                <Card className=' d-flex flex-row'>
              <Card.Img  style={{ width:" 200px"}} className='img-item' variant="top" src={items.imgUrl}
              />
                <Card.Body>
                  <Card.Title>{items.title}</Card.Title>
                  <Card.Text className='item-description'>
                  {items.description} 
                  </Card.Text>
                  <Button style={{background:'#B45B35',color:'black'}}>Go somewhere</Button>
                </Card.Body>
              </Card>
               </Col>
              )
        })) : <h2>No Order </h2>
      }
      
    </Row>
    
    
  );
}

export default BasicExample;