import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Twitter, Github, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mb-4">
              AI Humanizer
            </h3>
            <p className="text-gray-400 max-w-md">
              The future of productivity is here. Join thousands of innovators already transforming their workflow.
            </p>

          </div>

          {/* CTA Button */}
          <div className="col-span-1 md:col-start-4 flex justify-center md:justify-end items-center">
            <Link href="/signup" className="w-full md:w-auto">
              <Button
                size="lg"
                className="w-full md:w-auto bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold px-8 py-6 text-lg rounded-xl shadow-2xl shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300 hover:scale-105"
              >
                Early Sign-Up
              </Button>
            </Link>
          </div>

        </div>

        <div className="border-t border-gray-800 mt-10 pt-8 flex flex-col md:flex-row justify-center items-center">
          <p className="text-gray-400 text-sm">© 2025 AI Humanizer. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
