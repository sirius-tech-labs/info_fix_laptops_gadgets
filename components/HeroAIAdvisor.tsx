
import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Loader2, Sparkles, ShoppingBag, ExternalLink, ShoppingCart, Zap, X } from 'lucide-react';
import { getLaptopRecommendation, BotReply } from '../services/geminiService';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { Laptop } from '../types';
import { formatPrice } from '../constants';

interface Message {
    role: 'user' | 'bot';
    text: string;
    products?: Laptop[];
}

const HeroProductCard: React.FC<{ laptop: Laptop }> = ({ laptop }) => {
    const { addToCart } = useCart();
    const navigate = useNavigate();
    const [added, setAdded] = useState(false);

    const handleAddToCart = () => {
        addToCart(laptop);
        setAdded(true);
        setTimeout(() => setAdded(false), 2000);
    };

    return (
        <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-xl overflow-hidden shadow-xl flex flex-col w-full max-w-[200px]">
            <div className="relative h-24 bg-white/5 flex items-center justify-center overflow-hidden">
                <img
                    src={laptop.image || undefined}
                    alt={laptop.name}
                    className="h-full w-full object-cover opacity-90 hover:opacity-100 transition-opacity"
                    onError={(e) => { (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&q=80&w=400'; }}
                />
                <span className="absolute top-1 left-1 bg-tech-blue/80 text-white text-[8px] font-black px-1.5 py-0.5 rounded-full uppercase">
                    {laptop.condition}
                </span>
            </div>
            <div className="p-2 flex flex-col flex-grow">
                <p className="font-bold text-white text-[10px] leading-tight mb-1 line-clamp-1">{laptop.name}</p>
                <p className="text-tech-blue font-black text-xs mb-2">{formatPrice(laptop.price)}</p>
                <div className="flex gap-1">
                    <button
                        onClick={handleAddToCart}
                        className={`flex-1 py-1.5 rounded-lg font-black text-[9px] transition-all active:scale-95 ${added ? 'bg-green-500 text-white' : 'bg-white text-black hover:bg-gray-200'}`}
                    >
                        {added ? 'Added!' : 'Buy'}
                    </button>
                    <button
                        onClick={() => navigate(`/product/${laptop.id}`)}
                        className="flex-1 py-1.5 rounded-lg font-black text-[9px] border border-white/20 text-white hover:bg-white/10 transition-all active:scale-95"
                    >
                        Info
                    </button>
                </div>
            </div>
        </div>
    );
};

export const HeroAIAdvisor: React.FC<{ onClose: () => void }> = ({ onClose }) => {
    const { inventory, isInventoryLoading } = useCart();
    const [messages, setMessages] = useState<Message[]>([
        {
            role: 'bot',
            text: 'Tell me what you need! I can find the best laptop for your budget. (e.g., "Student laptop under 200k")',
        }
    ]);

    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages, isLoading]);

    const sendMessage = async (text: string) => {
        if (!text.trim() || isLoading) return;
        setInput('');
        setMessages(prev => [...prev, { role: 'user', text }]);
        setIsLoading(true);

        const reply: BotReply = await getLaptopRecommendation(text, inventory);
        setMessages(prev => [...prev, {
            role: 'bot',
            text: reply.message,
            products: reply.products,
        }]);
        setIsLoading(false);
    };

    return (
        <div className="w-full max-w-2xl mt-8 mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2rem] overflow-hidden shadow-2xl flex flex-col h-[400px]">
                {/* Header */}
                <div className="bg-white/5 px-6 py-3 flex items-center justify-between border-b border-white/10">
                    <div className="flex items-center gap-2">
                        <Bot size={18} className="text-tech-blue" />
                        <span className="text-xs font-black text-white uppercase tracking-widest">AI Device advisor</span>
                    </div>
                    <button onClick={onClose} className="p-1.5 hover:bg-white/10 rounded-full transition-colors text-white/60 hover:text-white">
                        <X size={18} />
                    </button>
                </div>

                {/* Chat Area */}
                <div ref={scrollRef} className="flex-grow overflow-y-auto p-6 space-y-4 scroll-smooth hide-scrollbar">
                    {messages.map((m, i) => (
                        <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                            <div className={`max-w-[90%] flex flex-col gap-2 ${m.role === 'user' ? 'items-end' : 'items-start'}`}>
                                <div className={`px-4 py-3 rounded-2xl text-sm ${m.role === 'user'
                                    ? 'bg-tech-blue text-white rounded-tr-none'
                                    : 'bg-white/10 text-gray-200 rounded-tl-none border border-white/5'}`}>
                                    {m.text}
                                </div>
                                {m.role === 'bot' && m.products && m.products.length > 0 && (
                                    <div className="flex gap-3 overflow-x-auto pb-2 hide-scrollbar w-full">
                                        {m.products.map(laptop => (
                                            <HeroProductCard key={laptop.id} laptop={laptop} />
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                    {isLoading && (
                        <div className="flex justify-start">
                            <div className="bg-white/5 px-4 py-3 rounded-2xl rounded-tl-none border border-white/5 flex items-center gap-2">
                                <Loader2 size={14} className="animate-spin text-tech-blue" />
                                <span className="text-xs text-gray-400 italic">Thinking...</span>
                            </div>
                        </div>
                    )}
                </div>

                {/* Input */}
                <div className="p-4 bg-white/5 border-t border-white/10">
                    <div className="flex items-center gap-2">
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={(e) => e.key === 'Enter' && sendMessage(input)}
                            placeholder="Ask me anything..."
                            className="flex-grow bg-white/10 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-tech-blue transition-all"
                        />
                        <button
                            onClick={() => sendMessage(input)}
                            disabled={isLoading || !input.trim()}
                            className="bg-tech-blue text-white p-2.5 rounded-xl hover:bg-blue-600 transition-colors disabled:opacity-40"
                        >
                            <Send size={18} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
