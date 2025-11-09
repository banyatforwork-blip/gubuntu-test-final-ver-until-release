import { Card } from "@/components/ui/card";
import { Heart, Users, Code } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              The Philosophy
            </span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
            Gubuntu is built on the belief that users should have the freedom to experience Ubuntu 
            with the desktop environment they choose, without corporate modifications
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <Card className="p-8 glass-strong border border-white/10">
            <h3 className="text-2xl font-semibold mb-4 flex items-center gap-3">
              <Heart className="w-6 h-6 text-primary glow-cyan" />
              What We Stand For
            </h3>
            <ul className="space-y-3 text-foreground/80">
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">✓</span>
                <span>Vanilla GNOME desktop experience without modifications</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">✓</span>
                <span>Freedom from Canonical's ecosystem and decisions</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">✓</span>
                <span>Clean, bloat-free Ubuntu base system</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">✓</span>
                <span>Community-driven development and feedback</span>
              </li>
            </ul>
          </Card>

          <Card className="p-8 glass-strong border border-white/10">
            <h3 className="text-2xl font-semibold mb-4 flex items-center gap-3">
              <Code className="w-6 h-6 text-accent glow-purple" />
              What We Remove
            </h3>
            <ul className="space-y-3 text-foreground/80">
              <li className="flex items-start gap-3">
                <span className="text-destructive font-bold">✗</span>
                <span>Ubuntu's custom GNOME theme and modifications</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-destructive font-bold">✗</span>
                <span>Snap packages and Snap store integration</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-destructive font-bold">✗</span>
                <span>Canonical telemetry and tracking</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-destructive font-bold">✗</span>
                <span>Pre-installed bloatware and sponsored apps</span>
              </li>
            </ul>
          </Card>
        </div>

        <Card className="p-8 glass text-center border border-white/10">
          <Users className="w-12 h-12 text-primary glow-cyan mx-auto mb-4" />
          <h3 className="text-2xl font-semibold mb-3">Join the Community</h3>
          <p className="text-foreground/70 mb-6 max-w-2xl mx-auto">
            Gubuntu is in active beta development. We welcome feedback, bug reports, and contributions 
            from users who share our vision for a pure GNOME experience on Ubuntu.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://github.com/gubuntu-dev-icebear/Gubuntu"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary/80 transition-colors font-medium"
              data-testid="link-github"
            >
              GitHub →
            </a>
            <span className="text-foreground/30">•</span>
            <a
              href="https://sourceforge.net/projects/gubuntu-desktop/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary/80 transition-colors font-medium"
              data-testid="link-sourceforge"
            >
              SourceForge →
            </a>
          </div>
        </Card>
      </div>
    </section>
  );
}
