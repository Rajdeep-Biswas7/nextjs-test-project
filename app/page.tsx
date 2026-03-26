import { GlowCard } from "@/components/glow-card";
import TestFile from "@/components/testFile";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6 p-4 bg-neutral-600">
      Home
      <TestFile />
      <GlowCard className="w-80 h-100">Its the glowcard.</GlowCard>
    </div>
  );
}
