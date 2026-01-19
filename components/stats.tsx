const stats = [
  { value: "85+", label: "Projects Completed" },
  { value: "70%", label: "Repeat Clients" },
  { value: "3", label: "Years in Business" },
  { value: "4H", label: "Average Response Time" },
]

export function Stats() {
  return (
    <section className="py-24 md:py-32 bg-card/30 border-y border-border">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <span className="text-sm text-primary font-medium uppercase tracking-wider">By the Numbers</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 text-balance">
            Building Trust Through Results
          </h2>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center group"
            >
              <div className="inline-flex flex-col items-center">
                <div className="relative mb-4">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/10 rounded-lg blur-xl group-hover:blur-2xl transition-all duration-300 opacity-0 group-hover:opacity-100" />
                  <div className="relative text-5xl md:text-6xl font-bold bg-gradient-to-br from-primary to-primary/80 bg-clip-text text-transparent group-hover:from-primary group-hover:to-primary transition-all">
                    {stat.value}
                  </div>
                </div>
                <div className="text-sm md:text-base text-muted-foreground font-medium group-hover:text-foreground transition-colors">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
