import React from "react";
import Link from "next/link";
import { FaFacebook, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";
import Container from "@/src/components/elements/container/page";

export default function SubHeader() {
  return (
    <div className="subheader">
      <Container>
        <div className="inner">
          <div className="link">
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/contact">Contacts</Link>
              </li>
            </ul>
          </div>

          <div className="social">
            <ul>
              <li>
                <Link href="/" target="_blank" title="Facebook">
                  <FaFacebook />
                </Link>
              </li>
              <li>
                <Link href="/" target="_blank" title="Twitter">
                  <FaTwitter />
                </Link>
              </li>
              <li>
                <Link href="/" target="_blank" title="youTube">
                  <FaYoutube />
                </Link>
              </li>
              <li>
                <Link href="/" target="_blank" title="Instagram">
                  <FaInstagram />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </div>
  );
}
