import React from 'react';
import { View } from 'react-native';

import logo from '../../assets/Nubank_Logo.png';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, Top, Logo, Title } from './styles';

export default function Header() {
  return (
    <Container>
        <Top>
            <Logo source={logo} />
            <Title>Stewart</Title>
        </Top>
        <Icon name="keyboard-arrow-down" size={20} color="#fff" />
    </Container>
  );
}
