import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { useTheme } from '@material-ui/core/styles';

import Nav from '../components/Nav';
import { Card, Avatar, Container, CardContent, CardHeader, CardMedia, CardActions, Typography,
         Grid, Divider, IconButton, ShareIcon, MoreVertIcon, BusinessCenterSharpIcon, ArrowBackIcon
} from '../styles/detail.style';

/**
 * Functional component for Detail page - uses Redux store to show Job data
 * @returns {*}
 * @constructor
 */
function Detail ({ id, title, description, employmentType }) {
    const theme = useTheme();

    if (employmentType.includes('part_time')) {
        employmentType = 'Part time';
    } else {
        employmentType = 'Full time';
    }

    return (
        <div>
            <Head>
                <title>Job Details</title>
                <link rel='icon' href='/favicon.ico' />
            </Head>

            <Nav />

            <Container maxWidth={'xl'}>
                <Card theme={theme}>
                    <CardHeader
                        avatar={
                            <Avatar variant={'rounded'} aria-label="job">
                                <BusinessCenterSharpIcon color={'secondary'} />
                            </Avatar>
                        }
                        action={
                            <IconButton aria-label="settings">
                                <MoreVertIcon />
                            </IconButton>
                        }
                        title={title}
                        subheader={employmentType}
                    />
                    <Divider/>

                    <Grid container spacing={3}>
                        <Grid item md={6} xs={12} lg={4}>
                            <CardMedia
                                image="/TheHuntIsOn.png"
                                title="Job Image"
                            />
                        </Grid>
                        <Grid item md={6} xs={12} lg={8}>
                            <CardContent>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    {description}
                                </Typography>
                            </CardContent>
                        </Grid>
                    </Grid>

                    <Divider/>
                    <CardActions disableSpacing>
                        <Link href="/">
                            <a>
                            <IconButton aria-label="back to home">
                                <ArrowBackIcon />
                            </IconButton>
                            </a>
                        </Link>
                        <IconButton aria-label="share">
                            <ShareIcon />
                        </IconButton>
                    </CardActions>
                </Card>
            </Container>
        </div>
    );
}

/**
 * Detail page code that executes on server-side and client-side
 * @param store
 * @returns {Promise<{employmentType: *, description: *, id: *, title: *}>}
 */
Detail.getInitialProps = async ({ store }) => {
    const state = store.getState();
    const { id = '0', title = 'Job Title', description = 'No description', employmentType = 'Full time' } = state.home;
    return {
        id,
        title,
        description,
        employmentType
    };
};

/**
 * Typechecking for Detail page
 * @type {{employmentType: *, description: *, id: *, title: *}}
 */
Detail.propTypes = {
    /**
     * Job id retrieved from store
     */
    id: PropTypes.string.isRequired,
    /**
     * Job title retrieved from store
     */
    title: PropTypes.string.isRequired,
    /**
     * Job description retrieved from store
     */
    description: PropTypes.string.isRequired,
    /**
     * Job type retrieved from store
     */
    employmentType: PropTypes.string.isRequired
};

export default Detail;
