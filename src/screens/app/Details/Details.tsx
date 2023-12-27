import React from 'react';
import * as S from './Details.styled';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AppScreenParamsList } from '@params_list/AppScreenParamsList';

type DetailsScreenRootProps = NativeStackScreenProps<AppScreenParamsList, 'details'>;
export const Details = ({ route }: DetailsScreenRootProps) => {
	const { description, image, price, title } = route.params;
	return (
		<S.Container>
			<S.Text>{title}</S.Text>
			<S.Text>{price}</S.Text>
			<S.Text>{image}</S.Text>
			<S.Text>{description}</S.Text>
		</S.Container>
	);
};