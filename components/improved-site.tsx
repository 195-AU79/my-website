'use client'

import { useState, useEffect } from 'react'
import { ChevronUp, Briefcase, GraduationCap, ChevronLeft, ChevronRight, Linkedin, Facebook, Instagram } from 'lucide-react'

export function ImprovedSite() {
  const [activeSection, setActiveSection] = useState('about')
  const [carouselIndex, setCarouselIndex] = useState(0)

  const sections = ['about', 'skills', 'experience', 'education', 'portfolio', 'hobbies']

  useEffect(() => {
    const handleScroll = () => {
      const currentSection = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (currentSection) {
        setActiveSection(currentSection)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (section: string) => {
    setActiveSection(section)
    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' })
  }

  const carouselItems = [
    {
      title: "Involvement in associations",
      description: "Communication manager and drummer in a music project, Member of a municipal list during the elections in 2014"
    },
    {
      title: "Activities",
      description: "Dance, drums, Travels"
    }
  ]

  const nextCarousel = () => {
    setCarouselIndex((prevIndex) => (prevIndex + 1) % carouselItems.length)
  }

  const prevCarousel = () => {
    setCarouselIndex((prevIndex) => (prevIndex - 1 + carouselItems.length) % carouselItems.length)
  }

  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      <nav className="bg-white shadow-md fixed top-0 left-0 right-0 z-10">
        <div className="container mx-auto px-4">
          <ul className="flex justify-center space-x-4 py-4">
            {sections.map((section) => (
              <li key={section}>
                <button
                  onClick={() => handleNavClick(section)}
                  className={`text-gray-600 hover:text-blue-600 transition duration-300 capitalize ${
                    activeSection === section ? 'font-bold' : ''
                  }`}
                >
                  {section}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <main className="pt-16">
        <section id="about" className="bg-blue-600 text-white py-20">
          <div className="container mx-auto px-4 flex flex-col items-center">
            <img 
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ImagesCV%2001.14.13-gq6uReX3CLBALirA7aMsMFsqmpEt7x.jpg" 
              alt="Aurelie Touboul smiling with long wavy blonde hair" 
              className="rounded-full w-64 h-64 object-cover mb-8"
            />
            <h1 className="text-4xl font-bold mb-4">Aurelie Touboul</h1>
            <a
              href="https://www.linkedin.com/in/aur%C3%A9lie-touboul/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-blue-600 px-6 py-2 rounded-full font-bold hover:bg-blue-100 transition duration-300"
            >
              Contact me on LinkedIn
            </a>
          </div>
        </section>

        <section id="skills" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Qualification</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { name: "Team Animation", value: 60 },
                { name: "Marketing", value: 75 },
                { name: "Customer Relationship", value: 80 },
                { name: "Web design", value: 65 },
                { name: "Event management", value: 80 },
                { name: "Computer programming", value: 25 }
              ].map((skill) => (
                <div key={skill.name} className="bg-white p-4 rounded-lg shadow">
                  <h3 className="font-semibold mb-2">{skill.name}</h3>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${skill.value}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="experience" className="bg-gray-200 py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Employment Experience</h2>
            <div className="space-y-8">
              {[
                {
                  company: "ATOS",
                  position: "Project Management Officer (PMO)",
                  date: "October 2022 - June 2023",
                  description: [
                    "Support for an Atos CTO",
                    "Coordination to improve communication between each project"
                  ]
                },
                {
                  company: "DGA (French Directorate General of Armaments)",
                  position: "Process co-facilitator",
                  date: "September 2020 - September 2022",
                  description: [
                    "Participated in the quality process",
                    "Organization and participation in an audit, in the sites and environment sub-directorate",
                    "Key achievement: development of new tools to promote and empower quality"
                  ]
                },
                {
                  company: "Saint Lucia Distillers",
                  position: "Sales and Marketing Assistant",
                  date: "January 2019 - July 2019",
                  description: [
                    "Participated in global product branding",
                    "Participated in a Website project",
                    "Key achievement: Designed a wine catalogue with more than 500 products"
                  ]
                },
                {
                  company: "IFP ENERGIES NOUVELLES",
                  position: "Communication and Human Resource Assistant",
                  date: "February 2016 - July 2016",
                  description: [
                    "Participated in global HR management",
                    "Reviewed the welcome packs to make them more adapted to new recruits",
                    "Key achievement: Redesigned the intranet space dedicated to HR management by developing more modern communication tools"
                  ]
                },
                {
                  company: "IGESA",
                  position: "Activity organiser",
                  date: "July 2014 - August 2014",
                  description: [
                    "In charge of 5 to 10 years old children during a three-weeks summer camp",
                    "Organised animations and activities within a team",
                    "Acquired skills: developed communication skills, teamwork abilities and patience with kids"
                  ]
                }
              ].map((job, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex items-center mb-4">
                    <Briefcase className="w-6 h-6 text-blue-600 mr-2" />
                    <h3 className="text-xl font-bold">{job.company}</h3>
                  </div>
                  <h4 className="text-lg font-semibold mb-2">{job.position}</h4>
                  <p className="text-gray-600 mb-4">{job.date}</p>
                  <ul className="list-disc pl-5 space-y-1">
                    {job.description.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="education" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Education</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  year: "2024 - 2025",
                  school: "EUGENIA School - Paris",
                  degree: "MSc Business et Data",
                  details: ["Power BI", "SQL", "Python"]
                },
                {
                  year: "2020 - 2021",
                  school: "University of Paris Saclay - Versailles",
                  degree: "Degree master in customer relationship, digital and quality tools",
                  details: ["Apprenticeship in the DGA", "Intercultural management", "Conduct of business negotiation"]
                },
                {
                  year: "2014 - 2019",
                  school: "Kedge Business School - Marseille",
                  degree: "International Bachelor in Business Administration",
                  details: ["International Environment and Geopolitics", "Sustainable Development"]
                },
                {
                  year: "2017 - 2018",
                  school: "Universidad de Malaga - Spain",
                  degree: "Economics",
                  details: []
                },
                {
                  year: "August 2018 - December 2018",
                  school: "Escuela Bancaria y Comercio EBC - Mexico",
                  degree: "Marketing",
                  details: []
                },
                {
                  year: "2012 - 2013",
                  school: "Military Preparation in National Navy - France",
                  degree: "General training (military, maritime, security, fire), nautical training on water.",
                  details: []
                },
                {
                  year: "2014",
                  school: "Baccalaureat (A level)",
                  degree: "Economic and social option",
                  details: []
                }
              ].map((edu, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex items-center mb-4">
                    <GraduationCap className="w-6 h-6 text-blue-600 mr-2" />
                    <h3 className="text-xl font-bold">{edu.school}</h3>
                  </div>
                  <h4 className="text-lg font-semibold mb-2">{edu.degree}</h4>
                  <p className="text-gray-600 mb-4">{edu.year}</p>
                  {edu.details.length > 0 && (
                    <ul className="list-disc pl-5 space-y-1">
                      {edu.details.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="portfolio" className="bg-gray-200 py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Portfolio</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: "Travel", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Voyage-Fc2zr5TaQ14ihUTncsjjN3nci28Ol4.png", link: "https://195-au79.github.io/aurelietouboul.fr/Voyage.aurelietouboul.com/index1.html" },
                { title: "Games", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/serpent%20-kculnaAwY2TIJXLg53giYyxAUjYDPR.png", link: "https://195-au79.github.io/aurelietouboul.fr/Jeux.aurelietouboul.com/index.html" },
                { title: "Movies", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Actrice-9GnOECm9ktnBAv24TLnKLTjU2Z59vH.png", link: "https://195-au79.github.io/aurelietouboul.fr/Actrices.aurelietouboul.com/index.html" }
              ].map((item, index) => (
                <a key={index} href={item.link} target="_blank" rel="noopener noreferrer" className="block">
                  <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
                    <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
                    <div className="p-4">
                      <h3 className="font-semibold text-lg">{item.title}</h3>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section id="hobbies" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Hobbies</h2>
            <div className="bg-white rounded-lg shadow-md p-6 relative">
              <div className="text-center">
                <h3 className="text-xl font-bold mb-2">{carouselItems[carouselIndex].title}</h3>
                <p>{carouselItems[carouselIndex].description}</p>
              </div>
              <button onClick={prevCarousel} className="absolute left-2 top-1/2 transform -translate-y-1/2" aria-label="Previous hobby">
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button onClick={nextCarousel} className="absolute right-2 top-1/2 transform -translate-y-1/2" aria-label="Next hobby">
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-8  text-center">
        <a href="#about" className="inline-block mb-4" aria-label="Back to top">
          <ChevronUp className="w-6 h-6" />
        </a>
        <h5>© 2023 Aurelie Touboul</h5>
        <div className="flex justify-center space-x-4 mt-4">
          <a href="https://www.linkedin.com/in/aur%C3%A9lie-touboul/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <Linkedin className="w-6 h-6" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <Facebook className="w-6 h-6" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <Instagram className="w-6 h-6" />
          </a>
        </div>
      </footer>
    </div>
  )
}