import { Image, Heart, MessageCircle, Repeat2, Share } from 'lucide-react';

function Post({ user, handle, time, content }) {
  return (
    <div className="px-4 py-4 border-b border-white/10">
      <div className="flex gap-3">
        <div className="h-10 w-10 rounded-full bg-white/10" />
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 text-sm">
            <span className="font-semibold">{user}</span>
            <span className="text-white/50">{handle} · {time}</span>
          </div>
          <p className="mt-1 text-[15px] leading-relaxed text-white/90">{content}</p>
          <div className="mt-3 flex items-center gap-6 text-white/60">
            <button className="inline-flex items-center gap-2 hover:text-white"><MessageCircle className="h-4 w-4" /> 24</button>
            <button className="inline-flex items-center gap-2 hover:text-white"><Repeat2 className="h-4 w-4" /> 12</button>
            <button className="inline-flex items-center gap-2 hover:text-white"><Heart className="h-4 w-4" /> 128</button>
            <button className="inline-flex items-center gap-2 hover:text-white"><Share className="h-4 w-4" /></button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Feed() {
  return (
    <div>
      <div className="px-4 py-3 backdrop-blur bg-black/40 sticky top-0 z-10 border-b border-white/10">
        <h2 className="text-lg font-semibold">Home</h2>
      </div>

      <div className="px-4 py-4 border-b border-white/10">
        <div className="flex gap-3">
          <div className="h-10 w-10 rounded-full bg-white/10" />
          <div className="flex-1">
            <textarea className="w-full bg-transparent outline-none placeholder:text-white/40 text-lg resize-none" rows="2" placeholder="What's happening?" />
            <div className="mt-3 flex items-center justify-between">
              <div className="flex items-center gap-3 text-white/60">
                <button className="hover:text-white"><Image className="h-5 w-5" /></button>
              </div>
              <button className="rounded-full bg-cyan-500 hover:bg-cyan-400 text-black font-semibold px-4 py-1.5">Post</button>
            </div>
          </div>
        </div>
      </div>

      {[{
        user: 'Nova Park', handle: '@nova', time: '1m', content: 'Designing a minimal, dark social UI that feels fast and considered. Micro-interactions matter.'
      }, {
        user: 'Orion Blue', handle: '@orion', time: '12m', content: 'Holographic identity means control and portability. The future of social is interoperable.'
      }, {
        user: 'Luna Vale', handle: '@luna', time: '1h', content: 'Ship value, not features. Craft experiences that feel inevitable.'
      }].map((p, i) => <Post key={i} {...p} />)}
    </div>
  );
}
