import react from "react"
import Article from "./Article"
import About from "./About"

const Home=()=>{
    return <>
    <section class="relative bg-gradient-to-r from-green-900 via-blue-800 to-blue-900 text-white py-16">
        <div class="container mx-auto px-6 text-center">
            
            {/* <!-- Heading --> */}
            <h2 class="text-3xl md:text-4xl font-bold mb-2">Government Information Portal</h2>
            <p class="text-lg text-gray-200 mb-8">
            Access official government articles, news, and documents
            </p>

            {/* <!-- Search Bar --> */}
            <div class="max-w-3xl mx-auto">
            <div class="flex items-center bg-white rounded-full shadow-lg overflow-hidden">
                <input 
                type="text" 
                placeholder="Search articles, news and documents..." 
                class="flex-1 px-6 py-3 text-gray-700 focus:outline-none"
                />
                <button class="px-6 py-3 bg-yellow-400 text-black font-semibold hover:bg-yellow-500 transition">
                <i class='bx bx-search text-xl'></i>
                </button>
            </div>
            </div>

            {/* <!-- Filter Row --> */}
            <div class="max-w-3xl sm-hidden mx-auto mt-6  p-4 rounded-lg shadow flex flex-wrap gap-4 justify-center items-center">
            <h2 className="text-2xl font-bold">Filter by:-</h2>
            <select class="px-4 py-2 border rounded-md  focus:outline-none focus:ring-2 focus:ring-yellow-400">
                <option value="">Category</option>
                <option>News</option>
                <option>Documents</option>
                <option>Articles</option>
            </select>
            <select class="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400">
                <option value="">Date Range</option>
                <option>Last 7 Days</option>
                <option>Last 30 Days</option>
                <option>This Year</option>
            </select>
            <select class="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400">
                <option value="">Region</option>
                <option>National</option>
                <option>State</option>
                <option>District</option>
            </select>
            </div>

        </div>
    </section>
    <Article/>
    <About/>
    </>
}

export default Home