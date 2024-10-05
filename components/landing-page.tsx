"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { Star, Brain, Gift, BarChart, Database } from "lucide-react";

const testimonials = [
  {
    name: "Dave from Perth",
    rating: 5,
    text: "Was a bit suss about getting solar at first, but Oz Quotes made it dead easy. Got a few quotes and saved a packet!"
  },
  {
    name: "Shazza from Adelaide",
    rating: 4,
    text: "Needed a new hot water system and didn't know where to start. These guys sorted me out with some good options. Cheers!"
  },
  {
    name: "Johnno from Brissy",
    rating: 5,
    text: "Told me mate about Oz Quotes after I got my aircon sorted. He got a good deal too, and I scored some cash back. Bonza!"
  }
];

const features = [
  {
    icon: <Gift className="w-8 h-8 sm:w-12 sm:h-12 text-primary" />,
    title: "Share More, Save More",
    description: "The more you tell us, the better the deals. Plus, you'll snag some ripper discounts!"
  },
  {
    icon: <Brain className="w-8 h-8 sm:w-12 sm:h-12 text-primary" />,
    title: "Smart Quote Finder",
    description: "Our clever system sifts through loads of quotes to find you the best bang for your buck."
  },
  {
    icon: <Database className="w-8 h-8 sm:w-12 sm:h-12 text-primary" />,
    title: "Heaps of Options",
    description: "We've got a massive list of top-notch providers for you to choose from."
  },
  {
    icon: <BarChart className="w-8 h-8 sm:w-12 sm:h-12 text-primary" />,
    title: "Easy Comparisons",
    description: "We break down the info so you can make the best choice, no worries!"
  }
];

export function LandingPageComponent() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <section className="hero-section text-center py-8 sm:py-12 bg-gray-100 rounded-lg">
        <h1 className="text-4xl font-bold mb-8">G'day! Welcome to Oz Quotes</h1>
        <p className="mt-4 text-base sm:text-lg text-gray-600">
          Find the best deals on energy upgrades for your home, quick and easy!
        </p>
        <div className="mt-6">
          <Link href="/search-quotes">
            <Button variant="default" size="lg" className="w-full sm:w-auto">
              Start Your Quote Search
            </Button>
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-8 sm:py-12">
        <h2 className="text-3xl font-bold text-center mb-8">Why Oz Quotes is Ace</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6 sm:mt-8">
          {features.map((feature, index) => (
            <Card key={index}>
              <CardContent className="p-4 sm:p-6 text-center">
                <div className="flex justify-center">{feature.icon}</div>
                <h3 className="text-xl font-bold mt-3 sm:mt-4">{feature.title}</h3>
                <p className="text-sm sm:text-base text-muted-foreground mt-2">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-8 sm:py-12 bg-gray-50 rounded-lg">
        <h2 className="text-3xl font-bold text-center mb-8">What Our Mates Say</h2>
        <div className="grid grid-cols-1 gap-6 mt-6 sm:mt-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index}>
              <CardContent className="p-4 sm:p-6">
                <div className="flex items-center justify-center mb-3 sm:mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`w-4 h-4 sm:w-5 sm:h-5 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`} />
                  ))}
                </div>
                <p className="text-sm sm:text-base text-muted-foreground">{testimonial.text}</p>
                <p className="mt-2 font-semibold text-gray-900 text-sm sm:text-base">{testimonial.name}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}