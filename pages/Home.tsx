
import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Search, ChevronRight, ChevronLeft, CheckCircle2, Star, ShieldCheck, MapPin, Zap, Verified, Truck, MessageCircle } from 'lucide-react';
import { LAPTOPS, TESTIMONIALS, formatPrice } from '../constants';
import { Category } from '../types';
import ProductCard from '../components/ProductCard';
import { useCart } from '../context/CartContext';
import { CategoryCarouselSkeleton, SidebarSkeleton } from '../components/LoadingSkeleton';

const CategoryCarousel: React.FC<{ title: string; category: Category }> = ({ title, category }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { inventory, isInventoryLoading } = useCart();

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      // Scroll by approximately 80% of the container width for a smooth, logical skip
      const scrollAmount = clientWidth * 0.8;
      const scrollTo = direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount;

      scrollRef.current.scrollTo({
        left: scrollTo,
        behavior: 'smooth'
      });
    }
  };

  const filteredLaptops = inventory.filter(l => l.category === category);

  if (inventory.length === 0 && !isInventoryLoading) return null;

  return (
    <section className="relative group/carousel">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
          <div className="flex-grow">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <h2 className="text-2xl md:text-4xl font-black text-gray-900 tracking-tighter uppercase italic">
                {title}
              </h2>
              <span className="text-[9px] md:text-[10px] bg-red-100 text-red-600 px-2 py-0.5 md:px-3 md:py-1 rounded-full font-black uppercase tracking-tighter whitespace-nowrap">
                Fast Moving
              </span>
            </div>
            <div className="h-1.5 md:h-2 w-16 md:w-20 bg-tech-blue rounded-full"></div>
          </div>
          <Link to="/shop" className="text-tech-blue font-black text-xs md:text-sm flex items-center gap-1 hover:underline group uppercase tracking-widest whitespace-nowrap pb-1">
            Browse All <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>

      <div className="relative px-4 sm:px-6 lg:px-8">
        {/* Navigation Buttons - Visible on all screens for better UX */}
        <button
          onClick={() => scroll('left')}
          className="absolute left-1 md:left-2 top-1/2 -translate-y-1/2 z-20 bg-white p-3 md:p-4 rounded-full shadow-2xl text-tech-blue hover:bg-tech-blue hover:text-white transition-all flex items-center justify-center border border-gray-100 active:scale-90"
          aria-label="Previous items"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={() => scroll('right')}
          className="absolute right-1 md:right-2 top-1/2 -translate-y-1/2 z-20 bg-white p-3 md:p-4 rounded-full shadow-2xl text-tech-blue hover:bg-tech-blue hover:text-white transition-all flex items-center justify-center border border-gray-100 active:scale-90"
          aria-label="Next items"
        >
          <ChevronRight size={24} />
        </button>

        <div
          ref={scrollRef}
          className="flex overflow-x-auto gap-4 md:gap-8 pb-12 hide-scrollbar snap-x snap-mandatory scroll-smooth"
        >
          {filteredLaptops.map(laptop => (
            <div key={laptop.id} className="flex-shrink-0 w-[280px] sm:w-[350px] snap-start">
              <ProductCard laptop={laptop} />
            </div>
          ))}
          <Link
            to="/shop"
            className="flex-shrink-0 w-60 md:w-64 bg-gray-50 rounded-[2rem] border-4 border-dashed border-gray-200 flex flex-col items-center justify-center gap-4 hover:bg-gray-100 transition group snap-start"
          >
            <div className="bg-white p-5 md:p-6 rounded-full shadow-lg text-tech-blue group-hover:scale-110 transition-transform">
              <ChevronRight size={32} className="md:w-10 md:h-10" />
            </div>
            <span className="font-black text-gray-400 uppercase tracking-widest text-xs md:text-sm text-center px-4">See all {title}</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

const Home: React.FC = () => {
  const { inventory, isInventoryLoading } = useCart();
  const categories = [
    { title: "Student Laptops", cat: Category.STUDENT },
    { title: "Business & Work", cat: Category.BUSINESS },
    { title: "Programming Powerhouses", cat: Category.PROGRAMMING },
    { title: "Gaming Monsters", cat: Category.GAMING },
    { title: "Premium Selection", cat: Category.PREMIUM },
    { title: "Budget Friendly", cat: Category.BUDGET },
  ];

  return (
    <div className="space-y-12 md:space-y-24 pb-20 overflow-x-hidden">
      <Helmet>
        <title>Giant edge technology | Premium Tech Store Nigeria</title>
        <meta name="description" content="Buy affordable, high-quality UK-used and new laptops in Nigeria. Nationwide delivery, tested hardware, and trusted service in Ikeja Computer Village." />
      </Helmet>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#020617]">
        {/* Background Coffee Shop Lady Image */}
        <div
          className="absolute inset-0 z-0 opacity-40 bg-center bg-cover bg-no-repeat"
          style={{ backgroundImage: "url('/coffee_shop_lady.png')" }}
        />

        {/* Gradients & Glow for Seamless Blending */}
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#020617] via-[#020617]/50 to-[#020617] opacity-100" />
        <div className="absolute inset-0 z-0 bg-gradient-to-r from-[#020617] via-transparent to-[#020617] opacity-90" />

        {/* Central glowing rings (Saki-inspired) but in Tech Blue */}
        <div className="absolute top-[55%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-tech-blue/20 blur-[120px] rounded-[100%] z-0" />
        <div className="absolute top-[60%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[130px] border border-blue-500/30 rounded-[100%] z-0 shadow-[0_0_60px_rgba(59,130,246,0.5)]" />
        <div className="absolute top-[60%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[180px] border border-blue-500/10 rounded-[100%] z-0" />

        {/* Content */}
        <div className="max-w-4xl mx-auto px-4 relative z-10 text-center flex flex-col items-center mt-10">
          <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-medium text-white leading-[1.1] tracking-tight mb-8 drop-shadow-2xl font-sans">
            Powered by <br />
            Innovation, Perfected <br />
            with <span className="inline-flex items-center bg-tech-blue/20 rounded-2xl px-3 py-1 border border-tech-blue/30 backdrop-blur-sm -mb-2">Technology</span>
          </h1>

          <p className="text-sm md:text-base text-gray-300 font-medium mb-12 max-w-xl mx-auto leading-relaxed drop-shadow-lg">
            At Giant edge technology, we blend modern innovation with trusted reliability to elevate your daily workflow, crafting laptops for extraordinary moments.
          </p>

          <Link to="/shop" className="bg-white text-black px-8 py-3.5 rounded-full text-sm font-bold hover:bg-gray-200 transition-colors shadow-[0_0_30px_rgba(255,255,255,0.3)] flex items-center justify-center gap-2 group">
            Shop Catalog <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-y-1 transition-transform"><path d="M12 5v14M19 12l-7 7-7-7" /></svg>
          </Link>
        </div>
      </section>


      {/* Sliding Product Panels by Category */}
      <div className="space-y-16 md:space-y-24">
        {isInventoryLoading && inventory.length <= 13 ? (
          <>
            <CategoryCarouselSkeleton />
            <CategoryCarouselSkeleton />
          </>
        ) : (
          categories.map((cat, idx) => (
            <CategoryCarousel key={idx} title={cat.title} category={cat.cat} />
          ))
        )}
      </div>

      {/* Trust & Psychological Purchase Triggers Section */}
      <section className="max-w-7xl mx-auto px-4 mt-20">
        <div className="bg-tech-blue text-white rounded-[3rem] md:rounded-[4rem] p-8 md:p-24 overflow-hidden relative shadow-2xl">
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-6xl font-black mb-8 md:mb-10 leading-[1.1] tracking-tighter">Why Thousands Choose Giant edge technology</h2>
              <div className="space-y-6 md:space-y-8">
                <div className="flex gap-4 md:gap-6">
                  <div className="bg-blue-500/20 p-3 md:p-4 rounded-2xl md:rounded-3xl h-fit border border-white/5 shadow-inner flex-shrink-0"><ShieldCheck className="text-blue-400" size={28} /></div>
                  <div>
                    <h4 className="font-black text-lg md:text-xl mb-1">Rigorous 10-Point Testing</h4>
                    <p className="text-blue-100/70 text-xs md:text-sm leading-relaxed">Our engineers check battery health, SSD speeds, ports, and screen quality before any laptop leaves our shop.</p>
                  </div>
                </div>
                <div className="flex gap-4 md:gap-6">
                  <div className="bg-blue-500/20 p-3 md:p-4 rounded-2xl md:rounded-3xl h-fit border border-white/5 shadow-inner flex-shrink-0"><MapPin className="text-blue-400" size={28} /></div>
                  <div>
                    <h4 className="font-black text-lg md:text-xl mb-1">Physical Presence in 3 States</h4>
                    <p className="text-blue-100/70 text-xs md:text-sm leading-relaxed">We are not "ghost" sellers. Visit our store at number 21 kuteyi street, owalusin iwaro oka akoko Ondo state to see and test before you pay.</p>
                  </div>
                </div>
                <div className="flex gap-4 md:gap-6">
                  <div className="bg-blue-500/20 p-3 md:p-4 rounded-2xl md:rounded-3xl h-fit border border-white/5 shadow-inner flex-shrink-0"><Zap className="text-yellow-400" size={28} /></div>
                  <div>
                    <h4 className="font-black text-lg md:text-xl mb-1">Direct Grade A+ UK-Used</h4>
                    <p className="text-blue-100/70 text-xs md:text-sm leading-relaxed">No "Nigeria-used" refurbished junk. We only sell clean, high-performance machines that look and work like new.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white p-6 md:p-10 rounded-[2rem] md:rounded-[3rem] text-tech-blue shadow-3xl transform lg:rotate-3">
                <div className="flex items-center gap-2 mb-4 md:mb-6">
                  <div className="bg-blue-50 p-2 rounded-lg"><Star className="text-yellow-500" fill="currentColor" size={20} /></div>
                  <h3 className="text-xl md:text-2xl font-black tracking-tighter">Engineer's Verdict</h3>
                </div>
                <div className="space-y-4 md:space-y-6 italic text-gray-600 leading-relaxed font-medium text-sm md:text-base">
                  <p>"The current batch of HP 840 G5 is incredibly solid. The aluminum unibody is perfect for Nigerians on the go. Battery health verified at 90%+ across all units. Highly recommended for business use."</p>
                  <div className="flex items-center gap-3 md:gap-4 mt-6 md:mt-8 border-t border-gray-100 pt-4 md:pt-6">
                    <div className="w-10 h-10 md:w-14 md:h-14 bg-blue-50 rounded-full flex items-center justify-center font-black text-tech-blue text-base md:text-xl border-2 border-white shadow-sm">EE</div>
                    <div>
                      <p className="font-black text-tech-blue not-italic text-base md:text-lg">Engr. Emeka</p>
                      <p className="text-[9px] md:text-[10px] uppercase font-black text-gray-400 tracking-widest">Chief Tech, Giant edge technology</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -inset-8 bg-blue-500/30 rounded-full -z-10 blur-[80px]"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Nationwide Delivery Promo */}
      <section className="bg-gray-100/50 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-4xl font-black mb-4 md:mb-6 tracking-tight uppercase italic underline decoration-tech-blue/20">Safely Delivered Anywhere in Nigeria</h2>
          <p className="text-gray-500 max-w-2xl mx-auto mb-10 md:mb-14 text-base md:text-lg font-medium">
            From Lagos to Abuja, Port Harcourt to Kano. We use secure double-bubble packaging. Your laptop arrives safe or we replace it!
          </p>
          <div className="flex flex-wrap justify-center gap-2 md:gap-4">
            {['Lagos', 'Abuja', 'Ibadan', 'Osogbo', 'Port Harcourt', 'Benin', 'Enugu', 'Kaduna', 'Jos'].map(city => (
              <span key={city} className="bg-white px-4 md:px-8 py-2.5 md:py-4 rounded-xl md:rounded-2xl shadow-sm text-xs md:text-sm font-black text-gray-700 border border-gray-200 uppercase tracking-tighter hover:bg-tech-blue hover:text-white transition cursor-default">
                {city}
              </span>
            ))}
            <span className="bg-tech-blue text-white px-4 md:px-8 py-2.5 md:py-4 rounded-xl md:rounded-2xl shadow-xl text-xs md:text-sm font-black uppercase tracking-tighter">
              + All 36 states
            </span>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-black mb-10 md:mb-16 text-center tracking-tight uppercase italic">What Nigerians Are Saying</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {TESTIMONIALS.map(t => (
            <div key={t.id} className="bg-white p-8 md:p-10 rounded-[2rem] md:rounded-[2.5rem] shadow-sm border border-gray-100 flex flex-col hover:shadow-xl transition-all duration-300">
              <div className="flex gap-1 text-orange-400 mb-6 md:mb-8">
                {[...Array(t.rating)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
              </div>
              <p className="text-gray-700 mb-8 md:mb-10 font-bold italic text-lg md:text-xl leading-relaxed">"{t.text}"</p>
              <div className="mt-auto border-t border-gray-50 pt-6 md:pt-8 flex items-center justify-between">
                <div>
                  <p className="font-black text-gray-900 text-base md:text-lg tracking-tighter">{t.name}</p>
                  <p className="text-[9px] md:text-[10px] text-gray-400 font-black uppercase tracking-widest">{t.location}, Nigeria</p>
                </div>
                <div className="bg-green-100 text-green-700 px-3 md:px-4 py-1 rounded-full text-[9px] md:text-[10px] font-black flex items-center gap-1.5 shadow-sm border border-green-200">
                  <Verified size={12} /> VERIFIED BUYER
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
