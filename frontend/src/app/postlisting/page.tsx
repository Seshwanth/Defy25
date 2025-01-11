'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { toast } from "@/components/ui/toast"
import { submitListing } from './actions'
import { Building, DollarSign, FileText, ImageIcon, Share2 } from 'lucide-react'
import GeometricBackground from '@/components/GeometricBackground'

export default function PostListing() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [hasRevenue, setHasRevenue] = useState<'yes' | 'no'>('no')
  const router = useRouter()

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsSubmitting(true)

    const formData = new FormData(event.currentTarget)
    
    try {
      await submitListing(formData)
      toast({
        title: "Listing submitted successfully!",
        description: "Your property has been listed.",
      })
      router.push('/listings')
    } catch (error) {
      Toast({
        title: "Error submitting listing",
        description: "Please try again later.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const formFields = [
    { name: 'name', label: 'Property Name', type: 'text', icon: Building },
    { name: 'address', label: 'Address', type: 'text', icon: Building },
    { name: 'bond', label: 'Bond (Image Attachment)', type: 'file', icon: ImageIcon, accept: 'image/*' },
    { name: 'value', label: 'Value of the Real Estate', type: 'number', icon: DollarSign },
    { name: 'shares', label: 'Number of Shares to be Split', type: 'number', icon: Share2 },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white py-12 px-4 sm:px-6 lg:px-8 relative">
      {/* <GeometricBackground /> */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto bg-gray-800/80 backdrop-blur-lg rounded-xl shadow-2xl overflow-hidden relative z-10"
      >
        <div className="px-6 py-8 sm:px-10">
          <h1 className="text-3xl font-extrabold text-center mb-8 text-gray-100">Post a New Listing</h1>
          <form onSubmit={handleSubmit} className="space-y-6">
            {formFields.map((field) => (
              <motion.div key={field.name} whileHover={{ scale: 1.02 }} className="relative">
                <Label htmlFor={field.name} className="block text-sm font-medium mb-1 text-gray-300">{field.label}</Label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <field.icon className="h-5 w-5 text-gray-500" aria-hidden="true" />
                  </div>
                  <Input
                    id={field.name}
                    name={field.name}
                    type={field.type}
                    accept={field.accept}
                    required
                    className="block w-full pl-10 sm:text-sm border-gray-600 rounded-md bg-gray-700/50 focus:ring-gray-500 focus:border-gray-500 text-gray-100 placeholder-gray-400"
                  />
                </div>
              </motion.div>
            ))}
            
            <motion.div whileHover={{ scale: 1.02 }} className="relative">
              <Label className="block text-sm font-medium mb-1 text-gray-300">Revenue</Label>
              <RadioGroup defaultValue="no" onValueChange={(value) => setHasRevenue(value as 'yes' | 'no')} className="flex space-x-4">
                <div className="flex items-center">
                  <RadioGroupItem value="yes" id="revenue-yes" className="text-gray-300" />
                  <Label htmlFor="revenue-yes" className="ml-2 text-gray-300">Yes</Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem value="no" id="revenue-no" className="text-gray-300" />
                  <Label htmlFor="revenue-no" className="ml-2 text-gray-300">No</Label>
                </div>
              </RadioGroup>
            </motion.div>
            
            {hasRevenue === 'yes' && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="relative"
              >
                <Label htmlFor="rentingAgreement" className="block text-sm font-medium mb-1 text-gray-300">Renting Agreement (PDF Attachment)</Label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FileText className="h-5 w-5 text-gray-500" aria-hidden="true" />
                  </div>
                  <Input
                    id="rentingAgreement"
                    name="rentingAgreement"
                    type="file"
                    accept=".pdf"
                    required
                    className="block w-full pl-10 sm:text-sm border-gray-600 rounded-md bg-gray-700/50 focus:ring-gray-500 focus:border-gray-500 text-gray-100"
                  />
                </div>
              </motion.div>
            )}
            
            <motion.div whileHover={{ scale: 1.02 }} className="relative">
              <Label htmlFor="description" className="block text-sm font-medium mb-1 text-gray-300">Description</Label>
              <Textarea
                id="description"
                name="description"
                rows={4}
                required
                className="block w-full sm:text-sm border-gray-600 rounded-md bg-gray-700/50 focus:ring-gray-500 focus:border-gray-500 text-gray-100 placeholder-gray-400"
              />
            </motion.div>
            
            <div className="flex justify-end">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Listing'}
                </Button>
              </motion.div>
            </div>
          </form>
        </div>
      </motion.div>
    </div>
  )
}

