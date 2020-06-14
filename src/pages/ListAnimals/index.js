import React from 'react';
import { useSelector } from 'react-redux';

import { Container, List, Title } from './styles';
import Background from '../../components/Background';

import Card from './components/Card';

const ListAnimals = ({ navigation }) => {
  const animals = useSelector((state) => state.register.data);
  console.log(navigation);

  return (
    <Background>
      <Container style={{ flex: 1 }}>
        <Title>Animais Cadastrados</Title>

        <List
          data={animals}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => (
            <Card data={item} navigation={navigation} />
          )}
        />
      </Container>
    </Background>
  );
};

export default ListAnimals;
