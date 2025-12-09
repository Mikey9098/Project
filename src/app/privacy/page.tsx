import React from "react";

const MovieWebsitePrivacyPolicy = () => {
  const privacyPolicy = {
    title: "🛡️ CineStream: Privacy Policy (The Hidden Reel)",
    effectiveDate: "When the post-credits scene ends.",
    introduction:
      "At CineStream, we are committed to protecting your privacy and your imaginary viewing data. This policy details what we collect, how we use it, and how your information is safeguarded against studio executives.",
    sections: [
      {
        heading: "1. Information We Collect (Your Viewing Habits)",
        content: [
          "**Personal Identifiable Information (PII):** We collect your username, encrypted password, and payment details for your Viewing Commitment (Section 2 of the T&Cs). We also record your favorite movie genre, which we will use to judge you silently.",
          "**Non-PII (The Metadata):** This includes device type, geographic location (to enforce licensing restrictions), and **every second you spent buffering** a film. We also log your star rating on films, specifically to track if you rate prequels higher than originals.",
        ],
      },
      {
        heading: "2. How We Use Your Data (The Algorithm's Intent)",
        content: [
          "**Personalization:** We use your viewing history to feed The Algorithm, which determines what films to aggressively recommend, even if they are completely unrelated to your tastes. This is for experimental purposes.",
          "**Service Improvement:** Your buffering data is crucial for us to blame your internet service provider.",
          "**Marketing:** We reserve the right to email you relentlessly about films you have already seen or explicitly disliked.",
        ],
      },
      {
        heading: "3. Sharing and Disclosure (The Leaked Script)",
        content: [
          "We do not sell your PII. However, we may share anonymized, aggregated data with third parties, including: **Conspiracy Theorists** (for research into cinematic universes), **Popcorn Manufacturers** (for sales forecasting), and **The Fictional Licensing Syndicate**.",
          "We will disclose information if required by law or if compelled by a subpoena served by a movie villain.",
        ],
      },
      {
        heading: "4. Your Rights and Controls (The Director's Cut Access)",
        content: [
          "**Access:** You have the right to request a complete list of all the terrible movies we know you watched, subject to a small administrative fee.",
          "**Opt-Out:** You may opt out of receiving promotional emails, but you cannot opt out of our passive judgment regarding your taste in 80s action films.",
          "**Data Retention:** We keep your data until the director of your least favorite film retires, or until you successfully contact our data protection officer, 'Maximus Code-Breaker'.",
        ],
      },
      {
        heading: "5. Security (The Fortress of Solitude)",
        isBlockquote: true,
        content:
          "WE EMPLOY INDUSTRY-STANDARD (BUT PROBABLY NOT HOLLYWOOD-LEVEL) SECURITY MEASURES TO PROTECT YOUR DATA. HOWEVER, NO ONLINE TRANSMISSION IS EVER 100% SECURE, ESPECIALLY WHEN FACING HACKERS WHO HAVE SEEN EVERY MOVIE ABOUT HACKING. USE THE PLATFORM AT YOUR OWN RISK OF DIGITAL ANXIETY.",
      },
    ],
  };

  return (
    <div className="bg-primary min-h-screen text-white">
      <div className="max-w-4xl mx-auto p-6 lg:p-10 font-sans">
        <header className="border-b border-red-600 pb-4 mb-8 text-center">
          <h1 className="text-3xl lg:text-4xl font-extrabold text-red-500 leading-tight">
            {privacyPolicy.title}
          </h1>
          <p className="text-md mt-2 text-gray-400">
            <span className="font-bold text-white">Effective Date:</span>{" "}
            {privacyPolicy.effectiveDate}
          </p>
          <p className="mt-4 text-gray-400 italic text-sm">
            {privacyPolicy.introduction}
          </p>
        </header>

        <div className="space-y-10">
          {privacyPolicy.sections.map((section, index) => (
            <div key={index} className="pb-4 border-b border-gray-700">
              <h2 className="text-2xl font-semibold text-red-400 mb-4">
                {section.heading}
              </h2>

              {Array.isArray(section.content) ? (
                section.content.map((item, i) =>
                  section.isBlockquote ? (
                    <blockquote
                      key={i}
                      className="bg-gray-800 border-l-4 border-yellow-400 p-4 my-4 text-base italic text-white font-mono"
                      dangerouslySetInnerHTML={{ __html: item }}
                    />
                  ) : (
                    <p
                      key={i}
                      className="mb-3 text-base leading-relaxed text-white"
                      dangerouslySetInnerHTML={{ __html: item }}
                    />
                  )
                )
              ) : (
                <p
                  className="mb-3 text-base leading-relaxed text-white"
                  dangerouslySetInnerHTML={{ __html: section.content }}
                />
              )}
            </div>
          ))}
        </div>

        {/* Footer */}
        <footer className="mt-12 pt-6 border-t border-gray-700 text-center">
          <p className="text-xs text-gray-500">
            This policy is entirely fictional and does not represent any
            real-world data handling practices.
          </p>
        </footer>
      </div>
    </div>
  );
};

export default MovieWebsitePrivacyPolicy;
