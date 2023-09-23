import { View, Text, Button } from "react-native";
import React, {useEffect} from 'react';
import FIRESTORE_DB from '../firebaseConfig';
import { collection,addDoc } from "firebase/firestore";

const Lista = () =>{
    useEffect(() => {}, []);

    const addProduto = async () => {

        let produtoDoc = {
                name: "Pulseira bolas (5/7mm) intercaladas, em prata 925",
                value: "194,99",
                url: "htts://localhost:300/exemplo",
                productInfo: {
                    description: "Peça em prata 925",
                        additionalInfo: [
                        "Leia as informações abaixo:",
                        "- Todas as peças em prata 925 e banhadas em ouro ou prata são Hipoalergênicas.",
                        "- GARANTIA: a garantia pode variar de 0 a 1 ano, dependendo do material da peça. Favor observar essa característica ao realizar sua compra.",
                        "Prata 925: garantia eterna;",
                        "Banhada a ouro: Garantia de 6 meses a 1 ano no banho (cor).",
                        "Folheados: esse possui menor quantidade de camadas de ouro do que as semijoias. Portanto, não possui garantia.",
                        "Obs: A garantia não cobre peças com sinais de mau uso (arranhadas, quebradas). Não cobre perda de pingentes e pedras.",
                        "Para sanar mais dúvidas entre em contato conosco",
                        "62 98128-6023"
                        ]
                }
            }

        console.log(FIRESTORE_DB)
        const doc = addDoc(collection(FIRESTORE_DB,'produtos'), produtoDoc);
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
