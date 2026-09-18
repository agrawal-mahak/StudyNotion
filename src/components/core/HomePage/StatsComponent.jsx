import React from "react";
import { FaGraduationCap, FaBookOpen, FaAward, FaStar } from "react-icons/fa";

const stats = [
  {
    icon: FaGraduationCap,
    count: "50,000+",
    label: "Active Learners",
    gradient: "from-blue-500 to-cyan-400",
  },
  {
    icon: FaBookOpen,
    count: "200+",
    label: "Industry Courses",
    gradient: "from-yellow-400 to-amber-500",
  },
  {
    icon: FaAward,
    count: "99.4%",
    label: "Completion Rate",
    gradient: "from-emerald-400 to-teal-500",
  },
  {
    icon: FaStar,
    count: "4.9 / 5.0",
    label: "Student Satisfaction",
    gradient: "from-purple-400 to-pink-500",
  },
];

export default function StatsComponent() {
  return (
    <div className="my-12 w-full">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {stats.map((stat, index) => {
          const IconComponent = stat.icon;
          return (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl border border-richblack-700 bg-richblack-800/80 p-6 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-richblack-500 hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
            >
              <div className="flex items-center gap-4">
                <div className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r ${stat.gradient} text-richblack-900 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent size={24} />
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-extrabold text-white">
                    {stat.count}
                  </h3>
                  <p className="text-xs md:text-sm font-medium text-richblack-300">
                    {stat.label}
                  </p>
                </div>
              </div>
              <div className="absolute -bottom-1 -right-1 h-16 w-16 rounded-full bg-gradient-to-r from-yellow-500/10 to-transparent blur-xl group-hover:bg-yellow-500/20 transition-all duration-300" />
            </div>
          );
        })}
      </div>
    </div>
  );
}
