import styled from 'styled-components/native';

export const Container = styled.View`
  border: 1px solid #fff;
  margin-top: 4px;
  opacity: ${props => (props.checked ? '1' : '0.3')};
`;

export const Left = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Avatar = styled.Image`
  width: 70px;
  height: 70px;
`;

export const Info = styled.View`
  margin-left: 10px;
`;

export const ProductInfo = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 60%;
`;

export const Title = styled.Text`
  font-size: 11px;
  color: #fff;
`;

export const Name = styled.Text`
  font-size: 14px;
  color: #fff;
`;

export const ProductCode = styled.View`
  margin-left: 30px;
`;
