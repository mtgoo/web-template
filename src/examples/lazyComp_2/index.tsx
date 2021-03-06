import React from "react";
import { LazyComp } from "../../comps/lazyComp";
import { HashRouter as Router, Redirect, Route } from 'react-router-dom'
import { MyApp } from "../../__internal/index";
import '@/config/myStore';


import Page3 from "./page3";

export function AllRoutes() {
    return <Router>
        <Route path="/page1" render={() => <LazyComp target={() => import("./page1")} />} />
        <Route path="/page2" render={() => <LazyComp target={() => import("./page2")} />} />
        <Route path="/page3" component={Page3} />
        <Route exact path="/" render={() => <Redirect to="/page1" />} />
    </Router>
}

/**
 * 演示LazyComp配合路由做界面bundle分割
 */
MyApp.start(< AllRoutes />)
