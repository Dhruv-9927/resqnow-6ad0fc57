import { ArrowLeft, Shield, Mic, Hand, AlertTriangle, Lock, Eye, Users, MapPin, Wifi, Snowflake as Freeze, CheckCircle, Play, FileText, Smartphone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface HowToUseProps {
  onNavigate?: (page: string) => void;
}

const quickStart = [
  {
    step: 1,
    title: "Dashboard Overview",
    description: "Monitor your security status, view community alerts, and check connected accounts",
    icon: Shield,
    details: [
      "Check threat level indicator (LOW/MEDIUM/HIGH)",
      "Review community threat map for your area",
      "Monitor connected account protection status",
      "View recent security activities"
    ]
  },
  {
    step: 2,
    title: "Emergency Activation",
    description: "Two ways to activate SOS - voice command or manual button press",
    icon: AlertTriangle,
    details: [
      "Voice: Say 'RED ALERT' when prompted",
      "Manual: Press the emergency activation button",
      "System will ask for password confirmation",
      "All protection protocols activate automatically"
    ]
  },
  {
    step: 3,
    title: "Monitor Protection",
    description: "Track active security measures and receive real-time updates",
    icon: CheckCircle,
    details: [
      "View active protection features",
      "Monitor account lock status",
      "Check scan results and threat reports",
      "Receive emergency notifications"
    ]
  }
]

const features = [
  {
    title: "Lock Vault Mode",
    icon: Lock,
    description: "Protect sensitive files with auto-encryption and self-destruct",
    howToUse: [
      "Files are automatically monitored for unauthorized access",
      "If threat detected, files encrypt themselves instantly",
      "If files transferred to unauthorized systems, they self-destruct",
      "Use recovery key to restore files after threat neutralized",
      "Monitor vault status in Security Features panel"
    ],
    activation: "Automatic when SOS triggered",
    color: "text-primary"
  },
  {
    title: "Decoy Mode (Honeypot)",
    icon: Eye,
    description: "Deploy dummy files to track and analyze attacker behavior",
    howToUse: [
      "System creates convincing fake files and folders",
      "Decoy files appear as valuable targets to attackers",
      "When accessed, system tracks attacker movements",
      "Intelligence gathered helps improve future protection",
      "Real files remain hidden during attack"
    ],
    activation: "Activates with SOS or manually",
    color: "text-warning"
  },
  {
    title: "Network Kill-Switch",
    icon: Wifi,
    description: "Instantly cut all network connections to stop attacks",
    howToUse: [
      "Immediately severs WiFi and Ethernet connections",
      "Stops ransomware spread and data exfiltration",
      "Displays dramatic 'Connection Severed' animation",
      "Can be manually activated from Security panel",
      "Reconnection requires manual approval"
    ],
    activation: "Manual or automatic on threat detection",
    color: "text-destructive"
  },
  {
    title: "Digital ID Freeze",
    icon: Freeze,
    description: "Freeze Aadhaar and banking services to prevent fraud",
    howToUse: [
      "Connects with Aadhaar-linked services automatically",
      "Temporarily freezes online KYC verification",
      "Blocks new account opening attempts",
      "Prevents loan applications in your name",
      "Unfreeze through secure verification process"
    ],
    activation: "Automatic with banking threat detection",
    color: "text-accent"
  },
  {
    title: "Geo-Fencing Lock",
    icon: MapPin,
    description: "Auto-lock accounts accessed from suspicious locations",
    howToUse: [
      "Monitors account access locations continuously",
      "Detects logins from foreign or unusual locations",
      "Automatically locks compromised accounts",
      "Sends OTP alerts to verified devices only",
      "Requires location verification to unlock"
    ],
    activation: "Automatic on suspicious access",
    color: "text-success"
  },
  {
    title: "Community Beacon",
    icon: Users,
    description: "Share and receive anonymous threat alerts with neighbors",
    howToUse: [
      "Optional feature - can be enabled in settings",
      "Sends anonymous alerts to nearby users",
      "Receive warnings about local threat campaigns",
      "View community threat statistics",
      "Help others by sharing threat intelligence"
    ],
    activation: "Optional - enable in Community settings",
    color: "text-primary"
  }
]

const voiceCommands = [
  {
    command: "RED ALERT",
    description: "Primary emergency activation command",
    response: "Initiates SOS activation sequence"
  },
  {
    command: "CYBER EMERGENCY",
    description: "Alternative activation phrase",
    response: "Triggers emergency protocols"
  },
  {
    command: "STOP ATTACK",
    description: "Quick activation during active threat",
    response: "Immediately activates all defenses"
  }
]

const troubleshooting = [
  {
    issue: "Voice activation not responding",
    solutions: [
      "Check microphone permissions in browser",
      "Speak clearly and loudly",
      "Try manual activation as backup",
      "Ensure no background noise interference"
    ]
  },
  {
    issue: "Some accounts not connecting",
    solutions: [
      "Verify account credentials in settings",
      "Check API permissions for each service",
      "Re-authenticate expired connections",
      "Contact support for integration issues"
    ]
  },
  {
    issue: "False positive threat detection",
    solutions: [
      "Review activity log for details",
      "Whitelist trusted applications",
      "Adjust sensitivity in security settings",
      "Report false positives to improve system"
    ]
  }
]

export default function HowToUse({ onNavigate }: HowToUseProps) {
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
                <FileText className="w-5 h-5 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold">How to Use Cyber SOS</h1>
                <p className="text-sm text-muted-foreground">Complete user guide and tutorials</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8 space-y-8">
        {/* Quick Start Guide */}
        <div className="space-y-6">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">Quick Start Guide</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Get up and running with Cyber SOS in three simple steps. Follow this guide to ensure maximum protection.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {quickStart.map((item) => (
              <Card key={item.step} className="bg-card relative">
                <div className="absolute -top-3 left-6">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-xs font-bold text-primary-foreground">
                    {item.step}
                  </div>
                </div>
                <CardHeader className="pt-6">
                  <div className="flex items-center gap-3 mb-2">
                    <item.icon className="w-6 h-6 text-primary" />
                    <CardTitle className="text-lg">{item.title}</CardTitle>
                  </div>
                  <CardDescription>{item.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {item.details.map((detail, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Voice Activation Guide */}
        <Card className="bg-gradient-cyber text-primary-foreground border-0">
          <CardHeader className="text-center">
            <div className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Mic className="w-8 h-8 text-white" />
            </div>
            <CardTitle className="text-2xl text-white">Voice Activation</CardTitle>
            <CardDescription className="text-primary-foreground/80">
              Hands-free emergency activation even when device is compromised
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              {voiceCommands.map((cmd, index) => (
                <div key={index} className="text-center">
                  <div className="bg-white/10 rounded-lg p-4 mb-3">
                    <div className="text-lg font-bold text-white mb-1">"{cmd.command}"</div>
                    <div className="text-sm text-primary-foreground/80">{cmd.description}</div>
                  </div>
                  <div className="text-xs text-primary-foreground/60">{cmd.response}</div>
                </div>
              ))}
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <h4 className="font-semibold text-white mb-2">Voice Setup Instructions:</h4>
              <ol className="text-sm text-primary-foreground/80 space-y-1">
                <li>1. Click "Voice Activation" button to enable microphone</li>
                <li>2. Speak one of the command phrases clearly</li>
                <li>3. System will prompt for password confirmation</li>
                <li>4. All emergency protocols activate automatically</li>
              </ol>
            </div>
          </CardContent>
        </Card>

        {/* Detailed Feature Guide */}
        <div className="space-y-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Feature-by-Feature Guide</h2>
            <p className="text-muted-foreground">
              Detailed instructions for each protection feature
            </p>
          </div>

          <div className="space-y-6">
            {features.map((feature, index) => (
              <Card key={index} className="bg-card">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <feature.icon className={`w-6 h-6 ${feature.color}`} />
                      </div>
                      <div>
                        <CardTitle className="text-xl">{feature.title}</CardTitle>
                        <CardDescription>{feature.description}</CardDescription>
                      </div>
                    </div>
                    <Badge variant="outline" className="ml-4">
                      {feature.activation}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-3">How to Use:</h4>
                      <ul className="space-y-2">
                        {feature.howToUse.map((step, stepIndex) => (
                          <li key={stepIndex} className="flex items-start gap-2 text-sm">
                            <div className="w-5 h-5 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                              <span className="text-xs font-medium text-primary">{stepIndex + 1}</span>
                            </div>
                            <span className="text-muted-foreground">{step}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Mobile Usage */}
        <Card className="bg-card">
          <CardHeader>
            <div className="flex items-center gap-3">
              <Smartphone className="w-6 h-6 text-primary" />
              <div>
                <CardTitle>Mobile Device Usage</CardTitle>
                <CardDescription>Using Cyber SOS on smartphones and tablets</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3">Mobile-Specific Features:</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Touch-optimized emergency activation</li>
                  <li>• Voice activation works even with screen locked</li>
                  <li>• GPS-based geo-fencing more accurate</li>
                  <li>• Mobile hotspot kill-switch capability</li>
                  <li>• SMS and call blocking during attacks</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Mobile Setup Tips:</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Enable location services for geo-fencing</li>
                  <li>• Allow microphone access for voice commands</li>
                  <li>• Add to home screen for quick access</li>
                  <li>• Enable push notifications for alerts</li>
                  <li>• Keep app running in background</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Troubleshooting */}
        <div className="space-y-6">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Troubleshooting</h2>
            <p className="text-muted-foreground">
              Common issues and solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
            {troubleshooting.map((item, index) => (
              <Card key={index} className="bg-card">
                <CardHeader>
                  <CardTitle className="text-lg text-warning">{item.issue}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {item.solutions.map((solution, sIndex) => (
                      <div key={sIndex} className="flex items-start gap-2">
                        <Play className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{solution}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Emergency Contacts */}
        <Card className="bg-gradient-alert text-destructive-foreground border-0">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl text-white">Emergency Support</CardTitle>
            <CardDescription className="text-white/80">
              If you need immediate assistance during a cyber attack
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <h4 className="font-semibold text-white mb-2">CERT-In</h4>
                <p className="text-sm text-white/80">Indian Computer Emergency Response Team</p>
                <p className="text-white font-mono">1800-425-6235</p>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-2">Cyber Crime Helpline</h4>
                <p className="text-sm text-white/80">National Cyber Crime Reporting</p>
                <p className="text-white font-mono">155260</p>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-2">Banking Fraud</h4>
                <p className="text-sm text-white/80">RBI Banking Ombudsman</p>
                <p className="text-white font-mono">14448</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <div className="text-center space-y-4">
          <h2 className="text-2xl font-bold">Ready to Get Started?</h2>
          <p className="text-muted-foreground mb-6">
            Now that you know how to use Cyber SOS, activate your protection today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button onClick={handleBack} size="lg" className="shadow-cyber">
              <Shield className="w-5 h-5 mr-2" />
              Go to Dashboard
            </Button>
            <Button onClick={() => onNavigate?.('about')} variant="outline" size="lg">
              <FileText className="w-5 h-5 mr-2" />
              Learn More About Features
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom padding */}
      <div className="h-8"></div>
    </div>
  )
}