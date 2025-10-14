import React from "react";

const steps = [
  {
    number: 1,
    title: (
      <>
        Take a{" "}
        <span className="bg-black text-white px-2 py-0.5 rounded-md inline-block -rotate-2">
          quiz 📋
        </span>
      </>
    ),
    description:
      "We will create a learning path based on your time, interests, and skill level. Find out where to start and how to reach your first income faster.",
  },
  {
    number: 2,
    title: (
      <>
        Get access to{" "}
        <span className="bg-black text-white px-2 py-0.5 rounded-md inline-block rotate-2">
          courses 📚
        </span>
      </>
    ),
    description:
      "Lessons on freelancing, AI automation, bot building, and content creation. Everything is step by step: just follow the plan and apply it.",
  },
  {
    number: 3,
    title: (
      <>
        Use{" "}
        <span className="bg-black text-white px-2 py-0.5 rounded-md inline-block -rotate-2">
          🚀 20+
        </span>{" "}
        AI Assistants
      </>
    ),
    description:
      "Ready-made tools that will help with tasks like writing, presentations, idea generation, and creative work—based on real client cases.",
  },
  {
    number: 4,
    title: (
      <>
        Get support and{" "}
        <span className="bg-black text-white px-2 py-0.5 rounded-md inline-block rotate-2">
          ready-to-use 👌
        </span>{" "}
        templates
      </>
    ),
    description:
      "Lessons on freelancing, AI automation, bot building, and content creation. Everything is step by step: just follow the plan and apply it.",
  },
  {
    number: 5,
    title: (
      <>
        Start offering{" "}
        <span className="bg-black text-white px-2 py-0.5 rounded-md inline-block -rotate-2">
          💻 your
        </span>{" "}
        services
      </>
    ),
    description:
      "Work through freelance platforms or connect with clients directly. Our courses give you everything to start earning.",
  },
];

const HowItWorks = () => {
  return (
    <section id="howitworks" className="relative py-16">
      <h2 className="text-center text-3xl sm:text-4xl font-bold mb-12">
        How It Works
      </h2>

      <div className="space-y-12 relative">
        {steps.map((step, index) => (
          <div
            key={step.number}
            className={`flex flex-col sm:flex-row items-center sm:items-start gap-6 max-w-4xl mx-auto ${
              index % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
            }`}
          >
            <div className="flex-shrink-0">
              <div className="w-14 h-14 sm:w-16 sm:h-16 text-xl sm:text-2xl flex items-center justify-center bg-blue-600 text-white font-bold rounded-full shadow-md">
                {step.number}
              </div>
            </div>

            <div className="bg-[#fafafa] rounded-xl shadow p-5 sm:p-6 flex-1 w-full transform transition duration-300 hover:scale-105">
              <h3 className="text-lg sm:text-xl font-semibold mb-2">
                {step.title}
              </h3>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
