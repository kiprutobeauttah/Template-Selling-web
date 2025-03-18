import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Star } from "lucide-react"
import TemplateCard from "@/components/template-card"
import { templates } from "@/lib/data"

export default function Home() {
  // Get featured templates (first 3)
  const featuredTemplates = templates.slice(0, 3)

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-muted/50 to-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                Premium Templates for Modern Developers
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                High-quality, responsive templates to accelerate your next project. Save time and focus on what matters.
              </p>
            </div>
            <div className="space-x-4">
              <Link href="/templates">
                <Button className="px-8">Browse Templates</Button>
              </Link>
              <Link href="/about">
                <Button variant="outline" className="px-8">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Templates */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Featured Templates</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Our most popular and highly-rated templates
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {featuredTemplates.map((template) => (
              <TemplateCard key={template.id} template={template} />
            ))}
          </div>
          <div className="flex justify-center mt-10">
            <Link href="/templates">
              <Button variant="outline" className="group">
                View All Templates
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Trusted by Developers</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                See what our customers have to say about our templates
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="flex flex-col p-6 bg-background rounded-lg shadow">
              <div className="flex items-center space-x-1 mb-2">
                <Star className="h-5 w-5 fill-primary text-primary" />
                <Star className="h-5 w-5 fill-primary text-primary" />
                <Star className="h-5 w-5 fill-primary text-primary" />
                <Star className="h-5 w-5 fill-primary text-primary" />
                <Star className="h-5 w-5 fill-primary text-primary" />
              </div>
              <p className="text-muted-foreground mb-4">
                "These templates saved me countless hours of development time. The code is clean and well-documented."
              </p>
              <div className="mt-auto">
                <p className="font-medium">Sarah Johnson</p>
                <p className="text-sm text-muted-foreground">Frontend Developer</p>
              </div>
            </div>
            <div className="flex flex-col p-6 bg-background rounded-lg shadow">
              <div className="flex items-center space-x-1 mb-2">
                <Star className="h-5 w-5 fill-primary text-primary" />
                <Star className="h-5 w-5 fill-primary text-primary" />
                <Star className="h-5 w-5 fill-primary text-primary" />
                <Star className="h-5 w-5 fill-primary text-primary" />
                <Star className="h-5 w-5 fill-primary text-primary" />
              </div>
              <p className="text-muted-foreground mb-4">
                "The responsive design works flawlessly across all devices. I'm extremely impressed with the quality."
              </p>
              <div className="mt-auto">
                <p className="font-medium">Michael Chen</p>
                <p className="text-sm text-muted-foreground">Web Designer</p>
              </div>
            </div>
            <div className="flex flex-col p-6 bg-background rounded-lg shadow">
              <div className="flex items-center space-x-1 mb-2">
                <Star className="h-5 w-5 fill-primary text-primary" />
                <Star className="h-5 w-5 fill-primary text-primary" />
                <Star className="h-5 w-5 fill-primary text-primary" />
                <Star className="h-5 w-5 fill-primary text-primary" />
                <Star className="h-5 w-5 fill-primary text-primary" />
              </div>
              <p className="text-muted-foreground mb-4">
                "Customer support is exceptional. They helped me customize the template to fit my specific needs."
              </p>
              <div className="mt-auto">
                <p className="font-medium">Alex Rodriguez</p>
                <p className="text-sm text-muted-foreground">Agency Owner</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Ready to Get Started?</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Browse our collection of premium templates and accelerate your development workflow today.
              </p>
            </div>
            <Link href="/templates">
              <Button size="lg" className="px-8">
                Browse Templates
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

