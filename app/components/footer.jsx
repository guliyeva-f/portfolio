import Link from 'next/link';
import { FaHeart } from 'react-icons/fa6';

function Footer() {
  return (
    <div className="relative border-t bg-[#0d1224] border-[#353951] text-white">
      <div className="mx-auto px-6 sm:px-12 lg:max-w-280 xl:max-w-304 2xl:max-w-368 py-6 lg:py-10">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm flex gap-2 items-center">
            © Portfolio by <Link href="#" className="text-[#16f2b3] flex gap-1 items-center">Guliyeva <FaHeart /></Link>
          </p>
        </div>
      </div>
    </div >
  );
};

export default Footer;