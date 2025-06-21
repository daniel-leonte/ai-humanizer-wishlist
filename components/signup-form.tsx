"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useToast } from "@/hooks/use-toast"
import { CheckCircle, Loader2, Sparkles } from "lucide-react"

export default function SignUpForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    interests: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setIsSubmitted(true)

    toast({
      title: "Welcome to the future! 🚀",
      description: "You're now on the AI Humanizer early access list.",
    })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  if (isSubmitted) {
    return (
      <Card className="bg-gradient-to-br from-gray-900/90 to-gray-800/90 border-cyan-500/30 backdrop-blur-sm">
        <CardContent className="p-12 text-center">
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-cyan-500/20 to-green-500/20 flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10 text-green-400" />
          </div>
          <h3 className="text-2xl font-bold text-white mb-4">You're In! 🎉</h3>
          <p className="text-gray-300 mb-6">
            Welcome to the AI Humanizer early access program. We'll keep you updated on our progress and notify you as
            soon as we launch.
          </p>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-sm">
            <Sparkles className="w-4 h-4" />
            Position #10,247 in queue
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="bg-gradient-to-br from-gray-900/90 to-gray-800/90 border-gray-700 backdrop-blur-sm hover:border-cyan-500/30 transition-all duration-300">
      <CardHeader className="text-center pb-8">
        <CardTitle className="text-2xl font-bold text-white">Secure Your Early Access</CardTitle>
        <p className="text-gray-400">Join the exclusive beta program and shape the future of productivity.</p>
      </CardHeader>

      <CardContent className="space-y-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-white font-medium">
                Name *
              </Label>
              <Input
                id="name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleChange}
                className="bg-gray-800/50 border-gray-600 text-white placeholder:text-gray-400 focus:border-cyan-500 focus:ring-cyan-500/20"
                placeholder="Enter your name"
              />
            </div>
          </div>

          <div className="space-y-2">
          <Label htmlFor="email" className="text-white font-medium">
            Email Address *
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="bg-gray-800/50 border-gray-600 text-white placeholder:text-gray-400 focus:border-cyan-500 focus:ring-cyan-500/20"
            placeholder="your@email.com"
          />
          </div>

          <div className="space-y-2">
            <Label htmlFor="interests" className="text-white font-medium">
              What interests you most about AI Humanizer?
            </Label>
            <Textarea
              id="interests"
              name="interests"
              value={formData.interests}
              onChange={handleChange}
              rows={4}
              className="bg-gray-800/50 border-gray-600 text-white placeholder:text-gray-400 focus:border-cyan-500 focus:ring-cyan-500/20 resize-none"
              placeholder="Tell us about your productivity challenges and what features excite you most..."
            />
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-6 text-lg rounded-xl shadow-2xl shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                Securing Your Spot...
              </>
            ) : (
              <>
                <Sparkles className="w-5 h-5 mr-2" />
                Join Early Access
              </>
            )}
          </Button>
        </form>

      </CardContent>
    </Card>
  )
}
