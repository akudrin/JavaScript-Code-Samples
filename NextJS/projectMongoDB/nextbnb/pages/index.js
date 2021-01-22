import Head from 'next/head';
import { connectToDatabase } from '../util/mongodb';
import '../styles/globals.css';

export default function Home({ properties }) {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <table class='table-auto'>
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Views</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Intro to CSS</td>
            <td>Adam</td>
            <td>858</td>
          </tr>
          <tr class='bg-emerald-200'>
            <td>
              A Long and Winding Tour of the History of UI Frameworks and Tools
              and the Impact on Design
            </td>
            <td>Adam</td>
            <td>112</td>
          </tr>
          <tr>
            <td>Intro to JavaScript</td>
            <td>Chris</td>
            <td>1,280</td>
          </tr>
        </tbody>
      </table>
      <table class='table-fixed'>
        <thead>
          <tr>
            <th class='w-1/2 ...'>Title</th>
            <th class='w-1/4 ...'>Author</th>
            <th class='w-1/4 ...'>Views</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Intro to CSS</td>
            <td>Adam</td>
            <td>858</td>
          </tr>
          <tr class='bg-blue-200'>
            <td>
              A Long and Winding Tour of the History of UI Frameworks and Tools
              and the Impact on Design
            </td>
            <td>Adam</td>
            <td>112</td>
          </tr>
          <tr>
            <td>Intro to JavaScript</td>
            <td>Chris</td>
            <td>1,280</td>
          </tr>
        </tbody>
      </table>
      <div class='min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12'>
        <div class='relative py-3 sm:max-w-xl sm:mx-auto'>
          <div class='absolute inset-0 bg-gradient-to-r from-cyan-400 to-light-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl'></div>
          <div class='relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20'>
            <div class='max-w-md mx-auto'>
              <div>
                <img src='/img/logo.svg' class='h-7 sm:h-8' />
              </div>
              <div class='divide-y divide-gray-200'>
                <div class='py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7'>
                  <p>
                    An advanced online playground for Tailwind CSS, including
                    support for things like:
                  </p>
                  <ul class='list-disc space-y-2'>
                    <li class='flex items-start'>
                      <span class='h-6 flex items-center sm:h-7'>
                        <svg
                          class='flex-shrink-0 h-5 w-5 text-cyan-500'
                          viewBox='0 0 20 20'
                          fill='currentColor'
                        >
                          <path
                            fill-rule='evenodd'
                            d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                            clip-rule='evenodd'
                          />
                        </svg>
                      </span>
                      <p class='ml-2'>
                        Customizing your
                        <code class='text-sm font-bold text-gray-900'>
                          tailwind.config.js
                        </code>{' '}
                        file
                      </p>
                    </li>
                    <li class='flex items-start'>
                      <span class='h-6 flex items-center sm:h-7'>
                        <svg
                          class='flex-shrink-0 h-5 w-5 text-cyan-500'
                          viewBox='0 0 20 20'
                          fill='currentColor'
                        >
                          <path
                            fill-rule='evenodd'
                            d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                            clip-rule='evenodd'
                          />
                        </svg>
                      </span>
                      <p class='ml-2'>
                        Extracting classes with
                        <code class='text-sm font-bold text-gray-900'>
                          @apply
                        </code>
                      </p>
                    </li>
                    <li class='flex items-start'>
                      <span class='h-6 flex items-center sm:h-7'>
                        <svg
                          class='flex-shrink-0 h-5 w-5 text-cyan-500'
                          viewBox='0 0 20 20'
                          fill='currentColor'
                        >
                          <path
                            fill-rule='evenodd'
                            d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                            clip-rule='evenodd'
                          />
                        </svg>
                      </span>
                      <p class='ml-2'>Code completion with instant preview</p>
                    </li>
                  </ul>
                  <p>
                    Perfect for learning how the framework works, prototyping a
                    new idea, or creating a demo to share online.
                  </p>
                </div>
                <div class='pt-6 text-base leading-6 font-bold sm:text-lg sm:leading-7'>
                  <p>Want to dig deeper into Tailwind?</p>
                  <p>
                    <a
                      href='https://tailwindcss.com/docs'
                      class='text-cyan-600 hover:text-cyan-700'
                    >
                      {' '}
                      Read the docs &rarr;{' '}
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
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

  return {
    props: { properties: properties },
  };
}
