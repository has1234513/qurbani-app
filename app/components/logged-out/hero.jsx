import Image from 'next/image';
import qurbaniLogoBig from '../../../public/images/qurbani-logo-big.png';

export default function Example() {
    return (
      <div className="relative bg-white">
        <div className="">
          <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
            <div className="sm:max-w-lg">
              <Image src={qurbaniLogoBig} alt='Qurbani Platform Logo' className="w-[40vw]"/>
              <p className="mt-4 text-xl text-gray-500 text-center">
                A platform to trade livestock for qurban
              </p>
            </div>
            
          </div>
        </div>
      </div>
    )
  }
  