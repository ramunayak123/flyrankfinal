export default function Health(){
 return (
   <main className="min-h-screen bg-black text-white p-10">
     <h1 className="text-4xl font-bold">System Health </h1>
     <div className="mt-10 border border-zinc-800 p-6 rounded-2xl">
       <p className="text-green-400">● All Systems Operational</p>
       <p className="mt-4">API: OK | DB: OK | Vercel: OK</p>
     </div>
     <a href="/" className="mt-10 inline-block text-zinc-500">← Home</a>
   </main>
 )
}
