import Link from 'next/link';
import { UserButton, auth } from '@clerk/nextjs';
import Image from 'next/image';
import qurbaniLogo from '../../public/images/qurbani-logo.png';

const Header = async ({ username }) => {
  const { userId } = auth();

  return (
    <nav className='flex items-center justify-between px-4 py-3 sm:px-6 sm:py-4 mb-5 bg-green-700'>
      <div className='flex items-center'>
        <Link href='/'>
          <div className='text-lg font-bold text-white uppercase'>
            <Image src={qurbaniLogo} alt='Qurbani Platform Logo' height={30} />
          </div>
        </Link>
      </div>
      <div className='flex items-center text-white'>
        {!userId ? (
          <>
            <Link
              href='sign-in'
              className='text-sm sm:text-base text-gray-300 hover:text-white mr-3 sm:mr-4'
            >
              Sign In
            </Link>
            <Link
              href='sign-up'
              className='text-sm sm:text-base text-gray-300 hover:text-white mr-3 sm:mr-4'
            >
              Sign Up
            </Link>
          </>
        ) : (
          <Link href='profile' className='text-sm sm:text-base text-gray-300 hover:text-white mr-3 sm:mr-4'>
            Profile
          </Link>
        )}
        <div className='ml-auto'>
          <UserButton afterSignOutUrl='/' />
        </div>
      </div>
    </nav>
  );
};

export default Header;
