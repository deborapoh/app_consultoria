import React, { Component } from 'react';
import { Text, StyleSheet, View, Image, StatusBar } from 'react-native';

import BarraNavegacao from './barranavegacao';

const detalhe_empresa = require('../../imgs/detalhe_empresa.png');

class CenaEmpresa extends Component {
    render(){
        return (
            <View style={styles.fundo}>
                <StatusBar backgroundColor = '#EC7148' />
                <BarraNavegacao back navigator={this.props.navigator} corDeFundo='#EC7148' />

                <View style={styles.topo}>
                    <Image source={detalhe_empresa} />
                    <Text style={styles.txtTopo}>A Empresa</Text>
                </View>

                <Text style={styles.txtEmpresa}>A ATM Consultoria está no mercado há mais de 2000 anos.</Text>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    fundo: {
        backgroundColor: '#FFF',
        flex: 1,
    },

    topo: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 15,
    },

    txtTopo: {
        fontSize: 25,
        color: '#EC7148',
        marginLeft: 15,
    },

    txtEmpresa: {
        color: '#A9A9A9',
        fontSize: 16,
        margin: 20,
    }
});

export default CenaEmpresa;
