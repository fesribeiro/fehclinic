import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { ScrollView } from 'react-native';
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

import { registerAnimal } from '../../store/modules/register/actions';

const Register = ({ navigation }) => {
  const dispatch = useDispatch();

  const [input, setInput] = useState({});

  function addAnimal(data) {
    if (data.name && data.tutor) {
      dispatch(registerAnimal({ ...data }));
      setInput({});
      navigation.navigate('Listar');
    }
  }

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
            value={input.name}
            onChangeText={(text) => setInput({ ...input, name: text })}
          />
          <CustomInput
            autoCapitalize="none"
            placeholder="Especie"
            value={input.specie}
            onChangeText={(text) => setInput({ ...input, specie: text })}
          />
          <CustomInput
            placeholder="Tutor"
            value={input.tutor}
            onChangeText={(text) => setInput({ ...input, tutor: text })}
          />
          <CustomInput
            placeholder="Raça"
            value={input.breed}
            onChangeText={(text) => setInput({ ...input, breed: text })}
          />
          <CustomInput
            placeholder="Sexo"
            value={input.sex}
            onChangeText={(text) => setInput({ ...input, sex: text })}
          />
          <ButtonSection>
            <CustomButton
              disabled={!input.name || !input.tutor}
              onPress={() => addAnimal({ ...input })}
            >
              <Icon name="check" size={25} color="#FFF" />
              <TextButton>Cadastrar</TextButton>
            </CustomButton>
          </ButtonSection>
        </Body>
      </ScrollView>
    </Container>
  );
};

export default Register;
