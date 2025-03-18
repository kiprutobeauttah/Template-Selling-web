import { templates } from "@/lib/data"
import { notFound } from "next/navigation"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Check, Star } from "lucide-react"
import Link from "next/link"

export default function TemplateDetailPage({ params }: { params: { id: string } }) {
  const template = templates.find((t) => t.id === params.id)

  if (!template) {
    notFound()
  }

  return (
    <div className="container px-4 py-12 md:px-6 md:py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Template Preview */}
        <div className="space-y-6">
          <div className="relative aspect-video overflow-hidden rounded-lg border">
            <Image src={template.image || "/placeholder.svg"} alt={template.title} fill className="object-cover" />
          </div>
          <div className="grid grid-cols-3 gap-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="relative aspect-video overflow-hidden rounded-lg border">
                <Image
                  src={`/placeholder.svg?height=200&width=300&text=Preview+${i}`}
                  alt={`${template.title} preview ${i}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Template Info */}
        <div className="space-y-8">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Badge>{template.category}</Badge>
              <div className="flex items-center text-sm text-muted-foreground">
                <Star className="h-4 w-4 fill-primary text-primary mr-1" />
                {template.rating} ({template.reviews} reviews)
              </div>
            </div>
            <h1 className="text-3xl font-bold">{template.title}</h1>
            <p className="text-xl font-bold mt-2">${template.price.toFixed(2)}</p>
          </div>

          <p className="text-muted-foreground">{template.description}</p>

          <div className="space-y-4">
            <h3 className="font-medium">Key Features</h3>
            <ul className="space-y-2">
              {template.features.map((feature, i) => (
                <li key={i} className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="flex-1">
              Purchase Template
            </Button>
            <Button variant="outline" size="lg" className="flex-1">
              Live Demo
            </Button>
          </div>

          <Tabs defaultValue="description">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="description">Description</TabsTrigger>
              <TabsTrigger value="details">Details</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
            </TabsList>
            <TabsContent value="description" className="pt-4">
              <div className="space-y-4">
                <p>
                  {template.longDescription ||
                    "This premium template is designed to help you build professional websites quickly and efficiently. It comes with all the components and features you need to get started right away."}
                </p>
                <p>
                  Our templates are built with modern technologies and follow best practices for performance,
                  accessibility, and SEO.
                </p>
              </div>
            </TabsContent>
            <TabsContent value="details" className="pt-4">
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium">Technologies</h4>
                    <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                      <li>React / Next.js</li>
                      <li>Tailwind CSS</li>
                      <li>TypeScript</li>
                      <li>Responsive Design</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium">Includes</h4>
                    <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                      <li>Source Code</li>
                      <li>Documentation</li>
                      <li>6 Months Support</li>
                      <li>Regular Updates</li>
                    </ul>
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="reviews" className="pt-4">
              <div className="space-y-6">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="border-b pb-6 last:border-0">
                    <div className="flex items-center justify-between mb-2">
                      <div className="font-medium">User Review {i}</div>
                      <div className="flex items-center">
                        {Array(5)
                          .fill(0)
                          .map((_, j) => (
                            <Star
                              key={j}
                              className={`h-4 w-4 ${j < 4 ? "fill-primary text-primary" : "fill-muted text-muted-foreground"}`}
                            />
                          ))}
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      This template exceeded my expectations. The code is clean and well-organized, making it easy to
                      customize to my needs. Highly recommended!
                    </p>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      {/* Related Templates */}
      <div className="mt-24">
        <h2 className="text-2xl font-bold mb-6">Related Templates</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {templates.slice(0, 3).map((template) => (
            <div key={template.id} className="group rounded-lg border overflow-hidden">
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={template.image || "/placeholder.svg"}
                  alt={template.title}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h3 className="font-medium">{template.title}</h3>
                <div className="flex items-center justify-between mt-2">
                  <span className="font-bold">${template.price.toFixed(2)}</span>
                  <Link href={`/templates/${template.id}`}>
                    <Button variant="ghost" size="sm">
                      View Details
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

