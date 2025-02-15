export default function Home() {
  return (
    <div className="min-h-screen p-8 pb-20 sm:p-20">
      <main className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16 pt-8">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-purple-300 font-mono">
            <span className="text-purple-500">&gt;</span> CYBERCORE_
            <span className="animate-pulse">|</span>
          </h1>
          <p className="text-purple-200/70 text-lg md:text-xl max-w-2xl mx-auto font-mono">
            NEXT-GEN DIGITAL SOLUTIONS FOR THE CYBERNETIC AGE
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {[
            {
              title: "NEURAL_INTERFACE",
              description:
                "Advanced AI-powered solutions for seamless integration",
              icon: "🧠",
            },
            {
              title: "QUANTUM_SECURE",
              description: "Military-grade encryption for your digital assets",
              icon: "🔒",
            },
            {
              title: "CYBER_ENHANCE",
              description: "Augmented reality solutions for the modern age",
              icon: "👁️",
            },
          ].map((feature) => (
            <div
              key={feature.title}
              className="border border-purple-500/30 bg-gray-900/50 backdrop-blur-sm p-6 rounded-lg hover:border-purple-500/60 transition-colors"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h2 className="text-purple-300 font-mono text-xl mb-2">
                {feature.title}
              </h2>
              <p className="text-purple-200/70">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="inline-block border border-purple-500/30 bg-gray-900/50 backdrop-blur-sm p-8 rounded-lg">
            <h2 className="text-2xl font-mono text-purple-300 mb-4">
              INITIALIZE_CONNECTION
            </h2>
            <p className="text-purple-200/70 mb-6">
              Ready to upgrade your digital presence?
            </p>
            <button className="bg-purple-600 hover:bg-purple-700 text-purple-100 font-mono py-3 px-8 rounded-lg transition-colors">
              ESTABLISH_UPLINK
            </button>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="fixed top-0 left-0 w-full h-full pointer-events-none opacity-20 z-[-1]">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_10%_20%,rgba(147,51,234,0.1),transparent_50%)]"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_90%_80%,rgba(147,51,234,0.1),transparent_50%)]"></div>
          <div className="grid grid-cols-12 h-full">
            {Array.from({ length: 12 }).map((_, i) => (
              <div
                key={i}
                className="border-l border-purple-500/5 h-full"
              ></div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
