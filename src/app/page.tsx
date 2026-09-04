import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen relative flex flex-col items-center overflow-hidden bg-slate-50">
      {/* Blurry Background Elements */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-400 rounded-full mix-blend-multiply filter blur-[128px] opacity-70 animate-blob"></div>
      <div className="absolute top-[20%] right-[-10%] w-[40%] h-[40%] bg-purple-400 rounded-full mix-blend-multiply filter blur-[128px] opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-[-20%] left-[20%] w-[40%] h-[40%] bg-indigo-400 rounded-full mix-blend-multiply filter blur-[128px] opacity-70 animate-blob animation-delay-4000"></div>

      {/* Header */}
      <header className="w-full z-10 px-6 py-8 md:px-12 md:py-10 flex flex-col sm:flex-row items-center justify-center gap-4 bg-white/30 backdrop-blur-md border-b border-white/20 shadow-sm">
        <div className="flex items-center gap-4">
          <div className="relative w-16 h-16 md:w-20 md:h-20 drop-shadow-md">
            <Image 
              src="/logo.png" 
              alt="Inventive Engineering Solution Logo" 
              fill
              className="object-contain"
              priority
            />
          </div>
          <h1 className="text-2xl md:text-3xl font-bold text-slate-800 tracking-tight">
            Inventive Engineering Solution
          </h1>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-center z-10 p-6 text-center w-full max-w-4xl mx-auto">
        <div className="bg-white/60 backdrop-blur-xl p-8 md:p-16 rounded-3xl shadow-xl border border-white/40 transform transition-all hover:scale-[1.02] duration-500">
          <div className="mb-6 inline-flex items-center justify-center p-4 bg-amber-100 rounded-full">
            <svg className="w-10 h-10 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
            </svg>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">
            We are under maintenance
          </h2>
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-8 leading-relaxed">
            We are currently upgrading our platform to provide you with a better experience. We will be back online shortly. Thank you for your patience!
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="mailto:contact@inventive-es.com" 
              className="px-8 py-4 bg-slate-900 text-white font-medium rounded-full hover:bg-slate-800 transition-colors shadow-lg hover:shadow-xl focus:ring-4 focus:ring-slate-300 w-full sm:w-auto"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <footer className="w-full py-6 text-center z-10 bg-white/20 backdrop-blur-sm border-t border-white/20">
        <p className="text-slate-500 font-medium text-sm">
          &copy; {new Date().getFullYear()} Inventive Engineering Solution. All rights reserved.
        </p>
      </footer>
    </main>
  );
}
