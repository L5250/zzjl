import React from 'react';
import { HashRouter, Route } from 'react-router-dom';

import Page1 from '../pages/page1/Page1';
import Page2 from '../pages/page2/Page2';
import Page3 from '../pages/Page3/page3';
import Page4 from '../pages/Page4/page4';
import Page5 from '../pages/Page5/page5';
import Page6 from '../pages/Page6/Page6';

export default class Router extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <HashRouter>
                <Route path='/' exact component={Page1}></Route>
                <Route path="/2" component={Page2}></Route>
                <Route path="/3" component={Page3}></Route>
                <Route path="/4" component={Page4}></Route>
                <Route path="/5" component={Page5}></Route>
                <Route path="/6" component={Page6}></Route>
            </HashRouter>
        )
    }

}