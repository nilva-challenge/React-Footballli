import {GetStaticPaths, GetStaticProps, GetStaticPropsContext, InferGetStaticPropsType} from 'next/types'
import HomeView from "@/ui/views/HomeView";
import {HomeNavItems} from "@/constant/config";


const HomeTabs = ({tab}: InferGetStaticPropsType<typeof getStaticProps>) => {
    if (!Object.values(HomeNavItems).includes(tab)) {
        return <HomeView tab="matches"/>
    }

    return <HomeView tab={tab}/>
}

export const getStaticPaths: GetStaticPaths = () => {
    return {
        paths: Object.values(HomeNavItems).map(tab => ({params: {tab}})),
        fallback: false
    }
}

export const getStaticProps: GetStaticProps = async ({params}: GetStaticPropsContext) => {
    const tab = params?.tab;

    return {
        props: {
            tab,
        }
    };
}

export default HomeTabs;