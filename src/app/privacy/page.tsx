"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <div className="pt-32 pb-16 px-6 lg:px-8 bg-neutral-50/50 border-b border-neutral-100">
        <div className="max-w-4xl mx-auto">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-sm font-medium text-neutral-500 hover:text-[#e8500a] transition-colors mb-6"
          >
            <ArrowLeft size={16} />
            Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-6 tracking-tight">
            Privacy <span className="text-[#e8500a]">Policy</span>
          </h1>
          <p className="text-lg text-neutral-600 max-w-2xl leading-relaxed">
            Last updated: June 10, 2026. Please read this Privacy Policy carefully to understand our practices regarding your information.
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="px-6 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto prose prose-neutral max-w-none">
          <div className="space-y-12 text-neutral-700 leading-relaxed text-base md:text-lg">
            
            <section className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold text-black border-b border-neutral-100 pb-3">
                Privacy Policy for Paper Theory Network
              </h2>
              <p>
                At Paper Theory Network (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;), we respect your privacy and are committed to protecting the personal information you share with us. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, use our services, participate in our community, or interact with our content.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold text-black border-b border-neutral-100 pb-3">
                Information We Collect
              </h2>
              <p>We may collect the following types of information:</p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
                <div className="bg-neutral-50 p-6 rounded-2xl border border-neutral-100/80">
                  <h3 className="font-semibold text-black mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#e8500a]" />
                    Personal Information
                  </h3>
                  <ul className="space-y-2 text-sm text-neutral-600 list-disc pl-4">
                    <li>Name</li>
                    <li>Email address</li>
                    <li>Organization or institutional affiliation</li>
                    <li>Account credentials</li>
                    <li>Contact information voluntarily provided by you</li>
                  </ul>
                </div>

                <div className="bg-neutral-50 p-6 rounded-2xl border border-neutral-100/80">
                  <h3 className="font-semibold text-black mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#e8500a]" />
                    Usage Information
                  </h3>
                  <ul className="space-y-2 text-sm text-neutral-600 list-disc pl-4">
                    <li>IP address</li>
                    <li>Browser type and device information</li>
                    <li>Pages visited and time spent</li>
                    <li>Referring websites and links</li>
                    <li>Interaction data related to our services</li>
                  </ul>
                </div>

                <div className="bg-neutral-50 p-6 rounded-2xl border border-neutral-100/80">
                  <h3 className="font-semibold text-black mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#e8500a]" />
                    Research & Content
                  </h3>
                  <ul className="space-y-2 text-sm text-neutral-600 list-disc pl-4">
                    <li>Materials, submissions, comments, discussions, and other content you choose to share through our platform</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold text-black border-b border-neutral-100 pb-3">
                How We Use Your Information
              </h2>
              <p>We may use the information we collect to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide, operate, and improve our services</li>
                <li>Manage user accounts and authentication</li>
                <li>Facilitate collaboration, discussion, and knowledge sharing</li>
                <li>Respond to inquiries and provide support</li>
                <li>Send service-related communications and updates</li>
                <li>Analyze platform performance and user engagement</li>
                <li>Maintain security, prevent abuse, and enforce our policies</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold text-black border-b border-neutral-100 pb-3">
                Information Sharing and Disclosure
              </h2>
              <p className="font-medium text-black">We do not sell your personal information.</p>
              <p>We may share information with:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Service providers that help operate our platform</li>
                <li>Professional advisors, auditors, or legal representatives when necessary</li>
                <li>Law enforcement or regulatory authorities when required by law</li>
                <li>Successors in connection with a merger, acquisition, or business transfer</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold text-black border-b border-neutral-100 pb-3">
                Data Security
              </h2>
              <p>
                We implement reasonable technical, administrative, and organizational safeguards designed to protect your information from unauthorized access, disclosure, alteration, or destruction. However, no method of transmission or storage can be guaranteed to be completely secure.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold text-black border-b border-neutral-100 pb-3">
                Data Retention
              </h2>
              <p>
                We retain personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, comply with legal obligations, resolve disputes, and enforce our agreements.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold text-black border-b border-neutral-100 pb-3">
                Cookies and Tracking Technologies
              </h2>
              <p>
                We may use cookies and similar technologies to improve user experience, analyze website traffic, remember preferences, and enhance platform functionality. You may control cookie settings through your browser preferences.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold text-black border-b border-neutral-100 pb-3">
                Your Rights
              </h2>
              <p>Depending on your location and applicable laws, you may have the right to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Access your personal information</li>
                <li>Correct inaccurate information</li>
                <li>Request deletion of your information</li>
                <li>Object to or restrict certain processing activities</li>
                <li>Withdraw consent where processing is based on consent</li>
                <li>Request a copy of your data</li>
              </ul>
              <p>To exercise these rights, please contact us using the information provided below.</p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold text-black border-b border-neutral-100 pb-3">
                Third-Party Services
              </h2>
              <p>
                Our platform may contain links to third-party websites, services, or resources. We are not responsible for the privacy practices or content of those third parties.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold text-black border-b border-neutral-100 pb-3">
                Children&apos;s Privacy
              </h2>
              <p>
                Our services are not intended for individuals under the age required by applicable law to provide consent. We do not knowingly collect personal information from children without appropriate authorization.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold text-black border-b border-neutral-100 pb-3">
                Changes to This Privacy Policy
              </h2>
              <p>
                We may update this Privacy Policy from time to time. Any changes will become effective when the revised policy is posted on our platform. Continued use of our services after changes are posted constitutes acceptance of the updated policy.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold text-black border-b border-neutral-100 pb-3">
                Contact Us
              </h2>
              <p>If you have questions about this Privacy Policy or our data practices, please contact us at:</p>
              <div className="bg-neutral-50 p-6 rounded-2xl border border-neutral-100/80 max-w-md space-y-2">
                <p className="font-bold text-black">Paper Theory Network</p>
                <p className="text-sm">
                  Email: <a href="mailto:official@papertheorynet.com" className="text-[#e8500a] hover:underline">official@papertheorynet.com</a>
                </p>
                <p className="text-sm">
                  Website: <a href="https://papertheorynet.com" target="_blank" rel="noopener noreferrer" className="text-[#e8500a] hover:underline">papertheorynet.com</a>
                </p>
              </div>
            </section>

          </div>
        </div>
      </div>
    </div>
  );
}
