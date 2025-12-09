// pages/terms-of-cinema.js (or app/terms-of-cinema/page.js)

import React from "react";
// import Head from 'next/head';

const MovieWebsiteTerms = () => {
  // --- Dummy Terms for "CineStream" ---
  const movieTerms = {
    title: "🎬 CineStream: Terms & Conditions of Viewing",
    effectiveDate: "The moment your popcorn is buttered.",
    disclaimerNote:
      "This service is provided for entertainment purposes only. Any plot inconsistencies or disappointing sequels are outside the scope of this agreement.",
    sections: [
      // ... (Sections content remains the same)
      {
        heading: "1. Acceptance of the Cinematic Contract",
        content:
          "By accessing or using the CineStream service ('The Platform'), you agree to these Terms and Conditions ('Terms'), and confirm you have attained the minimum recommended age of 13, or the intellectual age required to understand complex plot holes. Continued use constitutes acceptance of all subsequent trailer drops and policy changes.",
      },
      {
        heading: "2. Subscription and Content Rights (The Ticket Price)",
        content: [
          "**Billing Cycle:** Your subscription ('The Viewing Commitment') will renew automatically unless terminated by you or revoked due to an unprecedented box office flop.",
          "**Territorial Rights:** Content availability is subject to the whims of global licensing agreements and may disappear without warning, much like a character killed off in the first act.",
          "**Content Quality:** We guarantee access to content in a resolution proportionate to the speed of your internet connection and the dramatic tension of the scene. Buffering is an art form we reserve the right to practice.",
        ],
      },
      {
        heading: "3. User Conduct and Review Policy",
        content: [
          "**Spoilers:** You agree not to post, publish, or otherwise broadcast any critical plot twists ('Spoilers') within 72 hours of a film's initial release, unless the film is universally considered bad.",
          "**Review Integrity:** All user reviews must be original and based on actual viewing. AI-generated reviews are prohibited unless the AI can demonstrate genuine emotional attachment to the lead actor.",
          "**Trolls:** Harassment, aggressive commentary, or comparisons of unrelated cinematic universes are grounds for immediate termination of your viewing privileges.",
        ],
      },
      {
        heading: "4. Intellectual Property (The Director's Cut)",
        content: [
          "The entirety of the content, including scripts, imagery, and the background music, is protected by copyright. You are granted a limited, non-transferable license to **view** the content for personal, non-commercial enjoyment.",
          "Any attempt to copy, stream publicly, or use clips to win an argument about film history is strictly prohibited and will result in us sending you a DVD of a straight-to-video horror movie.",
        ],
      },
      {
        heading: "5. Disclaimer of Technical Glitches",
        isBlockquote: true,
        content:
          "THE PLATFORM IS PROVIDED ON AN 'AS-SEEN-IN-THE-THEATER' BASIS. WE ARE NOT LIABLE FOR DAMAGES ARISING FROM TECHNICAL FAILURES, INCLUDING, BUT NOT LIMITED TO: SUBTITLE SYNCHRONIZATION ERRORS, BAD CAMERA ANGLES, OR THE EMOTIONAL TRAUMA CAUSED BY A TRAGIC ENDING.",
      },
      {
        heading: "6. Force Majeure (When the Aliens Arrive)",
        content:
          "The Platform shall not be held liable for any delay or failure in performance resulting from causes beyond our reasonable control, including but not limited to: Acts of God, war, terrorism, catastrophic weather events, or an unforeseen alien invasion that distracts our entire technical team.",
      },
    ],
  };

  // --- Tailwind Component Render ---
  return (
    // Changed bg-gray-900 to bg-primary and set base text color to white
    <div className="bg-primary min-h-screen text-white">
      <div className="max-w-4xl mx-auto p-6 lg:p-10 font-sans">
        {/* Header Section */}
        {/* Accent border remains red, text is bright red for visibility */}
        <header className="border-b border-red-600 pb-4 mb-8 text-center">
          <h1 className="text-3xl lg:text-4xl font-extrabold text-red-500 leading-tight">
            {movieTerms.title}
          </h1>
          <p className="text-md mt-2 text-gray-400">
            <span className="font-bold text-white">Effective Date:</span>{" "}
            {movieTerms.effectiveDate}
          </p>
          {/* Darker text for the italic disclaimer note */}
          <p className="mt-4 italic text-sm text-gray-400">
            {movieTerms.disclaimerNote}
          </p>
        </header>

        {/* Content Sections */}
        <div className="space-y-10">
          {movieTerms.sections.map((section, index) => (
            // Border is now a lighter gray to show up against bg-primary
            <div key={index} className="pb-4 border-b border-gray-700">
              {/* Section Heading - Bright red for emphasis */}
              <h2 className="text-2xl font-semibold text-red-400 mb-4">
                {section.heading}
              </h2>

              {/* Rendering Content */}
              {Array.isArray(section.content) ? (
                section.content.map((item, i) =>
                  section.isBlockquote ? (
                    // Blockquote style for Disclaimers: uses bg-gray-800 to create depth
                    // against bg-primary, and border-yellow-400 for a warning highlight.
                    <blockquote
                      key={i}
                      className="bg-gray-800 border-l-4 border-yellow-400 p-4 my-4 text-base italic text-white font-mono"
                      dangerouslySetInnerHTML={{ __html: item }}
                    />
                  ) : (
                    // Standard Paragraphs - text-white from the parent container
                    <p
                      key={i}
                      className="mb-3 text-base leading-relaxed text-white"
                      dangerouslySetInnerHTML={{ __html: item }}
                    />
                  )
                )
              ) : (
                // Single Content Block
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
          {/* Footer text is muted gray */}
          <p className="text-xs text-gray-500">
            This is a fictional, non-binding document and does not grant you the
            right to film a sequel.
          </p>
        </footer>
      </div>
    </div>
  );
};

export default MovieWebsiteTerms;
