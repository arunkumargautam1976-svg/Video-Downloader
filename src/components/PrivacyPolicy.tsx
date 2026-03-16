import React from 'react';
import { ArrowLeft, Shield, Lock, Eye, FileText } from 'lucide-react';
import { motion } from 'motion/react';

interface PrivacyPolicyProps {
  onBack: () => void;
}

export const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ onBack }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="w-full max-w-4xl mx-auto px-4 py-12"
    >
      <button 
        onClick={onBack}
        className="flex items-center gap-2 text-zinc-500 hover:text-red-600 transition-colors mb-8 group font-medium"
      >
        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
        Back to Downloader
      </button>

      <div className="bg-white border border-zinc-100 rounded-[2.5rem] p-8 md:p-12 shadow-2xl shadow-zinc-200/50">
        <div className="flex items-center gap-4 mb-10">
          <div className="w-14 h-14 bg-red-50 rounded-2xl flex items-center justify-center">
            <Shield className="w-7 h-7 text-red-600" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-zinc-900 tracking-tight">Privacy Policy</h1>
            <p className="text-zinc-500 font-medium">Last updated: March 16, 2026</p>
          </div>
        </div>

        <div className="space-y-12 text-zinc-600 leading-relaxed">
          <section>
            <div className="flex items-center gap-3 mb-4">
              <Eye className="w-5 h-5 text-red-600" />
              <h2 className="text-xl font-bold text-zinc-900">Information We Collect</h2>
            </div>
            <p className="text-lg">
              Our YouTube Downloader is designed with privacy as a core principle. We do not require user accounts, 
              and we do not store any personal information about our users.
            </p>
            <ul className="list-disc list-inside mt-6 space-y-3 text-zinc-500">
              <li>We do not track your IP address.</li>
              <li>We do not use tracking cookies or third-party analytics.</li>
              <li>We do not store your download history.</li>
            </ul>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-4">
              <Lock className="w-5 h-5 text-red-600" />
              <h2 className="text-xl font-bold text-zinc-900">How We Process Data</h2>
            </div>
            <p className="text-lg">
              When you provide a YouTube URL, our server fetches the video information directly from YouTube 
              to provide you with download options. This data is processed in real-time and is not persisted 
              in any database.
            </p>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-4">
              <FileText className="w-5 h-5 text-red-600" />
              <h2 className="text-xl font-bold text-zinc-900">Third-Party Services</h2>
            </div>
            <p className="text-lg">
              This application interacts with YouTube (Google LLC) to retrieve video content. By using this service, 
              you are also subject to YouTube's Terms of Service and Google's Privacy Policy. We recommend 
              reviewing their policies for information on how they handle your data.
            </p>
          </section>

          <section className="pt-10 border-t border-zinc-100">
            <h2 className="text-lg font-bold text-zinc-900 mb-4">Contact Us</h2>
            <p className="text-zinc-500">
              If you have any questions about this Privacy Policy, please contact us through the platform 
              where you accessed this application.
            </p>
          </section>
        </div>
      </div>
    </motion.div>
  );
};
