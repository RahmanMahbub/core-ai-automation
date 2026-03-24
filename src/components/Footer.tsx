import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="border-t border-border/50 bg-card/30">
    <div className="container mx-auto px-4 py-12 md:px-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <span className="font-display text-xl font-bold text-gradient">NexusAI</span>
          <p className="mt-3 text-sm text-muted-foreground max-w-xs">
            Empowering businesses with intelligent AI solutions that automate, optimize, and scale.
          </p>
        </div>
        <div>
          <h4 className="font-semibold text-sm mb-4 text-foreground">Quick Links</h4>
          <div className="flex flex-col gap-2">
            {[{ l: "Home", p: "/" }, { l: "Services", p: "/services" }, { l: "About", p: "/about" }, { l: "Contact", p: "/contact" }].map((i) => (
              <Link key={i.p} to={i.p} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                {i.l}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-semibold text-sm mb-4 text-foreground">Get in Touch</h4>
          <p className="text-sm text-muted-foreground">hello@nexusai.com</p>
          <p className="text-sm text-muted-foreground mt-1">San Francisco, CA</p>
        </div>
      </div>
      <div className="mt-10 pt-6 border-t border-border/50 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} NexusAI. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
