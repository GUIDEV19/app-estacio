import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1A1A1A',
        color: "#fff",
        alignItems: 'center',
        justifyContent: 'center',
    },
    containerImage: {
        padding: 15,
        borderWidth: 2,
        borderColor: '#E0E1E0'
    },
    image: {
        height: 600,
        width: 350,
    },
    textHeader: {
        color: "#D1D3D4",
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 50,
        marginBottom: 20,
        textAlign: 'center'
    },
    textHeaderSecundary: {
        color: "#D1D3D4",
        marginBottom: 30,
        fontSize: 20,
        width: 200,
        textAlign: 'center'
    },
    containerInfoProduct: {
        marginHorizontal: 15,
        marginVertical: 30,
    },
    textTitleProduct: {
        color: "#D1D3D4",
        fontSize: 20,
        fontWeight: '500'
    },
    textValueProduct: {
        color: "#D1D3D4",
        marginVertical: 20,
        fontSize: 15,
    },
    buttonRedirectWhats: {
        marginTop: 30,
    }
});