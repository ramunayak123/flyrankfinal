import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <nav className="flex justify-between items-center p-6 md:p-10 border-b border-zinc-900 sticky top-0 bg-black">
        <div className="font-black tracking-[0.2em] text-sm">FLYRANK</div>
        <div className="flex gap-6 text-sm text-zinc-400">
          <Link href="/work" className="hover:text-white">Work</Link>
          <Link href="/about" className="hover:text-white">About</Link>
          <Link href="/health" className="hover:text-white">Health</Link>
        </div>
      </nav>

      <section className="px-6 md:px-10 pt-20 md:pt-32 max-w-7xl">
        <h1 className="text-6xl md:text-8xl font-bold leading-[0.85] tracking-tighter">
          We build<br/>brands that<br/><span className="text-zinc-600">fly.</span>
        </h1>
        <p className="mt-10 text-zinc-400 text-lg max-w-xl">
          FlyRank is a digital product studio. Strategy, design, and code — shipped fast for ambitious startups.
        </p>
        <div className="flex gap-4 mt-10">
          <Link href="/work" className="bg-white text-black px-8 py-4 rounded-full font-medium">View Work →</Link>
          <Link href="/health" className="border border-zinc-800 px-8 py-4 rounded-full">System Health</Link>
        </div>
      </section>

      <section className="grid md:grid-cols-3 gap-px bg-zinc-900 border-y border-zinc-900 mt-32">
        <div className="bg-black p-10"><h3 className="text-zinc-500 text-sm mb-4">01 / STRATEGY</h3><p className="text-xl">We find your unfair advantage.</p></div>
        <div className="bg-black p-10"><h3 className="text-zinc-500 text-sm mb-4">02 / DESIGN</h3><p className="text-xl">Pixel-perfect, user-obsessed.</p></div>
        <div className="bg-black p-10"><h3 className="text-zinc-500 text-sm mb-4">03 / SHIP</h3><p className="text-xl">Launch in weeks, not months.</p></div>
      </section>

      <footer className="p-10 text-zinc-600 text-sm flex justify-between">
        <span>© 2026 FlyRank</span>
        <span>FE-04 Deployed ✓</span>
      </footer>
    </main>
  );
}
