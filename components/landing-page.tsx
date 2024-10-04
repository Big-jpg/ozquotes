"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { Star, Brain, Gift, BarChart, Database } from "lucide-react";

const testimonials = [
    {
        name: "Sarah Johnson",
        rating: 5,
        text: "Oz Quotes made it so easy to get multiple quotes for my solar panel installation. Saved me time and money!"
    },
    {
        name: "Michael Lee",
        rating: 4,
        text: "Great service! I got competitive quotes for my home battery system within hours."
    },
    {
        name: "Emma Wilson",
        rating: 5,
        text: "The referral program is fantastic. I saved 10% on my heat pump installation by referring friends!"
    }
];

const features = [
    {
        icon: <Gift className="w-12 h-12 text-primary" />,
        title: "Rewards for Information",
        description: "The more details you provide, the better your quotes. We reward your thoroughness with exclusive discounts."
    },
    {
        icon: <Brain className="w-12 h-12 text-primary" />,
        title: "AI-Powered Insights",
        description: "Our AI analyzes thousands of quotes to provide you with the most accurate and competitive pricing."
    },
    {
        icon: <Database className="w-12 h-12 text-primary" />,
        title: "Comprehensive Database",
        description: "Access a vast database of quotes from top-rated providers."
    },
    {
        icon: <BarChart className="w-12 h-12 text-primary" />,
        title: "Advanced Analytics",
        description: "Benefit from detailed analytics to make informed decisions."
    }
];

export function LandingPageComponent() {
    return (
        <div>
            <section className="hero-section text-center py-12 bg-gray-100">
                <h1 className="text-4xl font-bold">Welcome to Oz Quotes</h1>
                <p className="mt-4 text-lg text-gray-600">
                    Discover the best energy upgrade quotes, powered by AI and advanced analytics.
                </p>
                <div className="mt-6">
                    <Link href="/search-quotes">
                        <Button variant="default" size="lg">
                            Start Searching for Quotes
                        </Button>
                    </Link>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-12">
                <h2 className="text-2xl font-bold text-center">Our Features</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                    {features.map((feature, index) => (
                        <Card key={index}>
                            <CardContent className="p-6 text-center">
                                {feature.icon}
                                <h3 className="text-xl font-semibold mt-4">{feature.title}</h3>
                                <p className="text-gray-600 mt-2">{feature.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-12 bg-gray-50">
                <h2 className="text-2xl font-bold text-center">What Our Users Say</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                    {testimonials.map((testimonial, index) => (
                        <Card key={index}>
                            <CardContent className="p-6">
                                <div className="flex items-center justify-center mb-4">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`} />
                                    ))}
                                </div>
                                <p className="text-gray-600">{testimonial.text}</p>
                                <p className="mt-2 font-semibold text-gray-900">{testimonial.name}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </section>
        </div>
    );
}
