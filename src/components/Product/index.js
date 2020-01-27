import React from 'react';
import { View } from 'react-native';
import {
  Container,
  Left,
  Avatar,
  ProductInfo,
  Info,
  Title,
  Name,
  ProductCode,
} from './styles';

export default function Product({ data }) {
  return (
    <Container checked={data.item.checked}>
      <Left>
        <Avatar
          source={{
            uri: data.item.url,
          }}
        />
        <Info>
          <View>
            {/* <Title>Nome</Title> */}
            <Name>{data.item.description}</Name>
          </View>
          <ProductInfo>
            <View>
              <Title>EAN</Title>
              <Name>{data.item.ean}</Name>
            </View>
            <ProductCode>
              <Title>Codigo</Title>
              <Name>789211</Name>
            </ProductCode>
          </ProductInfo>
        </Info>
      </Left>
    </Container>
  );
}
