import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Layout from "@/components/Layout";
import SectionWrapper from "@/components/SectionWrapper";
import { motion } from "framer-motion";
import { Send, Mail, MapPin, Phone } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Message sent!", description: "We'll get back to you within 24 hours." });
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <Layout>
      <SectionWrapper>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20 mb-6">
              Contact Us
            </span>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Start Your <span className="text-gradient">AI Journey</span>
            </h1>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Ready to automate your business? Book a free demo or send us a message — we'd love to help.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <Mail size={18} className="text-primary" />
                hello@nexusai.com
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <MapPin size={18} className="text-primary" />
                San Francisco, CA
              </div>
            </div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="glass rounded-xl p-8"
          >
            <h2 className="font-display font-semibold text-xl mb-6">Book a Demo</h2>
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium mb-1.5 block text-foreground">Name</label>
                <Input
                  placeholder="Your name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  required
                  className="bg-muted/50 border-border/50"
                />
              </div>
              <div>
                <label className="text-sm font-medium mb-1.5 block text-foreground">Email</label>
                <Input
                  type="email"
                  placeholder="you@company.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  required
                  className="bg-muted/50 border-border/50"
                />
              </div>
              <div>
                <label className="text-sm font-medium mb-1.5 block text-foreground">Message</label>
                <Textarea
                  placeholder="Tell us about your needs..."
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  required
                  rows={4}
                  className="bg-muted/50 border-border/50"
                />
              </div>
              <Button type="submit" variant="hero" size="lg" className="w-full">
                Send Message <Send size={18} />
              </Button>
            </div>
          </motion.form>
        </div>
      </SectionWrapper>
    </Layout>
  );
};

export default Contact;
