import React from 'react';
import * as S from './Products.styled';
import { Button } from '@components/all-components';
import { AppRootNavigation } from '@root_navigation/NavigatorStack';
import { useNavigation } from '@react-navigation/native';

export const Products = () => {
	const navigation = useNavigation<AppRootNavigation>();
	const goToDetails = () => navigation.navigate('details', { 
		title: 'Details',
		description: 'Details description',
		image: 'Image test',
		price: '100'
	 });
	return (
		<S.Container>
			<S.Text>Products</S.Text>
			<Button title='Ir para Details' onPress={goToDetails} />
		</S.Container>
	);
};