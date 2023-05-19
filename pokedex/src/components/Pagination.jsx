/* eslint-disable import/no-extraneous-dependencies */
import { Poppins } from 'next/font/google';
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';

const poppins = Poppins({
  subsets: ['latin'],
  weight: '700',
});

function Pagination({ replace, prevRoute, nextRoute, currentPage }) {
  return (
    <div
      className={`flex justify-center items-center gap-6 text-2xl ${poppins.className} text-black mt-12`}
    >
      <button
        type="button"
        onClick={() => replace(prevRoute)}
        className="bg-white p-4 rounded-xl"
      >
        <FaChevronLeft />
      </button>
      <span className="text-white text-4xl">{currentPage}</span>
      <button
        type="button"
        onClick={() => replace(nextRoute)}
        className="bg-white p-4 rounded-xl"
      >
        <FaChevronRight />
      </button>
    </div>
  );
}

export default Pagination;
