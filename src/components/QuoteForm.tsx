import { useState, FormEvent } from "react";
import { motion } from "motion/react";
import { Send, CheckCircle2 } from "lucide-react";

export default function QuoteForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center justify-center p-12 bg-asphalt-gray/10 border border-brand-orange/30 text-center"
      >
        <CheckCircle2 className="w-16 h-16 text-brand-orange mb-4" />
        <h3 className="text-2xl font-bold mb-2">Request Received</h3>
        <p className="text-road-white/60">Our estimator will contact you within 24 hours.</p>
        <button 
          onClick={() => setSubmitted(false)}
          className="mt-6 text-sm underline opacity-50 hover:opacity-100"
        >
          Send another request
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="technical-label">Client Name</label>
          <input 
            required
            type="text" 
            placeholder="John Doe"
            className="w-full bg-asphalt-gray/20 border border-road-white/10 p-3 outline-none focus:border-brand-orange/50 transition-colors"
          />
        </div>
        <div className="space-y-2">
          <label className="technical-label">Phone Reference</label>
          <input 
            required
            type="tel" 
            placeholder="(555) 000-0000"
            className="w-full bg-asphalt-gray/20 border border-road-white/10 p-3 outline-none focus:border-brand-orange/50 transition-colors"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label className="technical-label">Service Type</label>
        <select className="w-full bg-asphalt-gray/20 border border-road-white/10 p-3 outline-none focus:border-brand-orange/50 transition-colors appearance-none">
          <option value="sealcoat">Full Sealcoat & Striping</option>
          <option value="crack-fill">Hot Lead Crack Filling</option>
          <option value="pothole">Pothole / Patch Repair</option>
          <option value="striping">Precision Line Striping</option>
          <option value="other">Multiple Services / Other</option>
        </select>
      </div>

      <div className="space-y-2">
        <label className="technical-label">Project Details / Square Footage</label>
        <textarea 
          rows={4}
          placeholder="Describe the area size and current condition..."
          className="w-full bg-asphalt-gray/20 border border-road-white/10 p-3 outline-none focus:border-brand-orange/50 transition-colors resize-none"
        ></textarea>
      </div>

      <button type="submit" className="btn-primary w-full justify-center">
        Initialize Quote Request <Send className="w-4 h-4" />
      </button>
      
      <p className="text-[10px] text-center opacity-30 uppercase tracking-widest">
        Secured encrypted submission gate
      </p>
    </form>
  );
}
