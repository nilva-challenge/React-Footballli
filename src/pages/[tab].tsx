import {GetStaticPaths, GetStaticProps, GetStaticPropsContext, InferGetStaticPropsType} from 'next/types'
import HomeView from "@/ui/views/HomeView";

const validTabs = ['matches', 'explore', 'football', 'leagues', 'profile'];

const HomeTabs = ({tab}: InferGetStaticPropsType<typeof getStaticProps>) => {
    if (!validTabs.includes(tab)) {
        return <HomeView tab="matches"/>
    }

    return <HomeView tab={tab}/>
}

export const getStaticPaths: GetStaticPaths = () => {
    return {
        paths: validTabs.map(tab => ({params: {tab}})),
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