import React, { Component, Fragment } from 'react';

import classes from './Layout.module.css'
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
    state = {
        showSideDrawer: false,
    }
    
    sideDrawerClosedHandler = () => {
        this.setState({ showSideDrawer: false })
    }

    sideDrawerOpenHander = () => {
        this.setState({ showSideDrawer: true })
    }

    render() {
        return (
            <Fragment>
                <Toolbar openDrawer={this.sideDrawerOpenHander}/>
                <SideDrawer
                    show={this.state.showSideDrawer}
                    closed={this.sideDrawerClosedHandler} />
                <main className={classes.Layout}>
                    {this.props.children}
                </main>
            </Fragment>
        );
    };

}



export default Layout;