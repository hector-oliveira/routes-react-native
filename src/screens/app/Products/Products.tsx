import React from 'react';
import * as S from './Products.styled';
import { Button } from '@components/all-components';
import { AppRootNavigation } from '@navigate/NavigatorStack';
import { useNavigation } from '@react-navigation/native';

export const Products = () => {
	const navigation = useNavigation<AppRootNavigation>();
	const goToDetails = () => navigation.navigate('details');
	return (
		<S.Container>
			<S.Text>Products</S.Text>
			<Button title='Ir para Details' onPress={goToDetails} />
		</S.Container>
	);
};