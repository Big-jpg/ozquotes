"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import { Star, Brain, Gift, BarChart, Database } from "lucide-react";
import { useEffect, useState } from "react";

const testimonials = [
<<<<<<< HEAD
    {
        name: "Dave from Perth",
        rating: 5,
        text: "I was initially hesitant about getting solar, but Oz Quotes made the process very easy. I received several quotes and saved a significant amount of money."
    },
    {
        name: "Sharon from Adelaide",
        rating: 4,
        text: "I needed a new hot water system and didn't know where to start. Oz Quotes provided me with some excellent options. Thank you!"
    },
    {
        name: "John from Brisbane",
        rating: 5,
        text: "I recommended Oz Quotes to my friend after I had my air conditioning installed. He also received a good deal, and I earned some cashback. Excellent!"
    }
];

const features = [
    {
        icon: Gift,
        title: "Share More, Save More",
        description: "The more information you provide, the better the deals. Plus, you'll receive substantial discounts!"
    },
    {
        icon: Brain,
        title: "Smart Quote Finder",
        description: "Our intelligent system analyzes numerous quotes to find you the best value."
    },
    {
        icon: Database,
        title: "Extensive Options",
        description: "We offer a comprehensive list of high-quality providers for you to choose from."
    },
    {
        icon: BarChart,
        title: "Easy Comparisons",
        description: "We simplify the information so you can make the best choice with confidence."
    }
];

export function LandingPageComponent() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 sm:pt-6">
            <section className="hero-section text-center py-8 sm:py-12 bg-gray-100 rounded-lg">
                <h1 className="text-4xl font-bold mb-8 text-black">Welcome to Oz Quotes</h1>
                <p className="mt-4 text-base sm:text-lg text-gray-600">
                    Find the best deals on energy upgrades for your home, quickly and easily!
                </p>
                <div className="mt-6 flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
                    <Link href="/need-quotes">
                        <Button
                            variant="default"
                            size="lg"
                            className="w-full sm:w-auto bg-black hover:bg-[#5fd0c7] text-white hover:text-black transition-colors duration-300"
                        >
                            Download Quotes now
                        </Button>
                    </Link>
                    <Link href="/search-quotes">
                        <Button
                            variant="default"
                            size="lg"
                            className="w-full sm:w-auto bg-black hover:bg-[#5fd0c7] text-white hover:text-black transition-colors duration-300"
                        >
                            Browse our Quote Database
                        </Button>
                    </Link>
                    <Link href="/companies">
                        <Button
                            variant="default"
                            size="lg"
                            className="w-full sm:w-auto bg-black hover:bg-[#5fd0c7] text-white hover:text-black transition-colors duration-300"
                        >
                            List Your Company
                        </Button>
                    </Link>
                </div>
            </section>
            <section className="py-8 sm:py-12">
                <h2 className="text-3xl font-bold text-center mb-8">Why Choose Oz Quotes</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6 sm:mt-8">
                    {features.map((feature, index) => (
                        <Card
                            key={index}
                            className="border-gray-200 border-2 hover:border-[#5fd0c7] transition-colors duration-300 group"
                        >
                            <CardContent className="p-4 sm:p-6 text-center">
                                <div className="flex justify-center">
                                    <feature.icon className="w-8 h-8 sm:w-12 sm:h-12 text-gray-600 group-hover:text-[#5fd0c7] transition-colors duration-300" />
                                </div>
                                <h3 className="text-xl font-bold mt-3 sm:mt-4">{feature.title}</h3>
                                <p className="text-sm sm:text-base text-muted-foreground mt-2">
                                    {feature.description}
                                </p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </section>

            <section className="py-8 sm:py-12 bg-gray-50 rounded-lg">
                <h2 className="text-3xl font-bold text-center mb-8">What Our Customers Say</h2>
                <div className="grid grid-cols-1 gap-6 mt-6 sm:mt-8">
                    {testimonials.map((testimonial, index) => (
                        <Card
                            key={index}
                            className="border-gray-200 border hover:border-[#5fd0c7] transition-colors duration-300"
                        >
                            <CardContent className="p-4 sm:p-6">
                                <div className="flex items-center justify-center mb-3 sm:mb-4">
                                    {[...Array(5)].map((_, i) => (
                                        <Star
                                            key={i}
                                            className={`w-4 h-4 sm:w-5 sm:h-5 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'
                                                }`}
                                        />
                                    ))}
                                </div>
                                <p className="text-sm sm:text-base text-muted-foreground">{testimonial.text}</p>
                                <p className="mt-2 font-semibold text-gray-900 text-sm sm:text-base">
                                    {testimonial.name}
                                </p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </section>
=======
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
    icon: Gift,
    title: "Share More, Save More",
    description: "The more you tell us, the better the deals. Plus, you'll snag some ripper discounts!"
  },
  {
    icon: Brain,
    title: "Smart Quote Finder",
    description: "Our clever system sifts through loads of quotes to find you the best bang for your buck."
  },
  {
    icon: Database,
    title: "Heaps of Options",
    description: "We've got a massive list of top-notch providers for you to choose from."
  },
  {
    icon: BarChart,
    title: "Easy Comparisons",
    description: "We break down the info so you can make the best choice, no worries!"
  }
];

export function LandingPageComponent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 sm:pt-6">
      <section className="hero-section text-center py-8 sm:py-12 bg-gray-100 rounded-lg">
        <h1 className="text-4xl font-bold mb-8 text-black">G'day! Welcome to Oz Quotes</h1>
        <p className="mt-4 text-base sm:text-lg text-gray-600">
          Find the best deals on energy upgrades for your home, quick and easy!
        </p>
        <div className="mt-6 flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Link href="/need-quotes">
            <Button 
              variant="default" 
              size="lg" 
              className="w-full sm:w-auto bg-black hover:bg-[#5fd0c7] text-white hover:text-black transition-colors duration-300"
            >
              I Need Quotes Fast!
            </Button>
          </Link>
          <Link href="/search-quotes">
            <Button 
              variant="default" 
              size="lg" 
              className="w-full sm:w-auto bg-black hover:bg-[#5fd0c7] text-white hover:text-black transition-colors duration-300"
            >
              Quote Database
            </Button>
          </Link>
          <Link href="/business">
            <Button 
              variant="default" 
              size="lg" 
              className="w-full sm:w-auto bg-black hover:bg-[#5fd0c7] text-white hover:text-black transition-colors duration-300"
            >
              List Your Business
            </Button>
          </Link>
>>>>>>> 4d105d1dedf754a5a994cc3c873a7bd78cd0c746
        </div>
      </section>

      <section 
        className={`
          mt-8 sm:mt-12
          py-6 sm:py-8 
          transition-all duration-1000 ease-out 
          ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'}
          border-2 border-[#5fd0c7] rounded-lg
        `}
      >
        <div className="flex flex-col items-center justify-center text-center px-2 sm:px-3 lg:px-4">
          <h2 className="text-3xl font-bold mb-2">Find out how much you could save.</h2>
          <p className="text-lg text-gray-600 mb-2">
            Average customer* savings per year on their gas and electricity bills.
          </p>
          <p className="text-5xl font-bold text-[#5fd0c7]">$1600</p>
          <p className="text-sm text-gray-500 mt-1">*Based on our customer data from the past year</p>
        </div>
      </section>

      <section className="py-8 sm:py-12">
        <h2 className="text-3xl font-bold text-center mb-8">Why Oz Quotes is Ace</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6 sm:mt-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-gray-200 border-2 hover:border-[#5fd0c7] transition-colors duration-300 group">
              <CardContent className="p-4 sm:p-6 text-center">
                <div className="flex justify-center">
                  <feature.icon className="w-8 h-8 sm:w-12 sm:h-12 text-gray-600 group-hover:text-[#5fd0c7] transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold mt-3 sm:mt-4">{feature.title}</h3>
                <p className="text-sm sm:text-base text-muted-foreground mt-2">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="py-8 sm:py-12 bg-gray-50 rounded-lg">
        <h2 className="text-3xl font-bold text-center mb-8">What Our Mates Say</h2>
        <div className="grid grid-cols-1 gap-6 mt-6 sm:mt-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-gray-200 border hover:border-[#5fd0c7] transition-colors duration-300">
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