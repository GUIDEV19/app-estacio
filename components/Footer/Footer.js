import { Text, View, Button, Alert, TextInput, StyleSheet } from 'react-native';
import { useState } from 'react';

export const Footer = () => {
    const [texto, setTexto] = useState('');

    const handleInputChange = (text) => {
        setTexto(text);
    };

    const handleSubmit = () => {
        Alert.alert('Texto digitado:', texto);
    };

    return (
        <View style={styles.containerMain}>
            <Text style={styles.TextMain}>lôa brand</Text>
            <View style={styles.ContainerSecundary}>
                <Text style={styles.TextMainInput}>formulário de inscrição</Text>

                <TextInput
                    style={styles.input}
                    placeholder="Endereço de email"
                    textContentType="emailAddress"
                    onChangeText={handleInputChange} 
                    value={texto} 
                />
                <Button style={styles.btnEnv} width="100%" title="Enviar" onPress={handleSubmit} />
            </View>

            <View>
                <Text style={styles.TextInfoLoja}>loamepaiva@gmail.com</Text>
                <Text style={styles.TextInfoLoja}>Tel: (62) 98128-6023</Text>
                <Text style={styles.TextInfoLoja}>Av. Alípio Antônio de Paiva, Qd 41</Text>
            </View>
        </View>
    )
}

export const styles = StyleSheet.create({
    containerMain: {
        backgroundColor: '#7B7B7B',
        marginBottom: 15,
        marginTop: 20,
        color: "#fff",
        alignItems: 'center',
        justifyContent: 'center',
    },
    ContainerSecundary: {
        width: "90%",
        alignItems: 'center',
    },
    TextMain: {
        textTransform: "uppercase",
        fontSize: 30,
        marginTop: 30,
        marginBottom: 10,
        fontWeight: "800",
        color: "#FFFFFF"
    },
    TextMainInput: {
        textTransform: "uppercase",
        fontSize: 20,
        marginTop: 30,
        marginBottom: 10,
        fontWeight: "800",
        color: "#FFFFFF"
    },
    TextInfoLoja: {
        textAlign: "center",
        color: "#FFFFFF",
        marginBottom: 16,
        marginTop: 16
    },
    input: {
        borderWidth: 1,
        backgroundColor: "#7B7B7B",
        borderColor: "#FFFFFF",
        marginBottom: 10,
        color: "#FFFFFF",
        textAlign: "center",
        width: "100%"
    },
    btnEnv: {
        backgroundColor: "#000"
    }
});