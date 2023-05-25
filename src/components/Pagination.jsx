/* eslint-disable import/no-extraneous-dependencies */
import { Poppins } from 'next/font/google';
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { DEFAULT_LIMIT } from '@/constants/api';

const poppins = Poppins({
  subsets: ['latin'],
  weight: '700',
});

function Pagination({ count }) {
  const router = useRouter();
  const { offset } = router.query;

  const offsetValue = offset ? Number(offset) : 0;
  const totalPages = Math.ceil(count / DEFAULT_LIMIT);
  const currentPage = Math.ceil(offsetValue / DEFAULT_LIMIT) + 1;

  return (
    <div
      className={`flex justify-center items-center gap-6 text-2xl ${poppins.className} text-black mt-12`}
    >
      {offsetValue === 0 ? (
        <button
          type="button"
          className="bg-white/40 p-4 rounded-xl cursor-not-allowed"
          disabled
        >
          <FaChevronLeft />
        </button>
      ) : (
        <Link
          href={`/?offset=${
            offsetValue - DEFAULT_LIMIT
          }&limit=${DEFAULT_LIMIT}`}
          className="bg-white p-4 rounded-xl"
        >
          <FaChevronLeft />
        </Link>
      )}

      <span className="text-white text-4xl">{currentPage}</span>

      {currentPage < totalPages ? (
        <Link
          href={`/?offset=${
            offsetValue + DEFAULT_LIMIT
          }&limit=${DEFAULT_LIMIT}`}
          className="bg-white p-4 rounded-xl"
        >
          <FaChevronRight />
        </Link>
      ) : (
        <button
          type="button"
          className="bg-white/40 p-4 rounded-xl cursor-not-allowed"
          disabled
        >
          <FaChevronRight />
        </button>
      )}
    </div>
  );
}

export default Pagination;
