import React, { Component } from 'react';
import { Text, StyleSheet, View, Image, StatusBar } from 'react-native';

import BarraNavegacao from './barranavegacao';

const detalhe_servico = require('../../imgs/detalhe_servico.png');

class CenaServico extends Component {
    render(){
        return (
            <View style={styles.fundo}>
                <StatusBar backgroundColor = '#19D1C8' />
                <BarraNavegacao back navigator={this.props.navigator} corDeFundo='#19D1C8' />

                <View style={styles.topo}>
                    <Image source={detalhe_servico} />
                    <Text style={styles.txtTopo}>Nossos Serviços</Text>
                </View>

                <View style={styles.servicos}>
                    <Text style={styles.txtServicos}>- Consultoria</Text>
                    <Text style={styles.txtServicos}>- Processos</Text>
                    <Text style={styles.txtServicos}>- Acompanhamento de Projetos</Text>
                </View>

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
        color: '#19D1C8',
        marginLeft: 15,
    },

    servicos: {
        margin: 20,
    },

    txtServicos: {
        color: '#A9A9A9',
        fontSize: 16,
    }
});


export default CenaServico;
