import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import animal from '../components/data';

function Carte() {
  return (
    <div className='Carte'>
    <Card style={{ width: '19rem' }}>
      <Card.Body>
        <img src={animal.photo}/>
        <Card.Title>{animal.breed}</Card.Title>
        <Card.Text>{animal.description}</Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </div>
  )
}

export default Carte