"use client";
import Link from "next/link";
import React from "react";
import { FiArrowRightCircle } from "react-icons/fi";
import * as HeroAnimation from "../assets/animations/heroAnimation.json";
import Lottie from "react-lottie";

const Hero = () => {
  return (
    <section className="bg-[#FCF8F1] bg-opacity-30 py-10 sm:py-16 lg:pb-24">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
          <div>
            <p className="text-base font-semibold tracking-wider text-blue-600 uppercase">
              A social media for learners
            </p>
            <h1 className="mt-4 text-4xl font-bold  lg:mt-8 sm:text-6xl xl:text-8xl">
              Connect & learn from the experts
            </h1>
            <p className="mt-4 text-base  lg:mt-8 sm:text-xl">
              Grow your career fast with right mentor.
            </p>

            <Link
              href="/contact"
              title=""
              className="inline-flex items-center px-6 py-4 mt-8 font-semibold  transition-all duration-200 bg-primaryColor rounded-full lg:mt-16 hover:bg-secondaryColor focus:bg-secondaryColor"
              role="button"
            >
              Book a Demo
              <FiArrowRightCircle size={18} className="ml-8" />
            </Link>
            <p className="mt-5 text-gray-600">
              Don&apos;t know what to choose?
              <Link
                href="/contact"
                title=""
                className=" transition-all duration-200 px-2 text-base relative one"
              >
                <span>Get Free 1 on 1 Consultation</span>
                <span className="absolute -bottom-1 left-0 w-0 transition-all h-0.5 bg-secondaryColor"></span>
              </Link>
            </p>
          </div>

          <div>
            {/* <img
              className="w-full"
              src="https://cdn.rareblocks.xyz/collection/celebration/images/hero/1/hero-img.png"
              alt=""
            /> */}
            <Lottie
              options={{
                loop: true,
                autoplay: true,
                animationData: HeroAnimation,
                // rendererSettings: {
                // 	preserveAspectRatio: "xMidYMid slice",
                // },
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
