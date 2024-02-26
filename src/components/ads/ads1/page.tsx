import React from "react";
import Link from "next/link";
import Container from "@/src/components/elements/container/page";

export default function AdsOne() {
  return (
    <Container>
      <div className="widget my-4">
        <Link className="ads-here" href="https://templateify.com/">
          Responsive Advertisement
        </Link>
      </div>
    </Container>
  );
}
