import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { setJob } from '../store/home/action';
import {
    Avatar, LinkWrapper, List, ListItem, ListItemIcon, ListItemText, ListItemSecondaryAction,
    IconButton, Divider, BusinessCenterSharpIcon, ArrowForwardIosIcon
} from '../styles/JobList.style';

/**
 * Functional component for Job listing
 * @param data
 * @returns {*}
 * @constructor
 */
function JobList ({ data }) {
    const dispatch = useDispatch();

    return (
        <List component="nav" aria-label="main">

            {
                data.map(job => (
                    <React.Fragment key={job.id}>
                        <Link href="/detail">
                            <LinkWrapper onClick={() => dispatch(setJob(job))}>
                                <ListItem button>
                                    <ListItemIcon>
                                        <Avatar variant="rounded">
                                            <BusinessCenterSharpIcon color={'secondary'} />
                                        </Avatar>
                                    </ListItemIcon>
                                    <ListItemText primary={job.title} />
                                    <ListItemSecondaryAction>
                                        <IconButton edge="end" aria-label="delete">
                                            <ArrowForwardIosIcon />
                                        </IconButton>
                                    </ListItemSecondaryAction>
                                </ListItem>
                            </LinkWrapper>
                        </Link>
                        <Divider />
                    </React.Fragment>
                ))
            }

        </List>
    );
}

/**
 * Typechecking for JobList
 * @type {{data: *}}
 */
JobList.propTypes = {
    /**
     * Job data retrieved from API
     */
    data: PropTypes.array.isRequired
};

export default JobList;
