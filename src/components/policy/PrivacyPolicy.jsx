import React from "react";

const privacyPolicyData = [

  {
    title: "Effective Date",
    content: ["August 5, 2025"],
  },
  {
    title: "Provider",
    content: ["Tomohi Mentoring F.Z.E."],
  },
  {
    title: "INTRODUCTION",
    content: [
      "At Tomohi, we are committed to protecting your personal data. This Privacy Policy explains how we collect, use, and share your information when you use our platform.",
    ],
  },
  {
    title: "1. Information We Collect",
    content: [
      "• Personal Information:",
      [
        "Name, email, phone number, location, and payment details (if applicable).",
      ],
      "• Usage Data:",
      [
        "Device type, operating system, usage patterns, crash logs, and IP address.",
      ],
    ],
  },
  {
    title: "2. How We Use Your Information",
    content: [
      "We use your data to:",
      [
        "Provide and improve our services.",
        "Personalize your experience.",
        "Communicate with you.",
        "Process payments (if applicable).",
        "Comply with legal obligations.",
      ],
    ],
  },
  {
    title: "3. Sharing Your Information",
    content: [
      "We do not sell your data. We may share it with:",
      [
        "Service providers (hosting, analytics, payments).",
        "Legal authorities if required.",
        "Affiliates within our organization under confidentiality.",
      ],
    ],
  },
  {
    title: "4. Your Rights",
    content: [
      "You may have the right to:",
      [
        "Access, update, or delete your data.",
        "Object to or limit how we process it.",
      ],
      "To exercise your rights, contact us at info@tomohi.com.",
    ],
  },
  {
    title: "5. Data Retention",
    content: [
      "We keep your data only as long as needed for service and legal purposes.",
    ],
  },
  {
    title: "6. Children’s Privacy",
    content: [
      "We do not knowingly collect data from children under 18 without parental consent. Any such data will be deleted immediately.",
    ],
  },
  {
    title: "7. Data Security",
    content: [
      "We use technical and organizational safeguards. However, no system is 100% secure.",
    ],
  },
  {
    title: "8. Third‑Party Services",
    content: [
      "Our platform may link to third‑party tools (e.g., payments, analytics). We are not responsible for their privacy practices.",
    ],
  },
  {
    title: "9. Changes to This Policy",
    content: [
      "We may update this policy and notify you of major changes via app or email.",
    ],
  },
  {
    title: "10. Contact",
    content: [
      "Tomohi Mentoring F.Z.E.",
      "📧 info@tomohi.com",
      "📍 Ajman, United Arab Emirates",
    ],
  },

];

const PrivacyPolicy = () => {
  const renderContent = (item, i) => {
    const emailRegex = /([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/;

    if (Array.isArray(item)) {
      return (
        <ul key={i} className="list-disc list-inside mb-1 ps-6 text-gray-700">
          {item.map((point, j) => (
            <li key={j} className="text-sm md:text-base">
              {typeof point === "string" && emailRegex.test(point) ? (
                <>
                  {point.split(emailRegex).map((part, k) =>
                    emailRegex.test(part) ? (
                      <a key={k} href={`mailto:${part}`} className="text-blue-600 duration-300 underline">
                        {part}
                      </a>
                    ) : (
                      part
                    )
                  )}
                </>
              ) : (
                point
              )}
            </li>
          ))}
        </ul>
      );
    } else {
      return (
        <p key={i} className="mb-1 ps-3 text-sm md:text-base text-gray-700 whitespace-pre-line">
          {typeof item === "string" && emailRegex.test(item) ? (
            <>
              {item.split(emailRegex).map((part, k) =>
                emailRegex.test(part) ? (
                  <a key={k} href={`mailto:${part}`} className="text-blue-600 underline">
                    {part}
                  </a>
                ) : (
                  part
                )
              )}
            </>
          ) : (
            item
          )}
        </p>
      );
    }
  };


  return (
    <div className="border-y border-[#ff0004]/40 mt-4">
      <div className="max-w-[1140px] mx-auto px-4 xl:px-0 py-10 md:py-14 lg:py-20 text-gray-800">
        <h1 className="text-3xl md:text-5xl font-bold mb-6 text-[#ff0004]">Privacy Policy</h1>
        {privacyPolicyData.map((section, index) => (
          <div key={index} className="mb-8 ps-3">
            <h2 className="text-xl md:text-2xl font-bold mb-1">{section.title}</h2>
            {section.content.map((item, i) => renderContent(item, i))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PrivacyPolicy;
