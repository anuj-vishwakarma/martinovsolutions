'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Phone, Wrench, Zap, Home, Calendar, FileText, AlertTriangle, CreditCard, ChevronRight } from 'lucide-react';
import { buildWhatsAppUrl, type WhatsAppIntent } from '@/lib/whatsapp';

type QuickReply = {
  label: string;
  intent: WhatsAppIntent;
  icon: React.ReactNode;
};

const quickReplies: QuickReply[] = [
  { label: 'New System Estimate', intent: 'new-system', icon: <Zap className="h-4 w-4" /> },
  { label: 'Repair', intent: 'repair', icon: <Wrench className="h-4 w-4" /> },
  { label: 'Replace System', intent: 'replace', icon: <Wrench className="h-4 w-4" /> },
  { label: 'Energy Bill Concerns', intent: 'energy-bill', icon: <FileText className="h-4 w-4" /> },
  { label: 'Healthier Home', intent: 'healthier-home', icon: <Home className="h-4 w-4" /> },
  { label: 'Maintenance', intent: 'maintenance', icon: <Calendar className="h-4 w-4" /> },
  { label: 'Product Knowledge', intent: 'product-knowledge', icon: <FileText className="h-4 w-4" /> },
  { label: 'Financing', intent: 'financing', icon: <CreditCard className="h-4 w-4" /> },
  { label: 'Emergency', intent: 'emergency', icon: <AlertTriangle className="h-4 w-4" /> },
];

type Message = {
  id: string;
  role: 'bot' | 'user';
  text: string;
};

const botResponses: Record<WhatsAppIntent, string> = {
  'new-system':
    "Great choice! Our master craftsmen will design and install a precision HVAC system tailored to your home. I'll open WhatsApp so you can share your details and get an Instant Estimate.",
  repair:
    "We can get your system running again. Our certified technicians service all major brands. Let me connect you to our team on WhatsApp to schedule a repair visit.",
  replace:
    "Thinking about an upgrade? We'll assess your current system and recommend the most efficient replacement. Opening WhatsApp now so our team can help.",
  'energy-bill':
    "High energy bills often mean your system is working harder than it should. We can audit your setup and recommend efficiency improvements. Let's connect you on WhatsApp.",
  'healthier-home':
    "A healthier home starts with better air quality and proper ventilation. We offer indoor air quality solutions and duct system optimization. Opening WhatsApp to learn more about your needs.",
  maintenance:
    "Regular maintenance keeps your system efficient and extends its life. Let me open WhatsApp so you can book a maintenance visit at a time that works for you.",
  'product-knowledge':
    "We carry top manufacturer products and can guide you through the options. I'll connect you to our team on WhatsApp for detailed product information.",
  emergency:
    "We offer Emergency Services and can respond quickly. Opening WhatsApp now — please describe the emergency so our team can prioritize your call.",
  financing:
    "We offer financing with approved credit so you can invest in comfort without the upfront cost. Let me connect you on WhatsApp to discuss options.",
  general:
    "I'd be happy to help! Let me connect you to our team on WhatsApp so we can assist you directly.",
};

export function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [typing, setTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const initialMessage: Message = {
    id: 'init',
    role: 'bot',
    text: "Welcome to Martinov Home Solutions. How can we help you today? Select a topic below or type your question.",
  };

  useEffect(() => {
    if (open && messages.length === 0) {
      setMessages([initialMessage]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, typing]);

  const handleIntent = useCallback((intent: WhatsAppIntent, label: string) => {
    const userMsg: Message = { id: `u-${Date.now()}`, role: 'user', text: label };
    setMessages((prev) => [...prev, userMsg]);
    setTyping(true);

    setTimeout(() => {
      const botMsg: Message = {
        id: `b-${Date.now()}`,
        role: 'bot',
        text: botResponses[intent],
      };
      setMessages((prev) => [...prev, botMsg]);
      setTyping(false);

      setTimeout(() => {
        window.open(buildWhatsAppUrl(intent), '_blank', 'noopener,noreferrer');
      }, 600);
    }, 900);
  }, []);

  const handleSend = useCallback(() => {
    const trimmed = input.trim();
    if (!trimmed) return;

    const userMsg: Message = { id: `u-${Date.now()}`, role: 'user', text: trimmed };
    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setTyping(true);

    setTimeout(() => {
      const botMsg: Message = {
        id: `b-${Date.now()}`,
        role: 'bot',
        text: "Thanks for reaching out! I'll connect you with our team on WhatsApp so we can assist you directly.",
      };
      setMessages((prev) => [...prev, botMsg]);
      setTyping(false);
      setTimeout(() => {
        window.open(buildWhatsAppUrl('general', `Hi Martinov Home Solutions, ${trimmed}`), '_blank', 'noopener,noreferrer');
      }, 600);
    }, 900);
  }, [input]);

  return (
    <>
      {/* Floating button */}
      <motion.button
        onClick={() => setOpen((v) => !v)}
        className="fixed bottom-6 right-6 z-[100] flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-[hsl(var(--accent-electric))] to-[hsl(var(--accent-cyan))] text-ink-950 shadow-lg glow-electric"
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.92 }}
        aria-label="Open chat assistant"
      >
        <AnimatePresence mode="wait">
          {open ? (
            <motion.span key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
              <X className="h-6 w-6" />
            </motion.span>
          ) : (
            <motion.span key="open" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }}>
              <MessageCircle className="h-6 w-6" />
            </motion.span>
          )}
        </AnimatePresence>
        {!open && (
          <span className="absolute inset-0 rounded-full border-2 border-[hsl(var(--accent-electric))] animate-[pulse-ring_2s_ease-out_infinite]" />
        )}
      </motion.button>

      {/* Chat panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed bottom-24 right-6 z-[99] flex h-[520px] max-h-[80vh] w-[calc(100vw-3rem)] max-w-sm flex-col overflow-hidden rounded-2xl glass-panel shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center gap-3 border-b border-ink-700/60 bg-ink-900/80 px-5 py-4">
              <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[hsl(var(--accent-electric))] to-[hsl(var(--accent-cyan))]">
                <Wrench className="h-5 w-5 text-ink-950" />
                <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-ink-900 bg-green-400" />
              </div>
              <div className="flex-1">
                <p className="font-display text-sm font-bold text-ink-50">Martinov Assistant</p>
                <p className="text-xs text-ink-400">Online · Typically replies instantly</p>
              </div>
              <a
                href="tel:+12342552320"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-ink-800 text-ink-200 transition hover:bg-ink-700 hover:text-ink-50"
                aria-label="Call us"
              >
                <Phone className="h-4 w-4" />
              </a>
            </div>

            {/* Messages */}
            <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto px-4 py-4">
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                      msg.role === 'user'
                        ? 'rounded-br-sm bg-gradient-to-br from-[hsl(var(--accent-electric))] to-[hsl(var(--accent-cyan))] text-ink-950'
                        : 'rounded-bl-sm bg-ink-800/80 text-ink-100'
                    }`}
                  >
                    {msg.text}
                  </div>
                </motion.div>
              ))}
              {typing && (
                <div className="flex justify-start">
                  <div className="flex gap-1 rounded-2xl rounded-bl-sm bg-ink-800/80 px-4 py-3">
                    {[0, 1, 2].map((i) => (
                      <motion.span
                        key={i}
                        className="h-2 w-2 rounded-full bg-ink-400"
                        animate={{ y: [0, -4, 0] }}
                        transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.15 }}
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Quick replies */}
            {messages.length <= 1 && (
              <div className="grid grid-cols-2 gap-2 px-4 pb-3">
                {quickReplies.map((qr) => (
                  <button
                    key={qr.intent}
                    onClick={() => handleIntent(qr.intent, qr.label)}
                    className="group flex items-center gap-2 rounded-lg border border-ink-700/60 bg-ink-800/50 px-3 py-2 text-left text-xs text-ink-200 transition hover:border-[hsl(var(--accent-electric))/0.5] hover:bg-ink-700/50 hover:text-ink-50"
                  >
                    <span className="text-[hsl(var(--accent-electric))]">{qr.icon}</span>
                    <span className="flex-1">{qr.label}</span>
                    <ChevronRight className="h-3 w-3 opacity-0 transition group-hover:opacity-100" />
                  </button>
                ))}
              </div>
            )}

            {/* Input */}
            <div className="flex items-center gap-2 border-t border-ink-700/60 bg-ink-900/80 px-4 py-3">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Type your question…"
                className="flex-1 rounded-full bg-ink-800 px-4 py-2 text-sm text-ink-100 placeholder:text-ink-500 outline-none focus:ring-1 focus:ring-[hsl(var(--accent-electric))]"
              />
              <button
                onClick={handleSend}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-[hsl(var(--accent-electric))] to-[hsl(var(--accent-cyan))] text-ink-950 transition hover:scale-105 active:scale-95"
                aria-label="Send message"
              >
                <Send className="h-4 w-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
