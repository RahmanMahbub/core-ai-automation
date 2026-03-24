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
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const services = [
  {
    icon: Phone,
    title: "AI Voice Agent",
    description: "Handles calls, customer support, and booking — with a natural, human-like voice your customers will love.",
    features: ["Natural-sounding voice", "Multilingual support", "24/7 availability", "Call routing & transcription"],
    useCases: ["Customer support hotlines", "Appointment booking", "Order status inquiries", "Lead qualification calls"],
  },
  {
    icon: Bot,
    title: "Personal AI Assistant",
    description: "Your intelligent co-pilot for scheduling, task management, reminders, and daily productivity.",
    features: ["Smart scheduling", "App integrations", "Contextual responses", "Task prioritization"],
    useCases: ["Executive assistance", "Meeting coordination", "Email management", "Daily briefings"],
  },
  {
    icon: BarChart3,
    title: "Data Analysis Tool",
    description: "Transform raw business data into clear, actionable insights with AI-powered dashboards and reports.",
    features: ["Interactive dashboards", "Automated reports", "Predictive analytics", "Real-time monitoring"],
    useCases: ["Sales forecasting", "Customer behavior analysis", "Financial reporting", "Market trend detection"],
  },
  {
    icon: MessageSquare,
    title: "Text AI Agent",
    description: "Deploy intelligent chatbots across your website, social media, and support channels.",
    features: ["Instant replies", "Customizable tone", "Training support", "Multi-channel deployment"],
    useCases: ["Website live chat", "Social media replies", "FAQ automation", "Content generation"],
  },
];

const Services = () => (
  <Layout>
    {/* Hero */}
    <SectionWrapper>
      <div className="text-center max-w-3xl mx-auto">
        <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20 mb-6">
          Our Services
        </span>
        <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">
          AI Solutions Built for <span className="text-gradient">Your Business</span>
        </h1>
        <p className="text-lg text-muted-foreground">
          From voice agents to data analytics — we build custom AI tools that save time, cut costs, and drive growth.
        </p>
      </div>
    </SectionWrapper>

    {/* Service Details */}
    {services.map((s, i) => (
      <SectionWrapper key={s.title} className={i % 2 === 0 ? "bg-card/30" : ""}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className={i % 2 === 1 ? "lg:order-2" : ""}
          >
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
              <s.icon className="text-primary" size={28} />
            </div>
            <h2 className="font-display text-3xl font-bold mb-4">{s.title}</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">{s.description}</p>
            <Link to="/contact">
              <Button variant="hero" size="lg">
                Get Started <ArrowRight size={18} />
              </Button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: i % 2 === 0 ? 30 : -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className={i % 2 === 1 ? "lg:order-1" : ""}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="glass rounded-xl p-6">
                <h3 className="font-semibold text-sm mb-3 text-primary">Key Features</h3>
                <ul className="space-y-2">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 size={14} className="text-primary shrink-0" /> {f}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="glass rounded-xl p-6">
                <h3 className="font-semibold text-sm mb-3 text-accent">Use Cases</h3>
                <ul className="space-y-2">
                  {s.useCases.map((u) => (
                    <li key={u} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 size={14} className="text-accent shrink-0" /> {u}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </SectionWrapper>
    ))}

    {/* CTA */}
    <SectionWrapper>
      <div className="glass rounded-2xl p-10 md:p-16 text-center glow-primary-lg relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-primary opacity-5" />
        <div className="relative z-10">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Not Sure Which Solution Fits?
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto mb-8">
            Let's talk. Our team will help you find the perfect AI solution for your needs.
          </p>
          <Link to="/contact">
            <Button variant="hero" size="lg" className="text-base">
              Book a Free Consultation <ArrowRight size={18} />
            </Button>
          </Link>
        </div>
      </div>
    </SectionWrapper>
  </Layout>
);

export default Services;
