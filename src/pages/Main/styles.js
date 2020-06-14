import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #d6d6da;
  padding: 10px;
`;

export const Title = styled.Text`
  color: #5656e9;
  font-size: 30px;
  font-weight: bold;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: center;
  margin-bottom: 10px;
`;

export const CustomInput = styled.TextInput.attrs({
  placeholderTextColor: '#999',
})`
  border-radius: 4px;
  color: #333;
  font-size: 15px;
  background: #fff;
  margin: 15px;
`;

export const CustomButton = styled.TouchableOpacity`
  background: #5656e9;
  width: 50%;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
  padding: 10px;
  flex-direction: row;
`;

export const TextButton = styled.Text`
  color: #fff;
  font-size: 20px;
  margin-left: 5px;
`;

export const Body = styled.View`
  flex: 1;
  background-color: #d6d6da;
  padding: 10px;
  justify-content: center;
`;

export const ButtonSection = styled.View`
  padding: 10px;
  justify-content: center;
  align-items: center;
`;
