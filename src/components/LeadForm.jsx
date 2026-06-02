import React, { useState } from 'react';

export default function LeadForm({ placementTag, scriptEndpoint, onSuccess }) {
  const [inputs, setInputs] = useState({ name: '', mobile: '', city: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  const handleFormPost = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const formPayload = new URLSearchParams();
      formPayload.append('name', inputs.name);
      formPayload.append('mobile', inputs.mobile);
      formPayload.append('city', inputs.city);
      formPayload.append('source', placementTag);

      await fetch(scriptEndpoint, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: formPayload.toString()
      });

      if (window.gtag) window.gtag('event', 'conversion', { 'send_to': 'AW-CONVERSION_ID/LABEL' });
      if (window.fbq) window.fbq('track', 'Lead');

      setStatus('success');
      if (onSuccess) setTimeout(onSuccess, 1500);
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="py-8 text-center space-y-3 animate-fadeIn">
        <div className="w-12 h-12 bg-emerald-500/10 text-emerald-400 rounded-full flex items-center justify-center mx-auto text-xl border border-emerald-500/20">✓</div>
        <h4 className="text-base font-bold text-white uppercase tracking-wider">Access Approved</h4>
        <p className="text-xs text-studio-muted">Our academic counselor will contact you over WhatsApp shortly.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleFormPost} className="space-y-4">
      <div>
        <label className="block text-[10px] uppercase tracking-wider font-bold text-studio-muted mb-1">Your Name</label>
        <input 
          type="text" required placeholder="Enter your full name" value={inputs.name}
          onChange={(e) => setInputs({ ...inputs, name: e.target.value })}
          className="w-full bg-studio-black border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-studio-cyan text-white placeholder:text-neutral-600"
        />
      </div>
      <div>
        <label className="block text-[10px] uppercase tracking-wider font-bold text-studio-muted mb-1">Mobile Number</label>
        <input 
          type="tel" required pattern="[0-9]{10}" placeholder="10-digit smartphone number" value={inputs.mobile}
          onChange={(e) => setInputs({ ...inputs, mobile: e.target.value })}
          className="w-full bg-studio-black border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-studio-cyan text-white placeholder:text-neutral-600"
        />
      </div>
      <div>
        <label className="block text-[10px] uppercase tracking-wider font-bold text-studio-muted mb-1">City / Town</label>
        <input 
          type="text" required placeholder="e.g., Hyderabad, Huzur Nagar" value={inputs.city}
          onChange={(e) => setInputs({ ...inputs, city: e.target.value })}
          className="w-full bg-studio-black border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-studio-cyan text-white placeholder:text-neutral-600"
        />
      </div>

      {status === 'error' && <p className="text-xs text-rose-400">Submission error. Please check your connection and retry.</p>}

      <button
        type="submit" disabled={status === 'sending'}
        className="w-full py-4 bg-studio-cyan text-black font-bold text-xs uppercase tracking-widest rounded-lg transition-transform active:scale-[0.99] mt-2 shadow-lg disabled:opacity-40"
      >
        {status === 'sending' ? 'Securing Seat...' : 'Claim Free Seat Now'}
      </button>
    </form>
  );
}