import React, { useState } from 'react';
import { FacebookIcon, TwitterIcon, InstagramIcon, LinkedinIcon, GithubIcon } from 'lucide-react';

export const Footer = () => {
  const [email, setEmail] = useState('');
  const [submissionStatus, setSubmissionStatus] = useState('idle');
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmissionStatus('submitting');
    setError('');

    if (!email) {
      setError('Please enter your email.');
      setSubmissionStatus('error');
      return;
    }

    try {
      const response = await fetch('https://hog-full-bison.ngrok-free.app/webhook/ae411461-3ff4-47c3-bbc7-1a98cc0f583f', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setSubmissionStatus('success');
        setEmail('');
      } else {
        setError('Something went wrong. Please try again.');
        setSubmissionStatus('error');
      }
    } catch (error) {
      setError('Something went wrong. Please try again.');
      setSubmissionStatus('error');
    }
  };

  return <footer className="py-12 border-t border-gray-800 relative">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div className="text-2xl font-extrabold bg-gradient-to-r from-neutral-300 to-purple-500 bg-clip-text text-transparent mb-4 font-handwriting">
              KACODEGO
            </div>
            <p className="text-gray-400 mb-6">
              Transforming businesses through intelligent automation solutions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 backdrop-blur-md bg-white/5 border border-gray-700 rounded-lg hover:bg-white/10 transition-all">
                <FacebookIcon size={18} />
              </a>
              <a href="#" className="p-2 backdrop-blur-md bg-white/5 border border-gray-700 rounded-lg hover:bg-white/10 transition-all">
                <TwitterIcon size={18} />
              </a>
              <a href="#" className="p-2 backdrop-blur-md bg-white/5 border border-gray-700 rounded-lg hover:bg-white/10 transition-all">
                <InstagramIcon size={18} />
              </a>
              <a href="#" className="p-2 backdrop-blur-md bg-white/5 border border-gray-700 rounded-lg hover:bg-white/10 transition-all">
                <LinkedinIcon size={18} />
              </a>
              <a href="#" className="p-2 backdrop-blur-md bg-white/5 border border-gray-700 rounded-lg hover:bg-white/10 transition-all">
                <GithubIcon size={18} />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Process Automation
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  AI & Machine Learning
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Data Integration
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Analytics & Reporting
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Legacy System Integration
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Our Team
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Stay updated with the latest in automation technology.
            </p>
            <form className="flex" onSubmit={handleSubmit}>
              <input type="email" placeholder="Your email" value={email} onChange={handleChange} className="px-4 py-2 rounded-l-lg backdrop-blur-md bg-white/5 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
              <button type="submit" disabled={submissionStatus === 'submitting'} className="px-4 py-2 rounded-r-lg bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 transition-all">
                {submissionStatus === 'submitting' ? 'Subscribing...' : 'Subscribe'}
              </button>
            </form>
            {submissionStatus === 'error' && <p className="text-red-500 text-sm mt-2">{error}</p>}
            {submissionStatus === 'success' && <p className="text-green-500 text-sm mt-2">Subscribed successfully!</p>}
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © 2023 Kacodego. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-500 text-sm hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-500 text-sm hover:text-white transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-gray-500 text-sm hover:text-white transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>;
};