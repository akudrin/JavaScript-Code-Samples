import Head from 'next/head';
import { connectToDatabase } from '../util/mongodb';

export default function Home({ properties }) {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
    </div>
  );
}

export async function getServerSideProps(context) {
  const { db } = await connectToDatabase();
  const data = await db
    .collection('listingsAndReviews')
    .find({})
    .limit(20)
    .toArray();
  const properties = JSON.parse(JSON.stringify(data));

  return {
    props: { properties: properties },
  };
}
