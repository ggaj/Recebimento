import React from 'react';
import { View } from 'react-native';
import {
  Container,
  Left,
  Avatar,
  Info,
  Description,
  Name,
  Title,
  ProductInfo,
  ProductCode,
} from './styles';

export default function Item({ data }) {
  return (
    <>
      {!data.item.checked && (
        <Container>
          <Left>
            <Avatar
              source={{
                uri: data.item.url,
              }}
            />
            <Info>
              <View>
                <Description>{data.item.description}</Description>
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
      )}
    </>
  );
}
