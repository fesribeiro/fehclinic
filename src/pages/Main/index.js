import React from 'react';

import { ScrollView, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  Container,
  Header,
  Title,
  CustomInput,
  Body,
  CustomButton,
  ButtonSection,
  TextButton,
} from './styles';

// import { Container } from './styles';

const Main = () => {
  return (
    <Container>
      <ScrollView pagingEnabled>
        <Header>
          <Title>Cadastro</Title>
        </Header>

        <Body>
          <CustomInput
            autoCapitalize="none"
            placeholder="Nome do Pet"
            required
          />
          <CustomInput placeholder="Especie" required />
          <CustomInput placeholder="Tutor" required />
          <CustomInput placeholder="Raça" required />
          <CustomInput placeholder="Sexo" required />
          <ButtonSection>
            <CustomButton onPress={() => {}}>
              <Icon name="check" size={25} color="#FFF" />
              <TextButton>Cadastrar</TextButton>
            </CustomButton>
          </ButtonSection>
        </Body>
      </ScrollView>
    </Container>
  );
};

export default Main;
