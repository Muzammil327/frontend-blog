import React from "react";
import Link from "next/link";
import { FaFacebook, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";

export default function FooterUpper() {
  return (
    <div className="upper">
      <div className="social">
        <ul>
          <li className="bg-facebook">
            <Link
              href="https://web.facebook.com/codewithhub/"
              target="_blank"
              title="facebook"
            >
              <span className="icon">
                <FaFacebook />
              </span>
              <span className="text">Facebook</span>
            </Link>
          </li>
          <li className="bg-twitter">
            <Link
              href=""
              rel="noopener noreferrer"
              target="_blank"
              title="twitter"
            >
              <span className="icon">
                <FaTwitter />
              </span>
              <span className="text">Twitter</span>
            </Link>
          </li>
          <li className="bg-youtube">
            <Link
              href="https://www.youtube.com/@codewithhubss"
              target="_blank"
              title="youtube"
            >
              <span className="icon">
                <FaYoutube />
              </span>
              <span className="text">YouTube</span>
            </Link>
          </li>
          <li className="bg-instagram">
            <Link
              href="https://www.instagram.com/codewithhubs/"
              target="_blank"
              title="instagram"
            >
              <span className="icon">
                <FaInstagram />
              </span>
              <span className="text">Instagram</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
