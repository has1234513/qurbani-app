import { auth } from '@clerk/nextjs';
import Hero from './components/logged-out/hero';

const Home = async () =>  {

  const { userId } = auth();

  return (
    <>
    {!userId ? (
          <Hero />
        ) : (
          <>
            <h1 className='text-2xl font-bold mb-5'>Dashboard</h1>
            <p className='mb-5'>Welcome to the dashboard!</p>
          </>
        )}
      
    </>
  );
}


export default Home;