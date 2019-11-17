import { jobs } from '../../../jobData';

/**
 * Get Job API: Gets a job by Id
 * @param id
 * @param res
 */
export default ({ query: { id } }, res) => {
    const filtered = jobs.filter(job => job.id === id);

    // Job with id exists
    if (filtered.length > 0) {
        res.status(200).json(filtered[0]);
    } else {
        res.status(404).json({ message: `Job with id: ${id} not found.` });
    }
}