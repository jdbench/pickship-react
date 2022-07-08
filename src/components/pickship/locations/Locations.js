import React from 'react';
import AddLocationButton from './AddLocationButton';
import { Container } from 'react-bootstrap';
import Location from './Location';
import Product from '../products/Product';

export default function Locations() {

  return (
    <>
      <Container>
        <div>Locations</div>
        <AddLocationButton />
      </Container>
    </>
    
  )
}
