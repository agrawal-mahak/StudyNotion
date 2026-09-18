import React from "react";
import { FaRobot, FaCode, FaCertificate, FaComments, FaArrowRight } from "react-icons/fa";
import HighlightText from "./HighlightText";
import { Link } from "react-router-dom";

const features = [
  {
    icon: FaRobot,
    title: "AI Learning Assistant",
    description: "Instant doubt resolution, intelligent code reviews, and automated lecture transcript summaries.",
    badge: "New AI Feature",
    badgeColor: "bg-cyan-500/10 text-cyan-300 border-cyan-500/30",
  },
  {
    icon: FaCode,
    title: "Real-time Code Runner",
    description: "Write, compile, and execute code directly in your browser without any setup required.",
    badge: "Interactive IDE",
    badgeColor: "bg-yellow-500/10 text-yellow-300 border-yellow-500/30",
  },
  {
    icon: FaCertificate,
    title: "Verified Credentials",
    description: "Earn shareable PDF certificates with QR verification and direct 1-click LinkedIn profile export.",
    badge: "Official Certs",
    badgeColor: "bg-emerald-500/10 text-emerald-300 border-emerald-500/30",
  },
  {
    icon: FaComments,
    title: "Lecture Doubts Portal",
    description: "Ask questions per video section, upvote community solutions, and receive instructor answers.",
    badge: "Community Q&A",
    badgeColor: "bg-purple-500/10 text-purple-300 border-purple-500/30",
  },
];

export default function FeatureCardsSection() {
  return (
    <div className="my-20 w-full">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Why Choose <HighlightText text={"StudyNotion?"} />
        </h2>
        <p className="text-richblack-300 max-w-2xl mx-auto text-base">
          Our platform combines industry-aligned curriculum with cutting-edge learning tools to accelerate your Tech career.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, idx) => {
          const Icon = feature.icon;
          return (
            <div
              key={idx}
              className="group relative flex flex-col justify-between rounded-2xl border border-richblack-700 bg-richblack-800 p-6 transition-all duration-300 hover:border-yellow-100/50 hover:shadow-[0_15px_30px_rgba(255,214,10,0.15)] hover:-translate-y-2"
            >
              <div>
                <div className="flex justify-between items-start mb-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-richblack-700 text-yellow-50 group-hover:bg-yellow-50 group-hover:text-richblack-900 transition-colors duration-300">
                    <Icon size={24} />
                  </div>
                  <span className={`text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full border ${feature.badgeColor}`}>
                    {feature.badge}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-yellow-50 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-sm text-richblack-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-richblack-700/60">
                <Link
                  to="/signup"
                  className="flex items-center gap-2 text-xs font-semibold text-yellow-50 group-hover:translate-x-1 transition-transform"
                >
                  Explore Module <FaArrowRight size={12} />
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
