import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { TouchableOpacity } from 'react-native';

import { getProducts } from '../../store/modules/receipt/actions';

import Background from '../../components/Background';
import Camera from '../../components/Camera';
import Item from '../../components/Item';
import ProgressBar from '../../components/ProgressBar';

import { Container, Content, List, Info, InfoText, NFItem } from './styles';

const data = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    checked: false,
    ean: '123456789012',
    url:
      'https://d3ddx6b2p2pevg.cloudfront.net/Custom/Content/Products/10/48/1048520_notebook-acer-nitro-5-an515-52-52bw-8gb-1tb-tela-15-6-fhd-windows-10-intel-core-i5-preto-e-vermelho_z1_637140188028789750',
    description: 'Notebook Acer nitro',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    checked: false,
    ean: '555444332221',
    url:
      'https://d3ddx6b2p2pevg.cloudfront.net/Custom/Content/Products/10/28/1028322_smart-tv-32-sony-led-hd-kdl-32w655d-z-com-conversor-digital-integrado-preta_z1_637009711631699711.jpg',
    description: 'Smart TV 32 Sony LED HD',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    checked: false,
    ean: '568754456601',
    url:
      'https://d3ddx6b2p2pevg.cloudfront.net/Custom/Content/Products/10/13/1013212_mochila-homem-de-ferro-marvel-dmw-11470-tamanho-g-poliester-preto_z25_636888508648361688',
    description: 'Mochila Homem De Ferro Marvel',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d73',
    checked: false,
    ean: '568754456854',
    url:
      'https://d3ddx6b2p2pevg.cloudfront.net/Custom/Content/Products/10/27/1027106_game-ps4-uncharted-the-lost-legacy_m4_636968385953575187',
    description: 'Game PlayStation PS4 Uncharted',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d74',
    checked: false,
    ean: '568754456649',
    url:
      'https://d3ddx6b2p2pevg.cloudfront.net/Custom/Content/Products/10/10/1010941_lavadora-8-5kg-electrolux-lt09e-branca_m1_636936939914164254.jpg',
    description: 'Lavadora 8,5Kg Electrolux',
  },
];

export default function Dashboard({ navigation }) {
  const dispatch = useDispatch();

  const { nfProductsPending, nfProducts } = useSelector(state => state.receipt);

  useEffect(() => {
    dispatch(getProducts(data));
  }, [dispatch]);

  return (
    <Background>
      <Container>
        <Content>
          <Camera />
          <List>
            <Info>
              <InfoText>{nfProductsPending || 0} produtos restantes</InfoText>
            </Info>
            <NFItem
              data={nfProducts}
              keyExtrator={item => String(item.id)}
              renderItem={item => <Item data={item} />}
            />
          </List>
        </Content>
        <TouchableOpacity onPress={() => navigation.navigate('Details')}>
          <ProgressBar />
        </TouchableOpacity>
      </Container>
    </Background>
  );
}
