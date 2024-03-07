import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { getJobById } from '../../../../store/actions/jobs';
import { useParams } from 'react-router-dom';

export const useJobDetails = () => {
  const dispatch = useDispatch();
  const { id } = useParams<{ id: string }>();
  const jobSelectors = useSelector((state: any) => state?.job);
  const { loading, job, error } = jobSelectors;

  useEffect(() => {
    if (job && Object.keys(job).length === 0) {
      dispatch(getJobById(id as string));
    }
  }, []);

  return { loading, job, error };
};
