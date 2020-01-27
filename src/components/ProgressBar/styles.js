import styled from 'styled-components/native';

export const Progress = styled.View`
  margin-top: 6px;
  background: #ccc;
  align-items: center;
  justify-content: flex-end;
  height: 100%;
  width: 30px;
  padding: 2px 0 0 8px;
`;

export const Success = styled.View`
  padding-right: 2px;
  background: #0097ba;
  align-items: center;
  height: ${props =>
    `${
      props.heightSuccess <= 35 && parseInt(props.heightSuccess) !== 0
        ? props.heightSuccess + 10
        : props.heightSuccess
    }%`};
  width: 32px;
`;

export const SuccessNF = styled.Text`
  font-size: 14px;
  color: #fff;
`;

export const SuccessPercente = styled.Text`
  font-size: 10px;
  color: #fff;
`;
