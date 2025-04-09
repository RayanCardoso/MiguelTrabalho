import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text, Alert } from 'react-native';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../FirebaseConfig';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, senha)
      .then(() => {navigation.replace('Quiz');})
      .catch(error => Alert.alert('Erro ao fazer login', error.message));
  };

  const handleCadastro = () => {
    createUserWithEmailAndPassword(auth, email, senha)
      .then(() => Alert.alert('Cadastro realizado com sucesso!'))
      .catch(error => Alert.alert('Erro ao cadastrar', error.message));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Autenticação</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        value={senha}
        onChangeText={setSenha}
        secureTextEntry
      />
      <Button title="Entrar" onPress={handleLogin} />
      <View style={{ marginVertical: 10 }} />
      <Button title="Cadastrar" onPress={handleCadastro} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 30,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 28,
    marginBottom: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 15,
    paddingHorizontal: 10,
    borderRadius: 8,
  },
});
