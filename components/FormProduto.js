import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import FIRESTORE_DB from '../firebaseConfig';
import { collection,addDoc } from "firebase/firestore";

const FormProduto = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [value, setValue] = useState('');
  const [url, setUrl] = useState('');
  const [description, setDescription] = useState('');
  const [additionalInfo, setAdditionalInfo] = useState([]);
  const [infoInput, setInfoInput] = useState('');

  const handleSubmit = async () => {
    // Crie um objeto de produto com os valores do formulário
    const product = {
      name,
      value,
      url,
      productInfo: {
        description,
        additionalInfo,
      },
    };

    // Envie o objeto de produto para a função de envio fornecida como prop
   // onSubmit(product);
    const doc = addDoc(collection(FIRESTORE_DB,'produtos'), product);

  };

  const handleAddInfo = () => {
    // Adicione informações adicionais à lista
    if (infoInput.trim() !== '') {
      setAdditionalInfo([...additionalInfo, infoInput]);
      setInfoInput('');
    }
  };

  return (
    <View style={styles.container}>
      <Text>Nome:</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={(text) => setName(text)}
      />
      <Text>Valor:</Text>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={(text) => setValue(text)}
      />
      <Text>URL da Imagem:</Text>
      <TextInput
        style={styles.input}
        value={url}
        onChangeText={(text) => setUrl(text)}
      />
      <Text>Descrição:</Text>
      <TextInput
        style={styles.input}
        value={description}
        onChangeText={(text) => setDescription(text)}
      />
      <Text>Informações Adicionais:</Text>
      <TextInput
        style={styles.input}
        value={infoInput}
        onChangeText={(text) => setInfoInput(text)}
      />
      <Button title="Adicionar Informação" onPress={handleAddInfo} />
      {additionalInfo.map((info, index) => (
        <Text key={index}>{info}</Text>
      ))}
      <Button title="Cadastrar Produto" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 10,
    padding: 10,
  },
});

export default FormProduto;