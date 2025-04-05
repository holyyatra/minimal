import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MountainIcon as Mountains } from "lucide-react"
import { ImageCarousel } from "@/components/image-carousel"

export default function Home() {
  const packages = [
    {
      id: 1,
      title: "Helicopter Yatra - Rishikesh to Kedarnath",
      image: "https://ext.same-assets.com/42986993/4287053519.jpeg",
      description:
        "Embark on a spiritual helicopter yatra from Rishikesh to Kedarnath. Begin early morning with a drive to the helipad, followed by a scenic 30-40 minute flight over the Garhwal Himalayas. Upon arrival, proceed for darshan at the Kedarnath Temple. After blessings, return by afternoon. The journey offers divine views, comfort, and saves time for devotees.",
      price: 6999,
      duration: null,
      sale: false,
    },
    {
      id: 2,
      title: "Haridwar to Kedarnath Yatra",
      image: "https://ext.same-assets.com/42986993/4199696306.jpeg",
      description: "Begin your spiritual journey on Day 1 by arriving in Haridwar and driving to the Sahastradhara helipad in Dehradun. Stay overnight in Dehradun or near the helipad to prepare for an early start. On Day 2, take a morning helicopter ride to Kedarnath, where you’ll visit the sacred Kedarnath Temple and explore the peaceful surroundings. Enjoy an overnight stay near the temple. On Day 3, return by helicopter to Sahastradhara and drive back to Haridwar, carrying blessings and unforgettable memories.",
      price: 2899,
      duration: "5 Days / 4 Nights",
      sale: true,
    },
    {
      id: 3,
      title: "Char Dham Yatra",
      image: "https://ext.same-assets.com/42986993/273543150.jpeg",
      description:
        "Start your 5-day pilgrimage on Day 1 by departing from Rishikesh to the Sahastradhara helipad and flying to Kharsali, the base for Yamunotri. Visit the Yamunotri Temple and stay overnight at Kharsali. On Day 2, fly to Harsil and visit the serene Gangotri Temple, followed by an overnight stay in the Gangotri valley. Day 3 takes you to Kedarnath by helicopter for darshan at the ancient Shiva temple, with an overnight stay nearby. On Day 4, fly to Badrinath for temple darshan and evening aarti, spending the night in Badrinath. Finally, on Day 5, enjoy sightseeing at the historic Mana Village before returning by helicopter to Sahastradhara and driving back to Rishikesh.",
      price: 15999,
      duration: "12 Days / 11 Nights",
      sale: true,
    },
    {
      id: 4,
      title: "Kedarnath & Badrinath Yatra - Helicopter Yatra",
      image: "https://ext.same-assets.com/42986993/96132912.jpeg",
      description: "The Do Dham Helicopter Yatra from Rishikesh offers a spiritually enriching and time-saving journey to Kedarnath and Badrinath. Begin early morning with a drive to the Sahastradhara helipad. Fly first to Kedarnath for darshan at the revered Shiva temple, then proceed to Badrinath for blessings at the sacred Vishnu shrine. Return the same day, experiencing divine serenity and stunning Himalayan views.",
      price: 7999,
      originalPrice: 9999,
      duration: "5 Days / 4 Nights",
      sale: true,
    },
  ]

  const carouselImages = [
    "https://ext.same-assets.com/42986993/273543150.jpeg",
    "https://ext.same-assets.com/42986993/96132912.jpeg",
    "https://ext.same-assets.com/42986993/1328792868.jpeg",
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-10 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b">
        <div className="container flex h-16 items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <Image
              src="https://github.com/holyyatra/holyatraweb/blob/main/logohy.png?raw=true"
              alt="Holy Yatra Logo"
              width={180}
              height={50}
              className="h-12 w-auto"
            />
            
          </div>
          <Link
            href="https://wa.me/+918757794679"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-md bg-green-600 px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-green-700 focus-visible:outline-none focus-visible:ring-1"
          >
            Contact on WhatsApp
          </Link>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-orange-50 to-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Sacred Journeys to the Himalayas
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                  Holy Yatra is a premier travel agency specializing in pilgrimage journeys to the sacred destinations
                  in the Himalayas. With years of experience, we offer meticulously planned packages that combine
                  spiritual fulfillment with comfortable travel arrangements.
                </p>
                 
                 

              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
              Our Pilgrimage Packages
            </h2>
            <div className="flex flex-col gap-8">
              {packages.map((pkg) => (
                <Card key={pkg.id} className="overflow-hidden">
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="relative h-64 md:h-full w-full">
                      <Image src={pkg.image || "/placeholder.svg"} alt={pkg.title} fill className="object-cover" />
                      {pkg.sale && <Badge className="absolute top-2 right-2 bg-red-600 hover:bg-red-700">SALE!</Badge>}
                    </div>
                    <div className="md:col-span-2 p-6">
                      <div className="mb-4">
                        <h3 className="text-2xl font-bold mb-2">{pkg.title}</h3>
                        {pkg.duration && <p className="text-sm text-gray-500">{pkg.duration}</p>}
                      </div>
                      <p className="text-gray-500 mb-6">{pkg.description}</p>
                      {pkg.price && (
                        <div className="mb-6">
                          <p className="text-2xl font-bold">
                            ₹{pkg.price} <span className="text-sm font-normal">per person</span>
                          </p>
                          {pkg.originalPrice && (
                            <p className="text-sm text-gray-500 line-through">₹{pkg.originalPrice}</p>
                          )}
                        </div>
                      )}
                      <div className="flex flex-col sm:flex-row gap-4">
                        
                      <Link href="tel:+918757794679" target="_blank" rel="noopener noreferrer">
                          <Button className="w-full bg-blue-600 hover:bg-green-700">Call us</Button>
                        </Link>
                        <Link href="https://wa.me/+918757794679" target="_blank" rel="noopener noreferrer">
                          <Button className="w-full bg-green-600 hover:bg-green-700">Contact on WhatsApp</Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-orange-50">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
              Experience the Divine Journey
            </h2>
            <div className="max-w-4xl mx-auto">
              <ImageCarousel images={carouselImages} />
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t py-6">
        <div className="container flex flex-col items-center justify-center gap-4 px-4 md:px-6">
          <div className="flex items-center gap-2">
            
            

            <Image
              src="https://github.com/holyyatra/holyatraweb/blob/main/logohy.png?raw=true"
              alt="Holy Yatra Logo"
              width={180}
              height={50}
              className="h-12 w-auto"
            />
          </div>
          <p className="text-center text-sm text-gray-500">
            © {new Date().getFullYear()} Holy Yatra. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}

