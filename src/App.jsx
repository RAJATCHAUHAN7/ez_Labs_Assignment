import React, {useState, useRef, useEffect} from 'react'

const API_URL = 'https://vernanbackend.ezlab.in/api/contact-us/'

function Nav({onNav}) {
  const [open,setOpen] = useState(false)
  const links = ['home','about','services','projects','careers','contact']
  return (
    <header className="w-full sticky top-0 z-40 backdrop-blur-md" style={{background:'linear-gradient(180deg, rgba(4,6,10,0.6), rgba(4,6,10,0.25))'}}>
      <div className="container flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="text-2xl font-extrabold tracking-tight">EZ<span style={{color:'#7c3aed'}}>Labs</span></div>
          <div className="hidden md:flex gap-6 text-sm text-gray-300">
            {links.map(l=>(
              <a key={l} href={'#'+l} onClick={(e)=>{e.preventDefault(); onNav(l)}} className="cursor-pointer hover:text-white">{l.charAt(0).toUpperCase()+l.slice(1)}</a>
            ))}
          </div>
        </div>

        <div className="hidden md:flex items-center gap-3">
          <a href="#contact" onClick={(e)=>{e.preventDefault(); onNav('contact')}} className="px-4 py-2 rounded-lg glass hover:scale-105 transition">Get in touch</a>
        </div>

        <div className="md:hidden">
          <button onClick={()=>setOpen(o=>!o)} className="px-3 py-2 rounded border">Menu</button>
        </div>
      </div>

      {open && (
        <div className="md:hidden container mt-2 glass p-4 rounded-lg">
          <nav className="flex flex-col gap-3">
            {['home','about','services','projects','careers','contact'].map(s=>(
              <a key={s} href={'#'+s} onClick={(e)=>{e.preventDefault(); onNav(s); setOpen(false)}}>{s.charAt(0).toUpperCase()+s.slice(1)}</a>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}

function Hero(){ 
  return (
    <section id="home" className="container grid grid-cols-1 md:grid-cols-2 gap-8 items-center py-20">
      <div>
        <div className="glass p-8 rounded-2xl shadow-2xl">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">We design and build web products that feel effortless.</h1>
          <p className="mt-4 text-gray-300">At EZ Labs we blend design sensibility with engineering discipline to deliver pixel-perfect experiences and fast, maintainable front-end code. We focus on measurable outcomes: usability, performance, and conversion.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#projects" onClick={(e)=>{e.preventDefault(); const el=document.getElementById('projects'); el && el.scrollIntoView({behavior:'smooth', block:'start'});}} className="px-5 py-3 rounded-lg glass hover:scale-105 transition">See projects</a>
            <a href="#contact" onClick={(e)=>{e.preventDefault(); const el=document.getElementById('contact'); el && el.scrollIntoView({behavior:'smooth', block:'start'});}} className="px-5 py-3 rounded-lg border">Contact us</a>
          </div>
        </div>
        <div className="mt-6 text-sm text-gray-400">
          <strong>Delivery:</strong> Clean code, responsive layouts, and fast builds — ready for Vercel or Netlify deployment.
        </div>
      </div>

      <div>
        <div className="glass p-6 rounded-2xl">
          <h3 className="text-xl font-semibold underline-anim">Why EZ Labs</h3>
          <ul className="mt-4 space-y-2 text-gray-300">
            <li>• Human-centered design paired with component-driven development.</li>
            <li>• Accessibility and performance considered from day one.</li>
            <li>• Clear handover: documented components and deployment-ready builds.</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

function About(){
  return (
    <section id="about" className="container py-16">
      <div className="glass p-8 rounded-2xl">
        <h2 className="text-3xl font-bold">About EZ Labs</h2>
        <p className="mt-4 text-gray-300">EZ Labs is a small studio focused on turning ideas into polished web products. We pair concise UI design with pragmatic engineering practices so teams can launch quickly and iterate safely. Our work emphasizes clarity, consistent components, and measurable user outcomes.</p>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 glass rounded">
            <h4 className="font-semibold">Design Systems</h4>
            <p className="text-sm text-gray-300 mt-1">Reusable components, tokens, and documentation that speed up product development.</p>
          </div>
          <div className="p-4 glass rounded">
            <h4 className="font-semibold">Performance</h4>
            <p className="text-sm text-gray-300 mt-1">Optimized assets and meaningful metrics to keep pages snappy on every device.</p>
          </div>
          <div className="p-4 glass rounded">
            <h4 className="font-semibold">Collaboration</h4>
            <p className="text-sm text-gray-300 mt-1">Clear design-to-code handoffs and pragmatic project estimates.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

function Services(){
  const services = [
    {title:'UI / UX Design', desc:'From research-led wireframes to high-fidelity prototypes that validate assumptions quickly.'},
    {title:'Frontend Engineering', desc:'Component-driven React builds with accessibility and performance baked in.'},
    {title:'API Integration', desc:'Reliable forms, authentication flows, and data-driven UIs tied to real backends.'},
    {title:'Design Handoff', desc:'Documentation, tokens, and code examples to make handover effortless.'},
  ]
  return (
    <section id="services" className="container py-16">
      <h2 className="text-3xl font-bold">Services</h2>
      <p className="text-gray-400 mt-2">Services tailored to startups and product teams who need quality front-end work without the overhead.</p>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map(s=>(
          <div key={s.title} className="glass p-6 rounded-lg hover:translate-y-[-4px] transition-transform">
            <h3 className="font-semibold text-lg">{s.title}</h3>
            <p className="text-sm text-gray-300 mt-2">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

function Projects(){
  const projects = [
    {title:'Aurora Dashboard', desc:'A SaaS analytics dashboard crafted for fast insights and clear data visualizations. Tech: React, D3.'},
    {title:'NeonShop Landing', desc:'Conversion-focused landing with subtle motion and A/B tested hero variants.'},
    {title:'Pulse Health App', desc:'Responsive patient-facing interface with accessible form flows.'},
  ]
  return (
    <section id="projects" className="container py-16">
      <h2 className="text-3xl font-bold">Projects</h2>
      <p className="text-gray-400 mt-2">Selected projects that demonstrate design, engineering, and product thinking.</p>
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map(p=>(
          <article key={p.title} className="glass p-4 rounded-lg">
            <div className="project-thumb">
              <div className="text-center">
                <div className="font-semibold">{p.title}</div>
                <div className="text-xs text-gray-400 mt-2">A focused case study with measurable results.</div>
              </div>
            </div>
            <p className="text-sm text-gray-300 mt-3">{p.desc}</p>
            <div className="mt-3 flex gap-2">
              <button className="px-3 py-2 rounded border text-sm">View case</button>
              <button className="px-3 py-2 rounded glass text-sm">Code sample</button>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

function Careers(){
  const roles = [
    {title:'Frontend Engineer', yrs:'3+ years', desc:'Ship production-ready React apps. Strong JS fundamentals and empathy for design.'},
    {title:'Product Designer', yrs:'2+ years', desc:'End-to-end design work, prototyping, and collaboration with engineers.'},
  ]
  return (
    <section id="careers" className="container py-16">
      <h2 className="text-3xl font-bold">Careers</h2>
      <p className="text-gray-400 mt-2">We hire collaborators who care about craft and clarity. Remote-first, flexible hours.</p>
      <div className="mt-6 space-y-4">
        {roles.map(r=>(
          <div key={r.title} className="glass p-4 rounded-lg flex flex-col md:flex-row md:justify-between md:items-center">
            <div>
              <h3 className="font-semibold">{r.title}</h3>
              <div className="text-sm text-gray-300">{r.desc}</div>
            </div>
            <div className="mt-3 md:mt-0 flex gap-3 items-center">
              <div className="text-sm text-gray-400">{r.yrs}</div>
              <button className="px-4 py-2 rounded-lg glass">Apply</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

function Contact(){
  const [form, setForm] = useState({name:'', email:'', phone:'', message:''})
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState({loading:false, success:false, error:''})
  const successRef = useRef(null)

  useEffect(()=>{
    if(status.success && successRef.current){
      try{
        successRef.current.animate([{transform:'scale(0.6)', opacity:0},{transform:'scale(1.05)', opacity:1},{transform:'scale(1)', opacity:1}], {duration:420, easing:'cubic-bezier(.2,.9,.2,1)'})
      }catch(e){}
    }
  },[status.success])

  const validate = ()=>{
    const e = {}
    if(!form.name.trim()) e.name = 'Please enter your full name.'
    if(!form.email.trim()) e.email = 'Please enter your email.'
    else {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if(!re.test(form.email)) e.email = 'Please enter a valid email address.'
    }
    if(!form.phone.trim()) e.phone = 'Please add a contact number.'
    if(!form.message.trim()) e.message = 'Tell us briefly what you need.'
    setErrors(e)
    return Object.keys(e).length===0
  }

  const onSubmit = async (e)=>{
    e.preventDefault()
    setStatus({loading:false, success:false, error:''})
    if(!validate()) return
    setStatus(s=>({...s, loading:true}))
    try{
      const res = await fetch(API_URL, {
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body: JSON.stringify(form)
      })
      const data = await res.json()
      if(res.ok){
        setStatus({loading:false, success:true, error:''})
        setForm({name:'', email:'', phone:'', message:''})
      } else {
        setStatus({loading:false, success:false, error: data?.detail || JSON.stringify(data)})
      }
    }catch(err){
      setStatus({loading:false, success:false, error: err.message})
    }
  }

  return (
    <section id="contact" className="container py-16">
      <div className="glass p-6 rounded-2xl max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold">Contact</h2>
        <p className="text-gray-400 mt-1">Share a short brief and your timelines — we’ll reply within 24–48 hours on working days.</p>

        <form onSubmit={onSubmit} className="mt-4 space-y-4" noValidate>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm block mb-1">Full name</label>
              <input value={form.name} onChange={e=>setForm({...form, name:e.target.value})} className={"w-full px-4 py-2 rounded-lg bg-transparent border " + (errors.name ? 'border-red-500' : 'border-white/7')} placeholder="e.g. Priya Sharma" />
              {errors.name && <div className="text-xs text-red-400 mt-1">{errors.name}</div>}
            </div>
            <div>
              <label className="text-sm block mb-1">Email</label>
              <input value={form.email} onChange={e=>setForm({...form, email:e.target.value})} className={"w-full px-4 py-2 rounded-lg bg-transparent border " + (errors.email ? 'border-red-500' : 'border-white/7')} placeholder="you@company.com" />
              {errors.email && <div className="text-xs text-red-400 mt-1">{errors.email}</div>}
            </div>
          </div>

          <div>
            <label className="text-sm block mb-1">Phone</label>
            <input value={form.phone} onChange={e=>setForm({...form, phone:e.target.value})} className={"w-full px-4 py-2 rounded-lg bg-transparent border " + (errors.phone ? 'border-red-500' : 'border-white/7')} placeholder="+91 98765 43210" />
            {errors.phone && <div className="text-xs text-red-400 mt-1">{errors.phone}</div>}
          </div>

          <div>
            <label className="text-sm block mb-1">Message</label>
            <textarea value={form.message} onChange={e=>setForm({...form, message:e.target.value})} rows="5" className={"w-full px-4 py-2 rounded-lg bg-transparent border " + (errors.message ? 'border-red-500' : 'border-white/7')} placeholder="Briefly describe the project, goals, and timeline." />
            {errors.message && <div className="text-xs text-red-400 mt-1">{errors.message}</div>}
          </div>

          <div className="flex items-center gap-3">
            <button className="px-5 py-2 rounded-lg glass" type="submit" disabled={status.loading}>{status.loading ? 'Sending...' : 'Send message'}</button>
            <button type="button" className="px-4 py-2 rounded border" onClick={()=>{setForm({name:'',email:'',phone:'',message:''}); setErrors({}); setStatus({loading:false,success:false,error:''})}}>Reset</button>

            {status.success && (
              <div ref={successRef} className="flex items-center gap-2 text-green-400 font-semibold">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                Form Submitted
              </div>
            )}

            {status.error && <div className="text-red-400">Error: {status.error}</div>}
          </div>
        </form>

        <div className="mt-4 text-xs text-gray-400">We respect your privacy — your contact details will only be used to respond to this inquiry.</div>
      </div>
    </section>
  )
}

function Footer(){
  return (
    <footer className="border-t border-white/6 mt-12">
      <div className="container py-6 flex flex-col md:flex-row md:justify-between md:items-center text-sm text-gray-300">
        <div>
          © {new Date().getFullYear()} EZ Labs — Crafted with care. Built for assignment submission.
        </div>
        <div className="mt-3 md:mt-0 flex gap-4">
          <a href="#home" onClick={(e)=>{e.preventDefault(); document.getElementById('home').scrollIntoView({behavior:'smooth'})}}>Home</a>
          <a href="#projects" onClick={(e)=>{e.preventDefault(); document.getElementById('projects').scrollIntoView({behavior:'smooth'})}}>Projects</a>
          <a href="#contact" onClick={(e)=>{e.preventDefault(); document.getElementById('contact').scrollIntoView({behavior:'smooth'})}}>Contact</a>
        </div>
      </div>
    </footer>
  )
}

export default function App(){
  const onNav = (id) => {
    const el = document.getElementById(id)
    if(el) el.scrollIntoView({behavior:'smooth', block:'start'})
  }

  return (
    <div>
      <Nav onNav={onNav} />
      <main>
        <Hero />
        <About />
        <Services />
        <Projects />
        <Careers />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
