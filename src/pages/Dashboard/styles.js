import styled from 'styled-components/native';
import { FlatList } from 'react-native-gesture-handler';

export const Container = styled.View`
  display: flex;
  flex-direction: row;
`;

export const Content = styled.View`
  width: 92%;
`;

export const Title = styled.Text`
  font-size: 20px;
  color: #fff;
  font-weight: bold;
  align-self: center;
  margin-top: 30px;
`;

export const List = styled.View`
  margin: 0px 6px;
  padding: 6px;
  background: #fdfdfd;
  flex: 1;
`;

export const Info = styled.View`
  justify-content: center;
  align-items: center;
  background: #fff;
  border: 1px solid #ccc;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  padding: 4px 0;
`;
export const InfoText = styled.Text`
  color: #666;
`;

export const NFItem = styled(FlatList)``;
