import { useEffect, useRef, useState } from 'react'
import { motion, useInView, useSpring, useTransform } from 'framer-motion'
import {
  ArrowRight,
  Bot,
  Building2,
  CalendarDays,
  Check,
  ChevronDown,
  Clock3,
  Code2,
  Globe2,
  Headphones,
  LayoutDashboard,
  Menu,
  MessageCircle,
  MonitorSmartphone,
  Palette,
  Search,
  Send,
  ShieldCheck,
  ShoppingCart,
  Sparkles,
  Star,
  Target,
  TrendingUp,
  WandSparkles,
  X,
  Zap,
} from 'lucide-react'

const whatsappNumber = '917018151542'
const whatsappDisplayNumber = '+91 70181 51542'
const quickWhatsAppUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
  'Hi, I have a query about website development and AI automation services.',
)}`

const navItems = ['Services', 'Work', 'Process', 'Pricing', 'FAQ']

const services = [
  {
    icon: Globe2,
    title: 'Business Website Development',
    text: 'Premium responsive websites built to position your business as the obvious choice.',
  },
  {
    icon: WandSparkles,
    title: 'Custom Website Design',
    text: 'Premium custom websites planned around your business goals, brand, audience, and offers.',
  },
  {
    icon: ShoppingCart,
    title: 'eCommerce Development',
    text: 'Fast, polished stores with product pages, checkout flows, and conversion tracking.',
  },
  {
    icon: LayoutDashboard,
    title: 'Dashboard Development',
    text: 'Custom admin panels, analytics dashboards, CRM views, and internal business tools.',
  },
  {
    icon: Code2,
    title: 'Web App Development',
    text: 'Interactive booking systems, portals, calculators, SaaS tools, and custom workflows.',
  },
  {
    icon: Palette,
    title: 'Portfolio Websites',
    text: 'Premium portfolios for coaches, consultants, creators, agencies, and professionals.',
  },
  {
    icon: LayoutDashboard,
    title: 'Landing Page Design',
    text: 'Campaign-ready pages designed for leads, bookings, calls, and paid traffic.',
  },
  {
    icon: Search,
    title: 'SEO Optimization',
    text: 'Technical SEO, local search foundations, and content structure that helps buyers find you.',
  },
  {
    icon: ShieldCheck,
    title: 'Website Maintenance',
    text: 'Reliable updates, backups, speed checks, security monitoring, and ongoing improvements.',
  },
  {
    icon: Bot,
    title: 'AI Automation',
    text: 'Custom AI workflows for lead capture, support, follow-ups, reports, and internal tools.',
  },
  {
    icon: Palette,
    title: 'Branding & UI/UX',
    text: 'Visual identity, interface systems, and user journeys that feel premium and trustworthy.',
  },
]

const benefits = [
  ['Basic site in 24 hours', Clock3],
  ['Mobile optimized', MonitorSmartphone],
  ['SEO friendly', Search],
  ['AI-powered workflows', Bot],
  ['Affordable pricing', TrendingUp],
  ['24/7 support', Headphones],
  ['Custom design', Palette],
  ['Conversion focused', Target],
]

const portfolio = [
  {
    title: 'Dental Website',
    subtitle: 'Clinic booking platform',
    image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Restaurant Website',
    subtitle: 'Reservations and menus',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Real Estate Website',
    subtitle: 'Listings and agent leads',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Business Website',
    subtitle: 'Corporate lead engine',
    image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'eCommerce Store',
    subtitle: 'Modern product storefront',
    image: 'https://images.unsplash.com/photo-1607082350899-7e105aa886ae?auto=format&fit=crop&w=900&q=80',
  },
]

const showcaseProjects = [
  {
    tab: 'Web Apps',
    title: 'Booking Web App',
    headline: 'Book your next appointment',
    subtitle: 'Appointments, services, payments, and WhatsApp reminders in one premium web app.',
    eyebrow: 'Salon appointment system',
    metric: '42% fewer no-shows',
    gradient: 'from-slate-950 via-zinc-800 to-stone-700',
    image: 'https://img1.wsimg.com/cdnassets/transform/2957ef71-a947-41f0-ac36-efe93b054e9f/AI_builder_example_WebApp',
    palette: 'bg-[#f1efea]',
    icon: CalendarDays,
    sideTitle: 'Service scheduler',
    sideCopy: 'Calendar, staff slots, service menu, and WhatsApp confirmation flow.',
  },
  {
    tab: 'Websites',
    title: 'Premium Business Website',
    headline: 'A website that turns visitors into leads',
    subtitle: 'Trust sections, service pages, SEO structure, WhatsApp CTA, and inquiry forms.',
    eyebrow: 'Dental clinic website',
    metric: '3.1x more calls',
    gradient: 'from-cyan-500 via-blue-600 to-slate-900',
    image: 'https://img1.wsimg.com/cdnassets/transform/b913484d-d3dd-4824-a8db-c25a6f38cd1d/Example-Website',
    palette: 'bg-cyan-50',
    icon: Globe2,
    sideTitle: 'Lead generation site',
    sideCopy: 'Hero CTA, services, testimonials, doctor profile, gallery, and location SEO.',
  },
  {
    tab: 'Online Stores',
    title: 'Premium Online Store',
    headline: 'Launch your premium online store',
    subtitle: 'Product storytelling, collections, cart flow, offers, and mobile checkout.',
    eyebrow: 'Italian food store',
    metric: '28% higher AOV',
    gradient: 'from-amber-200 via-stone-400 to-rose-300',
    image: 'https://img1.wsimg.com/cdnassets/transform/5b47488c-7e19-4ac9-8b7a-657c2ff081c5/AI_builder_example_OLS',
    palette: 'bg-stone-100',
    icon: ShoppingCart,
    sideTitle: 'eCommerce storefront',
    sideCopy: 'Collections, product pages, sale badges, cart, checkout, and order tracking.',
  },
  {
    tab: 'Dashboards',
    title: 'Business Dashboard',
    headline: 'Run your business from one dashboard',
    subtitle: 'Track leads, revenue, appointments, tasks, support, and campaign performance.',
    eyebrow: 'Founder command center',
    metric: '8 hrs saved weekly',
    gradient: 'from-emerald-400 via-teal-500 to-slate-900',
    image: 'https://img1.wsimg.com/cdnassets/transform/a01e5af4-3f2a-4baa-b144-d878e856d9bd/AI_builder_example_Dashboard',
    palette: 'bg-emerald-50',
    icon: LayoutDashboard,
    sideTitle: 'Operations dashboard',
    sideCopy: 'Charts, tables, filters, team tasks, customer records, and daily summaries.',
  },
  {
    tab: 'Portfolios',
    title: 'Premium Portfolio',
    headline: 'Show your best work beautifully',
    subtitle: 'A visual brand showcase for consultants, creators, studios, and agencies.',
    eyebrow: 'Creative studio portfolio',
    metric: '64% more inquiries',
    gradient: 'from-violet-300 via-fuchsia-300 to-slate-800',
    image: 'https://img1.wsimg.com/cdnassets/transform/f00b4a55-056b-45e3-a8c1-1e41d58f222b/AI_builder_example_Portfolio',
    palette: 'bg-violet-50',
    icon: Palette,
    sideTitle: 'Project gallery',
    sideCopy: 'Case studies, visual galleries, service packages, bio, and inquiry funnel.',
  },
]

const process = [
  ['Consultation', 'We understand your goals, audience, offers, and current bottlenecks.'],
  ['Strategy', 'We map pages, content, automation opportunities, and conversion goals.'],
  ['Design', 'We create a premium visual direction with responsive layouts and clear CTAs.'],
  ['Development', 'We build the site with speed, SEO, tracking, and integrations in mind.'],
  ['Launch', 'We test, optimize, connect forms, and make your new website live.'],
  ['Support', 'We monitor, maintain, and improve your digital growth system after launch.'],
]

const testimonials = [
  {
    name: 'Priya Sharma',
    company: 'SmileCraft Dental',
    initials: 'PS',
    text: 'Our new website looks premium, loads fast, and started bringing in consultation requests within the first week.',
  },
  {
    name: 'Daniel Brooks',
    company: 'Northline Realty',
    initials: 'DB',
    text: 'They understood exactly how local service businesses sell online. The design, copy, and automation saved us hours every week.',
  },
  {
    name: 'Maya Patel',
    company: 'Urban Table Co.',
    initials: 'MP',
    text: 'The site finally matches the quality of our brand. Online orders and private event inquiries are much easier now.',
  },
]

const pricing = [
  {
    name: 'Starter',
    price: '₹14,999',
    text: 'For new businesses that need a simple, polished website launched fast.',
    features: ['24-hour basic site option', '5-page website', 'Mobile responsive', 'Contact form', 'Basic SEO setup'],
  },
  {
    name: 'Business',
    price: '₹29,999',
    text: 'For growing companies that need stronger conversion and content.',
    features: ['10-page website', 'Booking or CRM integration', 'Copywriting support', 'Analytics setup'],
    highlighted: true,
  },
  {
    name: 'Premium',
    price: '₹59,999+',
    text: 'For brands that need custom design, eCommerce, and AI automation.',
    features: ['Custom UI/UX', 'AI workflows', 'eCommerce or portal', 'Priority support'],
  },
]

const faqs = [
  ['How fast can you launch a website?', 'A basic simple website can be launched in 24 hours when content and brand details are ready. Larger custom sites usually take 10 to 21 days depending on page count and integrations.'],
  ['Do you write the website content?', 'Yes. We can refine your existing content or create conversion-focused copy for your pages, offers, and CTAs.'],
  ['Can you build AI tools for my business?', 'Yes. We build automations for lead capture, customer replies, internal dashboards, follow-ups, and repetitive workflows.'],
  ['Do you support websites after launch?', 'Yes. Maintenance plans include updates, backups, security checks, small edits, and performance monitoring.'],
]

function AnimatedCounter({ value, suffix = '' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const spring = useSpring(0, { stiffness: 70, damping: 18 })
  const rounded = useTransform(spring, (latest) => Math.round(latest))
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (inView) spring.set(value)
    return rounded.on('change', setDisplay)
  }, [inView, rounded, spring, value])

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  )
}

function SectionHeader({ eyebrow, title, text }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6 }}
      className="mx-auto mb-12 max-w-3xl text-center"
    >
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-cyan-500">{eyebrow}</p>
      <h2 className="text-3xl font-black tracking-tight text-slate-950 sm:text-5xl">{title}</h2>
      <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">{text}</p>
    </motion.div>
  )
}

function RequestForm() {
  const [form, setForm] = useState({
    name: '',
    business: '',
    phone: '',
    service: 'Business Website Development',
    budget: '₹15k - ₹30k',
    timeline: '24-hour basic website',
    message: '',
  })

  const updateForm = (event) => {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: value }))
  }

  const submitRequest = (event) => {
    event.preventDefault()

    const message = [
      'Hi, I want to request a website / AI automation consultation.',
      '',
      `Name: ${form.name || 'Not provided'}`,
      `Business: ${form.business || 'Not provided'}`,
      `Phone: ${form.phone || 'Not provided'}`,
      `Service Needed: ${form.service}`,
      `Budget: ${form.budget}`,
      `Timeline: ${form.timeline}`,
      `Project Details: ${form.message || 'Please contact me to discuss.'}`,
    ].join('\n')

    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer')
  }

  return (
    <form onSubmit={submitRequest} className="w-full min-w-0 max-w-full rounded-[1.25rem] border border-white/10 bg-white p-3 text-slate-950 shadow-2xl shadow-slate-950/20 sm:rounded-[1.5rem] sm:p-6">
      <div className="mb-3 flex items-center gap-3 sm:mb-4">
        <span className="grid h-10 w-10 shrink-0 place-items-center rounded-2xl bg-emerald-500 text-white sm:h-11 sm:w-11">
          <MessageCircle className="h-4 w-4 sm:h-5 sm:w-5" />
        </span>
        <div className="min-w-0">
          <h3 className="text-base font-black leading-tight sm:text-xl">Send request on WhatsApp</h3>
          <p className="text-xs text-slate-500 sm:text-sm">Creates a ready-to-send message template.</p>
        </div>
      </div>

      <div className="grid gap-2 sm:grid-cols-2 sm:gap-3">
        <label className="grid gap-1.5 text-xs font-bold text-slate-700 sm:gap-2 sm:text-sm">
          Name
          <input name="name" value={form.name} onChange={updateForm} className="w-full min-w-0 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm outline-none transition focus:border-cyan-400 focus:bg-white sm:py-3" placeholder="Your name" />
        </label>
        <label className="grid gap-1.5 text-xs font-bold text-slate-700 sm:gap-2 sm:text-sm">
          Phone
          <input name="phone" value={form.phone} onChange={updateForm} className="w-full min-w-0 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm outline-none transition focus:border-cyan-400 focus:bg-white sm:py-3" placeholder="Your phone number" />
        </label>
      </div>

      <label className="mt-2 grid gap-1.5 text-xs font-bold text-slate-700 sm:mt-3 sm:gap-2 sm:text-sm">
        Business Name
        <input name="business" value={form.business} onChange={updateForm} className="w-full min-w-0 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm outline-none transition focus:border-cyan-400 focus:bg-white sm:py-3" placeholder="Company, clinic, restaurant, or brand" />
      </label>

      <div className="mt-2 grid gap-2 sm:mt-3 sm:grid-cols-2 sm:gap-3">
        <label className="grid gap-1.5 text-xs font-bold text-slate-700 sm:gap-2 sm:text-sm">
          Service
          <select name="service" value={form.service} onChange={updateForm} className="w-full min-w-0 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm outline-none transition focus:border-cyan-400 focus:bg-white sm:py-3">
            {services.map((service) => <option key={service.title}>{service.title}</option>)}
          </select>
        </label>
        <label className="grid gap-1.5 text-xs font-bold text-slate-700 sm:gap-2 sm:text-sm">
          Budget
          <select name="budget" value={form.budget} onChange={updateForm} className="w-full min-w-0 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm outline-none transition focus:border-cyan-400 focus:bg-white sm:py-3">
            <option>₹15k - ₹30k</option>
            <option>₹30k - ₹60k</option>
            <option>₹60k - ₹1L</option>
            <option>₹1L+</option>
          </select>
        </label>
      </div>

      <label className="mt-2 grid gap-1.5 text-xs font-bold text-slate-700 sm:mt-3 sm:gap-2 sm:text-sm">
        Timeline
        <select name="timeline" value={form.timeline} onChange={updateForm} className="w-full min-w-0 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm outline-none transition focus:border-cyan-400 focus:bg-white sm:py-3">
          <option>24-hour basic website</option>
          <option>Within 2 weeks</option>
          <option>Within 1 month</option>
          <option>Flexible timeline</option>
          <option>Urgent launch</option>
        </select>
      </label>

      <label className="mt-2 grid gap-1.5 text-xs font-bold text-slate-700 sm:mt-3 sm:gap-2 sm:text-sm">
        Project Details
        <textarea name="message" value={form.message} onChange={updateForm} rows="2" className="w-full min-w-0 resize-none rounded-2xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm outline-none transition focus:border-cyan-400 focus:bg-white sm:py-3" placeholder="Tell us what you want to build..." />
      </label>

      <button type="submit" className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-full bg-emerald-500 px-6 py-3 font-black text-white shadow-xl shadow-emerald-600/20 transition hover:-translate-y-1 hover:bg-emerald-600 sm:mt-4 sm:py-4">
        Open WhatsApp Request <MessageCircle className="h-5 w-5" />
      </button>
    </form>
  )
}

function PremiumExampleCard({ project, compact = false }) {
  return (
    <div className={`w-full overflow-hidden rounded-[1.55rem] border-[5px] border-[#bbb9d7] bg-white shadow-2xl shadow-slate-900/20 ${compact ? 'p-0' : 'p-0'}`}>
      <img
        src={project.image}
        alt={`${project.tab} premium website example`}
        className="block h-auto w-full select-none object-contain"
        draggable="false"
      />
    </div>
  )
}

function getSlideOffset(index, activeIndex) {
  const total = showcaseProjects.length
  let offset = index - activeIndex

  if (offset > total / 2) offset -= total
  if (offset < -total / 2) offset += total

  return offset
}

function ShowcasePreview({ project, activeProject, setProject, top = false }) {

  return (
    <div className={`relative mx-[calc(50%-50vw)] min-h-[470px] overflow-hidden bg-[#dedfee] px-4 pb-10 sm:min-h-[620px] sm:pb-16 lg:min-h-[760px] lg:pb-20 ${top ? 'pt-24 sm:pt-28 lg:pt-32' : 'mt-8 pt-10 sm:mt-12 sm:pt-14'}`}>
      <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-[#5b5a84] to-transparent" />
      <div className="relative z-30 mx-auto mb-5 max-w-4xl sm:mb-10">
        <div className="flex items-center gap-2 rounded-full border-[4px] border-white bg-white p-2 shadow-[0_0_32px_rgba(34,211,238,0.55)] sm:gap-3 sm:border-[5px] sm:p-3">
          <span className="min-w-0 flex-1 truncate px-3 text-xs font-semibold text-slate-700 sm:px-5 sm:text-base">Need a premium website for my business...</span>
          <a href="#request-form" className="shrink-0 rounded-full bg-slate-950 px-4 py-2.5 text-xs font-black text-white sm:px-7 sm:py-3 sm:text-sm">Request Website</a>
        </div>
        <div className="mt-4 hidden flex-wrap justify-center gap-2 sm:flex">
          {['Business website', 'Online store', 'Dashboard', 'Portfolio'].map((item) => (
            <a key={item} href="#request-form" className="rounded-lg border border-white/15 bg-white/10 px-4 py-2 text-xs font-black text-white shadow-sm backdrop-blur">
              {item} <span aria-hidden="true">-&gt;</span>
            </a>
          ))}
        </div>
      </div>
      <div className="relative z-10 mx-auto h-[330px] max-w-[1180px] sm:h-[560px] lg:h-[760px]">
        {showcaseProjects.map((item, index) => {
          const offset = getSlideOffset(index, activeProject)
          const visible = Math.abs(offset) <= 1
          const isActive = offset === 0

          return (
            <motion.div
              key={item.tab}
              className={`absolute left-1/2 top-0 ${isActive ? 'w-[min(920px,calc(100vw-2rem))]' : 'hidden w-[31rem] lg:block'}`}
              animate={{
                x: isActive ? '-50%' : offset < 0 ? 'calc(-50% - 700px)' : 'calc(-50% + 700px)',
                y: isActive ? 0 : 55,
                rotate: isActive ? 0 : offset < 0 ? -7 : 7,
                scale: isActive ? 1 : 0.88,
                opacity: visible ? 1 : 0,
                zIndex: isActive ? 20 : 5,
              }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              onClick={() => !isActive && setProject(index)}
            >
              <PremiumExampleCard project={item} compact={!isActive} />
            </motion.div>
          )
        })}
      </div>

      <div className="relative z-20 mx-auto -mt-10 flex w-fit max-w-[calc(100vw-2rem)] flex-nowrap justify-start gap-1 overflow-x-auto rounded-full bg-white/70 p-1.5 shadow-sm backdrop-blur sm:-mt-20 sm:justify-center lg:-mt-28">
        {showcaseProjects.map((item, itemIndex) => (
          <button
            key={item.tab}
            type="button"
            onClick={() => setProject(itemIndex)}
            className={`shrink-0 rounded-full px-3.5 py-2.5 text-xs font-black transition sm:px-7 sm:py-3 sm:text-base ${
              item.tab === project.tab ? 'bg-[#3f3f3f] text-white' : 'text-slate-950 hover:bg-white/80'
            }`}
          >
            {item.tab}
          </button>
        ))}
      </div>

    </div>
  )
}
function BuiltProjectsShowcase() {
  const [activeProject, setActiveProject] = useState(0)
  const project = showcaseProjects[activeProject]

  const selectProject = (nextIndex) => {
    setActiveProject(nextIndex)
  }

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveProject((current) => (current + 1) % showcaseProjects.length)
    }, 3500)

    return () => window.clearInterval(timer)
  }, [])

  return <ShowcasePreview project={project} activeProject={activeProject} setProject={selectProject} top />
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [openFaq, setOpenFaq] = useState(0)

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      <nav className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-2xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
          <a href="#home" className="flex items-center gap-3 text-white">
            <span className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-cyan-300 to-lime-300 text-slate-950 shadow-lg shadow-cyan-400/20">
              <Sparkles className="h-5 w-5" />
            </span>
            <span className="text-lg font-black tracking-tight">NexaBuild AI</span>
          </a>
          <div className="hidden items-center gap-8 lg:flex">
            {navItems.map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-sm font-semibold text-white/70 transition hover:text-white">
                {item}
              </a>
            ))}
          </div>
          <div className="hidden items-center gap-3 lg:flex">
            <a href="#work" className="rounded-full px-5 py-3 text-sm font-bold text-white/75 transition hover:text-white">
              View Work
            </a>
            <a href="#request-form" className="rounded-full bg-white px-5 py-3 text-sm font-black text-slate-950 shadow-lg shadow-cyan-500/10 transition hover:-translate-y-0.5 hover:bg-cyan-100">
              Book Free Consultation
            </a>
          </div>
          <button type="button" aria-label="Toggle menu" onClick={() => setMenuOpen(!menuOpen)} className="grid h-11 w-11 place-items-center rounded-full border border-white/15 text-white lg:hidden">
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
        {menuOpen && (
          <div className="border-t border-white/10 bg-slate-950 px-5 py-5 lg:hidden">
            <div className="mx-auto grid max-w-7xl gap-2">
              {navItems.map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)} className="rounded-2xl px-4 py-3 font-semibold text-white/80 hover:bg-white/10">
                  {item}
                </a>
              ))}
              <a href="#request-form" onClick={() => setMenuOpen(false)} className="mt-2 rounded-full bg-cyan-300 px-5 py-3 text-center font-black text-slate-950">
                Book Free Consultation
              </a>
            </div>
          </div>
        )}
      </nav>

      <main>
        <BuiltProjectsShowcase />

        <section id="home" className="relative overflow-hidden bg-slate-950 pt-20 text-white sm:pt-32 lg:pt-36">
          <div className="pointer-events-none absolute inset-0 opacity-60">
            <div className="absolute left-1/2 top-0 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-cyan-400/20 blur-3xl" />
            <div className="absolute -right-28 bottom-20 h-80 w-80 rounded-full bg-fuchsia-400/20 blur-3xl" />
            <div className="hero-grid absolute inset-0" />
          </div>
          <div className="relative mx-auto grid max-w-7xl items-center gap-6 px-5 pb-10 sm:gap-12 sm:pb-20 lg:grid-cols-[0.92fr_1.08fr] lg:gap-14 lg:px-8 lg:pb-28">
            <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <div className="mb-4 inline-flex max-w-full items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-2 text-[11px] font-semibold text-cyan-100 backdrop-blur sm:mb-7 sm:px-4 sm:text-sm">
                <Sparkles className="h-4 w-4 text-cyan-300" />
                <span className="min-w-0 truncate">Basic simple websites can launch in 24 hours</span>
              </div>
              <h1 className="max-w-5xl text-3xl font-black leading-[1] tracking-tight sm:text-6xl lg:text-8xl">
                Request a Premium Website. We Build It.
              </h1>
              <p className="mt-4 max-w-2xl text-sm leading-6 text-slate-300 sm:mt-7 sm:text-lg sm:leading-8 lg:text-xl">
                Clients send their business requirements through WhatsApp or the request form. We design, develop, integrate, and launch professional websites, online stores, dashboards, portfolios, and web apps.
              </p>
              <div className="mt-4 inline-flex max-w-full items-center gap-2 rounded-2xl border border-lime-300/30 bg-lime-300/10 px-3 py-2.5 text-xs font-black text-lime-100 shadow-lg shadow-lime-300/10 sm:mt-5 sm:gap-3 sm:px-4 sm:py-3 sm:text-sm">
                <Clock3 className="h-4 w-4 shrink-0 text-lime-300 sm:h-5 sm:w-5" />
                <span className="min-w-0">24-hour launch for basic sites</span>
              </div>
              <div className="mt-4 grid max-w-2xl grid-cols-2 gap-2 sm:mt-6 sm:flex sm:flex-wrap sm:gap-3">
                {[
                  ['Rebuild my site', Globe2],
                  ['Build an online store', ShoppingCart],
                  ['Create AI automation', Bot],
                  ['Book a launch call', CalendarDays],
                  ['Local business website', Building2],
                ].map(([label, Icon]) => (
                  <a key={label} href="#request-form" className="inline-flex min-w-0 items-center gap-2 rounded-full border border-white/12 bg-white/8 px-3 py-2 text-[11px] font-bold text-white/75 backdrop-blur transition hover:border-cyan-300/50 hover:text-white sm:px-4 sm:text-sm">
                    <Icon className="h-4 w-4 text-cyan-300" />
                    <span className="truncate">{label}</span>
                  </a>
                ))}
              </div>
              <div className="mt-5 grid max-w-xl grid-cols-3 gap-2 sm:mt-10 sm:gap-4">
                {[
                  [24, 'h', 'Basic website option'],
                  [98, '%', 'Client satisfaction'],
                  [35, '%', 'Avg. lead lift'],
                ].map(([value, suffix, label]) => (
                  <div key={label} className="rounded-2xl border border-white/10 bg-white/8 p-2.5 backdrop-blur sm:p-4">
                    <p className="text-lg font-black text-white sm:text-3xl"><AnimatedCounter value={value} suffix={suffix} /></p>
                    <p className="mt-1 text-xs font-medium leading-5 text-white/60">{label}</p>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: 0.1 }}
              className="relative min-w-0"
            >
              <div className="pointer-events-none absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-cyan-400/20 via-fuchsia-400/10 to-lime-300/20 blur-3xl" />
              <div id="request-form" className="relative z-10 w-full min-w-0 scroll-mt-28">
                <RequestForm />
              </div>
            </motion.div>
          </div>
        </section>

        <section id="services" className="relative overflow-hidden bg-slate-50 px-5 py-14 sm:py-20 lg:px-8 lg:py-24">
          <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white to-transparent" />
          <div className="relative mx-auto max-w-7xl">
            <div className="mb-8 grid gap-6 sm:mb-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
              <div>
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-cyan-500">Growth system</p>
                <h2 className="text-3xl font-black tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">One request can become a live basic website in 24 hours</h2>
              </div>
              <div className="grid grid-cols-3 gap-3 rounded-[1.5rem] border border-slate-200 bg-white p-3 shadow-sm">
                {[
                  [24, 'h', 'basic site'],
                  [120, '+', 'launches'],
                  [35, '%', 'lead lift'],
                ].map(([value, suffix, label]) => (
                  <div key={label} className="rounded-2xl bg-slate-950 p-3 text-white sm:p-5">
                    <p className="text-xl font-black sm:text-3xl"><AnimatedCounter value={value} suffix={suffix} /></p>
                    <p className="mt-1 text-xs font-bold uppercase tracking-[0.12em] text-white/45">{label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-6 xl:grid-cols-[0.72fr_1.28fr]">
              <div className="flex h-full flex-col rounded-[2rem] bg-slate-950 p-5 text-white shadow-2xl shadow-slate-950/15 sm:p-7">
                <div className="mb-6 sm:mb-8">
                  <div className="flex flex-wrap gap-2">
                    {['DentalPro', 'UrbanEats', 'RealtyIQ', 'CoachLab'].map((logo) => (
                      <span key={logo} className="rounded-full border border-white/10 bg-white/8 px-4 py-2 text-xs font-black text-white/65">{logo}</span>
                    ))}
                  </div>
                  <p className="mt-6 max-w-sm text-sm leading-6 text-white/45">A compact delivery system for teams that need a basic website fast, or a full custom build with integrations and launch support.</p>
                </div>
                <div className="flex-1 space-y-4">
                  {[
                    ['01', 'Raise request', 'Business type, website goal, pages, budget, timeline, integrations.'],
                    ['02', 'Build system', 'Design, copy structure, responsive development, SEO, tracking.'],
                    ['03', 'Launch growth', 'Basic websites can go live in 24 hours; larger builds include automation, stores, dashboards, and support.'],
                  ].map(([step, title, text]) => (
                    <div key={step} className="group rounded-3xl border border-white/10 bg-white/8 p-4 transition hover:bg-white/12 sm:p-5">
                      <div className="flex gap-4">
                        <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-cyan-300 font-black text-slate-950">{step}</span>
                        <div>
                          <h3 className="text-lg font-black">{title}</h3>
                          <p className="mt-2 text-sm leading-6 text-white/55">{text}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <a href="#request-form" className="mt-5 inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3.5 text-sm font-black text-slate-950 transition hover:-translate-y-1 sm:mt-6 sm:py-4">
                  Start a request <ArrowRight className="h-4 w-4" />
                </a>
              </div>

              <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
                {services.slice(0, 6).map((service, index) => {
                  const Icon = service.icon
                  const image = portfolio[index % portfolio.length].image
                  return (
                    <motion.div
                      key={service.title}
                      initial={{ opacity: 0, y: 24 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: '-80px' }}
                      transition={{ duration: 0.45, delay: index * 0.04 }}
                      className="group overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-950/10"
                    >
                      <div className="relative h-32 overflow-hidden">
                        <img src={image} alt="" className="h-full w-full object-cover transition duration-500 group-hover:scale-110" />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/65 to-transparent" />
                        <div className="absolute bottom-4 left-4 grid h-11 w-11 place-items-center rounded-2xl bg-white text-slate-950">
                          <Icon className="h-5 w-5" />
                        </div>
                      </div>
                      <div className="p-5">
                        <h3 className="text-lg font-black tracking-tight text-slate-950">{service.title}</h3>
                        <p className="mt-3 text-sm leading-7 text-slate-600">{service.text}</p>
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white px-5 py-14 sm:py-20 lg:px-8 lg:py-24">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-cyan-500">Why choose us</p>
              <h2 className="text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">A smarter website partner for modern businesses</h2>
              <p className="mt-6 text-lg leading-8 text-slate-600">
                We combine strategy, design, development, AI tools, and support so your website becomes a real business asset instead of a static brochure.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {benefits.map(([benefit, Icon]) => (
                <div key={benefit} className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-cyan-50 text-cyan-600">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="font-black text-slate-950">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="work" className="overflow-hidden bg-slate-950 px-5 py-14 text-white sm:py-20 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
              <div className="max-w-3xl">
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">Portfolio</p>
                <h2 className="text-4xl font-black tracking-tight sm:text-5xl">Built websites, dashboards, web apps, portfolios, and stores</h2>
                <p className="mt-5 max-w-2xl text-lg leading-8 text-white/60">
                  Show prospects exactly what you can launch: business websites, online stores, booking apps, internal dashboards, and premium portfolio experiences.
                </p>
              </div>
              <a href="#request-form" className="inline-flex w-fit items-center gap-2 rounded-full bg-white px-6 py-3 font-black text-slate-950 transition hover:-translate-y-1">
                Start a project <ArrowRight className="h-5 w-5" />
              </a>
            </div>
            <div className="mt-12 grid gap-6 lg:grid-cols-5">
              {portfolio.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.5, delay: index * 0.06 }}
                  className="group rounded-3xl border border-white/10 bg-white/8 p-4 backdrop-blur transition hover:-translate-y-2 hover:bg-white/12 lg:col-span-1"
                >
                  <div className="overflow-hidden rounded-2xl bg-slate-900 p-2">
                    <div className="mb-2 flex gap-1.5">
                      <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
                      <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
                      <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                    </div>
                    <div className="relative h-40 overflow-hidden rounded-xl">
                      <img src={item.image} alt={`${item.title} example`} className="h-full w-full object-cover transition duration-500 group-hover:scale-110" />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-950/10 to-transparent" />
                      <div className="absolute bottom-3 left-3 right-3">
                        <div className="h-2 w-24 rounded-full bg-white/80" />
                        <div className="mt-2 h-2 w-16 rounded-full bg-white/45" />
                      </div>
                    </div>
                  </div>
                  <h3 className="mt-5 text-lg font-black">{item.title}</h3>
                  <p className="mt-2 text-sm text-white/60">{item.subtitle}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="process" className="bg-white px-5 py-14 sm:py-20 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-slate-950 p-5 text-white shadow-2xl shadow-slate-950/15 sm:p-8 lg:p-12">
            <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
              <div>
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">Process</p>
                <h2 className="text-4xl font-black tracking-tight sm:text-6xl">From request to launch, without confusion</h2>
                <p className="mt-6 text-lg leading-8 text-white/60">A clear build map keeps every website, store, dashboard, or app moving from brief to launch with the right integrations.</p>
                <div className="mt-8 grid grid-cols-3 gap-3">
                  {['Brief', 'Build', 'Launch'].map((item) => (
                    <div key={item} className="rounded-2xl border border-white/10 bg-white/8 p-4 text-center text-sm font-black text-white/70">{item}</div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div className="absolute left-6 top-8 hidden h-[calc(100%-4rem)] w-px bg-gradient-to-b from-cyan-300 via-white/20 to-lime-300 md:block" />
                <div className="grid gap-4">
                  {process.map(([step, text], index) => (
                    <motion.div
                      key={step}
                      initial={{ opacity: 0, x: 24 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: '-80px' }}
                      transition={{ duration: 0.45, delay: index * 0.05 }}
                      className="relative rounded-3xl border border-white/10 bg-white/8 p-5 backdrop-blur transition hover:bg-white/12"
                    >
                      <div className="flex gap-4">
                        <span className="relative z-10 grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-cyan-300 to-lime-300 text-lg font-black text-slate-950">{index + 1}</span>
                        <div>
                          <div className="flex items-center gap-3">
                            <h3 className="text-xl font-black">{step}</h3>
                            <Code2 className="h-4 w-4 text-cyan-300" />
                          </div>
                          <p className="mt-2 leading-7 text-white/55">{text}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-slate-50 px-5 py-14 sm:py-20 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-7xl">
            <SectionHeader eyebrow="Testimonials" title="Proof from businesses like yours" text="Premium design matters, but outcomes matter more. Our clients use their sites to book more calls, sell more services, and save operational time." />
            <div className="grid gap-6 lg:grid-cols-3">
              {testimonials.map((item) => (
                <div key={item.name} className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
                  <div className="mb-6 flex gap-1 text-amber-400">
                    {Array.from({ length: 5 }).map((_, index) => <Star key={index} className="h-5 w-5 fill-current" />)}
                  </div>
                  <p className="text-lg leading-8 text-slate-700">"{item.text}"</p>
                  <div className="mt-8 flex items-center gap-4">
                    <div className="grid h-13 w-13 place-items-center rounded-2xl bg-gradient-to-br from-cyan-300 to-lime-300 font-black text-slate-950">{item.initials}</div>
                    <div>
                      <p className="font-black text-slate-950">{item.name}</p>
                      <p className="text-sm text-slate-500">{item.company}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="pricing" className="bg-white px-5 py-14 sm:py-20 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-7xl">
            <SectionHeader eyebrow="Pricing" title="Simple packages to start strong" text="Choose the starting point that fits your business. Every package can be customized based on your goals, pages, integrations, and automation needs." />
            <div className="grid gap-6 lg:grid-cols-3">
              {pricing.map((plan) => (
                <div key={plan.name} className={`rounded-3xl border p-8 shadow-sm ${plan.highlighted ? 'border-slate-950 bg-slate-950 text-white shadow-2xl shadow-slate-950/20' : 'border-slate-200 bg-white text-slate-950'}`}>
                  {plan.highlighted && <p className="mb-5 inline-flex rounded-full bg-cyan-300 px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-slate-950">Most popular</p>}
                  <h3 className="text-2xl font-black">{plan.name}</h3>
                  <p className={`mt-3 leading-7 ${plan.highlighted ? 'text-white/65' : 'text-slate-600'}`}>{plan.text}</p>
                  <p className="mt-8 text-5xl font-black tracking-tight">{plan.price}</p>
                  <ul className="mt-8 space-y-4">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex gap-3">
                        <Check className={`mt-0.5 h-5 w-5 ${plan.highlighted ? 'text-cyan-300' : 'text-cyan-600'}`} />
                        <span className={plan.highlighted ? 'text-white/80' : 'text-slate-700'}>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <a href="#request-form" className={`mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-4 font-black transition hover:-translate-y-1 ${plan.highlighted ? 'bg-white text-slate-950' : 'bg-slate-950 text-white'}`}>
                    Get Started <ArrowRight className="h-5 w-5" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="faq" className="bg-slate-50 px-5 py-14 sm:py-20 lg:px-8 lg:py-24">
          <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[0.92fr_1.08fr]">
            <div className="rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-slate-200 sm:p-10">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-cyan-500">FAQ</p>
              <h2 className="text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">Questions before we start?</h2>
              <p className="mt-5 text-lg leading-8 text-slate-600">Here are the common details clients ask about before choosing a website build partner.</p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <a href={quickWhatsAppUrl} target="_blank" rel="noreferrer" className="block rounded-2xl bg-slate-950 p-5 text-white transition hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-950/15">
                  <MessageCircle className="mb-4 h-6 w-6 text-emerald-300" />
                  <p className="font-black">Quick WhatsApp help</p>
                  <p className="mt-2 text-sm leading-6 text-white/55">{whatsappDisplayNumber}</p>
                </a>
                <div className="rounded-2xl bg-cyan-50 p-5 text-slate-950">
                  <CalendarDays className="mb-4 h-6 w-6 text-cyan-600" />
                  <p className="font-black">Fast launch</p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">24 hours for basic sites when content is ready.</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              {faqs.map(([question, answer], index) => (
                <div key={question} className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:shadow-xl">
                  <button type="button" onClick={() => setOpenFaq(openFaq === index ? -1 : index)} className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left font-black text-slate-950">
                    <span>{question}</span>
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-slate-100">
                      <ChevronDown className={`h-5 w-5 transition ${openFaq === index ? 'rotate-180' : ''}`} />
                    </span>
                  </button>
                  {openFaq === index && <p className="px-6 pb-6 leading-7 text-slate-600">{answer}</p>}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-slate-950 px-5 py-12 text-white lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-2xl bg-cyan-300 text-slate-950"><Sparkles className="h-5 w-5" /></span>
              <span className="text-lg font-black">NexaBuild AI</span>
            </div>
            <p className="mt-5 max-w-sm leading-7 text-white/60">Website development and AI automation for ambitious small businesses.</p>
          </div>
          <div>
            <h3 className="font-black">Contact</h3>
            <div className="mt-4 space-y-2 text-white/65">
              <p>hello@nexabuild.ai</p>
              <p>{whatsappDisplayNumber}</p>
              <p>WhatsApp queries and project requests</p>
            </div>
          </div>
          <div>
            <h3 className="font-black">Follow</h3>
            <div className="mt-4 flex gap-3">
              {[MessageCircle, Send, Zap].map((Icon, index) => (
                <a key={index} href="#home" aria-label="Social link" className="grid h-11 w-11 place-items-center rounded-full border border-white/10 text-white/75 transition hover:bg-white hover:text-slate-950">
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="mx-auto mt-10 flex max-w-7xl flex-col justify-between gap-4 border-t border-white/10 pt-6 text-sm text-white/45 sm:flex-row">
          <p>Copyright 2026 NexaBuild AI. All rights reserved.</p>
          <div className="flex gap-5">
            {navItems.map((item) => <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-white">{item}</a>)}
          </div>
        </div>
      </footer>

      <a href={quickWhatsAppUrl} target="_blank" rel="noreferrer" aria-label="WhatsApp contact" className="fixed bottom-5 right-5 z-[100] grid h-16 w-16 place-items-center rounded-full bg-emerald-500 text-white shadow-2xl shadow-emerald-700/30 ring-4 ring-white/70 transition hover:-translate-y-1 hover:bg-emerald-600">
        <MessageCircle className="h-6 w-6" />
      </a>
    </div>
  )
}

export default App
