import React, { useState } from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import { RNCamera } from 'react-native-camera';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  InfoCam,
  InfoCamText,
  ButtonClose,
  LayoutCam,
  LineCam,
  ButtonCam,
  ButtonText,
} from './styles';
// import { LineCam } from '../../components/Camera/styles';

export default function NFCam({ navigation }) {
  const [barCode, setBarCode] = useState(true);
  const [loading, setLoading] = useState(false);

  const handleBarCode = ({ data }) => {
    setBarCode(undefined);
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setBarCode(true);
      navigation.navigate('Dashboard');
    }, 1500);
  };

  const handleClose = _ => {
    alert('Close');
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    preview: {
      flex: 1,
    },
  });
  return (
    <View style={styles.container}>
      {loading ? (
        <View
          style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
        >
          <ActivityIndicator size="large" />
          <Text style={{ color: '#333', fontSize: 18, paddingTop: 20 }}>
            Buscando a Nota Fiscal
          </Text>
        </View>
      ) : (
        <RNCamera
          style={styles.preview}
          type={RNCamera.Constants.Type.back}
          captureAudio={false}
          onBarCodeRead={barCode && handleBarCode}
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
          <LayoutCam>
            <InfoCam>
              <InfoCamText>
                Posicione a linha sobre o código de barras da nota
                fiscal&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </InfoCamText>
              <ButtonClose onPress={handleClose}>
                {/* <Icon name="close" color="#000" size={20} /> */}
              </ButtonClose>
            </InfoCam>
            <LineCam />
            <ButtonCam onPress={handleBarCode}>
              <ButtonText>Insira o código de barras da nota fiscal</ButtonText>
            </ButtonCam>
          </LayoutCam>
        </RNCamera>
      )}
    </View>
  );
}
