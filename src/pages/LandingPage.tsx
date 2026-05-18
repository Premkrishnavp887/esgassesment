import { Button } from "@/components/ui/button";
import { Zap, Shield, BarChart3, Users } from "lucide-react";
import { motion } from "motion/react";

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50 font-sans">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <Shield className="text-white w-5 h-5" />
              </div>
              <span className="text-xl font-bold tracking-tight text-slate-900">SAM Assessment</span>
            </div>
            <nav className="hidden md:flex space-x-8 text-sm font-medium text-slate-600">
              <a href="#features" className="hover:text-blue-600 transition-colors">Features</a>
              <a href="#solutions" className="hover:text-blue-600 transition-colors">Solutions</a>
              <a href="#about" className="hover:text-blue-600 transition-colors">About</a>
            </nav>
            <div className="flex items-center gap-4">
              <Button variant="ghost" className="text-slate-600">Login</Button>
              <Button className="bg-blue-600 hover:bg-blue-700">Get Started</Button>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-grow pt-16">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden lg:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block px-4 py-1.5 mb-6 text-xs font-semibold tracking-wider text-blue-600 uppercase bg-blue-50 rounded-full">
                Professional Talent Evaluation
              </span>
              <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 mb-6">
                Measure Potential with <br />
                <span className="text-blue-600">Precision and Scale</span>
              </h1>
              <p className="max-w-2xl mx-auto text-lg text-slate-600 mb-10 leading-relaxed">
                SAM Assessment provides enterprise-grade tools to evaluate candidates, identify top talent, and build high-performance teams with data-driven insights.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" className="h-12 px-8 text-base bg-blue-600 hover:bg-blue-700">
                  Deploy Your First Assessment
                </Button>
                <Button size="lg" variant="outline" className="h-12 px-8 text-base border-slate-300 text-slate-700 hover:bg-slate-100">
                  Watch Demo
                </Button>
              </div>
            </motion.div>
          </div>

          {/* Decorative elements */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-100/50 rounded-full blur-3xl -z-10" />
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Why Industry Leaders Choose SAM</h2>
              <p className="text-slate-600">Powerful features designed for modern recruitment and talent development.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 text-left">
              {[
                {
                  icon: <Zap className="w-6 h-6 text-amber-500" />,
                  title: "Rapid Deployment",
                  desc: "Launch comprehensive assessments in minutes with our extensive library of pre-built templates."
                },
                {
                  icon: <BarChart3 className="w-6 h-6 text-blue-500" />,
                  title: "Advanced Analytics",
                  desc: "Deep-dive into performance metrics with automated scoring and comparative candidate analysis."
                },
                {
                  icon: <Users className="w-6 h-6 text-green-500" />,
                  title: "Scalable Infrastructure",
                  desc: "Seamlessly handle thousands of concurrent test-takers with zero latency and high reliability."
                }
              ].map((feature, i) => (
                <div key={i} className="p-8 rounded-2xl border border-slate-100 bg-slate-50 hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-blue-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center uppercase tracking-widest font-semibold">
              {[
                { val: "2M+", label: "Assessments" },
                { val: "150+", label: "Global Clients" },
                { val: "99.9%", label: "Uptime" },
                { val: "50+", label: "Languages" }
              ].map((stat, i) => (
                <div key={i}>
                  <div className="text-4xl md:text-5xl font-extrabold mb-2">{stat.val}</div>
                  <div className="text-blue-100 text-xs">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-2 text-white">
              <Shield className="w-6 h-6" />
              <span className="text-lg font-bold">SAM Assessment</span>
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="hover:text-white">Privacy Policy</a>
              <a href="#" className="hover:text-white">Terms of Service</a>
              <a href="#" className="hover:text-white">Contact</a>
            </div>
            <p className="text-xs">© 2026 SAM Assessment. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
