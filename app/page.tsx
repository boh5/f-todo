"use client";

import PageBody from "@/app/components/page/PageBody";
import PageHeader from "@/app/components/page/PageHeader";
import SiteFooter from "@/components/SiteFooter";

export default function Home() {
  return (
    <div className="space-y-2 h-full">
      <PageHeader />
      <PageBody />
      <SiteFooter />
    </div>
  );
}
