import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationArrow, FaMapLocation } from "react-icons/fa6";
import styles from "./ContactFormComponent.module.css";

export default function ContactForm() {
  return (
    <div>
      <div className="py-7 bg-white">
        <div className="container mx-auto px-8 relative">
          <div className="section-header">
            <h1 className="py-4 font-medium text-4xl">Contact Us</h1>
            <h2 className="pb-6 text-lg"> For Any Query </h2>
          </div>
          <div className="row align-items-center gap-7 flex lg:flex-row flex-col">
            <div className="w-full">
              {/* <div className="contact-info relative flex p-8 border-2 border-solid border-gray-100 mb-7 transition-all hover:border-transparent ">
              <div className="contact-icon text-red-400 relative w-12 h-12 flex justify-center items-center border-2 border-solid border-gray-300 ">
                <FaLocationArrow />
              </div>
              <div className="contact-text relative flex flex-col pl-4">
                <h3 className="text-gray-400 font-normal text-xl">
                  Our Head Office
                </h3>
                <p className="m-0 text-base"> TOBA TEK SINGH, PAKISTAN</p>
              </div>
            </div> */}
              {/* <div className="contact-info relative flex p-8 border-2 border-solid border-gray-100 mb-7 transition-all hover:border-transparent ">
              <div className="contact-icon text-red-400 relative w-12 h-12 flex justify-center items-center border-2 border-solid border-gray-300 ">
              <FaPhoneAlt />
              </div>
              <div className="contact-text relative flex flex-col pl-4">
                <h3 className="text-gray-400 font-normal text-xl">
                  Any Information
                </h3>
                <p className="m-0 text-base">Call for Help</p>
              </div>
            </div> */}
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
              <div className="contact-form border-solid border-2 border-gray-200 mb-7 p-7 relative transition-all hover:border-transparent">
                <form>
                  <div className="form-group mb-4">
                    <input
                      type="text"
                      name="name"
                      className={styles.input}
                      placeholder="Your Name *"
                    />
                  </div>
                  <div className="form-group mb-4">
                    <input
                      type="text"
                      name="email"
                      className={styles.input}
                      placeholder="Your Email *"
                    />
                  </div>
                  <div className="form-group mb-4">
                    <input
                      type="text"
                      name="subject"
                      className={styles.input}
                      placeholder="Your Topic *"
                    />
                  </div>
                  <div className="form-group mb-4">
                    <textarea
                      name="comment"
                      className={styles.input}
                      id="message"
                      placeholder="Your Message"
                    ></textarea>
                  </div>
                  <div className="form-group my-4 pt-4">
                    <button className={styles.button}>Send Inquiry</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
