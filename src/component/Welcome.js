import React , {Component} from 'react'
import{
    View
} from 'react-native'
import Form from './Form'

export default class Welcome extends Component{
    render(){
        return(
            <View>
                <Form welcomeMessage = {'Welcome to my project :'}/>
            </View>
        )
    }
}