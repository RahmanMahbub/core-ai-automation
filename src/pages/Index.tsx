import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import SectionWrapper from "@/components/SectionWrapper";
import { motion } from "framer-motion";
import {
  Phone,
  Bot,
  BarChart3,
  MessageSquare,
  Zap,
  DollarSign,
  Clock,
  TrendingUp,
  ArrowRight,
  Star,
  CheckCircle2,
} from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const services = [
  {
    icon: Phone,
    title: "AI Voice Agent",
    description: "Automate calls, customer support, and booking with natural-sounding AI voices.",
  },
  {
    icon: Bot,
    title: "Personal AI Assistant",
    description: "Boost productivity with smart scheduling, task management, and reminders.",
  },
  {
    icon: BarChart3,
    title: "Data Analysis Tool",
    description: "Transform raw data into actionable insights with AI-powered analytics.",
  },
  {
    icon: MessageSquare,
    title: "Text AI Agent",
    description: "Deploy intelligent chatbots for websites, support, and content creation.",
  },
];

const benefits = [
  { icon: Zap, title: "Automation", desc: "Eliminate repetitive tasks and focus on growth." },
  { icon: DollarSign, title: "Cost Savings", desc: "Cut operational costs by up to 60%." },
  { icon: Clock, title: "24/7 Support", desc: "Your AI never sleeps — always on, always ready." },
  { icon: TrendingUp, title: "Scalability", desc: "Grow without limits — AI scales with you." },
];

const steps = [
  { num: "01", title: "Tell Us Your Needs", desc: "Share your business challenges and goals with our team." },
  { num: "02", title: "We Build Your AI", desc: "Our experts design and deploy a custom AI solution for you." },
  { num: "03", title: "Watch It Work", desc: "See immediate results as AI handles tasks and drives growth." },
];

const testimonials = [
  {
    name: "Sarah Chen",
    role: "CEO, TechFlow",
    text: "NexusAI cut our support costs by 45% in the first month. The voice agent handles calls better than we imagined.",
    rating: 5,
  },
  {
    name: "Marcus Rodriguez",
    role: "Founder, ScaleUp Labs",
    text: "The data analysis tool gave us insights we'd been missing for years. Game changer for our strategy.",
    rating: 5,
  },
  {
    name: "Emily Watson",
    role: "COO, BrightPath",
    text: "Our chatbot handles 80% of inquiries automatically. The team can finally focus on what matters.",
    rating: 5,
  },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={heroBg} alt="" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-3xl"
          >
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20 mb-6">
              AI-Powered Business Solutions
            </span>
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              Automate Your Business with{" "}
              <span className="text-gradient">AI Agents</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-8 leading-relaxed">
              Deploy intelligent AI agents that handle calls, analyze data, and engage customers — so you can focus on scaling your business.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact">
                <Button variant="hero" size="lg" className="text-base">
                  Book a Demo <ArrowRight size={18} />
                </Button>
              </Link>
              <Link to="/services">
                <Button variant="hero-outline" size="lg" className="text-base">
                  Explore Services
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Overview */}
      <SectionWrapper>
        <div className="text-center mb-14">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Our <span className="text-gradient">AI Solutions</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Powerful tools designed to automate, optimize, and transform your business operations.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="glass glass-hover rounded-xl p-6 group cursor-pointer"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <s.icon className="text-primary" size={24} />
              </div>
              <h3 className="font-display font-semibold text-lg mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.description}</p>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      {/* Benefits */}
      <SectionWrapper className="bg-card/30">
        <div className="text-center mb-14">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Why Choose <span className="text-gradient">NexusAI</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Real results that drive your business forward.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center p-6"
            >
              <div className="w-14 h-14 rounded-full bg-gradient-primary flex items-center justify-center mx-auto mb-4">
                <b.icon className="text-primary-foreground" size={24} />
              </div>
              <h3 className="font-display font-semibold text-lg mb-2">{b.title}</h3>
              <p className="text-sm text-muted-foreground">{b.desc}</p>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      {/* How It Works */}
      <SectionWrapper>
        <div className="text-center mb-14">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            How It <span className="text-gradient">Works</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Getting started is simple — three easy steps to AI-powered growth.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((s, i) => (
            <motion.div
              key={s.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="relative glass rounded-xl p-8 text-center"
            >
              <span className="font-display text-5xl font-bold text-primary/20">{s.num}</span>
              <h3 className="font-display font-semibold text-lg mt-2 mb-3">{s.title}</h3>
              <p className="text-sm text-muted-foreground">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      {/* Testimonials */}
      <SectionWrapper className="bg-card/30">
        <div className="text-center mb-14">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Trusted by <span className="text-gradient">Innovators</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass rounded-xl p-6"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} size={16} className="fill-primary text-primary" />
                ))}
              </div>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">"{t.text}"</p>
              <div>
                <p className="font-semibold text-sm">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      {/* Final CTA */}
      <SectionWrapper>
        <div className="glass rounded-2xl p-10 md:p-16 text-center glow-primary-lg relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-primary opacity-5" />
          <div className="relative z-10">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto mb-8">
              Join hundreds of businesses already using AI to save time, reduce costs, and scale faster.
            </p>
            <Link to="/contact">
              <Button variant="hero" size="lg" className="text-base">
                Start Your AI Journey <ArrowRight size={18} />
              </Button>
            </Link>
          </div>
        </div>
      </SectionWrapper>
    </Layout>
  );
};

export default Index;
