'use client';

import { useState } from 'react';

const BalanceWheelSVG = () => (
  <svg viewBox="0 0 200 200" className="w-full h-full animate-spin-slow">
    <circle cx="100" cy="100" r="95" fill="none" stroke="#dfb15b" strokeWidth="1" opacity="0.3" />
    <circle cx="100" cy="100" r="90" fill="none" stroke="#061a14" strokeWidth="2" />
    
    {/* Balance wheel segments */}
    {[0, 72, 144, 216, 288].map((angle) => (
      <g key={angle} transform={`rotate(${angle} 100 100)`}>
        <line x1="100" y1="20" x2="100" y2="40" stroke="#dfb15b" strokeWidth="3" />
        <rect x="95" y="42" width="10" height="8" fill="#061a14" />
      </g>
    ))}
    
    {/* Center hub */}
    <circle cx="100" cy="100" r="12" fill="#dfb15b" />
    <circle cx="100" cy="100" r="8" fill="#061a14" />
  </svg>
);

const GlobalMaisonBar = ({ onCartOpen }: { onCartOpen: () => void }) => (
  <div className="border-b border-gold/30 bg-cream sticky top-0 z-40">
    <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
      <div className="font-playfair text-xl tracking-tight">
        <span className="text-emerald font-bold">OLYX ATELIER</span>
        <span className="text-gold mx-2">//</span>
        <span className="text-emerald text-sm">THE 10 MAISONS</span>
      </div>
      <button onClick={onCartOpen} className="text-emerald hover:text-gold transition">
        CART
      </button>
    </div>
  </div>
);

const CartDrawer = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => (
  <>
    {isOpen && <div className="fixed inset-0 bg-black/30 z-40" onClick={onClose} />}
    <div
      className={`fixed right-0 top-0 h-screen w-96 bg-cream border-l border-gold/30 transform transition z-50 ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="font-playfair text-2xl text-emerald">CART</h2>
          <button onClick={onClose} className="text-emerald text-2xl">×</button>
        </div>
        <div className="text-charcoal">Your cart is empty.</div>
      </div>
    </div>
  </>
);

export default function ChronovaultHome() {
  const [cartOpen, setCartOpen] = useState(false);
  const [selectedStrap, setSelectedStrap] = useState('alligator-midnight');
  const [selectedCaseback, setSelectedCaseback] = useState('exhibition');
  const [quantity, setQuantity] = useState(1);

  const straps = [
    { id: 'alligator-midnight', name: 'Alligator Midnight', hex: '#1a1a1a' },
    { id: 'cognac-leather', name: 'Cognac Leather', hex: '#8b4513' },
    { id: 'nato-emerald', name: 'NATO Emerald', hex: '#061a14' },
    { id: 'satin-gold', name: 'Satin Gold', hex: '#dfb15b' },
  ];

  const casebacks = [
    { id: 'exhibition', name: 'Exhibition Sapphire', desc: 'Sloped crystal for tourbillon view' },
    { id: 'solid', name: 'Solid Steel', desc: 'Engraved serial number' },
  ];

  const specs = [
    { label: 'Movement', value: 'Hand-wound mechanical tourbillon' },
    { label: 'Power Reserve', value: '72 hours' },
    { label: 'Frequency', value: '4 Hz (28,800 vph)' },
    { label: 'Jewels', value: '27 rubies' },
    { label: 'Case Diameter', value: '42 mm' },
    { label: 'Water Resistance', value: '50 m' },
    { label: 'Crystal', value: 'Sapphire AR-coated' },
    { label: 'Chronometer', value: 'COSC certified' },
  ];

  return (
    <main className="bg-cream">
      <GlobalMaisonBar onCartOpen={() => setCartOpen(true)} />
      <CartDrawer isOpen={cartOpen} onClose={() => setCartOpen(false)} />

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 py-24 grid grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="font-playfair text-6xl text-emerald mb-6 leading-tight">
            Mechanical Tourbillon
          </h1>
          <p className="text-lg text-charcoal/70 mb-8 leading-relaxed">
            Seventy-two hours of uninterrupted precision. A hand-assembled tourbillon regulator, visible beneath exhibition sapphire, beats at 4 Hz with the certainty of Geneva manufacture. COSC-certified chronometry for the collector who understands that mechanical watches are not kept: they are kept company.
          </p>
          <div className="flex gap-6 items-center">
            <div>
              <div className="text-gold text-4xl font-playfair mb-2">$8,900</div>
              <div className="text-sm text-charcoal/50">Rp 138.000.000 / €8,250</div>
            </div>
            <button
              onClick={() => setCartOpen(true)}
              className="px-8 py-3 bg-emerald text-cream font-semibold hover:bg-gold hover:text-emerald transition duration-300"
            >
              ADD TO CART
            </button>
          </div>
        </div>

        {/* Balance wheel animation */}
        <div className="aspect-square bg-gradient-to-br from-gold/10 to-emerald/5 border border-gold/20 rounded-lg p-12 flex items-center justify-center">
          <style>{`
            @keyframes spin-slow {
              from { transform: rotate(0deg); }
              to { transform: rotate(360deg); }
            }
            .animate-spin-slow {
              animation: spin-slow 8s linear infinite;
            }
          `}</style>
          <BalanceWheelSVG />
        </div>
      </section>

      {/* Customizer */}
      <section className="bg-emerald/5 border-y border-gold/20 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-playfair text-4xl text-emerald mb-12">Configuration</h2>

          <div className="grid grid-cols-2 gap-12 mb-12">
            {/* Strap Selector */}
            <div>
              <h3 className="font-playfair text-xl text-emerald mb-6">Strap</h3>
              <div className="space-y-3">
                {straps.map((strap) => (
                  <label key={strap.id} className="flex items-center gap-4 p-4 border border-gold/20 rounded cursor-pointer hover:bg-gold/5 transition">
                    <input
                      type="radio"
                      name="strap"
                      value={strap.id}
                      checked={selectedStrap === strap.id}
                      onChange={(e) => setSelectedStrap(e.target.value)}
                      className="w-4 h-4"
                    />
                    <div className="w-6 h-6 rounded border border-charcoal/30" style={{ backgroundColor: strap.hex }} />
                    <span className="text-charcoal font-medium">{strap.name}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Caseback Selector */}
            <div>
              <h3 className="font-playfair text-xl text-emerald mb-6">Caseback</h3>
              <div className="space-y-3">
                {casebacks.map((caseback) => (
                  <label key={caseback.id} className="flex items-center gap-4 p-4 border border-gold/20 rounded cursor-pointer hover:bg-gold/5 transition">
                    <input
                      type="radio"
                      name="caseback"
                      value={caseback.id}
                      checked={selectedCaseback === caseback.id}
                      onChange={(e) => setSelectedCaseback(e.target.value)}
                      className="w-4 h-4"
                    />
                    <div>
                      <div className="text-charcoal font-medium">{caseback.name}</div>
                      <div className="text-sm text-charcoal/50">{caseback.desc}</div>
                    </div>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Quantity */}
          <div className="max-w-xs">
            <label className="block text-sm font-medium text-emerald mb-3">Quantity</label>
            <div className="flex gap-2">
              <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="px-4 py-2 border border-gold/20 text-emerald hover:bg-gold/10">−</button>
              <input type="number" value={quantity} readOnly className="w-16 text-center border border-gold/20" />
              <button onClick={() => setQuantity(quantity + 1)} className="px-4 py-2 border border-gold/20 text-emerald hover:bg-gold/10">+</button>
            </div>
          </div>
        </div>
      </section>

      {/* Specifications */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <h2 className="font-playfair text-4xl text-emerald mb-12">Movement Specifications</h2>
        <div className="grid grid-cols-4 gap-6">
          {specs.map((spec, i) => (
            <div key={i} className="p-6 border border-gold/20 rounded bg-cream hover:border-gold/50 transition">
              <div className="text-xs uppercase tracking-widest text-gold font-semibold mb-2">{spec.label}</div>
              <div className="text-charcoal font-medium text-sm leading-tight">{spec.value}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-emerald text-cream border-t border-gold/30 py-8">
        <div className="max-w-7xl mx-auto px-6 text-center text-sm">
          <p>Chronovault / Hand-assembled mechanical horology since 2024</p>
        </div>
      </footer>
    </main>
  );
}
