import Image from 'next/image';
import InputButton from './components/input-button';
import SelectedButtons from './components/selected-buttons';

export default function Home() {
  return (
    <main className='px-4 lg:p-8 -mt-4 mb-8 bg-dark-text text-gray-text lg:mx-6 lg:rounded-lg lg:-mt-12 border border-dark-light-text'>
      <div className='flex items-center justify-between py-4'>
        <p className='font-bold'>Found 234 countries</p>
        <div className='flex items-center bg-dark-light-text px-4 py-3 rounded-xl w-[340px]'>
          <Image src='/Search.svg' width={25} height={50} alt='seatch-icon' />
          <input
            type='text'
            placeholder='Search by Name, Region, Subregion'
            className='bg-transparent w-full outline-none pl-2 font-bold text-sm'
          />
        </div>
      </div>
      <div className='lg:flex lg:flex-row lg:gap-12'>
        <div className='flex flex-col lg:w-1/4 lg:mt-10'>
          <label htmlFor='sort' className='text-xs font-bold'>
            Sort by
          </label>
          <select
            name='sort'
            id='sort'
            className=' bg-inherit border border-dark-light-text px-4 py-2 rounded-xl mt-2'
          >
            <option value='population'>Population</option>
          </select>

          <label htmlFor='region' className='mt-8 text-xs'>
            Region
          </label>

          <SelectedButtons />

          <label htmlFor='status' className='mt-8 text-xs'>
            Status
          </label>

          <div className='flex items-center gap-2 mt-2'>
            <input
              type='checkbox'
              value='member'
              id='member'
              className='w-6 h-6'
            />
            <label
              htmlFor='member'
              className='text-white-text font-bold text-sm'
            >
              Member of the United Nations
            </label>
          </div>

          <div className='flex items-center gap-2 mt-2'>
            <input
              type='checkbox'
              value='independent'
              id='independent'
              className='w-6 h-6'
            />
            <label
              htmlFor='member'
              className='text-white-text font-bold text-sm'
            >
              Independent
            </label>
          </div>
        </div>
        <div className='mt-8 lg:w-3/4'>
          <table className='table-auto w-full'>
            <thead className='border-b border-dark-light-text'>
              <tr className='text-xs text-justify'>
                <th className='py-4'>Flag</th>
                <th className='py-4'>Name</th>
                <th className='py-4'>Population</th>
                <th className='py-4'>Area(km2)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className='py-4 text-white-text'>flag1</td>
                <td className='py-4 text-white-text'>China</td>
                <td className='py-4 text-white-text'>1,402,112,000</td>
                <td className='py-4 text-white-text'>9,706,961</td>
              </tr>
              <tr>
                <td className='py-4 text-white-text'>flag1</td>
                <td className='py-4 text-white-text'>China</td>
                <td className='py-4 text-white-text'>1,402,112,000</td>
                <td className='py-4 text-white-text'>9,706,961</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}
