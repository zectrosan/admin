import React, { Component } from 'react';

import { SideNav, Nav } from 'react-sidenav';
class UploadScreen extends Component {
 
    state = { selectedPath: '' }
 
    onItemSelection = (arg) => {
        this.setState({ selectedPath: arg.path })
    }
 
    render() {
 
        return (
            <SideNav 
                selectedPath={this.state.selectedPath} 
                onItemSelection={this.onItemSelection}>
                <Nav id={'1'}>1</Nav>
                <Nav id={'2'}>2</Nav>
            </SideNav>
        )
    }
 
} 
export default UploadScreen;