import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Mail, MapPin, Phone } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="container px-4 py-12 md:px-6 md:py-24">
      {/* About Section */}
      <section className="mb-20">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About TemplateHub</h1>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
            We're on a mission to help developers build better websites faster
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-square overflow-hidden rounded-lg">
            <Image
              src="/placeholder.svg?height=600&width=600&text=Team+Photo"
              alt="Our Team"
              fill
              className="object-cover"
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Our Story</h2>
            <p className="text-muted-foreground">
              TemplateHub was founded in 2020 by a team of passionate developers who were tired of reinventing the wheel
              for every new project. We realized that by creating high-quality, reusable templates, we could help
              developers save time and focus on what matters most: building great products.
            </p>
            <p className="text-muted-foreground">
              Today, we're proud to offer a wide range of templates for various use cases, from landing pages to complex
              dashboards. Our templates are built with modern technologies and follow best practices for performance,
              accessibility, and SEO.
            </p>
            <p className="text-muted-foreground">
              We're committed to continuous improvement and regularly update our templates based on customer feedback
              and emerging trends in web development.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="mb-20">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter">Meet Our Team</h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground">The talented people behind our templates</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { name: "Beauttah Standish", role: "Founder & CEO", image: "/placeholder.svg?height=300&width=300&text=Alex" },
            { name: "Sarah Chen", role: "Lead Designer", image: "/placeholder.svg?height=300&width=300&text=Sarah" },
            {
              name: "Michael Rodriguez",
              role: "Senior Developer",
              image: "/placeholder.svg?height=300&width=300&text=Michael",
            },
            { name: "Emily Kim", role: "Customer Success", image: "/placeholder.svg?height=300&width=300&text=Emily" },
          ].map((member, i) => (
            <div key={i} className="flex flex-col items-center text-center">
              <div className="relative w-40 h-40 rounded-full overflow-hidden mb-4">
                <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
              </div>
              <h3 className="font-medium">{member.name}</h3>
              <p className="text-sm text-muted-foreground">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section>
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter">Get in Touch</h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground">
            Have questions or need help? We're here for you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <MapPin className="h-6 w-6 text-primary mt-1" />
              <div>
                <h3 className="font-medium">Our Location</h3>
                <p className="text-muted-foreground">123 Template Street, San Francisco, CA 94107</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Mail className="h-6 w-6 text-primary mt-1" />
              <div>
                <h3 className="font-medium">Email Us</h3>
                <p className="text-muted-foreground">hello@templatehub.com</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Phone className="h-6 w-6 text-primary mt-1" />
              <div>
                <h3 className="font-medium">Call Us</h3>
                <p className="text-muted-foreground">+1 (555) 123-4567</p>
              </div>
            </div>
          </div>

          <div className="space-y-4 p-6 border rounded-lg">
            <h3 className="text-xl font-bold">Send us a message</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="first-name" className="text-sm font-medium">
                  First name
                </label>
                <input id="first-name" className="w-full p-2 border rounded-md" placeholder="John" />
              </div>
              <div className="space-y-2">
                <label htmlFor="last-name" className="text-sm font-medium">
                  Last name
                </label>
                <input id="last-name" className="w-full p-2 border rounded-md" placeholder="Doe" />
              </div>
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">
                Email
              </label>
              <input
                id="email"
                type="email"
                className="w-full p-2 border rounded-md"
                placeholder="john.doe@example.com"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium">
                Message
              </label>
              <textarea
                id="message"
                className="w-full p-2 border rounded-md min-h-[120px]"
                placeholder="How can we help you?"
              />
            </div>
            <Button className="w-full">Send Message</Button>
          </div>
        </div>
      </section>
    </div>
  )
}

