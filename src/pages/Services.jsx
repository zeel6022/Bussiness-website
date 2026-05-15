import SEO from "../components/SEO"
import services from "../data/services"


function Services() {

  return (
    <>
    <SEO 
    title="ZEEL | Our Services"
    description="Discover our range of services, including premium digital experiences, responsive website development, and scalable frontend solutions tailored to your needs."
    keywords="services, web development, react developer, frontend developer, ui ux, modern websites"
  />
    <div className="pt-40 pb-24 bg-black text-white min-h-screen">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-20">

          <p className="uppercase tracking-[0.3em] text-cyan-400 text-sm mb-6">
            Services
          </p>

          <h1 className="text-5xl md:text-7xl font-bold mb-8">
            What We Offer
          </h1>

        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-[32px] p-10 hover:-translate-y-2 transition duration-300"
            >

              <div className="text-5xl mb-8">
                {service.icon}
              </div>

              <h2 className="text-2xl font-bold mb-4">
                {service.title}
              </h2>

              <p className="text-white/70 leading-relaxed">
                {service.desc}
              </p>

            </div>
          ))}

        </div>

      </div>

    </div>
    </>
  )
}

export default Services