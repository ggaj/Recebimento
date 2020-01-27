'use strict';
import React, { PureComponent } from 'react';
import { AppRegistry, StyleSheet, Text, TouchableOpacity, View, SafeAreaView } from 'react-native';
import { RNCamera } from 'react-native-camera';
import Icon from 'react-native-vector-icons/MaterialIcons'
import Orientation from 'react-native-orientation';

class ExampleApp extends PureComponent {
  // componentWillMount() {
  //   // The getOrientation method is async. It happens sometimes that
  //   // you need the orientation at the moment the JS runtime starts running on device.
  //   // `getInitialOrientation` returns directly because its a constant set at the
  //   // beginning of the JS runtime.

  //   const initial = Orientation.getInitialOrientation();
  //   if (initial === 'PORTRAIT') {
  //     // do something
  //   } else {
  //     // do something else
  //   }
  // }

  // componentDidMount() {
  //   // this locks the view to Portrait Mode
  //   Orientation.lockToPortrait();

  //   // this locks the view to Landscape Mode
  //   // Orientation.lockToLandscape();

  //   // this unlocks any previous locks to all Orientations
  //   // Orientation.unlockAllOrientations();

  //   // Orientation.addOrientationListener(this._orientationDidChange);
  // }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <RNCamera
          ref={ref => {
            this.camera = ref;
          }}
          style={styles.preview}
          type={RNCamera.Constants.Type.back}
          flashMode={RNCamera.Constants.FlashMode.on}
          androidCameraPermissionOptions={{
            title: 'Permission to use camera',
            message: 'We need your permission to use your camera',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}
          androidRecordAudioPermissionOptions={{
            title: 'Permission to use audio recording',
            message: 'We need your permission to use your audio',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}
          onGoogleVisionBarcodesDetected={({ barcodes }) => {
            console.log(barcodes);
          }}>
            {/* <View style={{flexDirection: 'row', flex:1, justifyContent: "space-between", alignItems: "center"}}> */}
            <View style={{flex: 1, flexDirection: "row"}}>
              <View style={{backgroundColor:"rgba(0, 0, 0, 0.7)", width: 80, padding: 10}}>
                <TouchableOpacity onPress={() => {}} style={{backgroundColor: "#FFF", justifyContent: "center", alignItems: "center", height: 140, borderRadius:}}>
                  <Text style={{transform: [{ rotate: '90deg' }], width: 100, fontSize: 16, fontWeight: "bold"}}>Cod. Barras</Text>
                </TouchableOpacity>
              </View>  
              <View style={{alignItems: "center", flex: 1}}>
                <View style={{flex: 1, borderColor: "red", borderEndWidth: 1}} />
              </View>
              <View style={{backgroundColor:"rgba(0, 0, 0, 0.7)", width: 80, alignItems: "center", flexDirection: "column"}}>
                <Icon name="arrow-upward" size={30} color="#fff" style={{paddingVertical: 30}}/>
                <Text style={{transform: [{ rotate: '90deg' }], width: 400, textAlign: "center", marginTop: 100, color: "#fff", fontSize: 20, fontWeight: "bold"}} >Leitura da Nota Fiscal</Text>
              </View>  
            </View>

            {/* <Icon name="" size={20} color="#fff"/> */}
        </RNCamera>
      </SafeAreaView>
    );
  }

  takePicture = async() => {
    if (this.camera) {
      const options = { quality: 0.5, base64: true };
      const data = await this.camera.takePictureAsync(options);
      console.log(data.uri);
    }
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  capture: {
    height: 400,
    // flex: 1,
    flexDirection: "row",
    backgroundColor: '#fff',
    borderRadius: 5,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    // padding: 15,
    // paddingHorizontal: 20,
    alignSelf: 'center',
    // margin: 20,
  },
});

export default ExampleApp