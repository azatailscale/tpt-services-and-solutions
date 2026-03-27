import { Button } from "@/components/ui/button";
import {
  Award,
  Building2,
  ChevronRight,
  Clock,
  Mail,
  MapPin,
  Menu,
  Phone,
  Wrench,
  X,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { SiFacebook, SiLinkedin, SiX } from "react-icons/si";

// ---------- DATA ----------

const services = [
  {
    id: "networking",
    title: "IT & Networking",
    description:
      "Complete active and passive networking solutions — structured cabling, LAN/WAN setup, network switches, routers, and wireless infrastructure for enterprises.",
    image: "/assets/generated/service-networking.dim_600x400.jpg",
  },
  {
    id: "cctv",
    title: "CCTV & Surveillance",
    description:
      "Design, supply, installation, and maintenance of IP-based CCTV and surveillance systems for offices, campuses, and critical infrastructure.",
    image: "/assets/generated/service-cctv.dim_600x400.jpg",
  },
  {
    id: "datacenter",
    title: "Data Centre Design & Setup",
    description:
      "End-to-end data centre consulting, design, and deployment — from rack layout and power to cooling and cable management.",
    image: "/assets/generated/service-datacenter.dim_600x400.jpg",
  },
  {
    id: "security",
    title: "Security & Automation",
    description:
      "Smart access control, biometric systems, intrusion detection, and building automation for enhanced operational security.",
    image: "/assets/generated/service-security.dim_600x400.jpg",
  },
  {
    id: "amc",
    title: "AMC & CAMC",
    description:
      "Annual and Comprehensive AMC for IT equipment, servers, networks, and CCTV systems — keeping your infrastructure running 24/7.",
    image: "/assets/generated/service-amc.dim_600x400.jpg",
  },
];

const whyChoose = [
  {
    icon: Award,
    title: "Proven Experience",
    description:
      "15+ years serving Government and enterprise clients across India.",
  },
  {
    icon: Building2,
    title: "Government Empanelled",
    description:
      "Approved vendor for multiple state and central government departments.",
  },
  {
    icon: Wrench,
    title: "End-to-End Service",
    description:
      "From design and supply to installation, testing, and maintenance.",
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description: "Round-the-clock support with SLA-backed response times.",
  },
];

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "About Us", href: "#about" },
  { label: "Contact", href: "#contact" },
];

function scrollToSection(href: string) {
  const el = document.querySelector(href);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

// ---------- COMPONENTS ----------

function Navbar({ scrolled }: { scrolled: boolean }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNav = (href: string) => {
    setMenuOpen(false);
    scrollToSection(href);
  };

  return (
    <header
      data-ocid="nav.panel"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a
            href="#home"
            data-ocid="nav.link"
            className="flex items-center gap-2 flex-shrink-0"
          >
            <img
              src="/assets/generated/tpt-logo-transparent.dim_400x150.png"
              alt="TPT Services and Solutions"
              className="h-10 md:h-12 w-auto object-contain"
            />
            <span className="hidden sm:block text-sm md:text-base font-bold text-[#0B2E4F] leading-tight max-w-[180px]">
              TPT Services and Solutions
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                data-ocid="nav.link"
                className="text-sm font-medium text-[#5B6672] hover:text-[#0B2E4F] transition-colors duration-200 relative group"
              >
                {link.label}
                <span className="absolute -bottom-0.5 left-0 right-0 h-0.5 bg-[#F28C28] scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left" />
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:block">
            <Button
              data-ocid="nav.primary_button"
              onClick={() => handleNav("#contact")}
              className="bg-[#F28C28] hover:bg-[#e07d1a] text-white font-semibold px-5 py-2 rounded-full shadow-sm transition-all duration-200"
            >
              Get a Quote
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            data-ocid="nav.toggle"
            className="md:hidden p-2 rounded-lg text-[#0B2E4F] hover:bg-gray-100 transition-colors"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  data-ocid="nav.link"
                  className="text-[#0B2E4F] font-medium py-1 border-b border-gray-100"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <Button
                onClick={() => handleNav("#contact")}
                className="bg-[#F28C28] hover:bg-[#e07d1a] text-white font-semibold rounded-full mt-2"
              >
                Get a Quote
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-[90vh] flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="/assets/generated/hero-banner.dim_1600x600.jpg"
          alt="Data center infrastructure"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <span className="inline-block bg-[#F28C28]/20 text-[#F28C28] border border-[#F28C28]/40 text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
              Government & Private Sector
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight mb-4 font-heading"
          >
            Trusted IT Infrastructure
            <span className="block text-[#F28C28]">Partners</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="text-[#F28C28] font-semibold text-sm md:text-base mb-4 tracking-wide"
          >
            IT &amp; Networking &bull; CCTV &amp; Surveillance &bull; Data
            Centres &bull; Security Automation &bull; AMC/CAMC
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
            className="text-gray-300 text-base md:text-lg mb-8 leading-relaxed max-w-xl"
          >
            Delivering end-to-end technology solutions for Government and
            Private sector clients across India.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
            className="flex flex-wrap gap-4"
          >
            <Button
              data-ocid="hero.primary_button"
              onClick={() => scrollToSection("#services")}
              className="bg-[#F28C28] hover:bg-[#e07d1a] text-white font-bold px-7 py-3 rounded-full text-base shadow-lg transition-all duration-200 hover:scale-105"
            >
              Explore Services
            </Button>
            <Button
              data-ocid="hero.secondary_button"
              variant="outline"
              onClick={() => scrollToSection("#contact")}
              className="border-white text-white hover:bg-white hover:text-[#0B2E4F] font-bold px-7 py-3 rounded-full text-base bg-transparent transition-all duration-200"
            >
              Contact Us
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white/10 to-transparent" />
    </section>
  );
}

function ServiceCard({
  service,
  index,
}: { service: (typeof services)[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={visible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      data-ocid={`services.item.${index + 1}`}
      className="group bg-white rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1.5 overflow-hidden flex flex-col"
    >
      <div className="overflow-hidden">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-5 flex flex-col flex-1">
        <h3 className="text-[#0B2E4F] font-bold text-lg mb-2 font-heading">
          {service.title}
        </h3>
        <p className="text-[#5B6672] text-sm leading-relaxed flex-1">
          {service.description}
        </p>
        <button
          type="button"
          onClick={() => scrollToSection("#contact")}
          className="inline-flex items-center gap-1 text-[#F28C28] font-semibold text-sm mt-4 hover:gap-2 transition-all duration-200 self-start"
        >
          Learn More <ChevronRight size={16} />
        </button>
      </div>
    </motion.div>
  );
}

function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-[#F3F5F7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-[#F28C28] font-semibold text-sm uppercase tracking-widest">
            What We Do
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0B2E4F] mt-2 font-heading">
            Our Core Services
          </h2>
          <p className="text-[#5B6672] mt-3 max-w-xl mx-auto text-sm md:text-base">
            Comprehensive IT infrastructure solutions tailored for government
            departments, enterprises, and growing businesses.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyChooseSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.15 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-[#F28C28] font-semibold text-sm uppercase tracking-widest">
            Our Strengths
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0B2E4F] mt-2 font-heading">
            Why Choose TPT?
          </h2>
          <p className="text-[#5B6672] mt-3 max-w-lg mx-auto text-sm md:text-base">
            Built on a foundation of expertise, trust, and a relentless
            commitment to uptime.
          </p>
        </div>

        <div
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {whyChoose.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 28 }}
                animate={visible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                data-ocid={`about.item.${i + 1}`}
                className="bg-[#F3F5F7] rounded-2xl p-6 text-center hover:shadow-card transition-shadow duration-300"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 bg-[#0B2E4F]/10 rounded-full mb-4">
                  <Icon className="text-[#F28C28]" size={26} />
                </div>
                <h3 className="text-[#0B2E4F] font-bold text-base mb-2 font-heading">
                  {item.title}
                </h3>
                <p className="text-[#5B6672] text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function CTABanner() {
  return (
    <section className="py-16 bg-[#0B2E4F] relative overflow-hidden">
      <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-white/5" />
      <div className="absolute -bottom-12 -left-12 w-48 h-48 rounded-full bg-[#F28C28]/10" />
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4 font-heading">
          Ready to Upgrade Your IT Infrastructure?
        </h2>
        <p className="text-gray-300 text-base md:text-lg mb-8 max-w-xl mx-auto">
          Get in touch with our experts for a free consultation and customized
          quote.
        </p>
        <Button
          data-ocid="cta.primary_button"
          onClick={() => scrollToSection("#contact")}
          className="bg-[#F28C28] hover:bg-[#e07d1a] text-white font-bold px-8 py-3 rounded-full text-base shadow-lg transition-all duration-200 hover:scale-105"
        >
          Contact Us Today
        </Button>
      </div>
    </section>
  );
}

function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setForm({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 bg-[#F3F5F7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-[#F28C28] font-semibold text-sm uppercase tracking-widest">
            Reach Out
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0B2E4F] mt-2 font-heading">
            Get In Touch
          </h2>
          <p className="text-[#5B6672] mt-3 max-w-lg mx-auto text-sm md:text-base">
            We&apos;d love to hear from you. Fill in the form below and our team
            will get back to you within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Info */}
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-11 h-11 bg-[#0B2E4F] rounded-xl flex items-center justify-center">
                <Phone className="text-[#F28C28]" size={20} />
              </div>
              <div>
                <p className="text-[#0B2E4F] font-bold text-sm">Phone</p>
                <p className="text-[#5B6672] text-sm">+91-XXXXXXXXXX</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-11 h-11 bg-[#0B2E4F] rounded-xl flex items-center justify-center">
                <Mail className="text-[#F28C28]" size={20} />
              </div>
              <div>
                <p className="text-[#0B2E4F] font-bold text-sm">Email</p>
                <p className="text-[#5B6672] text-sm">info@tptservices.in</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-11 h-11 bg-[#0B2E4F] rounded-xl flex items-center justify-center">
                <MapPin className="text-[#F28C28]" size={20} />
              </div>
              <div>
                <p className="text-[#0B2E4F] font-bold text-sm">Address</p>
                <p className="text-[#5B6672] text-sm">New Delhi, India</p>
              </div>
            </div>

            <div className="mt-8 p-6 bg-[#0B2E4F] rounded-2xl">
              <p className="text-white font-bold mb-1">Business Hours</p>
              <p className="text-gray-300 text-sm">
                Monday – Saturday: 9:00 AM – 6:00 PM
              </p>
              <p className="text-gray-300 text-sm">
                24/7 Emergency Support Available
              </p>
            </div>
          </div>

          {/* Form */}
          <form
            data-ocid="contact.panel"
            onSubmit={handleSubmit}
            className="bg-white rounded-2xl shadow-card p-8 space-y-4"
          >
            {submitted && (
              <div
                data-ocid="contact.success_state"
                className="bg-green-50 text-green-800 border border-green-200 rounded-lg px-4 py-3 text-sm font-medium"
              >
                ✓ Thank you! We&apos;ll be in touch soon.
              </div>
            )}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="contact-name"
                  className="block text-[#0B2E4F] text-xs font-semibold mb-1"
                >
                  Name *
                </label>
                <input
                  id="contact-name"
                  data-ocid="contact.input"
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) =>
                    setForm((p) => ({ ...p, name: e.target.value }))
                  }
                  placeholder="Your Name"
                  className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm text-[#0B2E4F] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#F28C28]/40 focus:border-[#F28C28] transition"
                />
              </div>
              <div>
                <label
                  htmlFor="contact-email"
                  className="block text-[#0B2E4F] text-xs font-semibold mb-1"
                >
                  Email *
                </label>
                <input
                  id="contact-email"
                  data-ocid="contact.input"
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) =>
                    setForm((p) => ({ ...p, email: e.target.value }))
                  }
                  placeholder="you@email.com"
                  className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm text-[#0B2E4F] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#F28C28]/40 focus:border-[#F28C28] transition"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="contact-phone"
                className="block text-[#0B2E4F] text-xs font-semibold mb-1"
              >
                Phone
              </label>
              <input
                id="contact-phone"
                data-ocid="contact.input"
                type="tel"
                value={form.phone}
                onChange={(e) =>
                  setForm((p) => ({ ...p, phone: e.target.value }))
                }
                placeholder="+91 XXXXX XXXXX"
                className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm text-[#0B2E4F] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#F28C28]/40 focus:border-[#F28C28] transition"
              />
            </div>
            <div>
              <label
                htmlFor="contact-message"
                className="block text-[#0B2E4F] text-xs font-semibold mb-1"
              >
                Message *
              </label>
              <textarea
                id="contact-message"
                data-ocid="contact.textarea"
                required
                value={form.message}
                onChange={(e) =>
                  setForm((p) => ({ ...p, message: e.target.value }))
                }
                rows={4}
                placeholder="Tell us about your requirement..."
                className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm text-[#0B2E4F] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#F28C28]/40 focus:border-[#F28C28] transition resize-none"
              />
            </div>
            <Button
              type="submit"
              data-ocid="contact.submit_button"
              className="w-full bg-[#F28C28] hover:bg-[#e07d1a] text-white font-bold py-2.5 rounded-lg transition-all duration-200"
            >
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#0B2E4F] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <img
              src="/assets/generated/tpt-logo-transparent.dim_400x150.png"
              alt="TPT Services and Solutions"
              className="h-10 w-auto object-contain mb-3 brightness-0 invert"
            />
            <p className="text-gray-400 text-sm leading-relaxed">
              Delivering trusted IT infrastructure, networking, surveillance,
              and automation solutions to government and private sector clients
              across India.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-widest text-[#F28C28] mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    data-ocid="nav.link"
                    className="text-gray-400 hover:text-white text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-widest text-[#F28C28] mb-4">
              Services
            </h4>
            <ul className="space-y-2">
              {services.map((s) => (
                <li key={s.id}>
                  <a
                    href="#services"
                    className="text-gray-400 hover:text-white text-sm transition-colors duration-200"
                  >
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-widest text-[#F28C28] mb-4">
              Contact Us
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-gray-400 text-sm">
                <Phone size={14} className="text-[#F28C28] flex-shrink-0" />
                +91-XXXXXXXXXX
              </li>
              <li className="flex items-center gap-2 text-gray-400 text-sm">
                <Mail size={14} className="text-[#F28C28] flex-shrink-0" />
                info@tptservices.in
              </li>
              <li className="flex items-start gap-2 text-gray-400 text-sm">
                <MapPin
                  size={14}
                  className="text-[#F28C28] flex-shrink-0 mt-0.5"
                />
                New Delhi, India
              </li>
            </ul>
            {/* Social */}
            <div className="flex gap-3 mt-5">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#F28C28] flex items-center justify-center transition-colors duration-200"
              >
                <SiLinkedin size={14} />
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter / X"
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#F28C28] flex items-center justify-center transition-colors duration-200"
              >
                <SiX size={14} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#F28C28] flex items-center justify-center transition-colors duration-200"
              >
                <SiFacebook size={14} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-gray-500">
          <p>© {year} TPT Services and Solutions. All Rights Reserved.</p>
          <p>
            Built with ❤️ using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

// ---------- MAIN APP ----------

export default function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar scrolled={scrolled} />
      <main className="pt-16 md:pt-20">
        <HeroSection />
        <ServicesSection />
        <WhyChooseSection />
        <CTABanner />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
