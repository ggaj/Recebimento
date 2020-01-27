import styled from 'styled-components/native';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';

export const Container = styled.View`
  height: 100%;
  background: #fafafa;
  justify-content: space-between;
`;

export const Content = styled.View`
  padding: 10px 15px 0 15px;
  flex: 1;
`;

export const NF = styled.View`
  border: 1px solid #ccc;
  justify-content: center;
  align-items: center;
  padding: 10px 0;
  border-radius: 16px;
`;

export const NFText = styled.Text`
  color: #666;
`;

export const Header = styled.View`
  margin-top: 6px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  border: 1px solid #ccc;
  padding: 10px;
`;

export const HeaderLine1 = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin: 0px 10px;
`;

export const HeaderLine2 = styled.View`
  padding-top: 8px;
  margin: 0px 10px;
`;

export const NFTextInfo = styled.Text`
  font-size: 10px;
  color: #666;
`;

export const NFValueInfo = styled.Text`
  font-size: 13px;
  color: #0097ba;
`;

export const Percent = styled.View`
  background: #0097ba;
  margin-top: 4px;
  height: 70px;
  align-items: center;
  padding: 0px 20px;
  justify-content: space-between;
  flex-direction: row;
`;

export const PercentNumber = styled.Text`
  color: #fff;
  font-size: 40px;
`;

export const PercentInfo = styled.View`
  align-items: flex-end;
`;
export const PercentText = styled.Text`
  color: #fff;
  font-size: 16px;
`;

export const PercentQuant = styled.Text`
  color: #fff;
  font-size: 18px;
`;

export const List = styled.View`
  flex: 1;
`;

export const Products = styled(FlatList)`
  background: #0097ba;
  padding: 5px;
`;

export const Footer = styled.View`
  box-shadow: 0px 0px 1px #ccc;
  background: #fafafa;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 17px 15px;
`;

export const FooterButton = styled.TouchableOpacity`
  background: #0097ba;
  width: 100%;
  padding: 10px 0;
  justify-content: center;
  align-items: center;
  border-radius: 25px;
`;

export const FooterText = styled.Text`
  color: #fff;
  font-size: 16px;
  text-transform: uppercase;
`;
