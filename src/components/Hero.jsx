import { Link } from 'react-router-dom';
import Spline from '@splinetool/react-spline';
import { Rocket, Star } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] bg-black text-white overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/qQUip0dJPqrrPryE/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Contrast overlay - does not block 3D interactions */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_50%,rgba(0,0,0,0)_0%,rgba(0,0,0,0.35)_60%,rgba(0,0,0,0.85)_100%)]" />

      <header className="relative z-10 flex items-center justify-between px-6 md:px-10 py-5">
        <Link to="/" className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-xl bg-white/10 backdrop-blur border border-white/10 grid place-items-center">
            <Rocket className="h-5 w-5 text-cyan-300" />
          </div>
          <span className="font-semibold tracking-tight">HoloTweet</span>
        </Link>
        <nav className="flex items-center gap-3">
          <Link to="/auth" className="px-3 py-2 text-sm text-white/80 hover:text-white transition">Sign in</Link>
          <Link to="/auth?tab=signup" className="px-3 py-2 rounded-lg text-sm bg-white text-black font-medium hover:bg-white/90 transition">Get Started</Link>
        </nav>
      </header>

      <div className="relative z-10 px-6 md:px-10 pt-10 md:pt-20 pb-16">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70 backdrop-blur">
            <Star className="h-3.5 w-3.5 text-amber-300" />
            <span>Minimal, modern social platform UI</span>
          </div>
          <h1 className="mt-6 text-4xl md:text-6xl font-semibold tracking-tight leading-[1.05]">
            Speak in moments. Build your audience.
          </h1>
          <p className="mt-4 md:mt-6 text-white/70 max-w-2xl">
            A sleek, dark, SaaS-ready social network inspired by Twitter. Crafted for clarity and speed. Just the UI and routing — ready to wire up.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/app" className="inline-flex items-center justify-center rounded-lg bg-cyan-500 hover:bg-cyan-400 text-black font-semibold px-5 py-2.5 transition">
              Open Dashboard
            </Link>
            <Link to="/auth?tab=signup" className="inline-flex items-center justify-center rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 text-white px-5 py-2.5 transition">
              Create account
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
