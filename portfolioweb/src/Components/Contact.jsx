import { useState } from 'react';
import { Send, Loader2, CheckCircle, XCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [formData, setFormData] = useState({ 
    name: '', 
    email: '', 
    subject: '', 
    message: '' 
  });
  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    error: false,
    message: ''
  });

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validation
    if (!formData.name.trim()) {
      setStatus({
        submitting: false,
        submitted: false,
        error: true,
        message: '⚠️ Please enter your name'
      });
      setTimeout(() => setStatus({ submitting: false, submitted: false, error: false, message: '' }), 3000);
      return;
    }

    if (!formData.email.trim() || !validateEmail(formData.email)) {
      setStatus({
        submitting: false,
        submitted: false,
        error: true,
        message: '⚠️ Please enter a valid email'
      });
      setTimeout(() => setStatus({ submitting: false, submitted: false, error: false, message: '' }), 3000);
      return;
    }

    if (!formData.message.trim()) {
      setStatus({
        submitting: false,
        submitted: false,
        error: true,
        message: '⚠️ Please enter a message'
      });
      setTimeout(() => setStatus({ submitting: false, submitted: false, error: false, message: '' }), 3000);
      return;
    }

    setStatus({ submitting: true, submitted: false, error: false, message: '' });

    try {
      // THIS IS THE CRITICAL PART - Variable names must match template!
      const templateParams = {
        from_name: formData.name,           // ← Matches {{from_name}}
        from_email: formData.email,         // ← Matches {{from_email}}
        subject: formData.subject || 'No Subject',  // ← Matches {{subject}}
        message: formData.message,          // ← Matches {{message}}
        reply_to: formData.email,           // ← Extra: helps with replies
      };

      console.log('Sending email with data:', templateParams); // Debug log

      const result = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      console.log('Email sent successfully!', result); // Debug log

      // Success
      setStatus({
        submitting: false,
        submitted: true,
        error: false,
        message: '✅ Message sent successfully! I\'ll reply soon.'
      });
      
      // Clear form
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Clear success message after 5 seconds
      setTimeout(() => {
        setStatus({ submitting: false, submitted: false, error: false, message: '' });
      }, 5000);

    } catch (error) {
      console.error('EmailJS Error:', error); // Debug log
      setStatus({
        submitting: false,
        submitted: false,
        error: true,
        message: '❌ Failed to send message. Please try again or email me directly.'
      });
      setTimeout(() => setStatus({ submitting: false, submitted: false, error: false, message: '' }), 5000);
    }
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Get In Touch
        </h2>
        
        <div className="space-y-6">
          {/* Name Field */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Your Name <span>*</span>
              </label>
              <input
                type="text"
                placeholder="Musahaf Ali"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                disabled={status.submitting}
                className="w-full px-4 py-3 bg-slate-800/50 border border-purple-400/30 rounded-lg focus:outline-none focus:border-purple-400 transition-colors text-white placeholder-gray-400 disabled:opacity-50 disabled:cursor-not-allowed"
              />
            </div>

            {/* Email Field */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Your Email <span>*</span>
              </label>
              <input
                type="email"
                placeholder="musahafali23@gmail.com"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                disabled={status.submitting}
                className="w-full px-4 py-3 bg-slate-800/50 border border-purple-400/30 rounded-lg focus:outline-none focus:border-purple-400 transition-colors text-white placeholder-gray-400 disabled:opacity-50 disabled:cursor-not-allowed"
              />
            </div>
          </div>
          
          {/* Subject Field */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Subject
            </label>
            <input
              type="text"
              placeholder="What's this about?"
              value={formData.subject}
              onChange={(e) => handleInputChange('subject', e.target.value)}
              disabled={status.submitting}
              className="w-full px-4 py-3 bg-slate-800/50 border border-purple-400/30 rounded-lg focus:outline-none focus:border-purple-400 transition-colors text-white placeholder-gray-400 disabled:opacity-50 disabled:cursor-not-allowed"
            />
          </div>
          
          {/* Message Field */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Your Message <span>*</span>
            </label>
            <textarea
              rows={6}
              placeholder="Tell me about your project..."
              value={formData.message}
              onChange={(e) => handleInputChange('message', e.target.value)}
              disabled={status.submitting}
              className="w-full px-4 py-3 bg-slate-800/50 border border-purple-400/30 rounded-lg focus:outline-none focus:border-purple-400 transition-colors resize-none text-white placeholder-gray-400 disabled:opacity-50 disabled:cursor-not-allowed"
            ></textarea>
          </div>
          
          {/* Status Messages */}
          {status.message && (
            <div className={`p-4 rounded-lg flex items-center space-x-3 ${
              status.submitted 
                ? 'bg-green-500/20 border border-green-400/30 text-green-300' 
                : 'bg-red-500/20 border border-red-400/30 text-red-300'
            }`}>
              {status.submitted ? (
                <CheckCircle className="w-5 h-5 flex-shrink-0" />
              ) : (
                <XCircle className="w-5 h-5 flex-shrink-0" />
              )}
              <span>{status.message}</span>
            </div>
          )}
          
          {/* Submit Button */}
          <button 
            onClick={handleSubmit}
            disabled={status.submitting}
            className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-8 py-4 rounded-lg font-semibold transition-all transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/50 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
          >
            {status.submitting ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                <span>Sending...</span>
              </>
            ) : (
              <>
                <span>Send Message</span>
                <Send className="w-5 h-5" />
              </>
            )}
          </button>
          
          <p className="text-center text-gray-400 text-sm">
            * Required fields
          </p>
        </div>
      </div>
    </section>
  );
}