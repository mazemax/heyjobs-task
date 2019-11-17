import React from 'react';
import App from 'next/app';
import { ThemeProvider } from 'styled-components';
import { ThemeProvider as MaterialThemeProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import {Provider} from 'react-redux';
import withRedux from 'next-redux-wrapper';

import materialTheme from '../config/materialTheme';
import { makeStore } from '../lib/redux';

/**
 * Create a theme for styled-components
 * @type {{colors: {primary: string}}}
 */
const theme = {
    colors: {
        primary: '#0070f3'
    }
};

/**
 * Extend App from NextJS
 */
class MyApp extends App {
    static async getInitialProps ({ Component, ctx }) {
        return {
            pageProps: Component.getInitialProps
                ? await Component.getInitialProps(ctx)
                : {}
        }
    }

    render() {
        const { Component, pageProps, store } = this.props;

        return (
            <ThemeProvider theme={theme}>
                <MaterialThemeProvider theme={materialTheme}>
                    {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
                    <CssBaseline />

                    <Provider store={store}>
                        <Component {...pageProps} />
                    </Provider>
                </MaterialThemeProvider>
            </ThemeProvider>
        )
    }
}

export default withRedux(makeStore)(MyApp);