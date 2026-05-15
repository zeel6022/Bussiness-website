import SEO from "../components/SEO"

function About() {
  return (
    <>
    
     <SEO
    title="ZEEL | About Our Digital Agency"
    description="We build premium digital experiences, responsive websites, and scalable frontend solutions."
    keywords="web development, react developer, frontend developer, ui ux, modern websites"
  />
    <div className="pt-40 pb-24 bg-black text-white min-h-screen">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="max-w-3xl mb-24">

          <p className="uppercase tracking-[0.3em] text-cyan-400 text-sm mb-6">
            About Us
          </p>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-8">
            We Build Experiences That Matter
          </h1>

          <p className="text-white/70 text-lg leading-relaxed">
            Zeel's Team is a modern digital agency focused on creating
            premium websites, scalable digital products, and immersive
            user experiences for ambitious brands worldwide.
          </p>

        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-12">

          <div className="bg-white/5 border border-white/10 rounded-[32px] p-10">

            <h2 className="text-3xl font-bold mb-6">
              Our Mission
            </h2>

            <p className="text-white/70 leading-relaxed">
              We help businesses grow through modern technology,
              clean design systems, and high-performance digital solutions.
            </p>

          </div>

          <div className="bg-white/5 border border-white/10 rounded-[32px] p-10">

            <h2 className="text-3xl font-bold mb-6">
              Our Vision
            </h2>

            <p className="text-white/70 leading-relaxed">
              To create digital experiences that feel premium,
              scalable, and impactful for the future.
            </p>

          </div>

        </div>

      </div>

    </div>
    </>
  )
}

export default About