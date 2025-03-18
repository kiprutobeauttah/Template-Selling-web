import type { Template } from "@/lib/types"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { Star } from "lucide-react"

interface TemplateCardProps {
  template: Template
}

export default function TemplateCard({ template }: TemplateCardProps) {
  return (
    <Card className="overflow-hidden group">
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={template.image || "/placeholder.svg"}
          alt={template.title}
          fill
          className="object-cover transition-transform group-hover:scale-105"
        />
        <Badge className="absolute top-2 right-2">{template.category}</Badge>
      </div>
      <CardContent className="p-4">
        <h3 className="font-medium text-lg mb-2">{template.title}</h3>
        <p className="text-muted-foreground text-sm line-clamp-2 mb-2">{template.description}</p>
        <div className="flex items-center gap-1">
          <Star className="h-4 w-4 fill-primary text-primary" />
          <span className="text-sm">
            {template.rating} ({template.reviews} reviews)
          </span>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex items-center justify-between">
        <span className="font-bold">${template.price.toFixed(2)}</span>
        <Link href={`/templates/${template.id}`}>
          <Button variant="outline" size="sm">
            View Details
          </Button>
        </Link>
      </CardFooter>
    </Card>
  )
}

