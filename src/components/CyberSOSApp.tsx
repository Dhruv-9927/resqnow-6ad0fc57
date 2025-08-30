"use client"
import { useState, useEffect } from "react"
import {
  ArrowLeft,
  Shield,
  Check,
  Home,
  Settings,
  Activity,
  User,
  Lock,
  Snowflake as Freeze,
  DollarSign,
  Wifi,
  MapPin,
  AlertTriangle,
  Mail,
  MessageSquare,
  CreditCard,
  Eye,
  Users,
  Map,
  Mic,
  Hand,
  WifiOff,
  Database,
  Globe,
  FileText,
  HelpCircle,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useToast } from "@/hooks/use-toast"

const accountTypes = [
  {
    id: 1,
    name: "Google Workspace",
    icon: "🔍",
    lastScan: "19/12/2024 16:39",
    status: "Protected",
    isSecure: true,
  },
  {
    id: 2,
    name: "Microsoft 365",
    icon: "📧",
    lastScan: "19/12/2024 16:39",
    status: "Protected",
    isSecure: true,
  },
  {
    id: 3,
    name: "Banking Services",
    icon: "🏦",
    lastScan: "19/12/2024 16:39",
    status: "Protected",
    isSecure: true,
  },
  {
    id: 4,
    name: "Social Media",
    icon: "📱",
    lastScan: "19/12/2024 16:39",
    status: "Protected",
    isSecure: true,
  },
  {
    id: 5,
    name: "Cloud Storage",
    icon: "☁️",
    lastScan: "19/12/2024 16:39",
    status: "Protected",
    isSecure: true,
  },
  {
    id: 6,
    name: "Email Accounts",
    icon: "✉️",
    lastScan: "19/12/2024 16:39",
    status: "Protected",
    isSecure: true,
  },
  {
    id: 7,
    name: "Online Shopping",
    icon: "🛒",
    lastScan: "19/12/2024 16:39",
    status: "Protected",
    isSecure: true,
  },
  {
    id: 8,
    name: "Streaming Services",
    icon: "🎬",
    lastScan: "19/12/2024 16:39",
    status: "Protected",
    isSecure: true,
  },
]

const securityFeatures = [
  {
    id: 1,
    name: "Lock Vault",
    description: "Auto-encrypt & self-destruct sensitive files",
    icon: Lock,
    isActive: true,
  },
  {
    id: 2,
    name: "ID Freeze",
    description: "Freeze Aadhaar/KYC access instantly",
    icon: Freeze,
    isActive: true,
  },
  {
    id: 3,
    name: "Network Kill-Switch",
    description: "Cut internet to stop data exfiltration",
    icon: WifiOff,
    isActive: false,
  },
  {
    id: 4,
    name: "Geo-Fencing Lock",
    description: "Auto-lock accounts from foreign access",
    icon: MapPin,
    isActive: true,
  },
]

const protectionFeatures = [
  { name: "Lock Vault", icon: Lock, color: "text-primary" },
  { name: "Decoy Mode", icon: Eye, color: "text-warning" },
  { name: "Kill Switch", icon: AlertTriangle, color: "text-destructive" },
  { name: "ID Freeze", icon: Freeze, color: "text-accent" },
  { name: "Geo Lock", icon: MapPin, color: "text-success" },
  { name: "Community", icon: Users, color: "text-primary" },
]

const activityLog = [
  {
    id: 1,
    title: "Routine Scan Completed",
    time: "11:45 AM",
    icon: Shield,
    type: "success",
  },
  {
    id: 2,
    title: "Geo-Lock Activated (Login from Mumbai)",
    time: "11:32 AM",
    icon: MapPin,
    type: "warning",
  },
  {
    id: 3,
    title: "Decoy Files Accessed by Threat",
    time: "10:36 PM",
    icon: Eye,
    type: "alert",
  },
  {
    id: 4,
    title: "Network Kill-Switch Triggered",
    time: "09:15 PM",
    icon: WifiOff,
    type: "critical",
  },
  {
    id: 5,
    title: "Lock Vault: 15 Files Auto-Encrypted",
    time: "08:42 PM",
    icon: Lock,
    type: "success",
  },
]

const recentActivity = [
  {
    id: 1,
    title: "Decoy Mode Activated",
    description: "Honeypot deployed successfully",
    time: "2 hours ago",
    icon: Eye,
  },
  {
    id: 2,
    title: "Kill Switch Enabled",
    description: "Network connection severed",
    time: "4 hours ago",
    icon: AlertTriangle,
  },
  {
    id: 3,
    title: "ID Freeze Installed",
    description: "Aadhaar services temporarily locked",
    time: "6 hours ago",
    icon: Freeze,
  },
]

const communityAlerts = [
  {
    id: 1,
    title: "Email Scam Alert",
    description: "Phishing campaign targeting banking OTPs",
    location: "Mumbai, Bangalore",
    severity: "high",
    icon: Mail,
    count: 47,
  },
  {
    id: 2,
    title: "SMS Scam Alert",
    description: "Fake delivery notifications with malicious links",
    location: "Delhi, Pune",
    severity: "medium",
    icon: MessageSquare,
    count: 23,
  },
  {
    id: 3,
    title: "Wi-Fi Hotspot Alert",
    description: "Malicious hotspots in public areas",
    location: "Hyderabad",
    severity: "critical",
    icon: Wifi,
    count: 12,
  },
]

interface CyberSOSAppProps {
  onNavigate?: (page: string) => void;
}

export default function CyberSOSApp({ onNavigate }: CyberSOSAppProps) {
  const [currentScreen, setCurrentScreen] = useState("dashboard")
  const [isListening, setIsListening] = useState(false)
  const [sosActivated, setSosActivated] = useState(false)
  const { toast } = useToast()

  // Voice activation simulation
  useEffect(() => {
    if (isListening) {
      const timer = setTimeout(() => {
        setIsListening(false)
        toast({
          title: "Voice Command Detected",
          description: "SOS protocols ready for activation",
          duration: 3000,
        })
      }, 3000)
      return () => clearTimeout(timer)
    }
  }, [isListening, toast])

  const handleSOSActivation = () => {
    setSosActivated(true)
    toast({
      title: "🚨 CYBER SOS ACTIVATED",
      description: "All emergency protocols are now active",
      variant: "destructive",
      duration: 5000,
    })
    
    // Simulate progressive activation
    setTimeout(() => {
      toast({
        title: "🔒 Accounts Locked",
        description: "Critical accounts secured successfully",
        duration: 3000,
      })
    }, 1000)
    
    setTimeout(() => {
      toast({
        title: "🛡️ Scan Complete",
        description: "Device scan completed - no threats detected",
        duration: 3000,
      })
    }, 2000)
  }

  const handleVoiceActivation = () => {
    setIsListening(true)
    toast({
      title: "🎤 Listening...",
      description: "Say 'RED ALERT' to activate SOS",
      duration: 3000,
    })
  }

  const renderDashboard = () => (
    <div className="space-y-6">
      {/* Threat Level Indicator */}
      <Card className="bg-gradient-cyber text-primary-foreground border-0">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-2xl font-bold">Current Threat Level</h3>
              <p className="text-primary-foreground/80">All systems secure</p>
            </div>
            <div className="text-right">
              <div className="text-4xl font-bold text-success">LOW</div>
              <Badge variant="secondary" className="bg-success/20 text-success border-success/30">
                ✓ Protected
              </Badge>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Location & Community Map */}
      <Card className="bg-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Map className="h-5 w-5 text-primary" />
            Community Threat Map
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-48 bg-gradient-surface rounded-lg flex items-center justify-center relative overflow-hidden">
            <Map className="w-16 h-16 text-muted-foreground/20 absolute" />
            <div className="text-center">
              <MapPin className="w-8 h-8 mx-auto mb-2 text-primary" />
              <p className="text-sm font-medium">Mumbai, Maharashtra</p>
              <p className="text-xs text-muted-foreground mt-1">3 active threats in your area</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent SOS Activations */}
        <Card className="bg-card">
          <CardHeader>
            <CardTitle>Recent SOS Activations</CardTitle>
            <CardDescription>Community emergency responses</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-warning/10 rounded-lg">
                <span className="text-sm">Ransomware Attack</span>
                <Badge variant="outline" className="text-warning border-warning/30">
                  2 hrs ago
                </Badge>
              </div>
              <div className="flex items-center justify-between p-3 bg-destructive/10 rounded-lg">
                <span className="text-sm">Banking Fraud</span>
                <Badge variant="outline" className="text-destructive border-destructive/30">
                  5 hrs ago
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Threat Summary */}
        <Card className="bg-card">
          <CardHeader>
            <CardTitle>Active Protection</CardTitle>
            <CardDescription>Security features currently active</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-3">
              {protectionFeatures.slice(0, 4).map((feature, index) => (
                <div key={index} className="flex items-center gap-2 p-2 bg-muted/50 rounded-lg">
                  <feature.icon className={`w-4 h-4 ${feature.color}`} />
                  <span className="text-xs">{feature.name}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Community Alerts */}
      <Card className="bg-card">
        <CardHeader>
          <CardTitle>Community Alerts</CardTitle>
          <CardDescription>Real-time threats in your area</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {communityAlerts.map((alert) => (
              <div key={alert.id} className="flex items-center gap-3 p-4 bg-muted/50 rounded-lg hover:bg-muted/70 transition-colors">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                  alert.severity === 'critical' ? 'bg-orange-500/20 text-destructive' :
                  alert.severity === 'high' ? 'bg-orange-500/20 text-warning' :
                  'bg-orange-500/20 text-primary'
                }`}>
                  <alert.icon className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <h4 className="font-medium">{alert.title}</h4>
                  <p className="text-sm text-muted-foreground">{alert.description}</p>
                  <p className="text-xs text-muted-foreground mt-1">{alert.location} • {alert.count} reports</p>
                </div>
                <Badge variant={alert.severity === 'critical' ? 'destructive' : alert.severity === 'high' ? 'secondary' : 'outline'}>
                  {alert.severity.toUpperCase()}
                </Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Floating SOS Button */}
      <button
        onClick={() => setCurrentScreen("cybersos")}
        className="fixed bottom-24 right-6 w-16 h-16 bg-gradient-alert rounded-full flex items-center justify-center shadow-alert hover:shadow-glow transition-all duration-300 z-20 animate-pulse"
      >
        <Shield className="w-8 h-8 text-white" />
      </button>
    </div>
  )

  const renderCyberSOS = () => (
    <div className="space-y-6">
      {/* Security Status */}
      <Card className={`border-2 transition-all duration-300 ${sosActivated ? 'border-destructive bg-destructive/5' : 'border-success bg-success/5'}`}>
        <CardContent className="p-6">
          <div className="flex items-center gap-4">
            <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${sosActivated ? 'bg-destructive text-white' : 'bg-success text-white'}`}>
              <Shield className="w-7 h-7" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold">Security Status</h3>
              <p className={`text-sm font-medium ${sosActivated ? 'text-destructive' : 'text-success'}`}>
                {sosActivated ? 'EMERGENCY MODE ACTIVE' : 'Protection Active'}
              </p>
              <p className="text-xs text-muted-foreground">
                {sosActivated ? 'All systems locked down' : 'All systems are secure'}
              </p>
            </div>
            {sosActivated && (
              <div className="text-right">
                <div className="animate-pulse text-destructive text-lg font-bold">🚨 SOS</div>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Cyber Emergency Response */}
      <Card className="bg-gradient-cyber text-primary-foreground border-0 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12 -translate-x-full animate-pulse" />
        <CardContent className="p-8 text-center relative">
          <div className="absolute inset-0 flex items-center justify-center opacity-10">
            <Lock className="w-32 h-32" />
          </div>
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-2">Cyber Emergency</h2>
            <h2 className="text-3xl font-bold mb-4">Response System</h2>
            <p className="text-primary-foreground/90 mb-8">
              Instantly activate all defense protocols when under cyber attack
            </p>
            <div className="space-y-4">
              <Button
                onClick={handleVoiceActivation}
                disabled={isListening}
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-lg font-medium text-lg shadow-glow transition-all duration-300"
              >
                <Mic className="w-6 h-6 mr-3" />
                {isListening ? 'Listening...' : 'Voice Activation'}
              </Button>
              <Button
                onClick={handleSOSActivation}
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-lg font-medium text-lg shadow-glow transition-all duration-300"
              >
                <Hand className="w-6 h-6 mr-3" />
                Manual Activation
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Protection Features */}
        <Card className="bg-card">
          <CardHeader>
            <CardTitle>Defense Systems</CardTitle>
            <CardDescription>Advanced protection protocols</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-3">
              {protectionFeatures.map((feature, index) => (
                <div key={index} className="flex items-center gap-2 p-3 bg-muted/50 rounded-lg hover:bg-muted/70 transition-colors">
                  <feature.icon className={`w-5 h-5 ${feature.color}`} />
                  <span className="text-sm font-medium">{feature.name}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Security Status Dashboard */}
        <Card className="bg-card">
          <CardHeader>
            <CardTitle>Account Security</CardTitle>
            <CardDescription>Connected account protection status</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {[
                { icon: Mail, name: "Email Accounts", status: "Secured" },
                { icon: MessageSquare, name: "Social Media", status: "Protected" },
                { icon: CreditCard, name: "Financial Accounts", status: "Locked" },
                { icon: Database, name: "Cloud Storage", status: "Encrypted" },
              ].map((account, index) => (
                <div key={index} className="flex items-center gap-3 p-2 bg-muted/30 rounded-lg">
                  <account.icon className="w-5 h-5 text-success" />
                  <span className="text-sm flex-1">{account.name}</span>
                  <Badge variant="outline" className="text-success border-success/30">
                    {account.status}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity */}
      <Card className="bg-card">
        <CardHeader>
          <CardTitle>Security Events</CardTitle>
          <CardDescription>Recent protection activities</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {recentActivity.map((activity) => (
              <div key={activity.id} className="flex items-center gap-3 p-4 bg-muted/30 rounded-lg">
                <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                  <activity.icon className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1">
                  <h4 className="font-medium">{activity.title}</h4>
                  <p className="text-sm text-muted-foreground">{activity.description}</p>
                  <p className="text-xs text-muted-foreground mt-1">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )

  const renderProtection = () => (
    <div className="space-y-6">
      <Card className="bg-card">
        <CardHeader>
          <CardTitle>Connected Accounts</CardTitle>
          <CardDescription>Accounts under Cyber SOS protection</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {accountTypes.map((account) => (
              <div key={account.id} className="flex items-center gap-3 p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center text-xl">
                  {account.icon}
                </div>
                <div className="flex-1">
                  <h3 className="font-medium">{account.name}</h3>
                  <p className="text-sm text-muted-foreground">Last scan: {account.lastScan}</p>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="outline" className="text-success border-success/30">
                    {account.status}
                  </Badge>
                  <div className="w-6 h-6 bg-success rounded-full flex items-center justify-center">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )

  const renderSecurityFeatures = () => (
    <div className="space-y-6">
      <Card className="bg-card">
        <CardHeader>
          <CardTitle>Security Features</CardTitle>
          <CardDescription>Advanced protection systems and controls</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {securityFeatures.map((feature) => (
              <div key={feature.id} className="flex items-center justify-between p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors">
                <div className="flex items-center gap-3">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                    feature.isActive ? 'bg-success/20 text-success' : 'bg-muted text-muted-foreground'
                  }`}>
                    <feature.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-medium">{feature.name}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Badge variant={feature.isActive ? "default" : "secondary"}>
                    {feature.isActive ? "Active" : "Inactive"}
                  </Badge>
                  <Button variant="outline" size="sm">
                    Configure
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )

  const renderActivityLog = () => (
    <div className="space-y-6">
      <Card className="bg-card">
        <CardHeader>
          <CardTitle>Security Activity Log</CardTitle>
          <CardDescription>Recent security events and system activities</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {activityLog.map((activity) => (
              <div key={activity.id} className={`flex items-center gap-3 p-4 rounded-lg border-l-4 ${
                activity.type === 'critical' ? 'bg-destructive/5 border-destructive' :
                activity.type === 'alert' ? 'bg-warning/5 border-warning' :
                activity.type === 'warning' ? 'bg-warning/5 border-warning' :
                'bg-success/5 border-success'
              }`}>
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                  activity.type === 'critical' ? 'bg-destructive/20 text-destructive' :
                  activity.type === 'alert' ? 'bg-warning/20 text-warning' :
                  activity.type === 'warning' ? 'bg-warning/20 text-warning' :
                  'bg-success/20 text-success'
                }`}>
                  <activity.icon className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <h3 className="font-medium">{activity.title}</h3>
                  <p className="text-sm text-muted-foreground">{activity.time}</p>
                </div>
                <Badge variant={
                  activity.type === 'critical' ? 'destructive' :
                  activity.type === 'alert' ? 'secondary' :
                  activity.type === 'warning' ? 'secondary' :
                  'outline'
                }>
                  {activity.type.toUpperCase()}
                </Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )

  const handleNavigation = (page: string) => {
    if (onNavigate) {
      onNavigate(page)
    } else {
      setCurrentScreen(page)
    }
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <div className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              {currentScreen !== "dashboard" && (
                <button onClick={() => setCurrentScreen("dashboard")} className="hover:bg-muted p-2 rounded-lg transition-colors">
                  <ArrowLeft className="w-5 h-5 text-muted-foreground hover:text-foreground" />
                </button>
              )}
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-cyber rounded-lg flex items-center justify-center">
                  <Shield className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h1 className="text-xl font-bold">
                    {currentScreen === "dashboard" && "ResQnow Dashboard"}
                    {currentScreen === "cybersos" && "Emergency Response"}
                    {currentScreen === "protection" && "Account Protection"}
                    {currentScreen === "security" && "Security Features"}
                    {currentScreen === "activity" && "Activity Monitor"}
                  </h1>
                  {sosActivated && (
                    <p className="text-xs text-destructive font-medium animate-pulse">EMERGENCY MODE ACTIVE</p>
                  )}
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="sm" onClick={() => handleNavigation('about')}>
                <HelpCircle className="w-4 h-4 mr-2" />
                About
              </Button>
              <Button variant="ghost" size="sm" onClick={() => handleNavigation('help')}>
                <FileText className="w-4 h-4 mr-2" />
                Guide
              </Button>
              <Settings className="w-5 h-5 text-muted-foreground" />
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        {currentScreen === "dashboard" && renderDashboard()}
        {currentScreen === "cybersos" && renderCyberSOS()}
        {currentScreen === "protection" && renderProtection()}
        {currentScreen === "security" && renderSecurityFeatures()}
        {currentScreen === "activity" && renderActivityLog()}
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-card/95 backdrop-blur-sm border-t border-border">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-around py-3">
            <button
              onClick={() => setCurrentScreen("dashboard")}
              className={`flex flex-col items-center gap-1 p-2 rounded-lg transition-colors ${
                currentScreen === "dashboard" ? "text-primary bg-primary/10" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <Home className="w-5 h-5" />
              <span className="text-xs">Dashboard</span>
            </button>
            <button
              onClick={() => setCurrentScreen("cybersos")}
              className={`flex flex-col items-center gap-1 p-2 rounded-lg transition-colors ${
                currentScreen === "cybersos" ? "text-primary bg-primary/10" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <Shield className="w-5 h-5" />
              <span className="text-xs">SOS</span>
            </button>
            <button
              onClick={() => setCurrentScreen("activity")}
              className={`flex flex-col items-center gap-1 p-2 rounded-lg transition-colors ${
                currentScreen === "activity" ? "text-primary bg-primary/10" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <Activity className="w-5 h-5" />
              <span className="text-xs">Activity</span>
            </button>
            <button
              onClick={() => setCurrentScreen("security")}
              className={`flex flex-col items-center gap-1 p-2 rounded-lg transition-colors ${
                currentScreen === "security" ? "text-primary bg-primary/10" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <Lock className="w-5 h-5" />
              <span className="text-xs">Security</span>
            </button>
            <button
              onClick={() => setCurrentScreen("protection")}
              className={`flex flex-col items-center gap-1 p-2 rounded-lg transition-colors ${
                currentScreen === "protection" ? "text-primary bg-primary/10" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <User className="w-5 h-5" />
              <span className="text-xs">Accounts</span>
            </button>
          </div>
        </div>
      </div>

      {/* Add bottom padding to prevent content from being hidden behind fixed navigation */}
      <div className="h-20"></div>
    </div>
  )
}