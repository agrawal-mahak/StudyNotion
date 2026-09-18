// Icons Import
import { FaArrowRight, FaSparkles } from "react-icons/fa"
import { Link } from "react-router-dom"

// Image and Video Import
import Banner from "../assets/Images/banner.mp4"
// Component Imports
import Footer from "../components/common/Footer"
import ReviewSlider from "../components/common/ReviewSlider"
import CTAButton from "../components/core/HomePage/Button"
import CodeBlocks from "../components/core/HomePage/CodeBlocks"
import ExploreMore from "../components/core/HomePage/ExploreMore"
import HighlightText from "../components/core/HomePage/HighlightText"
import InstructorSection from "../components/core/HomePage/InstructorSection"
import LearningLanguageSection from "../components/core/HomePage/LearningLanguageSection"
import TimelineSection from "../components/core/HomePage/TimelineSection"
import StatsComponent from "../components/core/HomePage/StatsComponent"
import FeatureCardsSection from "../components/core/HomePage/FeatureCardsSection"

function Home() {
  return (
    <div className="relative overflow-hidden bg-richblack-900">
      {/* Background Ambient Glows */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-tr from-yellow-500/15 via-blue-500/10 to-purple-500/10 blur-[120px] pointer-events-none rounded-full" />

      {/* Section 1 */}
      <div className="relative mx-auto flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8 text-white z-10">
        
        {/* Top Announcement Pill */}
        <Link to={"/signup"}>
          <div className="group mx-auto mt-16 w-fit rounded-full bg-richblack-800/90 border border-richblack-700 p-1 font-bold text-richblack-200 backdrop-blur-md shadow-[0_0_20px_rgba(255,214,10,0.15)] transition-all duration-300 hover:scale-105 hover:border-yellow-50 hover:shadow-[0_0_25px_rgba(255,214,10,0.3)]">
            <div className="flex flex-row items-center gap-2 rounded-full px-8 py-2 transition-all duration-200 group-hover:bg-richblack-900">
              <span className="text-yellow-50 font-bold text-xs uppercase tracking-wider bg-yellow-500/20 px-2 py-0.5 rounded-full border border-yellow-500/40">Next-Gen</span>
              <p className="text-sm">Become an Instructor & Share Knowledge</p>
              <FaArrowRight className="text-xs text-yellow-50 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </Link>

        {/* Hero Heading */}
        <div className="text-center text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight max-w-4xl leading-tight">
          Empower Your Tech Future with <HighlightText text={"Coding Skills"} />
        </div>

        {/* Sub Heading */}
        <div className="-mt-2 w-[90%] max-w-3xl text-center text-base sm:text-lg font-medium text-richblack-300 leading-relaxed">
          Unlock your potential with hands-on coding courses, AI-assisted learning tools, interactive video notes, and industry-recognized certifications built for modern developers.
        </div>

        {/* CTA Buttons */}
        <div className="mt-4 flex flex-row gap-5">
          <CTAButton active={true} linkto={"/signup"}>
            <div className="flex items-center gap-2 font-bold px-2">
              Explore Courses <FaArrowRight />
            </div>
          </CTAButton>
          <CTAButton active={false} linkto={"/login"}>
            <div className="font-bold px-2">Book a Live Demo</div>
          </CTAButton>
        </div>

        {/* Hero Video with Sleek Glowing Border */}
        <div className="mx-3 my-12 relative rounded-2xl p-2 bg-gradient-to-r from-yellow-500/30 via-cyan-500/20 to-purple-500/30 shadow-[0_0_60px_rgba(255,214,10,0.2)]">
          <div className="rounded-xl overflow-hidden border border-richblack-700 bg-richblack-800">
            <video
              className="w-full h-auto object-cover rounded-xl shadow-2xl"
              muted
              loop
              autoPlay
            >
              <source src={Banner} type="video/mp4" />
            </video>
          </div>
        </div>

        {/* Platform Impact Stats Section */}
        <StatsComponent />

        {/* Code Section 1  */}
        <div className="w-full">
          <CodeBlocks
            position={"lg:flex-row"}
            heading={
              <div className="text-3xl sm:text-4xl font-bold">
                Unlock your <HighlightText text={"coding potential"} /> with our online courses.
              </div>
            }
            subheading={
              "Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."
            }
            ctabtn1={{
              btnText: "Try it Yourself",
              link: "/signup",
              active: true,
            }}
            ctabtn2={{
              btnText: "Learn More",
              link: "/signup",
              active: false,
            }}
            codeColor={"text-yellow-25"}
            codeblock={`<!DOCTYPE html>\n<html lang="en">\n<head>\n<title>StudyNotion Ed-Tech</title>\n</head>\n<body>\n<h1><a href="/">Learn Coding</a></h1>\n<nav><a href="/courses">Explore</a></nav>\n</body>`}
            backgroundGradient={<div className="codeblock1 absolute"></div>}
          />
        </div>

        {/* Code Section 2 */}
        <div className="w-full">
          <CodeBlocks
            position={"lg:flex-row-reverse"}
            heading={
              <div className="w-[100%] text-3xl sm:text-4xl font-bold lg:w-[60%]">
                Start <HighlightText text={"coding in seconds"} />
              </div>
            }
            subheading={
              "Go ahead, give it a try. Our hands-on learning environment means you'll be writing real code from your very first lesson."
            }
            ctabtn1={{
              btnText: "Continue Lesson",
              link: "/signup",
              active: true,
            }}
            ctabtn2={{
              btnText: "Learn More",
              link: "/signup",
              active: false,
            }}
            codeColor={"text-cyan-100"}
            codeblock={`import React from "react";\nimport CTAButton from "./Button";\nimport { FaArrowRight } from "react-icons/fa";\n\nconst StudyNotion = () => {\n  return (\n    <div className="hero">Build Skills</div>\n  );\n};\nexport default StudyNotion;`}
            backgroundGradient={<div className="codeblock2 absolute"></div>}
          />
        </div>

        {/* Why Choose StudyNotion Feature Cards */}
        <FeatureCardsSection />

        {/* Explore Section */}
        <ExploreMore />
      </div>

      {/* Section 2 */}
      <div className="bg-pure-greys-5 text-richblack-700">
        <div className="homepage_bg h-[320px]">
          {/* Explore Full Category Section */}
          <div className="mx-auto flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8">
            <div className="lg:h-[150px]"></div>
            <div className="flex flex-row gap-7 text-white lg:mt-8">
              <CTAButton active={true} linkto={"/signup"}>
                <div className="flex items-center gap-2 font-bold">
                  Explore Full Catalog
                  <FaArrowRight />
                </div>
              </CTAButton>
              <CTAButton active={false} linkto={"/login"}>
                <div className="font-bold">Learn More</div>
              </CTAButton>
            </div>
          </div>
        </div>

        <div className="mx-auto flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8 ">
          {/* Job that is in Demand - Section 1 */}
          <div className="mb-10 mt-[-100px] flex flex-col justify-between gap-7 lg:mt-20 lg:flex-row lg:gap-0">
            <div className="text-3xl sm:text-4xl font-bold lg:w-[45%]">
              Get the skills you need for a{" "}
              <HighlightText text={"job that is in demand."} />
            </div>
            <div className="flex flex-col items-start gap-10 lg:w-[40%]">
              <div className="text-[16px] text-richblack-600 leading-relaxed">
                The modern StudyNotion dictates its own terms. Today, to be a competitive specialist requires more than just standard theoretical knowledge.
              </div>
              <CTAButton active={true} linkto={"/signup"}>
                <div className="font-bold">Learn More</div>
              </CTAButton>
            </div>
          </div>

          {/* Timeline Section - Section 2 */}
          <TimelineSection />

          {/* Learning Language Section - Section 3 */}
          <LearningLanguageSection />
        </div>
      </div>

      {/* Section 3 */}
      <div className="relative mx-auto my-20 flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8 bg-richblack-900 text-white">
        {/* Become an instructor section */}
        <InstructorSection />

        {/* Reviews from Other Learners */}
        <h1 className="text-center text-3xl sm:text-4xl font-bold mt-12">
          Reviews from Other <HighlightText text={"Learners"} />
        </h1>
        <ReviewSlider />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default Home