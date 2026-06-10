"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function TermsPage() {
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
            Terms & <span className="text-[#e8500a]">Conditions</span>
          </h1>
          <p className="text-lg text-neutral-600 max-w-2xl leading-relaxed">
            Last updated: June 10, 2026. Please read these Terms and Conditions carefully before using our platform.
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="px-6 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto prose prose-neutral max-w-none text-neutral-700 leading-relaxed text-base md:text-lg">
          <div className="space-y-10">
            
            <section className="space-y-4">
              <p>
                Welcome to Paper Theory Network. By accessing or using our website, services, or content, you agree to comply with these Terms and Conditions.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-black border-b border-neutral-100 pb-2">
                Use of Services
              </h2>
              <p>
                You agree to use Paper Theory Network only for lawful purposes and in a manner that does not interfere with the rights or use of the platform by others.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-black border-b border-neutral-100 pb-2">
                Intellectual Property
              </h2>
              <p>
                All content, branding, logos, and materials provided by Paper Theory Network are owned by or licensed to us and may not be copied, distributed, or used without permission.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-black border-b border-neutral-100 pb-2">
                User Content
              </h2>
              <p>
                You retain ownership of any content you submit. By submitting content, you grant Paper Theory Network a non-exclusive right to use, display, and share that content as necessary to provide our services.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-black border-b border-neutral-100 pb-2">
                Prohibited Activities
              </h2>
              <p>Users may not:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Violate any applicable laws or regulations.</li>
                <li>Upload harmful, misleading, or offensive content.</li>
                <li>Attempt to gain unauthorized access to our systems.</li>
                <li>Disrupt or interfere with the operation of the platform.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-black border-b border-neutral-100 pb-2">
                Disclaimer
              </h2>
              <p>
                Our services and content are provided &quot;as is&quot; without warranties of any kind. We do not guarantee that the platform will always be available, accurate, or error-free.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-black border-b border-neutral-100 pb-2">
                Limitation of Liability
              </h2>
              <p>
                Paper Theory Network shall not be liable for any indirect, incidental, or consequential damages arising from the use of our services.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-black border-b border-neutral-100 pb-2">
                Changes to Terms
              </h2>
              <p>
                We may update these Terms and Conditions from time to time. Continued use of the platform after changes are posted constitutes acceptance of the revised terms.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-black border-b border-neutral-100 pb-2">
                Contact
              </h2>
              <p>If you have any questions regarding these Terms and Conditions, please contact us at:</p>
              <div className="bg-neutral-50 p-6 rounded-2xl border border-neutral-100/80 max-w-md space-y-2 mt-2">
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
