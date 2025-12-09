import React from "react";

const ContactUs = () => {
  const contactInfo = {
    heading: " Contacting CineStream (The Credits Roll)",
    content: [
      "If you have questions regarding these Terms, the Privacy Policy, or if you simply wish to argue about who shot first, please contact our Legal and Hypothetical Affairs Department via one of the methods below.",
    ],
    methods: [
      {
        label: "By Mail (Pigeon Post Accepted):",
        value:
          "CineStream Legal Dept. / 999 Fictional Film Blvd. / Hollywood, CA 90210 (Address subject to relocation during filming)",
      },
      {
        label: "By Email (For Urgent, Non-Spoiler Issues):",
        value:
          "legal-fiction@cinestream.net (Responses guaranteed within 1-5 business cycles or 3 movie trilogies)",
      },
      {
        label: "Data Protection Officer (The Oracle):",
        value: "Maximus Code-Breaker / DPO@cinestream.net",
      },
    ],
    finalNote:
      "Please allow sufficient time for our team to review your inquiry while simultaneously attempting to watch the entire backlog of 80s action films.",
  };

  return (
    <div className="bg-primary pt-6 h-screen w-full text-white">
      <div className="max-w-4xl mx-auto p-6 lg:p-10 font-sans">
        <h2 className="text-2xl font-semibold text-red-400 mb-4 border-t border-gray-700 pt-6">
          {contactInfo.heading}
        </h2>

        <p className="mb-6 text-base leading-relaxed text-white">
          {contactInfo.content[0]}
        </p>

        <ul className="space-y-4 bg-gray-800 p-6 rounded-lg border border-red-600/50">
          {contactInfo.methods.map((method, index) => (
            <li key={index} className="text-sm">
              <strong className="text-red-300 block mb-1">
                {method.label}
              </strong>
              <p className="pl-4 text-gray-300 italic">{method.value}</p>
            </li>
          ))}
        </ul>

        <p className="mt-8 text-sm italic text-gray-400">
          {contactInfo.finalNote}
        </p>
      </div>
    </div>
  );
};

export default ContactUs;
