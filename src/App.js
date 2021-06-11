import React from 'react';
import {Route, Switch } from "react-router-dom";
import home from './Routes/Home';
import masks from './Routes/Masks';
import electronics from './Routes/Electronics';
import dress from './Routes/Dress';
import kichen from './Routes/kichen';
import oxygen from './Routes/Oxygen';
import cart from './Routes/Cart';
import error from './Routes/component/Error';

const App = () =>{
    return ( 
        <>
            <Switch>
                <Route exact path="/" component={home}/>
                <Route path="/masks" component={masks} />
                <Route path="/electronics" component={electronics} />
                <Route path="/dress" component={dress} />
                <Route path="/kichen" component={kichen} />
                <Route path="/oxygen" component={oxygen} />
                <Route path="/cart" component={cart} />
                <Route component={error} />
            </Switch>
        </>
    );
}

export default App;
