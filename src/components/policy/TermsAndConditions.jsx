import React from "react";

const termsData = [
  {
    title: "Last Updated",
    content: ["August 5, 2025"],
  },
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
      "Welcome to Tomohi, an edtech platform connecting learners and mentors. By using our platform, you agree to the following Terms & Conditions and our Privacy Policy.",
    ],
  },
  {
    title: "1. Acceptance of Terms",
    content: [
      "Your use of the platform confirms your agreement to these Terms. We may update them from time to time.",
    ],
  },
  {
    title: "2. Eligibility",
    content: ["You must be 18+ or have parental consent to use Tomohi."],
  },
  {
    title: "3. Account Management",
    content: [
      "You are responsible for your account's accuracy and security. Report unauthorized access to info@tomohi.com.",
    ],
  },
  {
    title: "4. User Obligations",
    content: [
      "You agree to:",
      [
        "Use the platform legally and responsibly",
        "Avoid misuse or disruption of services",
        "Not attempt to reverse-engineer the app",
      ],
    ],
  },
  {
    title: "5. Privacy Policy",
    content: ["Your data is governed by our Privacy Policy."],
  },
  {
    title: "6. Intellectual Property",
    content: ["All content is owned by Tomohi. Use without permission is prohibited."],
  },
  {
    title: "7. Platform Exclusivity",
    content: [
      "Mentors and students must conduct all bookings and communications within Tomohi only. External transactions are forbidden and may lead to account suspension.",
    ],
  },
  {
    title: "8. License",
    content: ["We grant a personal, non‑commercial license to use the app."],
  },
  {
    title: "9. In‑App Purchases",
    content: ["Any purchases made are subject to billing terms at the time of transaction."],
  },
  {
    title: "10. User Content",
    content: [
      "You retain ownership of submitted content but grant Tomohi the right to use and display it.",
      "You must not submit unlawful or offensive material.",
    ],
  },
  {
    title: "11. Termination",
    content: ["We may suspend or terminate your access for violations."],
  },
  {
    title: "12. Disclaimer of Liability",
    content: [
      "We provide the app “as is” and disclaim responsibility for any service interruptions or losses.",
    ],
  },
  {
    title: "13. User Conduct Disclaimer",
    content: [
      "Tomohi does not control the actions or content of its users and disclaims liability for any such behavior.",
    ],
  },
  {
    title: "14. Refund Policy",
    content: [
      "Payments are non‑refundable, except in confirmed cases of mentor absence or technical failure.",
    ],
  },
  {
    title: "15. Indemnity",
    content: ["You agree to hold Tomohi harmless from any claims arising from your use of the platform."],
  },
  {
    title: "16. Dispute Resolution",
    content: ["Disputes are resolved via arbitration in Dubai, UAE."],
  },
  {
    title: "17. Updates to Terms",
    content: ["We may update these Terms at any time. Continued use signifies acceptance."],
  },
  {
    title: "18. Governing Law",
    content: ["These Terms are governed by UAE law."],
  },
  {
    title: "Contact",
    content: [
      "📧 info@tomohi.com",
      "📍 Ajman Free Zone, Building C1, UAE",
      "🆔 B.C. 1302813",
    ],
  },

];


const TermsAndConditions = () => {
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
        <h1 className="text-3xl md:text-5xl font-bold mb-6 text-[#ff0004]">Terms and Conditions</h1>
        {termsData.map((section, index) => (
          <div key={index} className="mb-8 ps-3">
            <h2 className="text-xl lg:text-2xl font-bold mb-1">{section.title}</h2>
            {section.content.map((item, i) => renderContent(item, i))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TermsAndConditions;
