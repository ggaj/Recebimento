import React, { useState, useEffect } from 'react';
import { View } from 'react-native';

import { useSelector } from 'react-redux';
import {
  Container,
  Content,
  NF,
  NFText,
  Header,
  HeaderLine1,
  HeaderLine2,
  NFTextInfo,
  NFValueInfo,
  Percent,
  PercentNumber,
  PercentInfo,
  PercentText,
  PercentQuant,
  List,
  Products,
  Footer,
  FooterButton,
  FooterText,
} from './styles';

import Background from '../../components/Background';
import Product from '../../components/Product';

export default function Details() {
  const [products, setProducts] = useState([]);
  const { nfProducts } = useSelector(state => state.receipt);

  useEffect(() => {
    setProducts(nfProducts);
  }, [nfProducts]);

  return (
    <Background>
      <Container>
        <Content>
          <NF>
            <NFText>Nota Fiscal</NFText>
          </NF>
          <Header>
            <HeaderLine1>
              <View>
                <NFTextInfo>Numero da Nota Fiscal</NFTextInfo>
                <NFValueInfo>000002358-500</NFValueInfo>
              </View>
              <View>
                <NFTextInfo>Data de Faturamento</NFTextInfo>
                <NFValueInfo>24/01/2019</NFValueInfo>
              </View>
            </HeaderLine1>
            <HeaderLine2>
              <View>
                <NFTextInfo>Cliente</NFTextInfo>
                <NFValueInfo>Gildo Araujo</NFValueInfo>
              </View>
            </HeaderLine2>
          </Header>
          <Percent>
            <PercentNumber>100%</PercentNumber>
            <PercentInfo>
              <PercentText>Produtos conferidos</PercentText>
              <PercentQuant>10/10</PercentQuant>
            </PercentInfo>
          </Percent>
          <List>
            <Products
              data={products}
              keyExtrator={item => String(item.id)}
              renderItem={item => <Product data={item} />}
            />
          </List>
        </Content>
        <Footer>
          <FooterButton>
            <FooterText>Ler outra nota fiscal</FooterText>
          </FooterButton>
        </Footer>
      </Container>
    </Background>
  );
}
