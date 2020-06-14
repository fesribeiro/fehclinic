import React from 'react';
import { View, Alert } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import { Container, TextAnimal, Tutor, Info } from './styles';

const Card = ({ data, navigation }) => {
  return (
    <Container>
      <Info>
        <TextAnimal>{data.name}</TextAnimal>
        <Tutor>{data.tutor}</Tutor>
      </Info>
      <Icon
        name="assignment-ind"
        size={30}
        color="#5656e9"
        onPress={() =>
          Alert.alert(
            'Funcionalidade indisponivel !',
            'Funcionaliade ainda não criada, favor aguardar.'
          )
        }
      />
    </Container>
  );
};

export default Card;
