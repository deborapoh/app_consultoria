import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { Navigator } from 'react-native-deprecated-custom-components';

import CenaPrincipal from './src/components/cenaprincipal';
import CenaClientes from './src/components/cenaclientes';
import CenaContato from './src/components/cenacontato';
import CenaEmpresa from './src/components/cenaempresa';
import CenaServico from './src/components/cenaservico';

class Consultoria extends Component {
    render(){
        return (
            <Navigator
                initialRoute={{ id: 'principal' }}
                renderScene={(route, navigator) => {
                    // definir a cena com base na rota

                    switch (route.id) {
                        case 'principal':
                            return (<CenaPrincipal navigator={navigator} />);
                            break;

                        case 'clientes':
                            return (<CenaClientes navigator={navigator}  />);
                            break;

                        case 'empresa':
                            return (<CenaEmpresa navigator={navigator} />);
                            break;
                        case 'contato':
                            return (<CenaContato navigator={navigator} />);
                            break;
                        case 'servico':
                            return (<CenaServico navigator={navigator} />);
                            break;
                        default:
                            return false;
                    }
                }}
            />

        );
    }
}

AppRegistry.registerComponent('consultoria', () => Consultoria);
