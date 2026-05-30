import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Zap, 
  Terminal, 
  Code, 
  Search, 
  Copy, 
  Check, 
  ExternalLink, 
  ChevronRight,
  TrendingUp,
  Cpu,
  Menu,
  X,
  Clock,
  LayoutGrid,
  Filter,
  ShieldCheck,
  AlertTriangle
} from 'lucide-react';
import { SCRIPTS, CATEGORIES, Script } from './constants';

export default function App() {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const filteredScripts = SCRIPTS.filter(s => {
    const matchesSearch = s.title.toLowerCase().includes(search.toLowerCase()) || s.game.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || 
      (selectedCategory === 'blox-fruits' && s.game === 'Blox Fruits') ||
      (selectedCategory === 'pet-sim' && s.game === 'Pet Simulator 99') ||
      (selectedCategory === 'admin' && s.type.includes('Admin'));
    return matchesSearch && matchesCategory;
  });

  const handleCopy = (script: Script) => {
    navigator.clipboard.writeText(script.loadCommand);
    setCopiedId(script.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="min-h-screen bg-bg-deep font-sans selection:bg-brand-primary selection:text-white">
      {/* Header */}
      <header className="zzz-glass sticky top-0 z-50 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-brand-primary flex items-center justify-center rounded glow-red">
              <Terminal className="w-6 h-6 text-white" />
            </div>
            <div>
              <span className="font-mono font-black text-lg tracking-tighter uppercase italic block leading-none">
                ROB<span className="text-brand-primary">HUBZ</span>
              </span>
              <span className="text-[9px] text-white/40 uppercase font-bold tracking-widest block mt-0.5">Premium Roblox Scripts</span>
            </div>
          </div>
          
          <div className="hidden md:flex items-center gap-2 bg-white/5 border border-white/10 rounded-lg px-3 py-1.5 w-96 focus-within:border-brand-primary/40 transition-all">
            <Search className="w-4 h-4 text-white/30" />
            <input 
              type="text" 
              placeholder="Search scripts (Blox Fruits, MM2, etc.)..." 
              className="bg-transparent border-none outline-none text-sm w-full placeholder:text-white/20"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <div className="flex items-center gap-4">
            <a 
              href="https://www.effectivecpmnetwork.com/dfjmcjc1?key=26dbbe0e415b766af5681038e219d2e0"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex zzz-button bg-brand-secondary/80 border border-white/10 text-white font-black hover:bg-brand-secondary glow-green items-center gap-2"
            >
              <ShieldCheck className="w-4 h-4" /> NO KEY
            </a>
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-white/60 p-2"
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Hero Info Section */}
        <div className="mb-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="zzz-card md:col-span-2 bg-gradient-to-br from-brand-primary/10 to-transparent border-brand-primary/20">
            <span className="zzz-label text-brand-primary">Latest Update: May 2026</span>
            <h1 className="text-3xl font-black uppercase italic italic tracking-tight mt-2 mb-4">
              Unlock Your Full Potential with <span className="text-brand-primary">RobHubz</span>
            </h1>
            <p className="text-sm text-white/60 leading-relaxed max-w-xl">
              Automate tasks, dominate games like Blox Fruits, Pet Simulator, and Brookhaven with the latest premium scripts. 
              Enjoy seamless integration, faster performance, and effortless gameplay with <strong>no key required</strong>.
            </p>
            <div className="flex flex-wrap gap-4 mt-6">
              <div className="flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded border border-white/5">
                <Clock className="w-3.5 h-3.5 text-brand-secondary" />
                <span className="text-[10px] font-bold text-white/40 uppercase">Anti-AFK Enabled</span>
              </div>
              <div className="flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded border border-white/5">
                <Zap className="w-3.5 h-3.5 text-brand-primary" />
                <span className="text-[10px] font-bold text-white/40 uppercase">Faster Injection</span>
              </div>
            </div>
          </div>
          <div className="zzz-card border-white/5 flex flex-col justify-between">
            <div>
              <h3 className="zzz-label mb-4">What's New?</h3>
              <ul className="space-y-2">
                {['Enhanced Auto-Farming', 'Teleportation Scripts', 'Better AFK Farming', 'Auto Fruit Sniper'].map(item => (
                  <li key={item} className="flex items-center gap-2 text-[11px] font-bold text-white/60 uppercase font-mono">
                     <ChevronRight className="w-3 h-3 text-brand-primary" /> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-6 pt-4 border-t border-white/5">
              <p className="text-[9px] text-white/20 uppercase font-mono leading-tight">
                Scripts previously went down due to GitHub suspension, but are now 100% restored on our new servers.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar / Categories */}
          <aside className={`md:w-64 space-y-6 ${isMobileMenuOpen ? 'block' : 'hidden md:block'}`}>
            <section>
              <h3 className="zzz-label mb-3">Categories</h3>
              <div className="space-y-1">
                {CATEGORIES.map(cat => (
                  <button
                    key={cat.id}
                    onClick={() => {
                      setSelectedCategory(cat.id);
                      setIsMobileMenuOpen(false);
                    }}
                    className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-bold transition-all ${
                      selectedCategory === cat.id 
                      ? 'bg-brand-primary text-white' 
                      : 'text-white/40 hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    <cat.icon className="w-4 h-4" />
                    {cat.label}
                  </button>
                ))}
              </div>
            </section>

            <section className="zzz-card bg-brand-primary/5 border-brand-primary/10">
              <div className="flex items-center gap-2 text-brand-primary mb-2">
                <AlertTriangle className="w-4 h-4" />
                <span className="text-[10px] font-bold uppercase">Status</span>
              </div>
              <p className="text-[10px] text-white/40 leading-relaxed uppercase font-mono">
                All scripts are currently <span className="text-brand-secondary">Online</span> and working for Delta/Arceus/Hydrogen.
              </p>
            </section>

            {/* Sponsored Native Banner */}
            <div className="zzz-card border-white/5 bg-white/[0.01] p-4">
              <span className="zzz-label mb-3 block">Sponsored</span>
              <div id="container-65fe59d5303a63f996c53206702d0102" className="min-h-[120px] w-full flex items-center justify-center"></div>
            </div>
          </aside>

          {/* Script Grid */}
          <div className="flex-1 space-y-8">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-black uppercase italic italic tracking-tight">Available Scripts</h1>
                <p className="text-xs text-white/40 font-mono uppercase mt-1">Showing {filteredScripts.length} results</p>
              </div>
              <div className="flex gap-2">
                <button className="p-2 border border-white/5 rounded text-white/40 hover:text-white transition-colors">
                  <LayoutGrid className="w-4 h-4" />
                </button>
                <div className="md:hidden">
                   <button className="p-2 border border-white/5 rounded text-white/40 hover:text-white transition-colors">
                    <Filter className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Mobile Search */}
            <div className="md:hidden bg-white/5 border border-white/10 rounded-lg px-3 py-2.5 flex items-center gap-2">
               <Search className="w-4 h-4 text-white/30" />
              <input 
                type="text" 
                placeholder="Search scripts..." 
                className="bg-transparent border-none outline-none text-sm w-full"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {filteredScripts.map((script) => (
                <motion.div
                  layout
                  key={script.id}
                  className="zzz-card group"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <div className="flex flex-col lg:flex-row gap-6">
                    {/* Left: Info */}
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-3">
                        <div className="flex gap-2">
                          {script.isNoKey && <span className="badge-no-key">No Key</span>}
                          <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase border ${
                            script.category === 'New' ? 'border-brand-secondary/30 text-brand-secondary bg-brand-secondary/5' : 
                            script.category === 'Updated' ? 'border-brand-primary/30 text-brand-primary bg-brand-primary/5' :
                            'border-white/10 text-white/40'
                          }`}>
                            {script.category}
                          </span>
                        </div>
                        <span className="text-[9px] font-mono text-white/20 uppercase flex items-center gap-1">
                          <Clock className="w-3 h-3" /> {script.addedAt}
                        </span>
                      </div>

                      <h2 className="text-xl font-bold uppercase tracking-tight group-hover:text-brand-primary transition-colors cursor-pointer text-white">
                        {script.title}
                      </h2>
                      <p className="text-[10px] text-brand-primary font-mono mt-1 mb-4 uppercase font-bold">{script.game} · {script.type}</p>
                      
                      <p className="text-sm text-white/50 mb-4 italic leading-relaxed">
                        {script.description}
                      </p>
                    </div>

                    {/* Right: Code Block */}
                    <div className="lg:w-[45%] flex flex-col gap-2">
                      <div className="flex items-center justify-between px-1">
                        <span className="zzz-label flex items-center gap-1.5 font-bold"><Code className="w-3 h-3 text-brand-primary" /> Source Preview</span>
                        <span className="text-[9px] font-mono text-brand-secondary uppercase font-bold tracking-tighter flex items-center gap-1">
                          <div className="w-1.5 h-1.5 bg-brand-secondary rounded-full animate-pulse" /> Live & Working
                        </span>
                      </div>
                      <div className="relative">
                        <div className="bg-black/50 border border-white/5 rounded-lg p-4 font-mono text-[11px] text-white/70 overflow-x-auto whitespace-pre leading-relaxed h-[95px] scrollbar-hide select-all">
                          {script.loadCommand}
                        </div>
                        <div className="absolute top-2 right-2 flex gap-1">
                          <button 
                            onClick={() => handleCopy(script)}
                            className={`p-2 rounded transition-all shadow-xl ${
                              copiedId === script.id ? 'bg-brand-secondary scale-110' : 'bg-brand-primary hover:bg-red-600'
                            }`}
                          >
                            {copiedId === script.id ? <Check className="w-4 h-4 text-white" /> : <Copy className="w-4 h-4 text-white" />}
                          </button>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <button 
                           onClick={() => handleCopy(script)}
                           className={`flex-1 p-2 rounded font-mono text-[9px] uppercase tracking-widest transition-all font-black border ${
                            copiedId === script.id 
                            ? 'bg-brand-secondary/10 border-brand-secondary text-brand-secondary' 
                            : 'bg-white/5 border-white/10 text-white/40 hover:text-white hover:bg-white/10'
                           }`}
                        >
                          {copiedId === script.id ? 'Copied Successfully' : 'Copy All Script Code'}
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {filteredScripts.length === 0 && (
              <div className="py-24 text-center border border-dashed border-white/5 rounded-2xl">
                <div className="w-12 h-12 bg-white/5 flex items-center justify-center rounded-full mx-auto mb-4">
                  <Search className="w-6 h-6 text-white/20" />
                </div>
                <h3 className="text-xl font-bold uppercase text-white/60">No scripts found</h3>
                <p className="text-sm text-white/30 mt-2 font-mono">Try searching for "Blox Fruits" or "Admin"</p>
              </div>
            )}

            {/* Additional Info Sections */}
            <div className="mt-16 space-y-12 border-t border-white/5 pt-16">
              <section className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-xl font-bold uppercase italic text-white mb-4">Why Choose RobHubz?</h3>
                  <div className="space-y-4">
                    <p className="text-sm text-white/50 leading-relaxed uppercase font-mono">
                      RobHubz premium features and outstanding compatibility with games prioritize them over other scripts. Its simple GUI attracts users to run in-game and play effortlessly.
                    </p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2">
                       {['Fastest Injection Speed', 'Strong Anti-Ban', 'Latest Version Support', 'Multiple Platforms', '24/7 Support', 'No Key Required'].map(feat => (
                         <li key={feat} className="text-[10px] font-bold text-white/40 flex items-center gap-2 uppercase tracking-tight">
                           <Check className="w-3 h-3 text-brand-secondary" /> {feat}
                         </li>
                       ))}
                    </ul>
                  </div>
                </div>
                <div className="zzz-card bg-white/[0.01] flex flex-col lg:flex-row gap-8 items-center">
                   <div className="flex-1 space-y-4">
                     <h3 className="zzz-label mb-4">Execution Process</h3>
                     <div className="space-y-4">
                       <div className="flex gap-4">
                          <div className="w-8 h-8 rounded bg-brand-primary/20 flex items-center justify-center text-brand-primary font-black shrink-0">1</div>
                          <div>
                            <h4 className="text-sm font-bold text-white uppercase">Download Executor</h4>
                            <p className="text-[10px] text-white/40 uppercase mt-1 leading-relaxed">Open <span className="text-brand-primary">deltaexecutor.com</span> or your preferred launcher. Ensure you have the latest 2026 update for maximum stability.</p>
                          </div>
                       </div>
                       <div className="flex gap-4">
                          <div className="w-8 h-8 rounded bg-brand-primary/20 flex items-center justify-center text-brand-primary font-black shrink-0">2</div>
                          <div>
                            <h4 className="text-sm font-bold text-white uppercase">Get Your Key (If needed)</h4>
                            <p className="text-[10px] text-white/40 uppercase mt-1 leading-relaxed">Launch the executor, click "Receive Key", and complete the quick verification. RobHubz is mostly <span className="text-brand-secondary">Keyless</span>.</p>
                          </div>
                       </div>
                       <div className="flex gap-4">
                          <div className="w-8 h-8 rounded bg-brand-primary/20 flex items-center justify-center text-brand-primary font-black shrink-0">3</div>
                          <div>
                            <h4 className="text-sm font-bold text-white uppercase">Inject & Run</h4>
                            <p className="text-[10px] text-white/40 uppercase mt-1 leading-relaxed">Copy a RobHubz script from our list, paste it into the executor console, and hit <span className="text-brand-primary font-black underline">EXECUTE</span>.</p>
                          </div>
                       </div>
                     </div>
                   </div>
                   
                   {/* 4K Ultra Smooth Visual Component */}
                   <div className="lg:w-[400px] w-full flex justify-center py-4">
                     <div className="relative group">
                       <div className="absolute -inset-1 bg-gradient-to-r from-brand-primary to-brand-secondary rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
                       <div className="relative bg-bg-card border border-white/10 rounded-2xl p-6 shadow-2xl overflow-hidden flex gap-4">
                         {/* Phone 1 Mock */}
                         <div className="w-1/2 aspect-[9/19] bg-black/40 rounded-xl border border-white/5 p-2 flex flex-col gap-2">
                           <div className="h-2 w-8 bg-white/10 rounded-full mx-auto" />
                           <div className="flex-1 bg-white/5 rounded-lg flex flex-col items-center justify-center gap-2 p-2">
                             <div className="w-8 h-8 bg-brand-primary/20 rounded animate-pulse" />
                             <div className="w-full h-1.5 bg-white/5 rounded" />
                             <div className="w-2/3 h-1.5 bg-white/5 rounded" />
                           </div>
                           <a 
                             href="https://www.effectivecpmnetwork.com/dfjmcjc1?key=26dbbe0e415b766af5681038e219d2e0"
                             target="_blank"
                             rel="noopener noreferrer"
                             className="h-6 bg-brand-primary rounded-md flex items-center justify-center text-[6px] font-bold text-white hover:bg-red-600 transition-colors cursor-pointer"
                           >
                             DOWNLOAD APK
                           </a>
                         </div>
                         {/* Arrow */}
                         <div className="flex items-center">
                           <ChevronRight className="w-6 h-6 text-brand-primary animate-pulse" />
                         </div>
                         {/* Phone 2 Mock */}
                         <div className="w-1/2 aspect-[9/19] bg-black/40 rounded-xl border border-white/5 p-2 flex flex-col gap-2">
                           <div className="h-2 w-8 bg-white/10 rounded-full mx-auto" />
                           <div className="flex-1 bg-white/5 rounded-lg flex flex-col items-center justify-center gap-3 p-2">
                             <Terminal className="w-8 h-8 text-brand-primary" />
                             <div className="w-8 h-8 rounded-full border-2 border-brand-secondary flex items-center justify-center">
                               <div className="w-4 h-4 bg-brand-secondary rounded-full animate-ping" />
                             </div>
                             <div className="text-[6px] font-black text-white/40 uppercase">EXECUTING...</div>
                           </div>
                           <a 
                             href="https://www.effectivecpmnetwork.com/dfjmcjc1?key=26dbbe0e415b766af5681038e219d2e0"
                             target="_blank"
                             rel="noopener noreferrer"
                             className="h-6 bg-brand-secondary rounded-md flex items-center justify-center text-[6px] font-bold text-white hover:bg-green-600 transition-colors cursor-pointer"
                           >
                             READY TO PLAY
                           </a>
                         </div>
                       </div>
                     </div>
                   </div>
                </div>
              </section>

              <section className="bg-white/5 rounded-2xl p-8 border border-white/5">
                 <h3 className="text-xl font-bold uppercase text-center mb-8">Frequently Asked Questions</h3>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                   <div>
                     <h4 className="text-sm font-bold text-brand-primary mb-2 uppercase">Is RobHubz safe?</h4>
                     <p className="text-xs text-white/40 uppercase font-mono leading-relaxed">
                       Our scripts are written by experts and verified on multiple accounts before release. However, always use scripts responsibly.
                     </p>
                   </div>
                   <div>
                     <h4 className="text-sm font-bold text-brand-primary mb-2 uppercase">Do I need a key?</h4>
                     <p className="text-xs text-white/40 uppercase font-mono leading-relaxed">
                       Most RobHubz scripts are 100% keyless. If a script requires a key, it will be clearly marked.
                     </p>
                   </div>
                   <div>
                     <h4 className="text-sm font-bold text-brand-primary mb-2 uppercase">Why GitHub?</h4>
                     <p className="text-xs text-white/40 uppercase font-mono leading-relaxed">
                       We use GitHub to host our source code because it's fast and reliable. Our latest scripts are on our new official repository.
                     </p>
                   </div>
                   <div>
                     <h4 className="text-sm font-bold text-brand-primary mb-2 uppercase">Executor Issues?</h4>
                     <p className="text-xs text-white/40 uppercase font-mono leading-relaxed">
                       If a script doesn't run, ensure your executor is updated to the latest version.
                     </p>
                   </div>
                 </div>
              </section>
            </div>
          </div>
        </div>
      </main>

      {/* Footer Info / SEO Block */}
      <footer className="border-t border-white/5 py-16 mt-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-2 space-y-4">
              <div className="flex items-center gap-2">
                <Terminal className="w-5 h-5 text-brand-primary" />
                <span className="font-mono font-black text-md uppercase">ROBHUBZ HUB OFFICIAL</span>
              </div>
              <p className="text-xs text-white/40 leading-relaxed uppercase font-mono max-w-sm">
                RobHubz is the ultimate script hub for Roblox. We provide 100% undetected, high-quality scripts for free. Our "No Key" system allows you to get straight to the action without annoying ads.
              </p>
            </div>
            
            <div>
              <h4 className="zzz-label mb-4">Quick Links</h4>
              <ul className="text-[10px] font-mono space-y-2 uppercase text-white/30">
                <li><a href="https://www.effectivecpmnetwork.com/dfjmcjc1?key=26dbbe0e415b766af5681038e219d2e0" target="_blank" rel="noopener noreferrer" className="hover:text-brand-primary transition-colors">How to use</a></li>
                <li><a href="https://www.effectivecpmnetwork.com/dfjmcjc1?key=26dbbe0e415b766af5681038e219d2e0" target="_blank" rel="noopener noreferrer" className="hover:text-brand-primary transition-colors">Best Executors</a></li>
                <li><a href="https://www.effectivecpmnetwork.com/dfjmcjc1?key=26dbbe0e415b766af5681038e219d2e0" target="_blank" rel="noopener noreferrer" className="hover:text-brand-primary transition-colors">Discord Server</a></li>
              </ul>
            </div>

            <div>
              <h4 className="zzz-label mb-4">Legal</h4>
              <ul className="text-[10px] font-mono space-y-2 uppercase text-white/30">
                <li><a href="#" className="hover:text-brand-primary transition-colors">DMCA Policy</a></li>
                <li><a href="#" className="hover:text-brand-primary transition-colors">Privacy</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[9px] font-mono text-white/20 uppercase tracking-widest">
              © 2026 ROBHUBZ HUB OPERATIONS. ROBHUBZ IS NOT AFFILIATED WITH ROBLOX CORP.
            </p>
            <div className="flex items-center gap-6">
               <span className="flex items-center gap-2 text-[9px] font-mono text-brand-secondary">
                 <div className="w-1.5 h-1.5 rounded-full bg-brand-secondary animate-pulse" />
                 SERVER ONLINE: 1.2ms
               </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
