import Image from 'next/image'

export default function Footer() {
  return (
    <footer>
      <div className="footer-main">
        <div className='container mx-auto grid grid-cols-4'>
          <div className='footer-logo'>
            <Image src="/footer-logo.png" width={114} height={113} alt=""/>
          </div>
          <div className='col-auto'>
            <h4>Courses</h4>
            <ul>
              <li><a href="#">How to earn money from online</a></li>
              <li><a href="#">Civil Engineering</a></li>
              <li><a href="#">Earn money with UI/Ux</a></li>
            </ul>
          </div>
          <div className='col-auto'>
            <h4>Privacy policy</h4>
            <ul>
              <li><a href="#">Terms and service</a></li>
              <li><a href="#">Shipping information</a></li>
              <li><a href="#">Shipping information</a></li>
              <li><a href="#">FAQ</a></li>
              <li><a href="#">Refund policy</a></li>
            </ul>
          </div>
          <div className='col-auto'>
            <h4>My Story</h4>
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Contact us</a></li>
              <li><a href="#">Unpuzzle story</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-social">

      </div>
    </footer>
  )
}
