import React, {Component} from 'react'
import {View, StyleSheet, TouchableOpacity, Text, Button} from 'react-native'

export default class App extends Component {
   
 constructor(props){
   super(props)
   this.state = {
    operation2 : '',
    result2 : ''
   }
 }
 operation = '';
 result = '';
 right = false;
 haveDot = false;
 firstZero = false;
 butPressed=(button)=>{
   switch(button){
     case '+':{
      if (this.operation != "") {
        switch (this.operation.slice(-1)){
          case "/":  
          case "*":
          case "+":
          case "-": 
          case ".":
            this.right = true
            break;
        default : this.right = false} }
        if (this.operation != "" && this.right == false)
        {
          this.operation = this.operation  + "+"
          this.haveDot = false;
          this.firstZero =false;
        }
      break;
     }
     case '-':{
      if (this.operation != "") {
        switch (this.operation.slice(-1)){
          case "/":  
          case "*":
          case "+":
          case "-": 
          case ".":
            this.right = true
            break;
        default : this.right = false} }
        if (this.operation != "" && this.right == false)
        {
          this.operation = this.operation  + "-"
          this.haveDot = false;
          this.firstZero =false;
        }
      break;
    }
    case '/':{
      if (this.operation != "") {
        switch (this.operation.slice(-1)){
        case "/":  
        case "*":
        case "+":
        case "-": 
        case ".":
          this.right = true
            break;
        default : this.right = false} }
        if (this.operation != "" && this.right == false)
        {
          this.operation = this.operation  + "/"
          this.haveDot = false;
          this.firstZero =false;
        }
      break;
    }
    case '*':{
      if (this.operation != "") {
        console.log(this.operation.slice(-1))
        switch (this.operation.slice(-1)){
          case "/":  
          case "*":
          case "+":
          case "-": 
          case ".":
            this.right = true
            break;
        default : {this.right = false 
        break;}} }
        if (this.operation != "" && this.right == false)
        {
          this.operation = this.operation  + "*"
          this.haveDot = false;
          this.firstZero =false;
        }
      break;
    }
    case '.':{
      if (this.operation != "") {
        
        switch (this.operation.slice(-1)){
          case "/":  
          case "*":
          case "+":
          case "-": 
          case ".":
            this.right = true
            break;
        default : this.right = false} }
        if (this.operation != "" && this.right == false && this.haveDot ==false)
        {
          this.operation = this.operation  + "."
          this.haveDot = true;
          this.firstZero = false;

        }
      break;
    }
    case 'C':{
      this.operation = '';
      this.result='';
      this.haveDot = false;
      this.firstZero=false;
      break;
    }
    case '=':{
      switch (this.operation.slice(-1)){
        case "/":  
        case "*":
        case "+":
        case "-": 
        case ".":
          lastSign = true
          break;
      default : lastSign = false}
        if(lastSign == true){
          this.result = 'Error'
        }
        else if(eval(this.operation) == Infinity && lastSign == false){
          this.result = 'Error'
        }
        else if(lastSign == false){
        this.result = eval(this.operation)
        }
        console.log(this.result)
        break;
    }
    case '<-':{
      if(this.operation != ''){
        switch (this.operation.slice(-1)){
          case ".":
            this.right = true
            break;
        default : this.right = false}
        if(this.right==true){
          this.haveDot = false;
            this.firstZero = true;
          }
        
        switch (this.operation.slice(-1)){
          case "/":  
          case "*":
          case "+":
          case "-": 
          this.firstZero= false;}
        this.operation = this.operation.slice(0, -1);
      }
      break;
    }
    case 0:{
     
      if(this.operation == '' && this.firstZero== false){
        this.firstZero = true;
        this.operation = this.operation  + "0"
        break;
      }
      else if(this.firstZero==false){
  
        switch (this.operation.slice(-1)){
          case "/":  
          case "*":
          case "+":
          case "-": 
          this.firstZero = true;
          this.operation = this.operation  + "0"
            break;
        default:{
          console.log(this.firstZero)
        if(this.firstZero ==false){
          this.operation = this.operation  + "0"
        }
      }
      }
      }
      break;
    }
    default:{
      if(this.firstZero == false){
      this.operation = this.operation + button.toString()}
      break;
    }
   }
  this.setState({operation2 : this.operation});
  this.setState({result2 : this.result});
  console.log(this.operation)
  }
 buttons2 = ['C','='];
 buttons1 = [ 7,8,9,'-',4,5,6,'+',1,2,3,'/','.',0,'<-','*'];
 showNum = this.buttons1.map(i=>{ 
  return <TouchableOpacity style={styles.touchableStyle} onPress={()=>{this.butPressed(i)}} >
  <Text style={styles.numbersText}>{i}</Text>
  </TouchableOpacity>})
  showBut = this.buttons2.map(i=>{ 
    return <TouchableOpacity style={styles.touchableStyle} onPress={()=>{this.butPressed(i)}} >
    <Text style={styles.numbersText}>{i}</Text>
    </TouchableOpacity>})
 render(){
  return (
          <View style={styles.container}>
            <View style={styles.calculation}>
            <Text style={styles.calculationText}>{this.state.operation2}</Text>
            </View>
            <View style={styles.result}>
            <Text style={styles.resultText}>{this.state.result2}</Text> 
            </View>
            <View style={styles.buttons}>
              {this.showBut}
            </View>
            <View style={styles.numbers}>
              {this.showNum}
            </View>
          </View>
  );
 }
};

const styles = StyleSheet.create({
container:{
  flex: 1
},
result:{
  flex:2,
  flexDirection:'row',
  backgroundColor: '#4954d1',
  justifyContent: 'flex-end'
},
calculation:{
  flexDirection:'row',
  justifyContent: 'flex-end',
  flex:4,
  backgroundColor: '#4954d1'
},
numbers:{
  flex:7,
  flexDirection : 'row',
  flexWrap: 'wrap',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor:'#1d1e23'
},
buttons:{
  flex:2,
  flexDirection : 'row',
  alignItems: 'center',
  justifyContent: 'space-around',
  backgroundColor:'#8dc44e'
},
numbersText:{
  color: 'white',
  justifyContent: 'space-around',
  alignSelf: 'center',
  fontSize: 60,
},
resultText:{
  color: 'white',
  fontSize: 70,
  justifyContent: 'space-around',
  alignSelf: 'center',
  
},
calculationText:{
  color: '#1d1e23',
  fontSize:50,
  justifyContent: 'space-around',
  alignSelf: 'center',

},
touchableStyle:{
  width:'25%'
}
});

