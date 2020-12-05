import React, { Component } from 'react';
import{
    View,
    TextInput,
    Button,
    StyleSheet,
    Text
} from 'react-native'

export default class Form extends Component{

    constructor(props){
        super(props);
        this.state = {
            firstName : '',
            lastName : '',
            fullName : ''
        }
    }

    handleFirstName = async (firstName) => {
        await this.setState({
            firstName : firstName
        })
        console.log(this.state.firstName);
    }

    handleLastName = async (lastName) => {
        await this.setState({
            lastName : lastName
        })
        console.log(this.state.lastName);
    }
    nameHandler = async (fullName) => {
        await this.setState({
            fullName : this.state.firstName.concat(" ", this.state.lastName)
        })
        console.log(this.state.fullName);
    }

    render(){
        return(
            <View style = {styles.container}>
                <TextInput style = {styles.textBox} placeholder = {'ENTER YOUR FIRST NAME'}
                onChangeText = {this.handleFirstName}
                value = {this.state.firstName}/>

                <TextInput style = {styles.textBox} 
                placeholder = {'ENTER YOUR SECOND NAME'}
                onChangeText = {this.handleLastName}
                value = {this.state.lastName}/>
                <Button style = {styles.button} title='submit'
                onPress = {this.nameHandler}/>

                <Text>
                    {this.props.welcomeMessage}
                    {this.state.fullName}
                </Text>
            </View>
        ) 
    }
}
const styles = StyleSheet.create({
    container : {
        height : '70%',
        backgroundColor : '#a36629'
    },
    textBox :{
        fontSize : 18,
        fontWeight:'bold'
    },
    button :{
        margin : 15,
        height:'2%',
        width :'50%',
        backgroundColor : 'green'
    }
})