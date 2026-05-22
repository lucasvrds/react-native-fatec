import { useState } from 'react'
import { View, TextInput, Button } from 'react-native'

import { StackNavigationProp } from '@react-navigation/stack'
import { StackParamList } from '../../../App';

type HomeScreenProps = {
    navigation: StackNavigationProp<StackParamList, 'Home'>;
}

export function HomeScreen({navigation}: HomeScreenProps){

    const [ username, setUsername ] = useState('')
    const [ age, setAge ] = useState('')
    const [ email, setEmail ] = useState('')

    const navToUserScreen = () => {
        navigation.navigate('User', {
            username,
            age,
            email
        })
    }

    return(
        <View>
            <TextInput
                placeholder='Digite seu nome'
                value={username}
                onChangeText={setUsername}
            />

            <TextInput
                placeholder='Digite sua idade'
                value={age}
                onChangeText={setAge}
                keyboardType='numeric'
            />

            <TextInput
                placeholder='Digite seu email'
                value={email}
                onChangeText={setEmail}
            />

            <Button
                title='Cadastrar'
                onPress={navToUserScreen}
            />
        </View>
    )
}