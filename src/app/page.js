import Hero from "@/components/Hero";
import React from "react";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212] pt-24">
      <div className="container mx-auto px-12 py-4">
        <Hero />
      </div>
    </main>
  );
}
