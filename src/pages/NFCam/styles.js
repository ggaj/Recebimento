import styled from 'styled-components';

export const LayoutCam = styled.View`
  flex-direction: row-reverse;
  justify-content: space-between;
  height: 100%;
  align-items: center;
`;

export const LineCam = styled.View`
  border: 0.5px solid #eee;
  position: absolute;
  right: 186px;
  height: 100%;
`;

export const InfoCam = styled.View`
  border-radius: 30px;
  background: #656565;
  opacity: 0.7;
  height: 50px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 90px;
  padding: 10px 12px 10px 18px;
  transform: rotate(90deg);
`;

export const InfoCamText = styled.Text`
  color: #fafafa;
  font-size: 16px;
  align-self: baseline;
  height: 100%;
  padding-bottom: 20px;
`;

export const ButtonClose = styled.TouchableOpacity`
  height: 30px;
  width: 30px;
  border-radius: 15px;
  align-self: baseline;
  background: #fff;
`;

export const ButtonCam = styled.TouchableOpacity`
  position: absolute;
  height: 50px;
  left: 140px;
  background: #0097ba;
  padding: 10px 30px;
  border-radius: 30px;
  transform: rotate(90deg);
`;

export const ButtonText = styled.Text`
  color: #fafafa;
  text-transform: uppercase;
  align-items: center;
  margin: auto;
`;
