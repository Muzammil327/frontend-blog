import Hero from "@/src/components/hero/page";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationArrow, FaMapLocation } from "react-icons/fa6";

export default function Page() {
  return (
    <>
      <Hero title="Contact Us" />
      <div>
        <div className="py-7 bg-white">
          <div className="container mx-auto px-8 relative">
            <div className="section-header">
              <h1 className="py-4 font-medium text-4xl">Contact Us</h1>
              <h2 className="pb-6 font-thin text-lg"> For Any Query  </h2>
            </div>
            <div className="row align-items-center gap-7 flex lg:flex-row flex-col">
              <div className="w-full">
                <div className="contact-info relative flex p-8 border-2 border-solid border-gray-100 mb-7 transition-all hover:border-transparent ">
                  <div className="contact-icon text-red-400 relative w-12 h-12 flex justify-center items-center border-2 border-solid border-gray-300 ">
                    <FaLocationArrow />
                  </div>
                  <div className="contact-text relative flex flex-col pl-4">
                    <h3 className="text-gray-400 font-normal text-xl">
                      Our Head Office
                    </h3>
                    <p className="m-0 text-base"> TOBA TEK SINGH, PAKISTAN</p>
                  </div>
                </div>
                <div className="contact-info relative flex p-8 border-2 border-solid border-gray-100 mb-7 transition-all hover:border-transparent ">
                  <div className="contact-icon text-red-400 relative w-12 h-12 flex justify-center items-center border-2 border-solid border-gray-300 ">
                  <FaPhoneAlt />
                  </div>
                  <div className="contact-text relative flex flex-col pl-4">
                    <h3 className="text-gray-400 font-normal text-xl">
                      Any Information
                    </h3>
                    <p className="m-0 text-base">Call for Help</p>
                  </div>
                </div>
                <div className="contact-info relative flex p-8 border-2 border-solid border-gray-100 mb-7 transition-all hover:border-transparent ">
                  <div className="contact-icon text-red-400 relative w-12 h-12 flex justify-center items-center border-2 border-solid border-gray-300 ">
                    <FaMapLocation />
                  </div>
                  <div className="contact-text relative flex flex-col pl-4">
                    <h3 className="text-gray-400 font-normal text-xl">
                      Email for Information
                    </h3>
                    <p className="m-0 text-base">topperacademy82@gmail.com</p>
                  </div>
                </div>
              </div>
              <div className="w-full">
                <div className="contact-form border-solid border-2 border-gray-200 mb-7 p-7 relative transition-all">
                  <div id="success"></div>
                  <form method="post" >
                    <div className="form-group mb-4">
                      <input
                        type="text"
                        name="name"
                        className="form-control bg-none outline-none rounded-none mb-5 p-4 block w-full text-base font-normal leading-6 text-gray-400 border-2 border-solid border-gray-100 "
                        placeholder="Your Name *"
                      />
                    </div>
                    <div className="form-group mb-4">
                      <input
                        type="text"
                        name="email"
                        className="form-control bg-none outline-none rounded-none mb-5 p-4 block w-full text-base font-normal leading-6 text-gray-400 border-2 border-solid border-gray-100 "
                        placeholder="Your Email *"
                      />
                    </div>
                    <div className="form-group mb-4">
                      <input
                        type="text"
                        name="subject"
                        className="form-control bg-none outline-none rounded-none mb-5 p-4 block w-full text-base font-normal leading-6 text-gray-400 border-2 border-solid border-gray-100 "
                        placeholder="Your Subject *"
                      />
                    </div>
                    <div className="form-group mb-4">
                      <textarea
                        name="comment"
                        className="form-control bg-none outline-none rounded-none mb-5 p-4 block w-full text-base font-normal leading-6 text-gray-400 border-2 border-solid border-gray-100 h-24"
                        id="message"
                        placeholder="Your Message"
                      ></textarea>
                    </div>
                    <div className="form-group my-4 pt-4">
                      <a
                        className="md:px-10 w-full block text-center px-4 md:py-4 py-3 bg-red-400 text-white rounded-md mr-4 font-bold hover:bg-white hover:outline hover:outline-red-400 hover:text-red-400 hover:outline-2"
                        href="/download-cv"
                      >
                        Send Inquiry
                      </a>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
