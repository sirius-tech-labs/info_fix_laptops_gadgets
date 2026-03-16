
import React, { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { Package, Truck, CheckCircle, Clock, Search, ArrowLeft, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { formatPrice } from '../constants';

interface OrderData {
    id: string;
    customerName: string;
    status: string;
    items: any[];
    totalAmount: number;
    createdAt: string;
    customerAddress?: string;
}

const STATUS_STEPS = [
    { key: 'ORDERS', label: 'Order Placed', icon: Package, color: 'blue' },
    { key: 'IN PROGRESS', label: 'Processing', icon: Clock, color: 'yellow' },
    { key: 'SHIPPED', label: 'Shipped', icon: Truck, color: 'purple' },
    { key: 'FULFILLED', label: 'Delivered', icon: CheckCircle, color: 'green' },
];

const OrderTracking: React.FC = () => {
    const [orderId, setOrderId] = useState('');
    const [foundOrder, setFoundOrder] = useState<OrderData | null>(null);
    const [searched, setSearched] = useState(false);

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        if (!orderId.trim()) return;

        // Search localStorage for orders
        try {
            const orders: OrderData[] = JSON.parse(localStorage.getItem('wonderful_orders') || '[]');
            const found = orders.find(o => o.id.toLowerCase() === orderId.trim().toLowerCase());
            setFoundOrder(found || null);
        } catch {
            setFoundOrder(null);
        }
        setSearched(true);
    };

    const currentStepIndex = useMemo(() => {
        if (!foundOrder) return -1;
        const idx = STATUS_STEPS.findIndex(s => s.key === foundOrder.status);
        return idx >= 0 ? idx : 0;
    }, [foundOrder]);

    return (
        <div className="max-w-3xl mx-auto px-4 py-12 min-h-[70vh]">
            <Helmet>
                <title>Track Your Order | Wonderful Autos and Tech</title>
                <meta name="description" content="Track your laptop order status in real-time. See if your order has been placed, is being processed, shipped, or delivered." />
            </Helmet>

            <Link to="/" className="flex items-center gap-2 text-gray-500 hover:text-tech-blue font-bold transition group mb-8">
                <div className="bg-gray-100 p-2 rounded-full group-hover:bg-blue-50 transition">
                    <ArrowLeft size={20} />
                </div>
                Back to Home
            </Link>

            <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 bg-blue-50 text-tech-blue px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest mb-4">
                    <Package size={16} />
                    Order Tracking
                </div>
                <h1 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tighter mb-4">Track Your Order</h1>
                <p className="text-gray-500 font-medium">Enter your Order ID to see the current status of your purchase.</p>
            </div>

            {/* Search Form */}
            <form onSubmit={handleSearch} className="flex gap-3 mb-12">
                <div className="relative flex-grow">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                    <input
                        type="text"
                        placeholder="Enter Order ID (e.g., ORD-1710612345678)"
                        value={orderId}
                        onChange={(e) => setOrderId(e.target.value)}
                        className="w-full pl-12 pr-4 py-4 bg-white border-2 border-gray-200 rounded-2xl focus:ring-2 focus:ring-tech-blue focus:border-tech-blue outline-none text-sm font-bold text-gray-900 transition-all"
                    />
                </div>
                <button
                    type="submit"
                    className="bg-tech-blue text-white px-8 py-4 rounded-2xl font-black hover:bg-blue-900 transition active:scale-95 shadow-lg"
                >
                    Track
                </button>
            </form>

            {/* Results */}
            {searched && !foundOrder && (
                <div className="bg-white p-12 rounded-3xl shadow-sm border border-gray-100 text-center">
                    <div className="bg-red-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                        <Search size={32} className="text-red-300" />
                    </div>
                    <h3 className="text-xl font-black text-gray-900 mb-2">Order Not Found</h3>
                    <p className="text-gray-500 text-sm">Please double-check your Order ID. It's usually in the format <span className="font-bold">ORD-XXXXXXXXXXXXX</span>.</p>
                    <p className="text-gray-400 text-xs mt-4">If you need help, contact us on WhatsApp: <a href="https://wa.me/2347064757296" className="text-tech-blue font-bold">+234 706 475 7296</a></p>
                </div>
            )}

            {foundOrder && (
                <div className="space-y-8">
                    {/* Status Stepper */}
                    <div className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-gray-100">
                        <h3 className="text-lg font-black text-gray-900 mb-8">Order Status</h3>
                        <div className="flex items-center justify-between relative">
                            {/* Progress Line */}
                            <div className="absolute top-5 left-0 right-0 h-1 bg-gray-100 rounded-full">
                                <div
                                    className="h-full bg-tech-blue rounded-full transition-all duration-700 ease-out"
                                    style={{ width: `${(currentStepIndex / (STATUS_STEPS.length - 1)) * 100}%` }}
                                />
                            </div>
                            {STATUS_STEPS.map((step, i) => {
                                const isActive = i <= currentStepIndex;
                                const isCurrent = i === currentStepIndex;
                                const Icon = step.icon;
                                return (
                                    <div key={step.key} className="relative flex flex-col items-center z-10">
                                        <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 ${isActive
                                                ? 'bg-tech-blue text-white shadow-lg shadow-blue-200'
                                                : 'bg-gray-100 text-gray-400'
                                            } ${isCurrent ? 'ring-4 ring-blue-100 scale-110' : ''}`}>
                                            <Icon size={18} />
                                        </div>
                                        <span className={`text-[10px] font-black uppercase tracking-widest mt-3 ${isActive ? 'text-tech-blue' : 'text-gray-400'}`}>
                                            {step.label}
                                        </span>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Order Details */}
                    <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                        <div className="flex items-center justify-between mb-6">
                            <h3 className="text-lg font-black text-gray-900">Order Details</h3>
                            <span className="bg-blue-50 text-tech-blue px-3 py-1 rounded-full text-xs font-black">{foundOrder.id}</span>
                        </div>
                        <div className="space-y-4">
                            <div className="flex justify-between text-sm">
                                <span className="text-gray-500 font-medium">Customer</span>
                                <span className="font-bold text-gray-900">{foundOrder.customerName}</span>
                            </div>
                            <div className="flex justify-between text-sm">
                                <span className="text-gray-500 font-medium">Date</span>
                                <span className="font-bold text-gray-900">{new Date(foundOrder.createdAt).toLocaleDateString('en-NG', { dateStyle: 'long' })}</span>
                            </div>
                            <div className="flex justify-between text-sm">
                                <span className="text-gray-500 font-medium">Items</span>
                                <span className="font-bold text-gray-900">{foundOrder.items?.length || 0} item(s)</span>
                            </div>
                            <div className="flex justify-between text-sm border-t border-gray-100 pt-4">
                                <span className="text-gray-500 font-bold">Total</span>
                                <span className="font-black text-tech-blue text-lg">{formatPrice(foundOrder.totalAmount)}</span>
                            </div>
                        </div>
                    </div>

                    {/* Help */}
                    <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100 flex items-center gap-4">
                        <div className="bg-tech-blue p-3 rounded-xl text-white flex-shrink-0">
                            <Phone size={20} />
                        </div>
                        <div>
                            <p className="font-bold text-sm text-gray-900">Need help with this order?</p>
                            <p className="text-xs text-gray-600">Contact us on WhatsApp with your Order ID for instant support.</p>
                        </div>
                        <a href="https://wa.me/2347064757296" target="_blank" rel="noopener noreferrer" className="ml-auto bg-tech-blue text-white px-6 py-3 rounded-xl font-black text-sm hover:bg-blue-900 transition whitespace-nowrap">
                            Chat Now
                        </a>
                    </div>
                </div>
            )}
        </div>
    );
};

export default OrderTracking;
