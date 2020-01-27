import styled from 'styled-components/native';

export const Container = styled.View`
  border: 1px solid #ccc;
  margin-top: 4px;
  padding: 2px;
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

export const Description = styled.Text`
  font-size: 14px;
  color: #0097ba;
`;

export const Title = styled.Text`
  font-size: 11px;
  padding-top: 5px;
  color: #666;
`;

export const Name = styled.Text`
  font-size: 13px;
  color: #666;
`;

export const ProductCode = styled.View`
  margin-left: 30px;
`;
