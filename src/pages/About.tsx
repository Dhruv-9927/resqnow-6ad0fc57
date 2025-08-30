import { ArrowLeft, Shield, Lock, Eye, AlertTriangle, MapPin, Users, Wifi, Snowflake as Freeze, Zap, Globe, Database, FileX } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface AboutProps {
  onNavigate?: (page: string) => void;
}

const features = [
  {
    icon: Lock,
    title: "Lock Vault Mode",
    description: "Advanced file protection system that automatically encrypts sensitive files when threats are detected. If files are transferred to unauthorized systems, they self-destruct beyond repair. Recovery is possible through secure key management once the threat is neutralized.",
    color: "text-primary",
    bgColor: "bg-primary/10"
  },
  {
    icon: Eye,
    title: "Decoy Mode (Honeypot)",
    description: "Deploys sophisticated dummy files and fake systems to deceive attackers. When hackers interact with decoy files, the system tracks their movements, gathers intelligence, and maps their attack patterns for enhanced protection.", 
    color: "text-warning",
    bgColor: "bg-warning/10"
  },
  {
    icon: AlertTriangle,
    title: "Network Kill-Switch",
    description: "Instantly severs all network connections (WiFi/Ethernet) to stop ransomware spread and data exfiltration mid-attack. Features dramatic visual feedback: '🚨 Connection Severed. Hacker Locked Out.'",
    color: "text-destructive",
    bgColor: "bg-destructive/10"
  },
  {
    icon: Freeze,
    title: "Emergency Digital ID Freeze",
    description: "Integrates with Aadhaar-linked services and banking APIs to temporarily freeze online KYC access. Prevents attackers from opening new loans, accounts, or services in your name during an incident.",
    color: "text-accent",
    bgColor: "bg-accent/10"
  },
  {
    icon: MapPin,
    title: "Geo-Fencing Lock",
    description: "Automatically detects suspicious account access from foreign countries and triggers protective measures. Instantly locks accounts and sends OTP alerts only to the legitimate owner's verified devices.",
    color: "text-success",
    bgColor: "bg-success/10"
  },
  {
    icon: Users,
    title: "Community Beacon",
    description: "Optional neighborhood cyber watch system that sends anonymous alerts to nearby users. Example: '⚠️ 5 people in your area triggered SOS in last 1 hour → Possible phishing campaign detected.'",
    color: "text-primary",
    bgColor: "bg-primary/10"
  }
]

const capabilities = [
  {
    icon: Zap,
    title: "Voice-Activated Trigger",
    description: "Even if your device is frozen or compromised, you can activate SOS by shouting a preset keyword like 'RED ALERT!' The system uses microphone detection for hands-free emergency activation."
  },
  {
    icon: Globe,
    title: "API Integration",
    description: "Seamlessly connects with Google, Microsoft, banking services, and government systems to provide comprehensive account protection across all your digital assets."
  },
  {
    icon: Database,
    title: "Real-Time Scanning",
    description: "Continuously monitors your device using lightweight, open-source antivirus tools to detect and neutralize threats before they can cause damage."
  },
  {
    icon: FileX,
    title: "Instant Response",
    description: "All security measures activate within seconds of threat detection or manual trigger, minimizing the window of vulnerability during cyber attacks."
  }
]

export default function About({ onNavigate }: AboutProps) {
  const handleBack = () => {
    if (onNavigate) {
      onNavigate('dashboard')
    }
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <div className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center gap-3">
            <button onClick={handleBack} className="hover:bg-muted p-2 rounded-lg transition-colors">
              <ArrowLeft className="w-5 h-5 text-muted-foreground hover:text-foreground" />
            </button>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-cyber rounded-lg flex items-center justify-center">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold">About Cyber SOS</h1>
                <p className="text-sm text-muted-foreground">Advanced cyber defense platform</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8 space-y-8">
        {/* Hero Section */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-sm font-medium text-primary">
            <Shield className="w-4 h-4" />
            Emergency Cyber Defense System
          </div>
          <h1 className="text-4xl font-bold">Cyber SOS</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A revolutionary one-click emergency response system designed to protect individuals during cyber attacks. 
            When seconds matter, Cyber SOS activates comprehensive defense protocols instantly.
          </p>
        </div>

        {/* Problem Statement */}
        <Card className="bg-gradient-alert text-destructive-foreground border-0">
          <CardHeader>
            <CardTitle className="text-2xl text-white">The Problem We Solve</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-white/90">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-white mb-2">During Cyber Incidents</h3>
                <ul className="space-y-2 text-sm">
                  <li>• Individuals respond with panic and confusion</li>
                  <li>• Lack of awareness about correct emergency measures</li>
                  <li>• Hesitation leads to ineffective actions</li>
                  <li>• Valuable response time is lost</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-white mb-2">The Consequences</h3>
                <ul className="space-y-2 text-sm">
                  <li>• Attackers gain strategic advantage</li>
                  <li>• Financial losses escalate rapidly</li>
                  <li>• Personal data becomes compromised</li>
                  <li>• Reputational damage intensifies</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Core Features */}
        <div className="space-y-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Advanced Protection Features</h2>
            <p className="text-muted-foreground">
              Each feature is designed to counter specific cyber attack vectors and minimize damage
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="bg-card hover:bg-card/80 transition-colors">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className={`w-12 h-12 ${feature.bgColor} rounded-lg flex items-center justify-center`}>
                      <feature.icon className={`w-6 h-6 ${feature.color}`} />
                    </div>
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Additional Capabilities */}
        <div className="space-y-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">System Capabilities</h2>
            <p className="text-muted-foreground">
              Advanced technologies that power the Cyber SOS platform
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {capabilities.map((capability, index) => (
              <Card key={index} className="bg-card">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <capability.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">{capability.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {capability.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* How It Works */}
        <Card className="bg-gradient-cyber text-primary-foreground border-0">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl text-white">How Cyber SOS Works</CardTitle>
            <CardDescription className="text-primary-foreground/80">
              Emergency activation in three simple steps
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <span className="text-xl font-bold text-white">1</span>
                </div>
                <h3 className="font-semibold text-white mb-2">Detect Threat</h3>
                <p className="text-sm text-primary-foreground/80">
                  System detects cyber attack or user manually triggers SOS
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <span className="text-xl font-bold text-white">2</span>
                </div>
                <h3 className="font-semibold text-white mb-2">Activate Protocols</h3>
                <p className="text-sm text-primary-foreground/80">
                  All defense systems activate simultaneously within seconds
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <span className="text-xl font-bold text-white">3</span>
                </div>
                <h3 className="font-semibold text-white mb-2">Secure & Alert</h3>
                <p className="text-sm text-primary-foreground/80">
                  Assets secured, authorities notified, recovery process initiated
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <div className="text-center space-y-4">
          <h2 className="text-2xl font-bold">Ready to Protect Yourself?</h2>
          <p className="text-muted-foreground mb-6">
            Don't wait for a cyber attack to happen. Activate Cyber SOS protection today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button onClick={() => onNavigate?.('help')} size="lg" className="shadow-cyber">
              <FileX className="w-5 h-5 mr-2" />
              Read User Guide
            </Button>
            <Button onClick={handleBack} variant="outline" size="lg">
              <Shield className="w-5 h-5 mr-2" />
              Go to Dashboard
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom padding */}
      <div className="h-8"></div>
    </div>
  )
}