"use client"

import { Brain, Zap, Shield, Rocket } from "lucide-react"

const features = [
  {
    icon: Brain,
    title: "AI-Powered Intelligence",
    description:
      "Advanced neural networks that learn and adapt to your workflow, making every task smarter and more efficient.",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description:
      "Experience unprecedented speed with our quantum-optimized processing engine that handles complex tasks in milliseconds.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description:
      "Military-grade encryption and zero-trust architecture ensure your data remains private and secure at all times.",
  },
  {
    icon: Rocket,
    title: "Seamless Integration",
    description:
      "Connect with 1000+ tools and platforms through our universal API, creating a unified productivity ecosystem.",
  },
]

export default function Features() {
  return (
    <section className="py-32 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-black mb-6">
            Built for the{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">Future</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Revolutionary features that redefine what's possible in productivity and automation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-purple-600/20 flex items-center justify-center mb-6 group-hover:from-cyan-500/30 group-hover:to-purple-600/30 transition-all duration-300">
                <feature.icon className="w-8 h-8 text-cyan-400 group-hover:text-cyan-300 transition-colors" />
              </div>

              <h3 className="text-xl font-bold mb-4 text-white group-hover:text-cyan-400 transition-colors">
                {feature.title}
              </h3>

              <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-20">
          <div className="inline-flex items-center gap-4 px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500/10 to-purple-600/10 border border-cyan-500/30">
            <span className="text-cyan-400 font-medium">Ready to transform your workflow?</span>
            <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  )
}
