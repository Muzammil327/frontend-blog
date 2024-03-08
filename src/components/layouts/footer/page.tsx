import React from "react";
import Link from "next/link";
import FooterUpper from "@/src/components/layouts/footer/upper/page";
import Container from "@/src/components/elements/container/page";
import PostMetadata from "@/src/components/post/PostMetadata/page";

export default function Page() {
  const postMetadata = PostMetadata();
  const uniqueCategories = [...new Set(postMetadata.map((item) => item.cat))];

  const uniqueCategoriesSlug = [
    ...new Set(postMetadata.map((item) => item.catslug)),
  ];
  return (
    <div className="footer">
      <FooterUpper />
      <div className="inner">
        <Container>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="widgets">
              <h5>Important Links</h5>
              <ul>
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/about">About Us</Link>
                </li>
                <li>
                  <Link href="/contact">Contact Us</Link>
                </li>
                <li>
                  <Link href="/privacy-policy">Privacy Policy</Link>
                </li>
                <li>
                  <Link href="/term-of-service">Term of Services</Link>
                </li>
                <li>
                  <Link href="/newsletter">Newsletter</Link>
                </li>
              </ul>
            </div>
            <div className="widgets">
              <h5>Catgeory</h5>
              <ul className="!grid !grid-cols-2 !gap-4 ">
                {uniqueCategories.slice(0, 12).map((category, index) => (
                  <li key={category}>
                    <Link href={`/catgeory/${uniqueCategoriesSlug[index]}`}>
                      {category} -
                      <span>
                        (
                        {
                          postMetadata.filter((item) => item.cat === category)
                            .length
                        }
                        )
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="widgets">
              <h5>Resources</h5>
              <ul>
                <li>
                  <Link href="/team">Our Team</Link>
                </li>
              </ul>
            </div>
          </div>
        </Container>
        <div className="footerarea">
          <Container>
            <div className="footerarea-inner">
              <div className="copyright">
                <span>
                  Copyright © 2023 <span className="sm:inline-block hidden">All rights reserved </span>| by
                  <Link href="/" title="Muzammil Safdar" rel="dofollow">
                    Muzammil Safdar
                  </Link>
                </span>
              </div>
              <div className="menu">
                <ul>
                  <li>
                  </li>
                </ul>
              </div>
            </div>
          </Container>
        </div>
      </div>
    </div>
  );
}
