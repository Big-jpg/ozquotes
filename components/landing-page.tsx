"use client";

import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardHeader,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Brain,
  Gift,
  Database,
  BarChart,
  Zap,
} from "lucide-react";
import Image from "next/image";

// LandingPageComponent
function LandingPageComponent() {
  const mission = {
    title: "Our Mission",
    content:
      "We're on a mission to make energy upgrades easy and affordable for every Australian homeowner. No more confusing quotes or endless phone calls. We do the hard work for you, so you can sit back, relax, and watch the savings roll in.",
  };

  const easyAs = {
    icon: <Zap className="h-6 w-6 text-primary mr-3" />,
    title: "Easy as",
    description:
      "Our website is incredibly user-friendly. Just answer a few questions, and we'll handle the rest.",
  };

  const reasons = [
    {
      icon: <Brain className="h-6 w-6 text-primary mb-4" />,
      title: "Fair Comparisons",
      description:
        "Our smart system analyzes data to find you the best deal. No bias, no hidden fees—just honest, competitive quotes.",
    },
    {
      icon: <Database className="h-6 w-6 text-primary mb-4" />,
      title: "Your Data, Your Rules",
      description:
        "We're transparent about how we use your information. It's only for getting you better quotes, and we never share it with others.",
    },
    {
      icon: <Gift className="h-6 w-6 text-primary mb-4" />,
      title: "Share More, Save More",
      description:
        "The more details you provide about your home and energy needs, the better deals we can find. Plus, you'll earn rewards for being thorough!",
    },
    {
      icon: <BarChart className="h-6 w-6 text-primary mb-4" />,
      title: "Refer a Friend, Get Paid",
      description:
        "Know someone who could use cheaper energy? Refer them to us, and we'll share the savings with you. It's our way of saying thanks for spreading the word.",
    },
  ];

  return (
    <div className="container mx-auto py-12 px-4 md:px-6 text-center">
      <motion.h1
        className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        About Oz Quotes
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Card className="mb-12">
          <CardContent className="p-6">
            <p className="text-lg text-muted-foreground">
              Welcome! Oz Quotes is here to help Australian homeowners like you get the best deals on energy upgrades.
              We're talking solar panels, batteries, and other money-saving technology for your home.
              We've developed a clever system that compares quotes from top providers, so you don't have to.
            </p>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mb-12"
      >
        <Accordion type="single" collapsible>
          <AccordionItem value="mission">
            <AccordionTrigger className="text-left">
              <h2 className="text-2xl font-semibold">{mission.title}</h2>
            </AccordionTrigger>
            <AccordionContent>
              <p className="text-muted-foreground">{mission.content}</p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </motion.div>

      <motion.h2
        className="scroll-m-20 text-3xl font-extrabold tracking-tight mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        Why Choose Oz Quotes?
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="mb-6"
      >
        <Card className="border border-primary">
          <CardHeader className="p-6">
            <div className="flex items-center justify-center">
              {easyAs.icon}
              <h3 className="text-xl font-semibold text-primary">{easyAs.title}</h3>
            </div>
          </CardHeader>
          <CardContent className="p-6">
            <p className="text-muted-foreground">{easyAs.description}</p>
          </CardContent>
        </Card>
      </motion.div>
      <div className="grid gap-6 sm:grid-cols-2">
        {reasons.map((reason, index) => (
          <motion.div
            key={reason.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 * (index + 6) }}
          >
            <Card className="h-full">
              <CardHeader className="flex flex-col items-center p-6">
                {reason.icon}
                <h3 className="text-xl font-semibold mb-2">{reason.title}</h3>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-muted-foreground">{reason.description}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Display your image examples here */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="my-12"
      >
        <h2 className="text-2xl font-bold mb-4">Visual Renovation Estimates</h2>

        {/* Before and After Comparison 1 */}
        <div className="flex flex-col md:flex-row justify-center items-center md:space-x-8 mb-8">
          <div>
            <h3 className="text-xl font-semibold mb-2">Before Estimate</h3>
            <Image
              src="/images/BeforeEstimate1.png"
              alt="Before Estimate"
              width={400}
              height={300}
              className="rounded-lg"
            />
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">After Estimate</h3>
            <Image
              src="/images/AfterEstimate1.png"
              alt="After Estimate"
              width={400}
              height={300}
              className="rounded-lg"
            />
          </div>
        </div>

        {/* Side-by-Side Comparison 2 */}
        <h3 className="text-xl font-semibold mb-2">Side-by-Side Comparison</h3>
        <div className="flex justify-center">
          <Image
            src="/images/RenoResultsCompareSideBySide.png"
            alt="Side-by-side renovation comparison"
            width={800}
            height={600}
            className="rounded-lg"
          />
        </div>

        {/* Overlay Comparison 3 */}
        <h3 className="text-xl font-semibold mb-2">Overlay Comparison</h3>
        <div className="flex justify-center">
          <Image
            src="/images/RenoResultsCompareOverlay.png"
            alt="Overlay renovation comparison"
            width={800}
            height={600}
            className="rounded-lg"
          />
        </div>
      </motion.div>
    </div>
  );
}

// Home Component
export function Home() {
  return (
    <div>
      <LandingPageComponent />
    </div>
  );
}

// Export LandingPageComponent
export default LandingPageComponent;
