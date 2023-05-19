import Head from 'next/head'
import Layout from "@layout/index";

export default function Home() {

  return (
    <Layout>
      <Head>
        <title>React-Footballli</title>
      </Head>
      <main dir="ltr" style={{padding: "2rem", textAlign: "center"}}>
        <h3>Hi this a test project</h3>
        <h5>go to matches(مسابقات) menu</h5>
      </main>
    </Layout>
  )
}
