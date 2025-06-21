import SignUpForm from "@/components/signup-form"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function SignUpPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black">
      <div className="container mx-auto px-4 py-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors mb-8 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </Link>

        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-black mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Join the Future
            </h1>
            <p className="text-xl text-gray-300 max-w-lg mx-auto">
              Be among the first to experience the next generation of productivity tools.
            </p>
          </div>

          <SignUpForm />
        </div>
      </div>
    </main>
  )
}
