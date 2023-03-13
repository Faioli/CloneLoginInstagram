import { StatusBar } from 'expo-status-bar';
import { TouchableOpacity } from 'react-native';
import { StyleSheet, Text, View, Image, TextInput, Platform,
KeyboardAvoidingView, Keyboard, TouchableWithoutFeedback } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

export default function App() {
  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
    <TouchableWithoutFeedback onPress={ () => Keyboard.dismiss()}>
    <View style={styles.container}>
      <StatusBar backgroundColor='#FFF' translucent={false}/>

      <Image
        source={require('./assets/Instagram-Logo.png')}
        style={styles.logo}
      />

      <View style={styles.inputContainer}>
        <TextInput
          placeholder='Telefone, nome de usuário ou email'
          style={styles.input}
        />
        <TextInput
          placeholder='Senha'
          style={styles.input}
        />
      </View>

      <View style={styles.forgotContainer}>
        <TouchableOpacity>
          <Text style={styles.forgotText}>Esqueceu a senha?</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginText}>Entrar</Text>
      </TouchableOpacity>

      <View style={styles.divisor}>
        <View style={styles.divisorLine}></View>
        <Text style={{ marginHorizontal: '5%', fontWeight: 600, fontSize: 13, color: '#82807F'}}>OU</Text>
        <View style={styles.divisorLine}></View>
      </View>

      <TouchableOpacity style={styles.facebookContainer}>
        <FontAwesome5 name="facebook-square" size={20} color='#399FFF' />
        <Text style={styles.facebookText}>Continuar como Henrique Faioli</Text>
      </TouchableOpacity>

      
      <View style={styles.footContainer}>
        <View style={styles.divisorLineTot}></View>
        <View style={styles.signUpContainer}>
          <Text style={styles.signUpText}>Não tem uma conta?</Text>
          <TouchableOpacity>
            <Text style={styles.signUpButton}>Cadastre-se.</Text>
          </TouchableOpacity>
        </View>
      </View>
      

    </View>
    </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    position:'relative',
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logo:{
    marginTop: Platform.OS === 'android' ? '13%' : '55%',
    marginBottom: Platform.OS === 'android' ? '13%' : '4%'
  },
  inputContainer:{
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input:{
    width: '90%',
    height: 45,
    backgroundColor: '#F4F3F3',
    marginBottom: 10,
    padding: 8,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    paddingLeft: 12,
    fontWeight: '500'
  },
  forgotContainer:{
    width: '90%',
    marginTop: 8,
    marginBottom: 7,
    alignItems: 'flex-end'
  },
  forgotText:{
    fontWeight: 700,
    color: '#399FFF',
  },
  loginButton:{
    marginTop: '5%',
    backgroundColor: '#399FFF',
    width: '90%',
    height: 45,
    justifyContent: 'center',
    alignItems:'center',
    borderRadius: 8,
  },
  loginText: {
    color: '#FFFFFF',
    fontWeight: 500,
    fontSize: 15,
  },
  facebookContainer:{
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: '10%'
  },
  facebookText:{
    color: '#399FFF',
    paddingLeft: 8,
    fontWeight: 'bold',
    fontSize: 15
  },
  divisor:{
    marginTop: '10%',
    flexDirection: 'row',
    width: '90%',
    alignItems: 'center',
    justifyContent:'center'
  },
  divisorLine:{
    width: '45%',
    height: 2,
    backgroundColor: '#EFEDED',
    borderRadius: 5,
  },
  footContainer:{
    position: 'absolute',
    top: '100%',
    alignItems: 'center',
    width: '100%',
    marginTop: '40%',
    flexDirection: 'column',
    marginBottom: '10%'
  },
  signUpContainer:{
    flexDirection: 'row',
    marginTop: '8%'
  },
  signUpText:{
    color: '#C4C4C4',
    paddingRight: 5,
  },
  signUpButton:{
    color: '#399FFF',
    fontWeight: 'bold'
  },
  
  divisorLineTot:{
    width: '100%',
    height: 2,
    backgroundColor: '#EFEDED',
    borderRadius: 5,
  }
});
