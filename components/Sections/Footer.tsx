import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className='py-20 bg-[#F2F2F2]'>
      <div className='container max-w-full grid grid-cols-4'>
        <div className='col-auto'>
        <Link href='/' passHref><a href='/'><Image src="/images/footer-logo.png" width={114} height={113} alt=""/></a></Link>
        </div>
        <div className='col-auto'>
            <h4 className='font-patuaOne font-normal text-md text-black pb-6'>Courses</h4>
            <ul>
              <li className='pb-2.5'><a className='font-poppins text-[18px] font-normal text-black' href="#">How to earn money from online</a></li>
              <li className='pb-2.5'><a className='font-poppins text-[18px] font-normal text-black' href="#">Civil Engineering</a></li>
              <li className='pb-2.5'><a className='font-poppins text-[18px] font-normal text-black' href="#">Earn money with UI/Ux</a></li>
            </ul>
        </div>
        <div className='col-auto'>
            <h4 className='font-patuaOne font-normal text-md text-black pb-6'>Privacy policy</h4>
            <ul>
              <li className='pb-2.5'><a className='font-poppins text-[18px] font-normal text-black' href="#">Terms and service</a></li>
              <li className='pb-2.5'><a className='font-poppins text-[18px] font-normal text-black' href="#">Shipping information</a></li>
              <li className='pb-2.5'><a className='font-poppins text-[18px] font-normal text-black' href="#">Shipping information</a></li>
              <li className='pb-2.5'><a className='font-poppins text-[18px] font-normal text-black' href="#">FAQ</a></li>
              <li className='pb-2.5'><a className='font-poppins text-[18px] font-normal text-black' href="#">Refund policy</a></li>
            </ul>
        </div>
        <div className='col-auto'>
            <h4 className='font-patuaOne font-normal text-md text-black pb-6'>My Story</h4>
            <ul>
              <li className='pb-2.5'><a className='font-poppins text-[18px] font-normal text-black' href="#">About Us</a></li>
              <li className='pb-2.5'><a className='font-poppins text-[18px] font-normal text-black' href="#">Contact us</a></li>
              <li className='pb-2.5'><a className='font-poppins text-[18px] font-normal text-black' href="#">Unpuzzle story</a></li>
            </ul>
        </div>
      </div>
      <nav className='grid items-center text-center pt-20'>
        <ul>
          <li className='inline pr-6'><a href="#"><Image src="/icons/linkedin.png" width={25} height={25} alt=""/></a></li>
          <li className='inline pr-6'><a href="#"><Image src="/icons/twitter.png" width={25} height={25} alt=""/></a></li>
          <li className='inline pr-6'><a href="#"><Image src="/icons/facebook.png" width={25} height={25} alt=""/></a></li>
        </ul>
      </nav>
    </footer>
  )
}
