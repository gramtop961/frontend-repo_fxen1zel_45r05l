import { useMemo } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Mail, Lock, User, ArrowLeft } from 'lucide-react';

export default function AuthForms() {
  const location = useLocation();
  const navigate = useNavigate();
  const tab = new URLSearchParams(location.search).get('tab') || 'login';

  const title = useMemo(() => {
    if (tab === 'signup') return 'Create your account';
    if (tab === 'forgot') return 'Reset your password';
    return 'Welcome back';
  }, [tab]);

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-6">
      <div className="w-full max-w-md">
        <button onClick={() => navigate(-1)} className="mb-6 inline-flex items-center gap-2 text-white/70 hover:text-white">
          <ArrowLeft className="h-4 w-4" /> Back
        </button>
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
          <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>
          <p className="mt-1 text-sm text-white/60">
            {tab === 'signup' ? 'Join the conversation in seconds.' : tab === 'forgot' ? 'We will send reset instructions to your email.' : 'Sign in to continue to your dashboard.'}
          </p>

          {tab !== 'forgot' && (
            <div className="mt-6 space-y-3">
              {tab === 'signup' && (
                <div className="flex items-center gap-3 rounded-lg border border-white/10 bg-black px-3 py-2.5">
                  <User className="h-4 w-4 text-white/50" />
                  <input type="text" placeholder="Name" className="w-full bg-transparent outline-none placeholder:text-white/40 text-sm" />
                </div>
              )}
              <div className="flex items-center gap-3 rounded-lg border border-white/10 bg-black px-3 py-2.5">
                <Mail className="h-4 w-4 text-white/50" />
                <input type="email" placeholder="Email" className="w-full bg-transparent outline-none placeholder:text-white/40 text-sm" />
              </div>
              <div className="flex items-center gap-3 rounded-lg border border-white/10 bg-black px-3 py-2.5">
                <Lock className="h-4 w-4 text-white/50" />
                <input type="password" placeholder="Password" className="w-full bg-transparent outline-none placeholder:text-white/40 text-sm" />
              </div>
              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-2 text-white/70">
                  <input type="checkbox" className="accent-cyan-500" />
                  Remember me
                </label>
                <Link to="/auth?tab=forgot" className="text-cyan-400 hover:text-cyan-300">Forgot password?</Link>
              </div>
              <button className="w-full rounded-lg bg-cyan-500 hover:bg-cyan-400 text-black font-semibold py-2.5">{tab === 'signup' ? 'Create account' : 'Sign in'}</button>
            </div>
          )}

          {tab === 'forgot' && (
            <div className="mt-6 space-y-3">
              <div className="flex items-center gap-3 rounded-lg border border-white/10 bg-black px-3 py-2.5">
                <Mail className="h-4 w-4 text-white/50" />
                <input type="email" placeholder="Email" className="w-full bg-transparent outline-none placeholder:text-white/40 text-sm" />
              </div>
              <button className="w-full rounded-lg bg-cyan-500 hover:bg-cyan-400 text-black font-semibold py-2.5">Send reset link</button>
            </div>
          )}

          <div className="mt-6 text-center text-sm text-white/70">
            {tab === 'signup' ? (
              <span>
                Already have an account?{' '}
                <Link to="/auth" className="text-cyan-400 hover:text-cyan-300">Sign in</Link>
              </span>
            ) : (
              <span>
                New here?{' '}
                <Link to="/auth?tab=signup" className="text-cyan-400 hover:text-cyan-300">Create an account</Link>
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
