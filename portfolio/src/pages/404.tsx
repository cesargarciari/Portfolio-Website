// src/pages/NotFound.tsx
import { Link } from "react-router-dom"
import { FaArrowLeft, FaHome} from "react-icons/fa";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-primary flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        <div className="mb-8">
          <h1 className="text-8xl md:text-9xl font-bold text-gray-100 mb-4">404</h1>
          <div className="w-24 h-1 bg-blue-500 mx-auto mb-8"></div>
        </div>

        <div className="mb-8">
          <div className="mb-8">
            <div className="w-64 h-64 mx-auto  rounded-lg flex items-center justify-center overflow-hidden">
              <img src="/404.gif" alt="404 GIF" className="object-contain w-full h-full"/>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-100 mb-4">Page Not Found</h2>
          <p className="text-lg text-gray-400 mb-2">Sorry, we couldn't find the page.</p>
          <p className="text-gray-500">The page might have been deleted or you entered the wrong URL.</p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="inline-flex items-center justify-center px-6 py-3 text-white bg-blue-600 hover:bg-blue-700 rounded-lg text-lg font-medium"
          >
            <FaHome className="w-4 h-4 mr-2" />
            Go Home
          </Link>

          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center justify-center px-6 py-3 border border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white rounded-lg text-lg font-medium"
          >
            <FaArrowLeft className="w-4 h-4 mr-2" />
            Go Back
          </button>
        </div>
      </div>
    </div>
  )
}

export default NotFound