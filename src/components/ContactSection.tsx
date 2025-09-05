import React, { useState } from 'react';
import { PhoneIcon, MailIcon, MapPinIcon, SendIcon } from 'lucide-react';
import { ScribbleElement } from './ScribbleElement';

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submissionStatus, setSubmissionStatus] = useState('idle');
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmissionStatus('submitting');
    setError('');

    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setError('Please fill out all fields.');
      setSubmissionStatus('error');
      return;
    }

    try {
      const response = await fetch('https://hog-full-bison.ngrok-free.app/webhook/7095d7f0-e2da-4e52-b4c2-9a78778b6204', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmissionStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setError('Something went wrong. Please try again.');
        setSubmissionStatus('error');
      }
    } catch (error) {
      setError('Something went wrong. Please try again.');
      setSubmissionStatus('error');
    }
  };


  return <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 relative">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get In{' '}
            <span className="font-caveat font-semibold bg-gradient-to-r from-blue-300 to-purple-400 bg-clip-text text-transparent">
              Touch
            </span>
          </h2>
          <ScribbleElement type="underline" position="bottom-left" color="#A78BFA" />
          <ScribbleElement type="note" text="let's talk automation!" position="top-right" color="#A78BFA" rotation={5} />
          <p className="text-gray-400 max-w-xl mx-auto">
            Ready to transform your business with automation? Contact us today.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="w-full lg:w-1/2 order-2 lg:order-1">
            <div className="backdrop-blur-xl bg-white/5 border border-gray-700 rounded-2xl p-6 h-full">
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-1">
                      Name
                    </label>
                    <input type="text" id="name" value={formData.name} onChange={handleChange} className="w-full px-4 py-3 rounded-lg backdrop-blur-md bg-white/5 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Your name" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-1">
                      Email
                    </label>
                    <input type="email" id="email" value={formData.email} onChange={handleChange} className="w-full px-4 py-3 rounded-lg backdrop-blur-md bg-white/5 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="your@email.com" />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-400 mb-1">
                    Subject
                  </label>
                  <input type="text" id="subject" value={formData.subject} onChange={handleChange} className="w-full px-4 py-3 rounded-lg backdrop-blur-md bg-white/5 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="How can we help?" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-1">
                    Message
                  </label>
                  <textarea id="message" value={formData.message} onChange={handleChange} rows={4} className="w-full px-4 py-3 rounded-lg backdrop-blur-md bg-white/5 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Tell us about your project..."></textarea>
                </div>
                <button type="submit" disabled={submissionStatus === 'submitting'} className="w-full px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 transition-all flex items-center justify-center disabled:opacity-50">
                  {submissionStatus === 'submitting' ? 'Sending...' : 'Send Message'}
                  <SendIcon size={16} className="ml-2" />
                </button>
                {submissionStatus === 'error' && <p className="text-red-500 text-sm">{error}</p>}
                {submissionStatus === 'success' && <p className="text-green-500 text-sm">Message sent successfully!</p>}
              </form>
            </div>
          </div>
          <div className="w-full lg:w-1/2 order-1 lg:order-2">
            <div className="space-y-8">
              <div className="backdrop-blur-lg bg-white/5 border border-gray-700 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-4">
                  Contact Information
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="p-2 backdrop-blur-md bg-white/5 border border-gray-700 rounded-lg mr-4">
                      <PhoneIcon size={20} className="text-blue-400" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Phone</p>
                      <p className="text-white">+254 0707599324</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="p-2 backdrop-blur-md bg-white/5 border border-gray-700 rounded-lg mr-4">
                      <MailIcon size={20} className="text-purple-400" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Email</p>
                      <p className="text-white">matthewkago@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="p-2 backdrop-blur-md bg-white/5 border border-gray-700 rounded-lg mr-4">
                      <MapPinIcon size={20} className="text-green-400" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Office</p>
                      <p className="text-white">
                        Nairobi
                      </p>
                      <p className="text-white">Kenya</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="backdrop-blur-lg bg-white/5 border border-gray-700 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-4">Business Hours</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <p className="text-gray-400">Monday - Friday</p>
                    <p className="text-white">9:00 AM - 6:00 PM</p>
                  </div>
                  <div className="flex justify-between">
                    <p className="text-gray-400">Saturday</p>
                    <p className="text-white">10:00 AM - 3:00 PM</p>
                  </div>
                  <div className="flex justify-between">
                    <p className="text-gray-400">Sunday</p>
                    <p className="text-white">Closed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Decorative elements */}
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-500/10 rounded-full filter blur-3xl"></div>
    </section>;
};