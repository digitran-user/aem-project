"use client"

import type React from "react"
import { useState } from "react"

export interface ContactFormProps {
  title?: string
  description?: string
  fields?: {
    name?: boolean
    email?: boolean
    phone?: boolean
    subject?: boolean
    message?: boolean
  }
  submitLabel?: string
  successMessage?: string
  errorMessage?: string
  onSubmit?: (formData: any) => Promise<boolean>
}

export const ContactForm: React.FC<ContactFormProps> = ({
  title = "Contact Us",
  description = "Have a question or want to get in touch? Fill out the form below and we'll get back to you as soon as possible.",
  fields = {
    name: true,
    email: true,
    phone: true,
    subject: true,
    message: true,
  },
  submitLabel = "Send Message",
  successMessage = "Thank you! Your message has been sent successfully.",
  errorMessage = "There was an error sending your message. Please try again.",
  onSubmit,
}) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle")
  const [errors, setErrors] = useState<Record<string, string>>({})

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (fields.name && !formData.name.trim()) {
      newErrors.name = "Name is required"
    }

    if (fields.email && !formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (fields.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address"
    }

    if (fields.subject && !formData.subject.trim()) {
      newErrors.subject = "Subject is required"
    }

    if (fields.message && !formData.message.trim()) {
      newErrors.message = "Message is required"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))

    // Clear error when user types
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setFormStatus("submitting")

    try {
      // If onSubmit prop is provided, use it
      if (onSubmit) {
        const success = await onSubmit(formData)
        setFormStatus(success ? "success" : "error")
      } else {
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1000))
        setFormStatus("success")
      }

      // Reset form on success
      if (formStatus === "success") {
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        })
      }
    } catch (error) {
      setFormStatus("error")
    }
  }

  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8 mx-auto max-w-7xl">
      <div className="max-w-lg mx-auto">
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">{title}</h2>
        <p className="mt-4 text-lg text-gray-500">{description}</p>

        {formStatus === "success" ? (
          <div className="mt-8 bg-green-50 border border-green-200 rounded-md p-4">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg
                  className="h-5 w-5 text-green-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-green-800">{successMessage}</p>
              </div>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-8 grid grid-cols-1 gap-y-6">
            {fields.name && (
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    autoComplete="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`block w-full shadow-sm sm:text-sm rounded-md ${
                      errors.name
                        ? "border-red-300 focus:ring-red-500 focus:border-red-500"
                        : "border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"
                    }`}
                  />
                  {errors.name && <p className="mt-2 text-sm text-red-600">{errors.name}</p>}
                </div>
              </div>
            )}

            {fields.email && (
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <div className="mt-1">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    autoComplete="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`block w-full shadow-sm sm:text-sm rounded-md ${
                      errors.email
                        ? "border-red-300 focus:ring-red-500 focus:border-red-500"
                        : "border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"
                    }`}
                  />
                  {errors.email && <p className="mt-2 text-sm text-red-600">{errors.email}</p>}
                </div>
              </div>
            )}

            {fields.phone && (
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                  Phone
                </label>
                <div className="mt-1">
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    autoComplete="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    className="block w-full shadow-sm sm:text-sm border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>
              </div>
            )}

            {fields.subject && (
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                  Subject
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="subject"
                    id="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={`block w-full shadow-sm sm:text-sm rounded-md ${
                      errors.subject
                        ? "border-red-300 focus:ring-red-500 focus:border-red-500"
                        : "border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"
                    }`}
                  />
                  {errors.subject && <p className="mt-2 text-sm text-red-600">{errors.subject}</p>}
                </div>
              </div>
            )}

            {fields.message && (
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <div className="mt-1">
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className={`block w-full shadow-sm sm:text-sm rounded-md ${
                      errors.message
                        ? "border-red-300 focus:ring-red-500 focus:border-red-500"
                        : "border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"
                    }`}
                  />
                  {errors.message && <p className="mt-2 text-sm text-red-600">{errors.message}</p>}
                </div>
              </div>
            )}

            <div>
              <button
                type="submit"
                disabled={formStatus === "submitting"}
                className="dgt-rounded-button inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed w-full"
              >
                {formStatus === "submitting" ? "Sending..." : submitLabel}
              </button>
            </div>

            {formStatus === "error" && (
              <div className="bg-red-50 border border-red-200 rounded-md p-4">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <svg
                      className="h-5 w-5 text-red-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-red-800">{errorMessage}</p>
                  </div>
                </div>
              </div>
            )}
          </form>
        )}
      </div>
    </div>
  )
}

