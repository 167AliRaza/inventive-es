"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { clients } from "@/data/clients";

export default function ClientsCarousel() {
  const [start, setStart] = useState(0);
  const visibleCount = 4;

  useEffect(() => {
    const interval = setInterval(() => {
      setStart((prev) => (prev + 1) % clients.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const visibleClients = Array.from({ length: visibleCount }, (_, index) => clients[(start + index) % clients.length]);

  return (
    <div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {visibleClients.map((client) => (
          <div key={client.name} className="flex h-24 items-center justify-center rounded-lg border border-slate-200 bg-white p-4">
            <Image src={client.logo} alt={`${client.name} logo`} width={140} height={56} className="h-12 w-auto object-contain" loading="lazy" />
          </div>
        ))}
      </div>
      <div className="mt-4 flex gap-2">
        <button
          type="button"
          className="rounded border border-slate-300 px-3 py-1 text-sm text-slate-700 hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
          onClick={() => setStart((prev) => (prev - 1 + clients.length) % clients.length)}
          aria-label="Show previous clients"
        >
          Prev
        </button>
        <button
          type="button"
          className="rounded border border-slate-300 px-3 py-1 text-sm text-slate-700 hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
          onClick={() => setStart((prev) => (prev + 1) % clients.length)}
          aria-label="Show next clients"
        >
          Next
        </button>
      </div>
    </div>
  );
}
