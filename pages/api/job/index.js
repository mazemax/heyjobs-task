import { jobs } from '../../../jobData';

/**
 * Job listing API: Sends hard-coded data from file
 * @param req
 * @param res
 */
export default (req, res) => {
    res.status(200).json(jobs);
}