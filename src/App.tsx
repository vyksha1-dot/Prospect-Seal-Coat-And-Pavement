import { motion } from "motion/react";
import { HardHat, Ruler, Shield, Thermometer, Construction, Mail, Phone, MapPin, Menu, X, ArrowRight } from "lucide-react";
import { useState } from "react";
import QuoteForm from "./components/QuoteForm";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-asphalt-black selection:bg-brand-orange selection:text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-asphalt-black/80 backdrop-blur-md border-b border-road-white/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
            <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-brand-orange flex items-center justify-center rounded-sm">
              <Construction className="text-black w-6 h-6" />
            </div>
            <div>
              <span className="font-bold text-xl tracking-tighter block leading-none">PROSPECT SEAL COAT AND PAVEMENT</span>
              <span className="text-brand-orange font-bold text-lg tracking-tight">502-744-2559</span>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a href="#quote" className="btn-primary py-2 text-sm">
              Free Quote
            </a>
          </div>

          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden border-b border-road-white/5">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-20 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-l from-brand-orange/20 to-transparent" />
          <motion.div 
            animate={{ opacity: [0.1, 0.3, 0.1] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="w-full h-full border-l border-brand-orange/20 grid grid-cols-12"
          >
            {[...Array(12)].map((_, i) => (
              <div key={i} className="border-r border-brand-orange/10 h-full" />
            ))}
          </motion.div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <div className="flex items-center gap-2 mb-6">
              <span className="w-8 h-[1px] bg-brand-orange" />
              <span className="technical-label text-brand-orange">Contractor Grade A+ Verified</span>
            </div>
            <h1 className="text-5xl md:text-7xl mb-8 leading-[1.1]">
              Elite Asphalt <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-road-white to-road-white/40">
                Preservation Systems
              </span>
            </h1>
            <p className="text-lg md:text-xl text-road-white/60 mb-10 leading-relaxed">
              Extending the lifespan of your commercial and residential assets through precision engineering, industrial-grade sealants, and master craftsmanship.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#quote" className="btn-primary">
                Get Free Quote <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

            {/* Removed Stats Bar */}
        </div>
      </section>

      {/* Technical Approach */}
      <section id="approach" className="py-24 border-y border-road-white/5">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="aspect-square bg-asphalt-gray/20 border border-road-white/10 p-8 flex flex-col justify-between overflow-hidden">
              <div className="technical-label">Quality Control Matrix</div>
              <div className="space-y-8">
                {[
                  { icon: Thermometer, title: "Thermal Monitoring", desc: "Materials applied at optimal manufacturer-specified temperatures." },
                  { icon: Ruler, title: "Precision Shielding", desc: "Manual edging and brushing for neat boundaries with zero overspray." },
                  { icon: Shield, title: "Double Coat System", desc: "Two complete coats applied to high-traffic areas for 2x durability." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-12 h-12 bg-road-white/5 flex items-center justify-center shrink-0">
                      <item.icon className="w-5 h-5 text-brand-orange" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">{item.title}</h4>
                      <p className="text-sm text-road-white/50">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex justify-between items-end">
                <HardHat className="opacity-10 w-32 h-32 absolute -bottom-8 -right-8" />
              </div>
            </div>
          </div>

          <div>
            <div className="technical-label text-brand-orange mb-4">Our Standard</div>
            <h2 className="text-3xl md:text-5xl mb-8">Not Just Sealing.<br />Engineering Longevity.</h2>
            <div className="space-y-6 text-road-white/70 leading-relaxed">
              <p>
                Asphalt is the third most expensive asset for property owners behind roofs and HVAC systems. Most contractors use thin, water-diluted sealants that wash away in months.
              </p>
              <p className="border-l-2 border-brand-orange pl-6 my-8 italic text-lg text-road-white">
                "We provide a 2-Year Full-Bond Warranty on all commercial applications. If it flakes, we fix it—no questions asked."
              </p>
              <p>
                Our proprietary blending process includes sand-slurry suspension for maximum traction and polymer additives for deep-black pigmentation that lasts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section id="quote" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-asphalt-gray/10 border border-road-white/5 max-w-3xl mx-auto p-12 lg:p-20">
            <div className="mb-12 text-center">
              <h2 className="text-4xl md:text-6xl mb-6">Contact Us Today</h2>
              <p className="text-road-white/60 text-lg">Send us your project details for a free, professional estimate.</p>
            </div>
            <QuoteForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 border-t border-road-white/5 bg-asphalt-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-8 h-8 bg-brand-orange flex items-center justify-center rounded-sm">
                  <Construction className="text-black w-5 h-5" />
                </div>
                <span className="font-bold text-lg tracking-tighter">PROSPECT SEAL COAT AND PAVEMENT</span>
              </div>
              <p className="text-road-white/40 max-w-sm mb-8 leading-relaxed">
                Professional asphalt preservation. Call us today: 502-744-2559
              </p>
              <div className="flex gap-4">
                {[Mail, Phone, MapPin].map((Icon, i) => (
                  <button key={i} className="w-10 h-10 bg-road-white/5 border border-road-white/5 flex items-center justify-center hover:border-brand-orange/50 transition-colors">
                    <Icon className="w-4 h-4" />
                  </button>
                ))}
              </div>
            </div>

            <div>
              <div className="technical-label text-road-white mb-6">Service Area</div>
              <ul className="space-y-3 text-road-white/40 text-sm">
                <li>Downtown Metro</li>
                <li>Eastern Suburbs</li>
                <li>Industrial Corridor</li>
                <li>Coastal District</li>
                <li>Northern Highlands</li>
              </ul>
            </div>
          </div>

          <div className="pt-12 border-t border-road-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-[10px] uppercase tracking-widest text-road-white/20">
              © 2026 Prospect Seal Coat And Pavement. All Rights Reserved.
            </p>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-[10px] uppercase tracking-widest text-road-white/40">Current Scheduling Active</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

