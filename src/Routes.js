import React from 'react';
import { BrowserRouter,Switch,Route } from 'react-router-dom'
import App from './App';
import ProductView from './screens/core/ProductView';
const Routes = () => {
    var productId = 1
    return(
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={App} />
                <Route path={'/view/'+productId} exact component={ProductView} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes