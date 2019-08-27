import React from 'react';
import { View, Text, SafeAreaView, Image, StyleSheet } from 'react-native';

import logo from '../assets/logo.png';

export default function Main() {
	return (
		<SafeAreaView style={styles.container}>
			<Image source={logo} /> 

			<View style={styles.cardsContainer}>
				<View style={styles.card}>
					<Image source={{ uri: 'https://avatars2.githubusercontent.com/u/3744125?v=4' }} />
					<View style={styles.footer}>
						<Text style={styles.name}>Tamiris Bonicenha</Text>
						<Text style={styles.bio}>Dev</Text>
					</View>
				</View>
			</View>

			<View />
		</SafeAreaView>
	)    
}   

const styles = StyleSheet.create({
    container: {
			flex: 1, 
			backgroundColor: '#f5f5f5', 
			alignItems: 'center',
			justifyContent: 'space-between',  
			padding: 30, 
    },
    input: {
			height: 46,
			alignSelf: 'stretch',
			backgroundColor: '#fff',
			borderWidth: 1,
			borderColor: '#ddd',
			borderRadius: 4,
			marginTop: 20,
			paddingHorizontal: 15,
    },
    button: {
			height: 46,
			alignSelf: 'stretch',
			backgroundColor: '#df4723', 
			borderRadius: 4,
			marginTop: 10,
			justifyContent: 'center',
			alignItems: 'center',
    },
    buttonText: {
			color: '#fff',
			fontWeight: 'bold',
			fontSize: 16,
    }
})