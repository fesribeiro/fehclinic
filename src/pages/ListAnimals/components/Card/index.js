import React from 'react';
import { View } from 'react-native';

import { Container, TextAnimal, Tutor, Breed } from './styles';

const Card = ({ data }) => {
  return (
    <Container>
      <TextAnimal>{data.name}</TextAnimal>
      <Tutor>{data.tutor}</Tutor>
    </Container>
  );
};

export default Card;
