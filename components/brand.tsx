import { BrainCircuit } from "lucide-react";
export function Brand({ light = false }: { light?: boolean }) {
  return <span className="brand">
    <span className="brand-mark"><BrainCircuit size={20} strokeWidth={2.2} /></span>
    <span style={light ? { color: "#f4f7fb" } : undefined}>texto<span className="gradient-text">lab</span></span>
  </span>;
}
