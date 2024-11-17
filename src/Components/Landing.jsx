import React from "react";
import Spline from "@splinetool/react-spline";
import { IoShieldHalfSharp } from "react-icons/io5";
import { IoMdKey } from "react-icons/io";
import { TfiReload } from "react-icons/tfi";
import { RiLockPasswordLine } from "react-icons/ri";
import { FaExternalLinkAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Landing() {
  const navigate = useNavigate();
  const features = [
    {
      icon: <IoShieldHalfSharp className="text-2xl text-blue-500" />,
      title: "Military-Grade Security",
      description:
        "Generate cryptographically secure passwords that meet the highest security standards",
    },
    {
      icon: <IoMdKey className="text-2xl text-blue-500" />,
      title: "Customizable Options",
      description:
        "Choose length, include symbols, numbers, and cases to match any password requirement",
    },
    {
      icon: <TfiReload className="text-2xl text-blue-500" />,
      title: "Instant Generation",
      description: "Create strong passwords instantly with a single click",
    },
  ];

  return (
    <div className="relative min-h-screen w-full bg-black overflow-hidden">
      {/* <main className="absolute inset-0 z-0">
        <Spline
          scene="https://prod.spline.design/7GDl2-VS92mA0kEN/scene.splinecode"
          className="w-full h-full"
        />
      </main> */}

      <div className="content relative z-10 flex flex-col items-center justify-center min-h-screen">
        <div className="container mx-auto px-4 py-8 md:py-20">
          <div className="text-center mb-8 md:mb-16">
            <h1 className="text-3xl md:text-5xl text-white font-bold mb-4 md:mb-6">
              Generate Secure Passwords
              <span className="text-blue-300"> Instantly</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-6 md:mb-8 px-2">
              Create strong, unique passwords to keep your accounts safe
            </p>

            {/* Call to Action */}
            <div className=" flex flex-col justify-center items-center outline-none rounded-lg text-white/55 font-semibold p-4 md:p-6">
              <span className="text-white/55 font-exo text-3xl md:text-6xl">
                Welcome to
              </span>
              <span className="text-4xl md:text-7xl flex items-center gap-2 mt-2">
                <RiLockPasswordLine className="text-white/55 text-4xl md:text-7xl" />
                <span className="text-3xl md:text-7xl font-permanent">
                  PASSWORDO
                </span>
              </span>
              <button
                onClick={() => {
                  navigate("/Password-Generator/passwordgen");
                }}
                className="p-4 mt-5 font-sans text-2xl flex justify-center items-center gap-2 text-white border-[1px] border-slate-400 backdrop-blur-2xl rounded-lg hover:bg-indigo-800"
              >
                Get Started <FaExternalLinkAlt className="text-white" />
              </button>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 max-w-5xl mx-auto px-2 md:px-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className="backdrop-blur-sm border-[1px] rounded-lg p-4 md:p-6 hover:bg-gray-750 transition-colors"
              >
                <div className="bg-white rounded-full w-10 md:w-12 h-10 md:h-12 flex items-center justify-center mb-3 md:mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm md:text-base text-gray-400">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <footer className="text-center py-4 md:py-8 bg-gray-800 bg-opacity-50 w-full mt-8 md:mt-0">
          <p className="text-sm md:text-base text-gray-400 px-4">
            Stay secure online. Generate strong passwords for all your accounts.
          </p>
        </footer>
      </div>
    </div>
  );
}

export default Landing;
