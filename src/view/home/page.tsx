import React from "react";

import HomeHero from "@/src/components/home/hero/page";
import AdsOne from "@/src/components/ads/ads1/page";
import RightPost from "@/src/components/post/rightPost/page";
import LeftPost from "@/src/components/home/leftPost/page";
import LatestPost from "@/src/components/home/latestPost/page";
import AdsTwo from "@/src/components/ads/ads2/page";
import Container from "@/src/components/elements/container/page";

export default function ViewHome() {
  return (
    <div className="mt-16">
      <HomeHero />
      {/* <AdsOne /> */}
      <LatestPost />
      <div className="lg:py-6">
        <Container>
          <div className="grid lg:grid-cols-8 grid-cols-1 md:gap-4">
            <div className="md:col-span-6">
              <LeftPost />
            </div>
            <div className="md:col-span-2">
              <RightPost />
            </div>
          </div>
        </Container>
      </div>
      {/* <AdsTwo /> */}
    </div>
  );
}
