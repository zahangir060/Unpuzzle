import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  return (
    <header>
      <div className='container max-w-full flex justify-center bg-blue'>
        <h1 className='font-poppins font-bold text-md text-white py-3'>The best platform for interactive learning...</h1>
      </div>
      <div className='bg-white py-6 shadow-[0px_4px_20px_rgba(0,0,0,0.2)]'>
        <div className='container max-w-full grid grid-cols-4'>
          <div className='col-span-2 flex flex-row items-center'>
            <div className='float-left'>
              <Link href='/' passHref><a href='/'><Image src="/logo.png" width={78} height={78} alt=""/></a></Link>
            </div>
            <form className="w-full px-12 float-left" action="" method="post">
              <div className='absolute mt-4 ml-4 opacity-50'>
                <Image src="/search.png" width={20} height={20} alt=""/>
              </div>
              <input type="text" name="search" className="font-poppins text-sm font-normal text-black-50 w-full rounded-[40px] py-2.5 pr-6 pl-12 border border-solid border-black-50 focus:outline-none" placeholder="Search Keywords..." />
            </form>
          </div>
          <nav className='flex flex-row items-center'>
            <ul>
              <li className='inline pr-10'><a href="#" className='font-poppins text-sm font-normal text-black-80'>Puzzle Journeys</a></li>
              <li className='inline pr-10'><a href="#" className='font-poppins text-sm font-normal text-black-80'>Confusions</a></li>
            </ul>
          </nav>
          <div className='grid items-center place-items-end'>
            <ul className='text-right items-end'>
              <li className='inline pl-2.5'><a href='/' className='px-2.5 py-2.5'><Image src="/cart.png" width={20} height={20} alt=""/></a></li>
              <li className='inline pl-2.5'><Link href='/login' passHref><button className="bg-white px-10 py-2 rounded text-yellow font-normal font-poppins text-sm border border-solid border-yellow">Login</button></Link></li>
              <li className='inline pl-2.5'><Link href='/register' passHref><button className="bg-blue px-10 py-2 rounded text-white font-normal font-poppins text-sm">Sign Up</button></Link></li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  )
}
