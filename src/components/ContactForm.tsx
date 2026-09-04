"use client";

import { FormEvent, useState } from "react";

type FormState = {
  status: "idle" | "loading" | "success" | "error";
  message?: string;
};

const initialState: FormState = { status: "idle" };

export default function ContactForm() {
  const [state, setState] = useState<FormState>(initialState);

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setState({ status: "loading" });

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(formData.entries())),
      });

      const result = (await response.json()) as { message?: string };

      if (!response.ok) {
        setState({ status: "error", message: result.message ?? "Request failed" });
        return;
      }

      form.reset();
      setState({ status: "success", message: result.message ?? "Message sent successfully." });
    } catch {
      setState({ status: "error", message: "Unable to submit now. Please use the email fallback below." });
    }
  };

  return (
    <form onSubmit={onSubmit} className="space-y-4 rounded-xl border border-slate-200 bg-white p-6 shadow-sm" noValidate>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="text-sm font-medium text-slate-700">
          Name
          <input name="name" required className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500" />
        </label>
        <label className="text-sm font-medium text-slate-700">
          Company
          <input name="company" required className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500" />
        </label>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="text-sm font-medium text-slate-700">
          Email
          <input type="email" name="email" required className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500" />
        </label>
        <label className="text-sm font-medium text-slate-700">
          Phone
          <input name="phone" required className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500" />
        </label>
      </div>

      <label className="block text-sm font-medium text-slate-700">
        Product Interest
        <input name="productInterest" className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500" />
      </label>

      <label className="block text-sm font-medium text-slate-700">
        Message
        <textarea name="message" required rows={4} className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500" />
      </label>

      <label className="hidden" aria-hidden>
        Leave this field empty
        <input name="website" tabIndex={-1} autoComplete="off" />
      </label>

      <button
        type="submit"
        disabled={state.status === "loading"}
        className="rounded-md bg-slate-900 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
      >
        {state.status === "loading" ? "Sending..." : "Send Enquiry"}
      </button>

      {state.status !== "idle" && (
        <p className={`text-sm ${state.status === "success" ? "text-emerald-700" : "text-rose-700"}`} role="status" aria-live="polite">
          {state.message}
        </p>
      )}
    </form>
  );
}
