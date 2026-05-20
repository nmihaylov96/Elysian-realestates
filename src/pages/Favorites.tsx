import NavBar from "../components/NavBar"
import { properties } from "../data/properties"
import { getFavorites } from "../utils/favorites"
import { Link } from "react-router-dom"

function Favorites() {

  const favIds = getFavorites()
  const favProperties = properties.filter(p => favIds.includes(p.id))

  return (
    <section className="min-h-screen bg-[#F8F5F0]">

      <NavBar />

      <div className="px-6 md:px-16 lg:px-24 pt-20">

        <h1 className="text-5xl font-serif text-[#1F3A2E]">
          Favorites
        </h1>

        <p className="mt-4 text-[#5f5a52]">
          Your saved properties
        </p>

      </div>

      <div className="px-6 md:px-16 lg:px-24 py-12 grid md:grid-cols-2 xl:grid-cols-3 gap-10">

        {favProperties.length === 0 && (
          <p className="text-[#5f5a52]">No favorites yet.</p>
        )}

        {favProperties.map(p => (
          <Link
            key={p.id}
            to={`/properties/${p.id}`}
            className="bg-white shadow-lg overflow-hidden"
          >

            <img
              src={p.images[0]}
              className="h-[400px] w-full object-cover"
            />

            <div className="p-6">

              <p className="text-xs text-[#C6A87A] uppercase">
                {p.location}
              </p>

              <h2 className="text-xl font-serif text-[#1F3A2E] mt-2">
                {p.title}
              </h2>

            </div>

          </Link>
        ))}

      </div>

    </section>
  )
}

export default Favorites