import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import SectionWrapper from "@/components/SectionWrapper";
import { motion } from "framer-motion";
import { Target, Lightbulb, Cpu, ArrowRight } from "lucide-react";

const values = [
  { icon: Target, title: "Mission-Driven", desc: "We exist to simplify business through intelligent automation." },
  { icon: Lightbulb, title: "Innovation First", desc: "We push boundaries with cutting-edge AI research and development." },
  { icon: Cpu, title: "Efficiency Obsessed", desc: "Every solution we build is designed to maximize output and minimize waste." },
];

const About = () => (
  <Layout>
    <SectionWrapper>
      <div className="max-w-3xl mx-auto text-center">
        <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20 mb-6">
          About Us
        </span>
        <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">
          We're on a Mission to <span className="text-gradient">Simplify Business</span>
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          NexusAI was founded with a single belief: every business deserves access to powerful AI. We build intelligent agents and automation tools that help entrepreneurs and teams work smarter, faster, and cheaper.
        </p>
      </div>
    </SectionWrapper>

    <SectionWrapper className="bg-card/30">
      <div className="text-center mb-14">
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
          What Drives <span className="text-gradient">Us</span>
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {values.map((v, i) => (
          <motion.div
            key={v.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="glass rounded-xl p-8 text-center"
          >
            <div className="w-14 h-14 rounded-full bg-gradient-primary flex items-center justify-center mx-auto mb-4">
              <v.icon className="text-primary-foreground" size={24} />
            </div>
            <h3 className="font-display font-semibold text-lg mb-2">{v.title}</h3>
            <p className="text-sm text-muted-foreground">{v.desc}</p>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>

    <SectionWrapper>
      <div className="glass rounded-2xl p-10 md:p-16 text-center glow-primary-lg relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-primary opacity-5" />
        <div className="relative z-10">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Let's Build the Future Together
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto mb-8">
            Whether you're a startup or an enterprise, we're ready to help you harness the power of AI.
          </p>
          <Link to="/contact">
            <Button variant="hero" size="lg" className="text-base">
              Get in Touch <ArrowRight size={18} />
            </Button>
          </Link>
        </div>
      </div>
    </SectionWrapper>
  </Layout>
);

export default About;
