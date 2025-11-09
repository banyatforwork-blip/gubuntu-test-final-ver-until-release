import { Download as DownloadIcon, HardDrive, Monitor, Cpu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function Download() {
  const handleDownload = () => {
    window.open("https://sourceforge.net/projects/gubuntu-desktop/files/latest/download", "_blank");
  };

  return (
    <section id="download" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Get Started
            </span>
          </h2>
          <p className="text-lg text-foreground/70">
            Download the latest beta release and experience Ubuntu the way it should be
          </p>
        </div>

        <Card className="p-8 sm:p-12 glass-strong text-center mb-8">
          <div className="mb-6">
            <div className="inline-block p-4 rounded-2xl bg-primary/10 glow-cyan mb-4">
              <DownloadIcon className="w-12 h-12 text-primary" />
            </div>
            <h3 className="text-3xl font-bold mb-2" data-testid="text-version">
              Gubuntu Beta 2025.11.05
            </h3>
            <p className="text-foreground/60 font-mono text-sm">
              gubuntu-beta-2025.11.05-desktop-amd64.iso
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-8 text-sm text-foreground/70">
            <span className="flex items-center gap-2">
              <HardDrive className="w-4 h-4" />
              5.5 GB
            </span>
            <span>•</span>
            <span className="flex items-center gap-2">
              <Monitor className="w-4 h-4" />
              64-bit
            </span>
            <span>•</span>
            <span className="flex items-center gap-2">
              <Cpu className="w-4 h-4" />
              x86_64
            </span>
          </div>

          <Button
            size="lg"
            onClick={handleDownload}
            className="text-lg px-10 py-6 glow-cyan animate-glow-pulse"
            data-testid="button-download-main"
          >
            <DownloadIcon className="w-5 h-5 mr-2" />
            Download from SourceForge
          </Button>

          <p className="text-xs text-foreground/50 mt-4">
            Hosted on SourceForge • Free and Open Source
          </p>
        </Card>

        <Card className="p-6 glass border border-white/10">
          <h4 className="font-semibold mb-3 text-foreground">System Requirements</h4>
          <ul className="space-y-2 text-sm text-foreground/70">
            <li className="flex items-start gap-2">
              <span className="text-primary mt-0.5">•</span>
              <span>2 GHz dual-core processor or better</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-0.5">•</span>
              <span>4 GB RAM minimum (8 GB recommended)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-0.5">•</span>
              <span>25 GB free disk space</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-0.5">•</span>
              <span>USB drive or DVD for installation</span>
            </li>
          </ul>
        </Card>
      </div>
    </section>
  );
}
