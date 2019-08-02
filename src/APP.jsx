import React, { Component } from 'react'
import Router from './router/router';
import './App.scss'
import Head from './components/Head/head'

export default class APP extends Component {
    render() {
        return (
            <div>
                <Head />
                <Router />
            </div>
        )
    }
}
