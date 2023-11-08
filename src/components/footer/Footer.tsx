import { MdOutlineArrowForward } from "react-icons/md"
import { GrFacebook, GrInstagram, GrPinterest, GrTiktok } from 'react-icons/gr'

const Footer = () => {
    type dateProps = {
        date: Date
    }

    const date = new Date().getFullYear()

    return(
        <footer className="relative bg-gray-700 px-5 py-8 grid lg:flex flex-wrap justify-between gap-4 lg:px-[108px] lg:py-18">
            <div className="flex flex-col gap-1 lg:w-[40%]">
                <h6 className="text-white">Join Our Club, Get 15% Off For Your Birthday</h6>
                <div>
                    <form className="w-full grid gap-2">
                        <div className="w-full px-4 py-2 flex items-center justify-between border border-solid border-primary-50">
                            <input className="bg-gray-700 outline-none w-full text-white" type='email' placeholder="Enter Your Email Address" required/>
                            <MdOutlineArrowForward className='text-white' />
                        </div>
                        <div className="flex items-center gap-4">
                            <input type="checkbox" />
                            <p className="capitalize overlineLG text-white">By submitting your email, your agree to recieve advertising emails from modimal</p>
                        </div>
                    </form>
                </div>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8">
                <div className="grid gap-1">
                   <h6 className="text-white">About Modimal</h6>
                    <ul className="grid gap-1">
                        <li className="bodyMD text-white">Collection</li>
                        <li className="bodyMD text-white">Sustainability</li>
                        <li className="bodyMD text-white">Privacy Policy</li>
                        <li className="bodyMD text-white">Support System</li>
                        <li className="bodyMD text-white">Terms & Conditions</li>
                        <li className="bodyMD text-white">Copyright Notice</li>
                    </ul>
                </div>
                <div className="flex flex-col gap-1">
                   <h6 className="text-white">Help & Support</h6>
                    <ul className="grid gap-1">
                        <li className="bodyMD text-white">Orders & Shipping</li>
                        <li className="bodyMD text-white">Returns & Refunds</li>
                        <li className="bodyMD text-white">FAQs</li>
                        <li className="bodyMD text-white">Contact Us</li>
                    </ul>
                </div>
                <div className="flex flex-col gap-1">
                   <h6 className="text-white">Join Up</h6>
                    <ul className="grid gap-1">
                        <li className="bodyMD text-white">Modimal Club</li>
                        <li className="bodyMD text-white">Careers</li>
                        <li className="bodyMD text-white">Visit Us</li>
                    </ul>
                </div> 
            </div>
            <div className="flex flex-col gap-4">
                <div className="flex justify-between items-center w-[40%]">
                    <div className="flex text-white gap-4 text-xl items-center">
                    <GrInstagram />
                        <GrFacebook />
                        <GrPinterest />
                        <GrTiktok /> 
                    </div>
                    <img className="lg:absolute bottom-18 right-[108px]" src="/images/footer-chatbox.png" width={50} height={50} alt="chat" />
                </div>
                <p className="text-gray-300 captionSM">
                    &copy;
                    <span>  {date} Modimal. All Rights Reserved.</span>
                </p>
            </div>
            
        </footer>
    )
}

export default Footer