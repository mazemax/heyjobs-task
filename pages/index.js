import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';
import fetch from 'isomorphic-unfetch';
import { useTheme } from '@material-ui/core/styles';

import { config } from '../config/config';
import { resetJob } from '../store/home/action';
import Nav from '../components/Nav';
import JobList from '../components/JobList';
import { Card, Container, CardHeader, CardContent, Divider, NoJobsWrapper } from '../styles/index.style';

/**
 * Functional component for Home page
 * @param data
 * @param status
 * @returns {*}
 * @constructor
 */
function Home ({ data, status }) {
    const theme = useTheme();

    return (
        <div>
            <Head>
                <title>Home</title>
                <link rel='icon' href='/favicon.ico' />
            </Head>

            <Nav />

            <Container maxWidth={'xl'}>
                <Card theme={theme}>
                    <CardHeader title="Available Jobs"/>
                    <Divider/>

                    {
                        (status === 200) ? (
                            <CardContent>
                                <JobList data={data}/>
                            </CardContent>
                        ) : (
                            <NoJobsWrapper>
                                {'No jobs are available! Please try again later.'}
                            </NoJobsWrapper>
                        )
                    }
                </Card>
            </Container>
        </div>
    );
}

/**
 * Home page code that executes on server-side and client-side
 * @param reduxStore
 * @returns {Promise<{data: *, status: *}>}
 */
Home.getInitialProps = async ({ store }) => {
    // Reset job values in store
    const { dispatch } = store;
    dispatch(resetJob());

    // Fetch available jobs from API
    const response = await fetch(config.apiBaseUrl + 'job');
    const data = await response.json();

    return {
        data,
        status: response.status
    };
};

/**
 * Typechecking for Home page
 * @type {{data: *, status: *}}
 */
Home.propTypes = {
    /**
     * Job data retrieved from API
     */
    data: PropTypes.array.isRequired,
    /**
     * API status code retrieved from API
     */
    status: PropTypes.number.isRequired
};

export default Home;
