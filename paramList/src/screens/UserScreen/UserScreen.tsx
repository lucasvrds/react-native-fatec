import { View, Text } from 'react-native'

import { RouteProp } from '@react-navigation/native'
import { StackParamList } from '../../../App'

type UserScreenProps = {
    route: RouteProp<StackParamList, 'User'>
}

export function UserScreen({route}: UserScreenProps){

    const { username, age, email } = route.params

    return(
        <View>
            <Text>Bem vindo: {username}</Text>
            <Text>Idade: {age}</Text>
            <Text>Email: {email}</Text>
        </View>
    )
}