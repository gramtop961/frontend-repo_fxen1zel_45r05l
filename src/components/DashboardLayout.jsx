import { Link, NavLink, Outlet } from 'react-router-dom';
import { Home, Bell, MessageCircle, Settings, LogOut, PlusCircle, Search } from 'lucide-react';

function NavItem({ to, icon: Icon, label }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => `flex items-center gap-3 rounded-full px-4 py-2.5 text-sm transition ${isActive ? 'bg-white text-black font-semibold' : 'text-white hover:bg-white/10'}`}
    >
      <Icon className="h-5 w-5" />
      <span>{label}</span>
    </NavLink>
  );
}

export default function DashboardLayout() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="mx-auto grid grid-cols-12 gap-4 px-4 md:px-8 py-4 max-w-7xl">
        {/* Left sidebar */}
        <aside className="col-span-2 hidden md:flex flex-col gap-2">
          <Link to="/" className="mb-4 inline-flex items-center gap-2 text-xl font-semibold">
            <div className="h-9 w-9 rounded-xl bg-white/10 grid place-items-center">
              <Home className="h-5 w-5 text-cyan-300" />
            </div>
            HoloTweet
          </Link>
          <NavItem to="/app" icon={Home} label="Home" />
          <NavItem to="/app/notifications" icon={Bell} label="Notifications" />
          <NavItem to="/app/messages" icon={MessageCircle} label="Messages" />
          <NavItem to="/app/settings" icon={Settings} label="Settings" />
          <button className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-cyan-500 hover:bg-cyan-400 text-black font-semibold px-4 py-2.5">
            <PlusCircle className="h-5 w-5" /> Compose
          </button>
          <button className="mt-auto inline-flex items-center gap-2 text-white/70 hover:text-white">
            <LogOut className="h-5 w-5" /> Logout
          </button>
        </aside>

        {/* Middle content */}
        <main className="col-span-12 md:col-span-7 border-x border-white/10 min-h-[70vh]">
          <Outlet />
        </main>

        {/* Right sidebar */}
        <aside className="col-span-3 hidden md:block">
          <div className="sticky top-4 space-y-4">
            <div className="flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2.5">
              <Search className="h-4 w-4 text-white/50" />
              <input type="text" placeholder="Search" className="w-full bg-transparent outline-none placeholder:text-white/40 text-sm" />
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <h3 className="font-semibold">Who to follow</h3>
              <div className="mt-3 space-y-3">
                {[1,2,3].map(i => (
                  <div key={i} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="h-9 w-9 rounded-full bg-white/10" />
                      <div>
                        <div className="text-sm">@user{i}</div>
                        <div className="text-xs text-white/50">Follows you</div>
                      </div>
                    </div>
                    <button className="rounded-full bg-white text-black text-xs font-semibold px-3 py-1.5">Follow</button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
