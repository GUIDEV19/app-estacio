import { View, Text, Button } from "react-native";
import React, {useEffect} from 'react';
import FIRESTORE_DB from '../firebaseConfig';
import { collection,addDoc } from "firebase/firestore";

const Lista = () =>{
    useEffect(() => {}, []);

    const addProduto = async () => {
        console.log(FIRESTORE_DB)
        const doc = addDoc(collection(FIRESTORE_DB,'produtos'), {name: 'teste', url:'teste', value:'teste'});
        console.log('aaaaa', doc);
    }

    return(
        <View>
            <Text>AAAAAAA</Text>
            <Button onPress={() => addProduto()} title="Addproduto"/>
        </View>
    );
};

export default Lista;
