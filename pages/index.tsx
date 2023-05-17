import Head from 'next/head'
import Layout from "@layout/index";
import {useRouter} from "next/router";
import {useEffect} from "react";
import {HOME} from "@constants/routes";


export default function Home() {
  const router = useRouter()

  useEffect(() => {
    router.push(HOME).then()
  }, [])

  return (
    <Layout>
      <Head>
        <title>React-Footballli</title>
      </Head>
      <main>
        <h1>test</h1>
      </main>
    </Layout>
  )
}
