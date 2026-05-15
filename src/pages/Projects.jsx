import SEO from "../components/SEO"
import projects from "../data/projects"


function Projects() {


  return (
    <>
    <SEO
    title="ZEEL | Our Projects"
    description="Explore our portfolio of selected projects, showcasing our expertise in creating premium digital experiences and scalable frontend solutions."
    keywords="projects, portfolio, web development, react developer, frontend developer"
  />
    
    <div className="pt-40 pb-24 bg-black text-white min-h-screen">

      <div className="max-w-7xl mx-auto px-6">

        <div className="mb-20">

          <p className="uppercase tracking-[0.3em] text-cyan-400 text-sm mb-6">
            Projects
          </p>

          <h1 className="text-5xl md:text-7xl font-bold">
            Selected Work
          </h1>

        </div>

        <div className="grid md:grid-cols-2 gap-10">

          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-[32px] overflow-hidden group"
            >

              <div className="relative overflow-hidden">

  <img
    src={project.image}
    className="h-72 w-full object-cover group-hover:scale-110 transition duration-700"
  />

  {/* <div className="absolute inset-0 bg-black/40" /> */}

</div>

              <div className="p-10">

                <p className="text-cyan-400 mb-4">
                  {project.category}
                </p>

                <h2 className="text-3xl font-bold mb-6">
                  {project.title}
                </h2>

                <a href={project.link} target="_blank" rel="noopener" className="px-6 py-3 rounded-2xl border border-white/20 hover:bg-white/10 transition">
                  View Project
                </a>

              </div>

            </div>
          ))}

        </div>

      </div>

    </div>
    </>
  )
}

export default Projects