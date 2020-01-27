import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { View, Vibration } from 'react-native';
import { RNCamera } from 'react-native-camera';
import { checkProduct } from '../../store/modules/receipt/actions';

import { Container, Info, Title, Barcode, Cam, LineCam } from './styles';

export default function Camera() {
  const { nfProducts } = useSelector(state => state.receipt);
  const dispatch = useDispatch();

  const handleBarCode = ({ data }) => {
    if (nfProducts.some(product => product.ean === data && !product.checked)) {
      Vibration.vibrate(100);
      dispatch(checkProduct(data));
    }
  };

  return (
    <Container>
      <Cam>
        <Barcode
          type={RNCamera.Constants.Type.back}
          captureAudio={false}
          onBarCodeRead={handleBarCode}
          flashMode={RNCamera.Constants.FlashMode.on}
          androidCameraPermissionOptions={{
            title: 'Permissão',
            message: 'Você autoriza o uso da camera',
            buttonPositive: 'Sim',
            buttonNegative: 'Não',
          }}
          androidRecordAudioPermissionOptions={{
            title: 'Permissão',
            message: 'Você autoriza o uso da microfone',
            buttonPositive: 'Sim',
            buttonNegative: 'Não',
          }}
        >
          <Info>
            <Title>Leia o EAN dos produtos da NF</Title>
          </Info>
          <LineCam />
          <View />
        </Barcode>
      </Cam>
    </Container>
  );
}
