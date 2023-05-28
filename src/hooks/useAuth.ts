import useSWR from 'swr';
import callApi from '../helpers/callApi';
import { useAppDispatch } from './index';
import { updateUser } from '../store/auth';

const useAuth = () => {
    const dispatch = useAppDispatch();
    const { data, error } = useSWR('my_user', () => {
        return callApi().get('/user');
    });

    dispatch(updateUser(data?.data?.user));

    return { user: data?.data?.user, error, loading: !data && !error }
};

export default useAuth;