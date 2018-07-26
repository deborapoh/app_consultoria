import React, { Component } from 'react';
import { Text, StyleSheet, View, Image, StatusBar } from 'react-native';

import BarraNavegacao from './barranavegacao';

const detalheCliente = require('../../imgs/detalhe_cliente.png');
const cliente1 = require('../../imgs/cliente1.png');
const cliente2 = require('../../imgs/cliente2.png');

class CenaClientes extends Component {
    render(){
        return (
            <View style={estilos.fundo}>
                <StatusBar backgroundColor = '#B9C941' />

                <BarraNavegacao back navigator={this.props.navigator} corDeFundo='#B9C941' />

                <View style={estilos.nossosClientes}>
                    <Image source={detalheCliente} />
                    <Text style={estilos.txtNossosClientes}>Nossos Clientes</Text>
                </View>

                <View style={estilos.clientes}>
                    <Image source={cliente1} />
                    <Text style={estilos.detalheCliente}>Lorem ipsum dolorem</Text>
                </View>

                <View style={estilos.clientes}>
                    <Image source={cliente2} />
                    <Text style={estilos.detalheCliente}>Lorem ipsum dolorem</Text>
                </View>
            </View>
        );
    }
}

const estilos = StyleSheet.create({
    nossosClientes: {
        flexDirection: 'row',
        margin: 15,
        alignItems: 'center',
    },

    txtNossosClientes: {
        fontSize: 25,
        color: '#B9C941',
    },

    clientes: {
        margin: 15,
    },

    fundo: {
        backgroundColor: '#FFF',
        flex: 1,
    },

    detalheCliente: {
        marginLeft: 20,
        fontSize: 18,
    }

});

export default CenaClientes;
