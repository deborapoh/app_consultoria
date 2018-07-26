import React, { Component } from 'react';
import { Text, StyleSheet, View, Image, StatusBar } from 'react-native';

import BarraNavegacao from './barranavegacao';

const detalhe_contato = require('../../imgs/detalhe_contato.png');

class CenaContato extends Component {
    render(){
        return (
            <View style={styles.fundo}>
                <StatusBar backgroundColor = '#61BD8C' />
                <BarraNavegacao back navigator={this.props.navigator} corDeFundo='#61BD8C' />

                <View style={styles.topo}>
                    <Image source={detalhe_contato} />
                    <Text style={styles.txtTopo}>Contatos</Text>
                </View>

                <View style={styles.contatos}>
                    <Text style={styles.txtContatos}>Telefone: (47) 3232-2622</Text>
                    <Text style={styles.txtContatos}>Celular: (47) 98409-8900</Text>
                    <Text style={styles.txtContatos}>E-mail: deborapoh@gmail.com</Text>
                </View>

            </View>
        );
    }
}


const styles = StyleSheet.create({
    fundo: {
        flex: 1,
        backgroundColor: '#FFF',
    },

    topo: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    txtTopo: {
        color: '#61BD8C',
        fontSize: 25,
        marginLeft: 15,
    },

    contatos: {
        margin: 20,
    },

    txtContatos: {
        color: '#A9A9A9',
        fontSize: 16,
    }

});

export default CenaContato;
