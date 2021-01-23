import Head from 'next/head';
import { connectToDatabase } from '../util/mongodb';

export default function Home({ properties }) {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div class='container mx-auto'>
        <div class='flex'>
          <div class='row w-full text-center my-4'>
            <h1 class='text-4x1 font-bold mb-5'>Nextbnb</h1>
          </div>
        </div>
        <div class='flex flex-row flex-wrap'>
          {properties &&
            properties.map((property) => (
              <div class='flex-auto w-1/4 rounded overflow-hidden shadow-lg m-2'>
                <img class='w-full' src={property.image} />
                <div class='px-6 py-4'>
                  <div class='font-bold text-xl mb-2'>
                    {property.name} (Up to {property.guests} guests)
                  </div>
                  <p>{property.address.street}</p>
                  <p class='text-gray-700 text-base'>{property.summary}</p>
                </div>
                <div class='text-center py-2 my-2 font-bold'>
                  <span class='text-green-500'>{property.price}</span>/night
                </div>
                <div class='text-center py-2 my-2 font-bold'>
                  <button class='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mr-5 rounded'>
                    Book
                  </button>
                </div>
              </div>
            ))}
        </div>
      </div>
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
  const filtered = properties.map((property) => {
    const price = JSON.parse(JSON.stringify(property.price));
    return {
      _id: property._id,
      name: property.name,
      image: property.images.picture_url,
      address: property.address,
      summary: property.summary,
      guests: property.accommodates,
      price: price.$numberDecimal,
    };
  });

  return {
    props: { properties: filtered },
  };
}
