import React, { Component } from 'react';
import { Text, StyleSheet, View, StatusBar, Image, TouchableHighlight } from 'react-native';

import BarraNavegacao from './barranavegacao';

const logo = require('../../imgs/logo.png');
const menuCliente = require('../../imgs/menu_cliente.png');
const menuContato = require('../../imgs/menu_contato.png');
const menuEmpresa = require('../../imgs/menu_empresa.png');
const menuServico = require('../../imgs/menu_servico.png');

class CenaPrincipal extends Component {
    render(){
        return (
            <View style={styles.fundo}>
                <View>
                    <StatusBar backgroundColor = '#CCC' />
                    <BarraNavegacao />
                </View>

                <View style={styles.logo}>
                    <Image source={logo} />
                </View>

                <View style={styles.menu}>
                    <View style={styles.menuInterno}>
                        <TouchableHighlight
                            underlayColor={'#B9C941'}
                            activeOpacity={0.3}
                            onPress={() => {
                                this.props.navigator.push({ id: 'clientes' });
                            }}
                        >
                            <Image style={styles.imagem} source={menuCliente} />
                        </TouchableHighlight>

                        <TouchableHighlight
                            underlayColor={'#61BD8C'}
                            activeOpacity={0.3}
                            onPress={() => {
                                this.props.navigator.push({ id: 'contato' });
                            }}
                        >
                            <Image style={styles.imagem} source={menuContato} />
                        </TouchableHighlight>

                    </View>

                    <View style={styles.menuInterno}>
                        <TouchableHighlight
                            underlayColor={'#EC7148'}
                            activeOpacity={0.3}
                            onPress={() => {
                                this.props.navigator.push({ id: 'empresa' });
                            }}
                        >
                            <Image style={styles.imagem} source={menuEmpresa} />
                        </TouchableHighlight>

                        <TouchableHighlight
                            underlayColor={'#19D1C8'}
                            activeOpacity={0.3}
                            onPress={() => {
                                this.props.navigator.push({ id: 'servico' });
                            }}
                        >
                            <Image style={styles.imagem} source={menuServico} />
                        </TouchableHighlight>

                    </View>
                </View>

            </View>
        );
    }
}

styles = StyleSheet.create({
    logo: {
        alignItems: 'center',
        margin: 20,

    },

    menu: {
        alignItems: 'center',
    },

    menuInterno: {
        flexDirection: 'row',
    },

    imagem: {
        margin: 10,
    },

    fundo: {
        backgroundColor: '#FFF',
        flex: 1,
    }
});

export default CenaPrincipal;
