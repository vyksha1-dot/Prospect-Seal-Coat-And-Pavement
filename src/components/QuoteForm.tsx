import { useState, FormEvent } from "react";
import { motion } from "motion/react";
import { Send, CheckCircle2 } from "lucide-react";

export default function QuoteForm() {
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      phone: formData.get("phone"),
      email: formData.get("email"),
      service: formData.get("service"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        throw new Error("Failed to send request");
      }
    } catch (err) {
      setError("Something went wrong. Please try again or call us directly.");
    } finally {
      setIsLoading(false);
    }
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
        <p className="text-road-white/60">Our estimator will contact you at your email or phone within 24 hours.</p>
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
            name="name"
            type="text" 
            placeholder="John Doe"
            className="w-full bg-asphalt-gray/20 border border-road-white/10 p-3 outline-none focus:border-brand-orange/50 transition-colors"
          />
        </div>
        <div className="space-y-2">
          <label className="technical-label">Phone Reference</label>
          <input 
            required
            name="phone"
            type="tel" 
            placeholder="(555) 000-0000"
            className="w-full bg-asphalt-gray/20 border border-road-white/10 p-3 outline-none focus:border-brand-orange/50 transition-colors"
          />
        </div>
        <div className="space-y-2 md:col-span-2">
          <label className="technical-label">Email Address</label>
          <input 
            required
            name="email"
            type="email" 
            placeholder="john@example.com"
            className="w-full bg-asphalt-gray/20 border border-road-white/10 p-3 outline-none focus:border-brand-orange/50 transition-colors"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label className="technical-label">Service Type</label>
        <select name="service" className="w-full bg-asphalt-gray/20 border border-road-white/10 p-3 outline-none focus:border-brand-orange/50 transition-colors appearance-none">
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
          required
          name="message"
          rows={4}
          placeholder="Describe the area size and current condition..."
          className="w-full bg-asphalt-gray/20 border border-road-white/10 p-3 outline-none focus:border-brand-orange/50 transition-colors resize-none"
        ></textarea>
      </div>

      {error && (
        <p className="text-red-500 text-sm font-mono">{error}</p>
      )}

      <button 
        type="submit" 
        disabled={isLoading}
        className="btn-primary w-full justify-center disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isLoading ? "Sending..." : "Initialize Quote Request"} <Send className="w-4 h-4 ml-2" />
      </button>
      
      <p className="text-[10px] text-center opacity-30 uppercase tracking-widest">
        Secured encrypted submission gate
      </p>
    </form>
  );
}
