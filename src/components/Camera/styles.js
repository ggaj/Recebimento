import styled from 'styled-components';
import { RNCamera } from 'react-native-camera';

export const Container = styled.View`
  margin: 6px 6px 0px 6px;
  border-radius: 10px;
  height: 270px;
  background: #333;
`;

export const Info = styled.View`
  margin-top: 16px;
  margin: 10px;
  background: #656565;
  opacity: 0.7;
  justify-content: center;
  align-items: center;
  padding: 10px 0px;
  border-radius: 20px;
  width: 94%;
`;

export const Title = styled.Text`
  font-size: 14px;
  color: #fff;
`;

export const Barcode = styled(RNCamera)`
  height: 100%;
  justify-content: space-between;
`;

export const Cam = styled.View`
  height: 100%;
`;

export const LineCam = styled.View`
  border: 0.5px solid #fff;
  margin-bottom: 30px;
`;
