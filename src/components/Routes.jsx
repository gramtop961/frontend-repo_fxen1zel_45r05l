import { Routes, Route } from 'react-router-dom';
import Hero from './Hero';
import AuthForms from './AuthForms';
import DashboardLayout from './DashboardLayout';
import Feed from './Feed';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Hero />} />
      <Route path="/auth" element={<AuthForms />} />

      <Route path="/app" element={<DashboardLayout />}>
        <Route index element={<Feed />} />
        <Route path="notifications" element={<div className="p-6">No new notifications.</div>} />
        <Route path="messages" element={<div className="p-6">Messages coming soon.</div>} />
        <Route path="settings" element={<div className="p-6">Profile & preferences.</div>} />
      </Route>

      <Route path="*" element={<div className="min-h-screen bg-black text-white grid place-items-center">Page not found</div>} />
    </Routes>
  );
}
