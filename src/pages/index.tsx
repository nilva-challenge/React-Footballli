import {GetServerSideProps, GetServerSidePropsContext} from 'next';

const Index = () => {
    return <div/>;
};

export const getServerSideProps: GetServerSideProps = async (context: GetServerSidePropsContext) => {
    return {
        redirect: {
            destination: '/matches',
            permanent: false,
        }
    };
};

export default Index;
