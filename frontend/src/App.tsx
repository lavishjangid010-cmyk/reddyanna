import { useState } from 'react';
import { 
  Menu, 
  X, 
  User, 
  Mail, 
  Phone, 
  Calendar, 
  ChevronDown, 
  Target, 
  Lock, 
  ChevronUp,
  Dices,
  Trophy,
  Gamepad2,
  Users,
  Youtube,
  Link2,
  Check
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- Components ---

const Header = ({ onMenuToggle, onAuthViewChange }: { onMenuToggle: () => void; onAuthViewChange: (view: 'register' | 'login') => void }) => {
  const handleAction = (view: 'register' | 'login') => {
    onAuthViewChange(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 bg-black border-b border-white/10 px-4 py-3 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <button onClick={onMenuToggle} className="text-white p-1">
          <Menu size={28} />
        </button>
        <div className="flex flex-col items-center">
          <img src="/logo.jpg" alt="Reddy Anna Logo" className="h-10 object-contain" referrerPolicy="no-referrer" />
        </div>
      </div>
      <div className="flex gap-2">
        <button 
          onClick={() => handleAction('login')}
          className="bg-[#F6D34B] text-black text-[10px] font-bold px-3 py-1.5 rounded-md leading-tight shadow-lg active:scale-95 transition-transform"
        >
          Direct<br />Login
        </button>
        <button 
          onClick={() => handleAction('register')}
          className="bg-[#F6D34B] text-black text-[10px] font-bold px-3 py-1.5 rounded-md leading-tight shadow-lg active:scale-95 transition-transform"
        >
          New<br />Player?<br />Get ID
        </button>
      </div>
    </header>
  );
};

const SideMenu = ({ isOpen, onClose, onAuthViewChange }: { isOpen: boolean; onClose: () => void; onAuthViewChange: (view: 'register' | 'login') => void }) => {
  const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>({ 'Get ID': true });

  const toggleExpand = (label: string) => {
    setExpandedItems(prev => ({ ...prev, [label]: !prev[label] }));
  };

  const handleAction = (view: 'register' | 'login') => {
    onAuthViewChange(view);
    onClose();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const menuItems = [
    { label: 'About Reddy Anna', hasSub: false },
    { 
      label: 'Get ID', 
      hasSub: true, 
      active: true,
      subItems: ['IPL Betting ID', 'Reddy Anna Casino ID', 'Online Cricket ID']
    },
    { label: 'Login Account', hasSub: false },
    { 
      label: 'Betting Exchanges', 
      hasSub: true,
      subItems: ['Laser247', '11xplay', 'Gold365', 'Cricbet99', 'ReddyBook', 'Reddy Anna Club']
    },
    { 
      label: 'Services', 
      hasSub: true,
      subItems: [
        'Football Betting', 'Tennis Betting', 'Cricket Betting', 
        'Reddy Anna Live Cricket Betting', 'Fantasy Sports Contests', 
        'Live Casino', 'Horse Race Betting', 'Kabaddi Betting'
      ]
    },
    { label: 'Download App', hasSub: false },
    { label: 'Privacy Policy', hasSub: false },
    { label: 'T&C', hasSub: false },
    { label: 'Bonuses & Promotions', hasSub: false },
    { label: 'Rules & Regulations', hasSub: false },
    { label: 'Customer Support', hasSub: false },
    { label: 'Guide', hasSub: true, subItems: ['How to Play', 'FAQs'] },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 z-[60]"
          />
          <motion.div 
            initial={{ y: '-100%' }}
            animate={{ y: 0 }}
            exit={{ y: '-100%' }}
            transition={{ type: 'tween', duration: 0.4, ease: 'easeInOut' }}
            className="fixed top-0 left-0 right-0 max-h-[90vh] bg-white z-[70] overflow-y-auto"
          >
            <div className="bg-black p-4 flex items-center justify-between sticky top-0 z-10">
              <button onClick={onClose} className="text-white">
                <X size={28} />
              </button>
              <div className="flex flex-col items-center">
                <img src="/logo.jpg" alt="Reddy Anna Logo" className="h-10 object-contain" referrerPolicy="no-referrer" />
              </div>
              <div className="flex gap-1">
                <button 
                  onClick={() => handleAction('login')}
                  className="bg-[#F6D34B] text-black text-[10px] font-bold px-3 py-1.5 rounded shadow-md active:scale-95 transition-transform"
                >
                  Direct Login
                </button>
                <button 
                  onClick={() => handleAction('register')}
                  className="bg-[#F6D34B] text-black text-[10px] font-bold px-3 py-1.5 rounded shadow-md active:scale-95 transition-transform"
                >
                  Get ID
                </button>
              </div>
            </div>
            
            <nav className="py-0">
              {menuItems.map((item, idx) => (
                <div key={idx} className="border-b border-gray-100">
                  <button 
                    onClick={() => item.hasSub && toggleExpand(item.label)}
                    className={`w-full px-4 py-3.5 flex items-center justify-between text-sm font-semibold transition-colors ${expandedItems[item.label] && item.hasSub ? 'bg-[#4A4E57] text-white' : 'text-gray-800 hover:bg-gray-50'}`}
                  >
                    <span>{item.label}</span>
                    {item.hasSub && (
                      <ChevronDown 
                        size={16} 
                        className={`transition-transform duration-200 ${expandedItems[item.label] ? 'rotate-180' : ''} ${expandedItems[item.label] ? 'text-white' : 'text-gray-400'}`} 
                      />
                    )}
                  </button>
                  <AnimatePresence>
                    {item.hasSub && expandedItems[item.label] && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden bg-white"
                      >
                        {item.subItems?.map((sub, sIdx) => (
                          <button 
                            key={sIdx} 
                            className="w-full text-left px-8 py-3 text-xs font-bold text-gray-700 hover:bg-gray-50 border-b border-gray-50 last:border-0"
                          >
                            {sub}
                          </button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </nav>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

const WhatsAppFAB = () => (
  <a 
    href="https://modhai.netlify.app"
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[9999] bg-[#25D366] text-white hover:text-black px-6 py-3.5 rounded-full flex items-center gap-2 shadow-[0_10px_30px_rgba(37,211,102,0.4)] font-black text-sm whitespace-nowrap border-2 border-white/20 transition-all duration-200 group w-max"
  >
    <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white group-hover:fill-black transition-colors" xmlns="http://www.w3.org/2000/svg">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 .018 5.396.015 12.03c0 2.12.554 4.189 1.605 6.006L0 24l6.117-1.605a11.79 11.79 0 005.925 1.585h.005c6.637 0 12.032-5.396 12.035-12.031a11.763 11.763 0 00-3.526-8.503z"/>
    </svg>
    Get The Reddy Anna ID Now
  </a>
);

const AuthCard = ({ view, setView }: { view: 'register' | 'login'; setView: (view: 'register' | 'login') => void }) => {
  return (
    <section className="px-4 py-6">
      <div className="relative border-2 border-[#E5C158] rounded-[2.5rem] p-6 bg-[#1A1A1A] overflow-hidden shadow-[0_0_60px_rgba(0,0,0,0.5)]">
        {/* Decorative corners */}
        <div className="absolute top-0 left-0 w-10 h-10 border-t-[3px] border-l-[3px] border-[#E5C158] rounded-tl-2xl m-3 opacity-80"></div>
        <div className="absolute top-0 right-0 w-10 h-10 border-t-[3px] border-r-[3px] border-[#E5C158] rounded-tr-2xl m-3 opacity-80"></div>
        
        <div className="flex flex-col items-center mb-10">
          <div className="relative mb-6">
             <div className="relative z-10 flex flex-col items-center">
               <img src="/logo.jpg" alt="Reddy Anna Logo" className="h-16 object-contain" referrerPolicy="no-referrer" />
             </div>
          </div>
          
          <h2 className="text-[#F6D34B] text-3xl font-black tracking-wider uppercase text-center">
            {view === 'register' ? 'CREATE ACCOUNT' : 'OFFICIAL REDDY ANNA LOGIN'}
          </h2>
          <p className="text-[#F6D34B] text-[11px] font-bold uppercase tracking-widest mt-2 text-center opacity-90">
            {view === 'register' ? 'Join the Premium Casino Experience' : 'Access Your Premium Casino Experience'}
          </p>
        </div>

        <form className="space-y-6">
          {view === 'register' ? (
            <>
              {[
                { label: 'FULL NAME', placeholder: 'Enter your full name', icon: User },
                { label: 'EMAIL ADDRESS', placeholder: 'Enter your email', icon: Mail },
                { label: 'MOBILE NUMBER', placeholder: 'Enter your mobile number', icon: Phone },
                { label: 'DATE OF BIRTH', placeholder: 'mm-yyyy', icon: Calendar, type: 'date' },
              ].map((field, idx) => (
                <div key={idx} className="space-y-2">
                  <label className="text-[#F6D34B] text-[11px] font-bold tracking-widest uppercase ml-1">{field.label}</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                      <field.icon size={18} className="text-[#3B82F6]" />
                    </div>
                    <input 
                      type={field.type || 'text'}
                      placeholder={field.placeholder}
                      className="w-full bg-[#121212] border border-white/20 rounded-xl py-4 pl-12 pr-4 text-white text-sm focus:outline-none focus:border-[#F6D34B] transition-all placeholder:text-gray-500"
                    />
                  </div>
                </div>
              ))}

              <div className="space-y-2">
                <label className="text-[#F6D34B] text-[11px] font-bold tracking-widest uppercase ml-1">GENDER</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                    <Users size={18} className="text-[#A855F7]" />
                  </div>
                  <select className="w-full bg-[#121212] border border-white/20 rounded-xl py-4 pl-12 pr-10 text-white text-sm focus:outline-none focus:border-[#F6D34B] transition-all appearance-none">
                    <option>Select gender</option>
                    <option>Male</option>
                    <option>Female</option>
                    <option>Other</option>
                  </select>
                  <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
                    <ChevronDown size={18} className="text-[#F6D34B]" />
                  </div>
                </div>
              </div>

              {[
                { label: 'USERNAME', placeholder: 'Choose a unique username', icon: Target },
                { label: 'PASSWORD', placeholder: 'Create a strong password', icon: Lock, type: 'password' },
                { label: 'CONFIRM PASSWORD', placeholder: 'Re-enter your password', icon: Lock, type: 'password' },
              ].map((field, idx) => (
                <div key={idx} className="space-y-2">
                  <label className="text-[#F6D34B] text-[11px] font-bold tracking-widest uppercase ml-1">{field.label}</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                      {field.label === 'USERNAME' ? (
                        <Target size={18} className="text-[#EF4444]" />
                      ) : (
                        <Lock size={18} className="text-[#F59E0B]" />
                      )}
                    </div>
                    <input 
                      type={field.type || 'text'}
                      placeholder={field.placeholder}
                      className="w-full bg-[#121212] border border-white/20 rounded-xl py-4 pl-12 pr-4 text-white text-sm focus:outline-none focus:border-[#F6D34B] transition-all placeholder:text-gray-500"
                    />
                  </div>
                </div>
              ))}

              <div className="space-y-4 pt-2">
                <label className="flex items-start gap-4 cursor-pointer group">
                  <input type="checkbox" className="mt-1 w-5 h-5 rounded border-white/20 bg-transparent checked:bg-[#F6D34B] transition-colors" />
                  <span className="text-[11px] text-white leading-relaxed font-medium">
                    I agree to the <span className="text-[#F6D34B] font-bold">Terms & Conditions</span> and <span className="text-[#F6D34B] font-bold">Privacy Policy</span>. I confirm that I am 18+ years old.
                  </span>
                </label>
                <label className="flex items-start gap-4 cursor-pointer group">
                  <input type="checkbox" className="mt-1 w-5 h-5 rounded border-white/20 bg-transparent checked:bg-[#F6D34B] transition-colors" />
                  <span className="text-[11px] text-white leading-relaxed font-medium">
                    Subscribe to receive exclusive promotions, bonuses, and updates
                  </span>
                </label>
              </div>
            </>
          ) : (
            <>
              {[
                { label: 'USERNAME / MOBILE', placeholder: 'Enter your username or mobile', icon: User },
                { label: 'PASSWORD', placeholder: 'Enter your password', icon: Lock, type: 'password' },
              ].map((field, idx) => (
                <div key={idx} className="space-y-2">
                  <label className="text-[#F6D34B] text-[11px] font-bold tracking-widest uppercase ml-1">{field.label}</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                      <field.icon size={18} className="text-[#3B82F6]" />
                    </div>
                    <input 
                      type={field.type || 'text'}
                      placeholder={field.placeholder}
                      className="w-full bg-[#121212] border border-white/20 rounded-xl py-5 pl-12 pr-4 text-white text-sm focus:outline-none focus:border-[#F6D34B] transition-all placeholder:text-gray-500"
                    />
                  </div>
                </div>
              ))}
              <div className="text-right">
                <button type="button" className="text-[#F6D34B] text-[11px] font-bold uppercase tracking-widest hover:underline">Forgot Password?</button>
              </div>
            </>
          )}

          <button className="w-full bg-[#F6D34B] text-black font-black py-4.5 rounded-2xl shadow-[0_10px_30px_rgba(246,211,75,0.3)] uppercase tracking-[0.2em] text-sm mt-6 active:scale-[0.98] transition-all">
            {view === 'register' ? 'REGISTER NOW' : 'LOGIN NOW'}
          </button>

          <div className="text-center pt-8 border-t border-white/10">
            <p className="text-[#F6D34B] text-[11px] font-black tracking-[0.3em] uppercase mb-4">
              ALREADY A MEMBER?
            </p>
            <p className="text-white text-sm font-medium">
              {view === 'register' ? 'Have an account?' : "Don't have an account?"} {' '}
              <button 
                type="button" 
                onClick={() => setView(view === 'register' ? 'login' : 'register')}
                className="text-[#F6D34B] font-black underline decoration-2 underline-offset-8"
              >
                {view === 'register' ? 'Login Here' : 'Register Here'}
              </button>
            </p>
          </div>
        </form>
      </div>

      {/* Extra Buttons below card */}
      <div className="mt-8 space-y-4">
        <button className="w-full py-4 px-6 rounded-2xl border-2 border-[#E5C158] bg-[#1E293B] text-[#E5C158] font-black text-xl italic tracking-tight shadow-xl">
          Reddy Anna Registration
        </button>
        <button className="w-full py-4 px-6 rounded-2xl border-2 border-[#E5C158] bg-[#1E293B] text-[#E5C158] font-black text-xl italic tracking-tight shadow-xl leading-tight">
          Start Your Winning Journey with Reddy Anna
        </button>
      </div>
    </section>
  );
};

const ContentSections = () => (
  <div className="space-y-8 pb-24">
    {/* Welcome Section */}
    <section className="px-4">
      <div className="border border-[#F6D34B] rounded-2xl p-1 mb-4">
        <div className="border border-[#F6D34B] rounded-xl py-3 px-4 text-center">
          <h2 className="text-[#F6D34B] text-xl font-bold">Reddy Anna Registration</h2>
        </div>
      </div>
      <div className="border border-[#F6D34B] rounded-2xl p-1 mb-6">
        <div className="border border-[#F6D34B] rounded-xl py-2 px-4 text-center italic">
          <p className="text-[#F6D34B] text-sm font-medium">Start Your Winning Journey with Reddy Anna</p>
        </div>
      </div>
      
      <div className="space-y-4 text-gray-300 text-sm leading-relaxed px-2">
        <p>
          Welcome to the official <span className="text-[#F6D34B] font-bold">Reddy Anna</span> registration page – your first step towards an exceptional online gaming and betting experience. Whether you're passionate about cricket betting, sports wagering, casino games, or live dealer action, creating your <span className="text-[#F6D34B] font-bold">Reddy Anna</span> account opens the door to India's most trusted gaming platform since 2010.
        </p>
        <p className="font-bold text-white">Ready to Bet on Cricket? Sign Up & Get ID</p>
      </div>
    </section>

    {/* Hero Image */}
    <div className="px-4">
      <div className="rounded-3xl overflow-hidden border-2 border-[#F6D34B]/30 shadow-2xl">
        <img 
          src="banner.jpg" 
          alt="Casino Experience" 
          className="w-full h-auto object-cover"
          onError={(e) => {
            e.currentTarget.src = "https://picsum.photos/seed/casino/800/600";
          }}
        />
      </div>
    </div>

    {/* Steps Section */}
    <section className="px-4">
      <div className="border border-[#F6D34B] rounded-2xl p-1 mb-8">
        <div className="border border-[#F6D34B] rounded-xl py-4 px-4 text-center">
          <h2 className="text-[#F6D34B] text-lg font-bold leading-tight">Quick and Secure Reddy Anna Registration Process</h2>
        </div>
      </div>
      
      <p className="text-gray-300 text-sm text-center mb-8 px-4">
        Getting started with your <span className="text-[#F6D34B] font-bold">Reddy Anna</span> account takes less than 3 minutes. Our streamlined registration ensures you spend less time on paperwork and more time enjoying the action:
      </p>

      <div className="space-y-6">
        {[
          { step: 1, title: 'Enter Personal Information', desc: 'Provide your basic details including name, email address, and mobile number. We prioritize your privacy and protect all information with bank-level encryption.' },
          { step: 2, title: 'Account Setup Choose a unique username and create a strong password', desc: 'For your Reddy Anna login. This ensures your account is secure and personalized to your preferences.' },
          { step: 3, title: 'Complete Account KYC Verification', desc: 'Verification Complete the quick verification process through your mobile number. This one-time step protects your account and enables smooth withdrawals when you win.' },
          { step: 4, title: 'Registration Successful', desc: 'Welcome Bonus Once registered, claim your exclusive Reddy Anna welcome bonus and start exploring our extensive gaming options immediately.' },
        ].map((item, idx) => (
          <div key={idx} className="relative border border-[#F6D34B] rounded-3xl p-6 bg-white/5">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 border border-[#F6D34B] rounded-xl bg-[#0F1117] px-4 py-2">
              <h3 className="text-[#F6D34B] text-xs font-bold italic whitespace-nowrap">Step {item.step}: {item.title}</h3>
            </div>
            <p className="text-gray-300 text-sm text-center mt-4 leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>

    {/* Features Section */}
    <section className="px-4">
      <div className="border border-[#F6D34B] rounded-2xl p-1 mb-8">
        <div className="border border-[#F6D34B] rounded-xl py-4 px-4 text-center">
          <h2 className="text-[#F6D34B] text-lg font-bold leading-tight">Reddy Anna Account Features and Benefits</h2>
        </div>
      </div>
      
      <p className="text-gray-300 text-sm text-center mb-8 px-4">
        Your <span className="text-[#F6D34B] font-bold">Reddy Anna</span> membership unlocks a world of premium features designed for serious players:
      </p>

      <div className="space-y-8">
        {[
          { title: 'Cricket Betting Excellence', icon: Trophy, desc: 'Experience unmatched cricket betting options with Reddy Anna. From IPL and international matches to domestic tournaments, we offer comprehensive markets including match winners, top batsman, total runs, and live betting options that let you wager as the action unfolds.', btn: 'BET NOW' },
          { title: 'Sports Betting Variety', icon: Target, desc: 'Beyond cricket, your Reddy Anna account provides access to football betting, tennis wagering, basketball odds, and dozens of other sports. Whether you prefer pre-match analysis or the adrenaline of live betting, we\'ve got you covered.', btn: 'EXPLORE SPORTS' },
          { title: 'Online Casino Gaming', icon: Gamepad2, desc: 'Dive into our extensive casino section featuring slots, table games, card games, and progressive jackpots. Every game is powered by leading providers, ensuring fair play and stunning graphics.', btn: 'PLAY CASINO' },
          { title: 'Live Dealer Experience', icon: Dices, desc: 'For authentic casino atmosphere, our live dealer section brings real-time action to your screen. Play live blackjack, roulette, baccarat, and teen patti with professional dealers streaming from premium studios.', btn: 'JOIN LIVE TABLES' },
        ].map((item, idx) => (
          <div key={idx} className="border border-white/10 rounded-3xl overflow-hidden bg-gradient-to-b from-white/5 to-transparent">
            <div className="p-6 flex items-center gap-4 border-b border-white/10">
              <div className="bg-[#F6D34B] p-3 rounded-xl">
                <item.icon size={24} className="text-black" />
              </div>
              <h3 className="text-[#F6D34B] text-lg font-black italic uppercase leading-tight">{item.title}</h3>
            </div>
            <div className="p-6 space-y-6">
              <p className="text-gray-300 text-sm leading-relaxed">{item.desc}</p>
              <button className="w-full bg-[#F6D34B] text-black font-black py-3 rounded-xl uppercase tracking-widest text-xs shadow-lg">
                {item.btn}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>

    {/* Bonuses Section */}
    <section className="px-4">
      <div className="border border-[#F6D34B] rounded-2xl p-1 mb-8">
        <div className="border border-[#F6D34B] rounded-xl py-4 px-4 text-center">
          <h2 className="text-[#F6D34B] text-lg font-bold leading-tight">Exclusive Reddy Anna Bonuses for Registered Members</h2>
        </div>
      </div>
      
      <div className="space-y-4 px-2">
        <p className="text-gray-300 text-sm">Registration is just the beginning. <span className="text-[#F6D34B] font-bold">Reddy Anna</span> members enjoy regular promotions including:</p>
        <ul className="space-y-3">
          {[
            'Welcome deposit bonuses for new players',
            'Free bet offers on major cricket matches',
            'Casino cashback programs',
            'Loyalty points that convert to real rewards',
            'Special IPL and tournament promotions'
          ].map((item, idx) => (
            <li key={idx} className="flex items-start gap-3 text-white text-sm font-bold">
              <div className="w-1.5 h-1.5 rounded-full bg-white mt-2 shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>

    {/* Payment Section */}
    <section className="px-4">
      <div className="border border-[#F6D34B] rounded-2xl p-1 mb-8">
        <div className="border border-[#F6D34B] rounded-xl py-4 px-4 text-center">
          <h2 className="text-[#F6D34B] text-lg font-bold leading-tight">Payment Options for Indian Players</h2>
        </div>
      </div>
      
      <div className="space-y-6 px-2">
        <p className="text-gray-300 text-sm">We understand Indian players need convenient banking.</p>
        <p className="text-white text-sm font-bold italic">Your Reddy Anna account supports:</p>
        <ul className="space-y-4">
          {[
            'UPI transfers for instant deposits.',
            'Net banking from all major banks.',
            'Popular e-wallets and payment apps.',
            'Cryptocurrency options for tech-savvy players.'
          ].map((item, idx) => (
            <li key={idx} className="flex items-start gap-3 text-white text-sm font-bold">
              <div className="w-1.5 h-1.5 rounded-full bg-white mt-2 shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="text-gray-400 text-xs leading-relaxed text-center pt-4">
          All transactions are processed securely with industry-leading encryption protecting your financial information.
        </p>
      </div>
    </section>

    {/* Social Proof Section */}
    <section className="px-4">
      <div className="border border-[#F6D34B] rounded-2xl p-1 mb-8">
        <div className="border border-[#F6D34B] rounded-xl py-4 px-4 text-center">
          <h2 className="text-[#F6D34B] text-lg font-bold leading-tight">Join Thousands of Satisfied Reddy Anna Players</h2>
        </div>
      </div>
      
      <div className="space-y-6 px-2">
        <p className="text-gray-300 text-sm leading-relaxed">
          Players across India trust Reddy Anna for their gaming entertainment. Our platform combines competitive odds, diverse betting markets, generous bonuses, and reliable customer service. From casual weekend players to serious professional bettors, everyone finds value in their <span className="text-[#F6D34B] font-bold">Reddy Anna</span> membership.
        </p>
        
        <div className="border border-[#F6D34B] rounded-2xl p-1">
          <div className="border border-[#F6D34B] rounded-xl py-4 px-4 text-center">
            <h2 className="text-[#F6D34B] text-sm font-bold leading-tight">Ready to Register? Complete Your Reddy Anna Sign-Up Now</h2>
          </div>
        </div>

        <div className="space-y-4 text-gray-300 text-sm leading-relaxed">
          <p>
            Complete your <span className="text-[#F6D34B] font-bold">Reddy Anna</span> registration today and discover why smart players choose us for their cricket betting, sports wagering, and casino gaming needs. Your winning journey starts with a simple registration – create your account now and claim your welcome bonus.
          </p>
          <p className="text-white font-bold">Register with confidence. Play with passion. Win with Reddy Anna.</p>
        </div>
      </div>
    </section>

    {/* Search Tags Section */}
    <section className="px-4 bg-white/5 py-8">
      <h3 className="text-white text-xl font-bold text-center mb-6 px-4">People Also Search For Reddy Anna</h3>
      <div className="flex flex-wrap justify-center gap-x-2 gap-y-1 text-[10px] font-bold">
        {[
          'Reddy Anna', 'ReddyAnna', 'Reddy Anna login', 'Reddy Anna online book ID', 'Reddy Anna Club',
          'Reddy Anna website', 'Reddy Anna app download', 'Reddy Anna whatsapp group link', 
          'Reddy Anna WhatsApp Number', 'Reddy Anna ID', 'reddyanna com', 'reddyanna pro', 
          'Reddy anna logo', 'Reddy anna io', 'Reddy anna win', 'Reddy anna cricbet99', 
          'Reddy anna cricket ID', 'Reddy Anna cricket betting', 'Reddy Anna cricket App', 
          'Reddy Anna cricket id login', 'Reddy register', 'Reddy Anna betting', 'Reddy Anna 247', 
          'Reddy anna book', 'Reddy Anna online book number', 'Reddy Anna login registration', 
          'Reddy Anna link', 'Reddy anna win', 'Reddy Anna Book', 'Reddy Anna Booking', 
          'Reddy Anna Book ID', 'Reddy Anna Book Club', 'Reddy Anna Book Online', 'Reddy Anna Book Website', 
          'reddy anna 11', 'reddyanna.com', 'Reddyanna pro', 'Reddy anna online', 'Reddy anna official', 
          'reddy ana', 'anna reddy', 'reddy anna website', 'reddy anna online', 'reddy anna com', 
          'reddy anna since 2010', 'reddyannaofficial', 'reddyanna in', 'www anna reddy in', 
          'www reddy anna', 'mahadev reddy anna', 'betball9 reddy anna', 'Reddybook', 'Reddybook login', 
          'Reddybook.club', 'Reddybook.win', 'Reddybook online', 'Reddy book', 'Reddy book Club', 
          'Reddy Book ID', 'Reddybook online'
        ].map((tag, idx) => (
          <span key={idx} className={`${idx % 2 === 0 ? 'text-[#F6D34B]' : 'text-white'} hover:underline cursor-pointer`}>
            {tag} {idx < 60 && <span className="text-white mx-1">|</span>}
          </span>
        ))}
      </div>
    </section>
  </div>
);

const Footer = () => (
  <footer className="bg-[#0F1117] text-white pt-12 pb-24 px-6 border-t border-white/5">
    <div className="max-w-md mx-auto space-y-12">
      {/* Certification Logos */}
      <div className="flex flex-col items-center space-y-8">
        <div className="flex items-center gap-4">
          <img src="https://picsum.photos/seed/curacao/200/80" alt="Curacao Gaming" className="h-12 object-contain grayscale brightness-200" referrerPolicy="no-referrer" />
          <div className="flex flex-col items-center">
            <span className="text-white font-black text-2xl leading-none">GC</span>
            <span className="text-gray-400 text-[8px] font-bold uppercase tracking-widest">Gaming Curacao</span>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="bg-white p-1 rounded">
            <span className="text-black font-black text-2xl leading-none">EGF</span>
          </div>
          <div className="flex flex-col">
            <span className="text-white font-bold text-sm uppercase tracking-tighter">E-Gaming</span>
            <span className="text-white font-bold text-sm uppercase tracking-tighter">Federation</span>
          </div>
        </div>

        <img src="https://picsum.photos/seed/digicert/200/80" alt="Digicert" className="h-10 object-contain grayscale brightness-200" referrerPolicy="no-referrer" />
        
        <div className="flex items-center gap-8">
          <div className="w-12 h-12 rounded-full border-2 border-red-600 flex items-center justify-center text-white font-bold text-lg">18+</div>
          <div className="bg-white p-1 rounded">
             <span className="text-black font-black text-xl">G</span>
             <span className="text-black text-[8px] font-bold block leading-none">GAMCARE</span>
          </div>
          <div className="bg-gray-700 p-1 rounded flex items-center justify-center w-10 h-10">
             <span className="text-white font-black text-xl">gt</span>
          </div>
        </div>

        <div className="bg-[#2D3436] rounded-lg px-4 py-2 flex items-center gap-3 border border-white/10">
          <div className="bg-[#00B894] p-1.5 rounded-full">
            <Target size={16} className="text-white" />
          </div>
          <div className="flex flex-col">
            <span className="text-white font-black text-sm tracking-tighter leading-none">SECURE</span>
            <span className="text-gray-400 text-[8px] font-bold uppercase tracking-widest">SSL Encryption</span>
          </div>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="text-center space-y-4">
        <p className="text-white font-black italic text-lg tracking-tight">Playing Can Be Addictive – Play Responsibly</p>
        <div className="space-y-1 text-sm font-bold text-gray-300">
          <p>Contact Us on WhatsApp – <span className="text-[#F6D34B]">+91 70502 15698</span></p>
          <p>Email Us: <span className="text-[#F6D34B]">info@thereddyanna.org</span></p>
          <p className="pt-2">Office Address – 122/1, Pune, 411001</p>
        </div>
        <p className="text-gray-400 text-[10px] leading-relaxed pt-4">
          Online gaming involves risk. Users must be 18+ and comply with local laws. We promote responsible gaming practices.
        </p>
        <p className="text-gray-500 text-[10px] font-bold uppercase tracking-widest">Author</p>
      </div>

      <div className="h-[1px] bg-white/10 w-full"></div>

      {/* Branding Section */}
      <div className="flex flex-col items-center text-center space-y-6">
        <img src="/logo.jpg" alt="Reddy Anna Logo" className="h-16 object-contain" referrerPolicy="no-referrer" />
        <h3 className="text-white font-black text-2xl tracking-tighter">REDDY ANNA</h3>
        <p className="text-gray-400 text-sm leading-relaxed px-4">
          Since 2010, Reddy Anna Book is India's No.1 Leading Online Betting ID provider. Access all betting exchanges using One Betting ID. Get Cricket ID's, Casino ID's, Sports Betting ID's with us. Bet on live cricket, Football, Tennis, Kabaddi and live casino. Get Fast withdrawals.
        </p>
      </div>

      {/* Social Platforms */}
      <div className="space-y-4">
        <h4 className="text-white font-black text-sm uppercase tracking-widest">SOCIAL PLATFORMS</h4>
        <div className="flex gap-3">
          <a href="#" className="bg-[#E60023] p-2.5 rounded-lg flex items-center justify-center w-10 h-10">
            <img src="https://www.svgrepo.com/show/354193/pinterest-icon.svg" className="w-5 h-5 invert" alt="Pinterest" />
          </a>
          <a href="#" className="bg-[#636e72] p-2.5 rounded-lg flex items-center justify-center w-10 h-10">
            <Link2 size={20} className="text-white" />
          </a>
          <a href="#" className="bg-[#FF0000] p-2.5 rounded-lg flex items-center justify-center w-10 h-10">
            <Youtube size={20} className="text-white" />
          </a>
        </div>
      </div>

      {/* Platform Links */}
      <div className="space-y-6">
        <h4 className="text-white font-black text-sm uppercase tracking-widest">REDDY ANNA PLATFORM</h4>
        <ul className="grid grid-cols-1 gap-4 text-gray-300 text-lg font-medium">
          {['Home', 'Reddy Anna Login', 'Account Register', 'Reddy Anna App', 'Blog', 'Live Cricket Betting', 'Live Football Betting', 'Horse Race Betting', 'Fantasy Sports', 'Tennis Betting', 'Live Casino'].map((link) => (
            <li key={link}><a href="#" className="hover:text-[#F6D34B] transition-colors">{link}</a></li>
          ))}
        </ul>
      </div>

      {/* Policy Links */}
      <div className="space-y-6">
        <h4 className="text-white font-black text-sm uppercase tracking-widest">REDDY ANNA POLICY</h4>
        <ul className="grid grid-cols-1 gap-4 text-gray-300 text-lg font-medium">
          {['About Us', 'Contact Us', 'Terms and Conditions', 'Rules & Regulations', 'Privacy Policy', 'Referral Code', 'Promo Code', 'Disclaimer', 'Refund policy', 'Contact customer care'].map((link) => (
            <li key={link}><a href="#" className="hover:text-[#F6D34B] transition-colors">{link}</a></li>
          ))}
        </ul>
      </div>

      {/* Betting Exchanges */}
      <div className="space-y-6">
        <h4 className="text-white font-black text-sm uppercase tracking-widest">REDDY ANNA BETTING EXCHANGES</h4>
        <ul className="grid grid-cols-1 gap-4 text-gray-300 text-lg font-medium">
          {['Laser247', '11xplay', 'Gold365', 'Cricbet99', 'ReddyBook', 'Online Cricket ID', 'IPL Betting ID'].map((link) => (
            <li key={link}><a href="#" className="hover:text-[#F6D34B] transition-colors">{link}</a></li>
          ))}
        </ul>
      </div>
    </div>

    {/* Scroll to top */}
    <button 
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-6 right-4 z-40 bg-black/80 border border-white/20 text-white p-2 rounded-md shadow-lg"
    >
      <ChevronUp size={20} />
    </button>
  </footer>
);

// --- Main App ---

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [authView, setAuthView] = useState<'register' | 'login'>('register');

  return (
    <div className="min-h-screen bg-[#0F1117] font-sans text-white selection:bg-[#F6D34B] selection:text-black overflow-x-hidden">
      <Header 
        onMenuToggle={() => setIsMenuOpen(true)} 
        onAuthViewChange={(view) => setAuthView(view)}
      />
      <SideMenu 
        isOpen={isMenuOpen} 
        onClose={() => setIsMenuOpen(false)} 
        onAuthViewChange={(view) => setAuthView(view)}
      />
      
      <main className="max-w-md mx-auto">
        <AuthCard view={authView} setView={setAuthView} />
        <ContentSections />
        <Footer />
      </main>

      <WhatsAppFAB />
    </div>
  );
}
