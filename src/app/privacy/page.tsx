import type { Metadata } from "next";
import LayoutWrapper from "@/components/LayoutWrapper";

export const metadata: Metadata = {
  title: "Privacy",
  description: "Privacy policy for Inventive Engineering Solution website visitors and contact enquiries.",
};

export default function PrivacyPage() {
  return (
    <section className="py-16">
      <LayoutWrapper>
        <h1 className="text-4xl font-bold text-slate-900">Privacy Policy</h1>
        <p className="mt-4 max-w-3xl text-slate-600">We only use submitted contact information to respond to enquiries and project communication requests.</p>
      </LayoutWrapper>
    </section>
  );
}
