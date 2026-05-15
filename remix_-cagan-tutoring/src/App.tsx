/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { CheckCircle2, Mail, Phone, MapPin, Star, ArrowRight, GraduationCap, BookOpen, PenTool } from "lucide-react";

export default function App() {
  const testimonials = [
    {
      quote:
        "Working with Cagan has been exactly what our student needed. Her 1:1 approach covers the full picture (testing technique, question strategy, and time management), and she built a custom learning plan based on our daughter's specific knowledge gaps, so every session was targeted and useful. We specifically wanted something more personalized than a learning center, and she delivered.",
      name: "Parent of an 11th Grade Student",
    },
    {
      quote:
        "Cagan explains difficult concepts in a way that finally clicks. She helped me improve my testing strategy and stay motivated week to week.",
      name: "12th Grade Student",
    },
  ];

  const services = [
    {
      title: "ACT & SAT Prep",
      icon: <Star className="w-6 h-6 text-terra-cotta" />,
      description:
        "Personalized one-on-one coaching focused on strategy, timing, confidence, and measurable score improvement.",
    },
    {
      title: "High School Subject Tutoring",
      icon: <BookOpen className="w-6 h-6 text-terra-cotta" />,
      description:
        "Support in Math, Science, English, and Computer Science, including honors and AP-level coursework.",
    },
    {
      title: "College Essay & Academic Coaching",
      icon: <PenTool className="w-6 h-6 text-terra-cotta" />,
      description:
        "Thoughtful support with writing, organization, study habits, and academic confidence.",
    },
  ];

  const processSteps = [
    "Initial assessment to understand goals, strengths, and gaps",
    "Personalized learning plan tailored to the student",
    "Targeted homework and progress tracking between sessions",
    "Focused 1:1 sessions designed to build skills and confidence",
  ];

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    viewport: { once: true },
    transition: { staggerChildren: 0.1 }
  };

  return (
    <div className="min-h-screen bg-bg-warm text-text-main font-sans selection:bg-sage-light selection:text-sage-dark">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-sage-light">
        <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-sage-dark rounded-lg flex items-center justify-center text-white font-bold">C</div>
            <span className="font-serif italic font-bold text-xl tracking-tight">Cagan Hawthorne Tutoring</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-sm font-medium text-text-muted hover:text-sage-dark transition-colors">About</a>
            <a href="#services" className="text-sm font-medium text-text-muted hover:text-sage-dark transition-colors">Services</a>
            <a href="#pricing" className="text-sm font-medium text-text-muted hover:text-sage-dark transition-colors">Pricing</a>
            <a href="#contact" className="bg-sage-dark text-white px-4 py-2 rounded-xl text-sm font-semibold hover:bg-sage-dark/90 transition-all shadow-sm hover:shadow-md">Get Started</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-sage-dark text-white">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_50%_120%,rgba(232,237,232,0.5),transparent_50%)]"></div>
        <div className="mx-auto max-w-6xl px-6 lg:px-8 relative">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium tracking-wide backdrop-blur-sm border border-white/10 uppercase">
                <MapPin className="w-4 h-4 text-sage-light" />
                Seattle Area • Virtual Nationwide
              </div>
              <h1 className="font-serif text-4xl font-normal leading-[1.1] sm:text-5xl lg:text-6xl tracking-tight">
                Academic success starts with <span className="italic text-sage-light">confidence.</span>
              </h1>
              <p className="mt-8 max-w-xl text-lg leading-relaxed opacity-90">
                Personalized ACT/SAT prep and STEM tutoring tailored to each student’s unique learning style and goals.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="#contact"
                  className="group rounded-full bg-white px-8 py-4 text-base font-bold text-sage-dark shadow-xl transition-all hover:-translate-y-1 hover:shadow-2xl flex items-center gap-2"
                >
                  Book a Consultation
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="#services"
                  className="rounded-full border border-white/30 px-8 py-4 text-base font-bold text-white transition-all hover:bg-white/10 backdrop-blur-sm"
                >
                  Explore Services
                </a>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="rounded-[2.5rem] bg-white/10 p-8 shadow-2xl backdrop-blur-md border border-white/10 relative z-10">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="rounded-3xl bg-white p-6 text-text-main shadow-lg border border-sage-light">
                    <div className="text-4xl font-serif text-terra-cotta">36</div>
                    <div className="mt-2 text-xs font-bold text-text-muted uppercase tracking-widest">Perfect ACT score x2</div>
                  </div>
                  <div className="rounded-3xl bg-white p-6 text-text-main shadow-lg border border-sage-light">
                    <div className="text-4xl font-serif text-terra-cotta">1:1</div>
                    <div className="mt-2 text-xs font-bold text-text-muted uppercase tracking-widest">Personalized Focus</div>
                  </div>
                  <div className="rounded-3xl bg-white p-8 text-text-main shadow-lg sm:col-span-2 border border-sage-light">
                    <div className="text-xl font-serif font-bold flex items-center gap-2 text-sage-dark">
                      <GraduationCap className="w-6 h-6" />
                      What families can expect
                    </div>
                    <ul className="mt-6 space-y-4">
                      {[
                        "Structured plans and progress tracking",
                        "Support for both test prep and school success",
                        "Clear explanations that make difficult topics click"
                      ].map((item) => (
                        <li key={item} className="flex items-start gap-3 text-text-muted">
                          <div className="w-1.5 h-1.5 bg-terra-cotta rounded-full shrink-0 mt-2" />
                          <span className="text-sm leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="mx-auto max-w-6xl px-6 py-24 lg:px-8" id="about">
        <div className="grid gap-16 lg:grid-cols-2 items-center">
          <motion.div 
            {...fadeIn}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl relative z-10">
              <img 
                src="/profile.jpeg" 
                alt="Cagan Hawthorne" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-white/20 rounded-[3rem]"></div>
            </div>
            {/* Decorative background element */}
            <div className="absolute -bottom-6 -left-6 w-full h-full bg-sage-light rounded-[3rem] -z-0"></div>
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-terra-cotta/20 rounded-full blur-3xl -z-0"></div>
          </motion.div>

          <motion.div {...fadeIn}>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-terra-cotta">
              About
            </p>
            <h2 className="mt-4 font-serif text-3xl font-normal tracking-tight sm:text-4xl lg:text-5xl text-sage-dark">
              Meet Cagan Hawthorne
            </h2>
            <div className="mt-8 space-y-6 text-lg leading-relaxed text-text-main">
              <p>
                I’m a certified ACT/SAT and academic tutor with a background in
                computer science, STEM instruction, and design. My approach is
                structured, encouraging, and highly individualized.
              </p>
              <p>
                After earning a perfect ACT score twice and working at a
                nationally recognized learning center, I built my own tutoring
                practice to offer families the same proven methods in a more
                personal, flexible, and cost-effective format.
              </p>
            </div>

            <div className="mt-12 space-y-4">
              <h3 className="font-serif text-xl font-bold text-sage-dark">What sets this apart</h3>
              <div className="grid gap-3">
                {[
                  "Proven methods without the inflated cost of national programs",
                  "Tailored support for each student's strengths and challenges",
                  "Strong subject-matter support across core high school disciplines",
                  "A teaching style that builds both results and confidence",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3 text-text-muted">
                    <CheckCircle2 className="w-5 h-5 text-terra-cotta shrink-0 text-sm" />
                    <span className="text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-white py-24 border-y border-sage-light" id="services">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <motion.div {...fadeIn} className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-terra-cotta">
              Services
            </p>
            <h2 className="mt-4 font-serif text-3xl font-normal tracking-tight sm:text-4xl lg:text-5xl text-sage-dark">
              Specialized Support
            </h2>
          </motion.div>
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="mt-16 grid gap-8 md:grid-cols-3"
          >
            {services.map((service) => (
              <motion.div
                key={service.title}
                variants={fadeIn}
                className="group rounded-[2.5rem] border border-sage-light bg-bg-warm p-10 shadow-sm transition-all hover:-translate-y-2 hover:shadow-md hover:bg-white"
              >
                <div className="w-14 h-14 bg-sage-light rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="font-serif text-2xl font-bold text-text-main">{service.title}</h3>
                <p className="mt-6 leading-relaxed text-text-muted">{service.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="mx-auto max-w-6xl px-6 py-24 lg:px-8" id="process">
        <div className="grid gap-16 lg:grid-cols-[0.9fr,1.1fr] lg:items-center">
          <motion.div {...fadeIn}>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-terra-cotta">
              How it works
            </p>
            <h2 className="mt-4 font-serif text-3xl font-normal tracking-tight sm:text-4xl lg:text-5xl text-sage-dark">
              A thoughtful, structured process
            </h2>
            <p className="mt-8 text-lg leading-relaxed text-text-muted">
              Every student starts with a clear plan and ongoing support that is
              designed to make progress visible and sustainable.
            </p>
          </motion.div>
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid gap-6"
          >
            {processSteps.map((step, index) => (
              <motion.div
                key={step}
                variants={fadeIn}
                className="flex gap-6 rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-sage-light hover:ring-terra-cotta/30 transition-all"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-sage-dark text-lg font-bold text-white shadow-lg shadow-sage-dark/10">
                  {index + 1}
                </div>
                <p className="pt-2 text-lg font-medium text-text-main leading-snug">{step}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-sage-light py-24 text-text-main relative overflow-hidden" id="testimonials">
        <div className="mx-auto max-w-6xl px-6 lg:px-8 relative">
          <motion.div {...fadeIn} className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-terra-cotta">
              Testimonials
            </p>
            <h2 className="mt-4 font-serif text-3xl font-normal tracking-tight sm:text-4xl lg:text-5xl text-sage-dark">
              What families and students say
            </h2>
          </motion.div>
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="mt-16 grid gap-8 lg:grid-cols-3"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                variants={fadeIn}
                className={`rounded-[2.5rem] bg-white p-10 shadow-sm border border-sage-light flex flex-col justify-between ${index === 0 ? 'lg:col-span-2' : ''}`}
              >
                <p className="text-xl italic font-serif leading-relaxed text-sage-dark">“{testimonial.quote}”</p>
                <div className="mt-10 pt-8 border-t border-sage-light">
                  <p className="text-xs font-bold uppercase tracking-widest text-text-muted">
                    {testimonial.name}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="mx-auto max-w-6xl px-6 py-24 lg:px-8" id="pricing">
        <motion.div {...fadeIn} className="max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-terra-cotta">
            Pricing
          </p>
          <h2 className="mt-4 font-serif text-3xl font-normal tracking-tight sm:text-4xl lg:text-5xl text-sage-dark">
            Clear, straightforward pricing
          </h2>
        </motion.div>
        <motion.div 
          {...fadeIn}
          className="mt-16 overflow-hidden rounded-[2.5rem] bg-white shadow-sm ring-1 ring-sage-light"
        >
          <div className="grid border-b border-sage-light bg-bg-warm px-8 py-6 text-xs font-bold uppercase tracking-widest text-text-muted sm:grid-cols-3">
            <div>Service</div>
            <div>Rate</div>
            <div>Notes</div>
          </div>
          {[
            {
              service: "ACT/SAT Prep",
              rate: "$75 / 55-minute session",
              notes: "$200 one-time technology & platform fee",
            },
            {
              service: "High School Subject Tutoring",
              rate: "$75 / 55-minute session",
              notes: "No setup fee",
            },
          ].map((row) => (
            <div
              key={row.service}
              className="grid gap-4 border-b border-sage-light px-8 py-8 last:border-b-0 sm:grid-cols-3 sm:gap-8 hover:bg-bg-warm transition-colors"
            >
              <div className="font-serif font-bold text-xl text-text-main">{row.service}</div>
              <div className="text-lg font-semibold text-terra-cotta">{row.rate}</div>
              <div className="text-text-muted leading-relaxed">{row.notes}</div>
            </div>
          ))}
        </motion.div>
      </section>

      {/* Contact Section */}
      <section className="mx-auto max-w-6xl px-6 pb-24 lg:px-8" id="contact">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="rounded-[3rem] bg-sage-dark p-12 lg:p-20 text-white text-center relative overflow-hidden shadow-2xl shadow-sage-dark/10"
        >
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="font-serif text-4xl font-normal tracking-tight sm:text-5xl">
              Ready to get started?
            </h2>
            <p className="mt-8 text-xl leading-relaxed opacity-90">
              Book an initial consultation to discuss your student’s goals, current
              challenges, and the best path forward.
            </p>
            <div className="mt-12 flex flex-col items-center justify-center gap-6 sm:flex-row">
              <a
                href="mailto:cagan123@gmail.com"
                className="group w-full sm:w-auto rounded-full bg-white px-10 py-5 font-bold text-sage-dark shadow-xl transition-all hover:-translate-y-1 hover:shadow-2xl flex items-center justify-center gap-3"
              >
                <Mail className="w-5 h-5" />
                Email Cagan
              </a>
              <a
                href="tel:6306325576"
                className="w-full sm:w-auto rounded-full border-2 border-white/30 px-10 py-5 font-bold text-white transition-all hover:bg-white/10 backdrop-blur-sm flex items-center justify-center gap-3"
              >
                <Phone className="w-5 h-5" />
                Call 630-632-5576
              </a>
            </div>
            <div className="mt-12 pt-12 border-t border-white/10 flex flex-col sm:flex-row items-center justify-center gap-8 opacity-80">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest">
                <MapPin className="w-4 h-4" />
                Seattle Area
              </div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest">
                <Star className="w-4 h-4" />
                Virtual Nationwide
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-sage-light py-12">
        <div className="mx-auto max-w-6xl px-6 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-sage-dark rounded flex items-center justify-center text-white text-xs font-bold">C</div>
            <span className="font-serif italic font-bold text-lg tracking-tight">Cagan Hawthorne Tutoring</span>
          </div>
          <p className="text-sm text-text-muted">
            © {new Date().getFullYear()} Cagan Hawthorne Tutoring. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-text-muted hover:text-terra-cotta transition-colors"><Mail className="w-5 h-5" /></a>
            <a href="#" className="text-text-muted hover:text-terra-cotta transition-colors"><Phone className="w-5 h-5" /></a>
          </div>
        </div>
      </footer>
    </div>
  );
}
