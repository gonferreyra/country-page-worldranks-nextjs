import Image from 'next/image';

export default function CountryPage() {
  return (
    <main className='px-4 lg:p-8 -mt-4 mb-8 bg-dark-text text-gray-text lg:rounded-lg lg:-mt-12 border border-dark-light-text max-w-screen-md mx-auto font-bold'>
      <Image src='' alt='flag' width={50} height={100} />

      <h2 className='text-[32px]'>India</h2>
      <h3>Republic of India</h3>

      <div>
        <p className=''>Population</p>
        <p>1380004385</p>
      </div>

      <div>
        <p>Area (km2)</p>
        <p>2973190</p>
      </div>
    </main>
  );
}
