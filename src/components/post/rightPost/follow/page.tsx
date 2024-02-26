import React from "react";
import Link from "next/link";
import { FaFacebook, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";

export default function RightPostFollow() {
  return (
    <div className="rightpost">
      <div className="title">
        <h3>Follow Us</h3>
      </div>
      <div className="follow">
        <ul>
          <li className="bg-facebook">
            <Link
              href="https://web.facebook.com/codewithhub/"
              target="_blank"
              title="facebook"
            >
              <span className="icon">
                <FaFacebook />{" "}
              </span>
              <span className="text">Facebook</span>
            </Link>
          </li>
          <li className="bg-twitter">
            <a
              href="/"
              target="_blank"
              title="twitter"
            >
              <span className="icon">
                <FaTwitter />{" "}
              </span>
              <span className="text">Twitter</span>
            </a>
          </li>
          <li className="bg-youtube">
            <a
              href="https://www.youtube.com/@codewithhubss"
              target="_blank"
              title="youtube"
            >
              <span className="icon">
                <FaYoutube />{" "}
              </span>
              <span className="text">YouTube</span>
            </a>
          </li>
          <li className="bg-instagram">
            <Link
              href="https://www.instagram.com/codewithhubs/"
              target="_blank"
              title="instagram"
            >
              <span className="icon">
                <FaInstagram />{" "}
              </span>

              <span className="text">Instagram</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
