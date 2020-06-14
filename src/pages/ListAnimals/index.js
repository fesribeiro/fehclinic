import React from 'react';
import { useSelector } from 'react-redux';

import { Container, List, Title } from './styles';
import Background from '../../components/Background';

import Card from './components/Card';

const ListAnimals = () => {
  const animals = useSelector((state) => state.register.data);
  // const data = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <Background>
      <Container style={{ flex: 1 }}>
        <Title>Animais Cadastrados</Title>

        <List
          data={animals}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => <Card data={item} />}
        />
      </Container>
    </Background>
  );
};

export default ListAnimals;
