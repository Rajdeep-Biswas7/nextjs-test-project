import { GlowCard } from "@/components/glow-card";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6 p-4">
      Home
      <GlowCard className="w-80 h-100">Its the glowcard.</GlowCard>
    </div>
  );
}
