import React from 'react'
import styled from 'styled-components'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const ContainerEmptyList = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding-top: 20px;
`;
const Image = styled.Image`
  height: 100px;
  width: 100px;
`;

const TitleEmpty = styled.Text`
  font-size: 15px;
  font-weight: bold;
  color: ${props => props.textColor};
`
export const EmptyList = ({ title, textColor, image }) => (
  <ContainerEmptyList>
    <Image
      source={image}
    />
    <TitleEmpty textColor={textColor}>{title}</TitleEmpty>
  </ContainerEmptyList>
);