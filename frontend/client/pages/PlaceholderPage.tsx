import { Link } from 'react-router-dom'
import { Button } from '../components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card'
import { TrendingUp, ArrowLeft, Construction } from 'lucide-react'

interface PlaceholderPageProps {
  title: string
  description: string
  features?: string[]
}

export default function PlaceholderPage({ 
  title, 
  description, 
  features = []
}: PlaceholderPageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-blue-50/30 to-purple-50/20">
      {/* Navigation */}
      <nav className="border-b bg-background/80 backdrop-blur-lg sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 gradient-stockquest rounded-lg flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-gradient">StockQuest</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/dashboard" className="text-muted-foreground hover:text-foreground transition-colors">
              Platform
            </Link>
            <Link to="/about" className="text-muted-foreground hover:text-foreground transition-colors">
              About
            </Link>
            <Link to="/learn" className="text-muted-foreground hover:text-foreground transition-colors">
              Learn
            </Link>
          </div>

          <div className="flex items-center space-x-3">
            <Button variant="ghost" asChild>
              <Link to="/">Home</Link>
            </Button>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto text-center">
          <div className="mb-8">
            <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
              <Construction className="w-8 h-8 text-muted-foreground" />
            </div>
            <h1 className="text-4xl font-bold mb-4">{title}</h1>
            <p className="text-xl text-muted-foreground mb-8">{description}</p>
          </div>

          <Card className="text-left mb-8">
            <CardHeader>
              <CardTitle>Coming Soon!</CardTitle>
              <CardDescription>
                This page is currently under development. Here's what we're planning to include:
              </CardDescription>
            </CardHeader>
            <CardContent>
              {features.length > 0 && (
                <ul className="space-y-2">
                  {features.map((feature, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              )}
              {features.length === 0 && (
                <p className="text-muted-foreground">
                  Features for this page are still being planned. Stay tuned for updates!
                </p>
              )}
            </CardContent>
          </Card>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="outline">
              <Link to="/">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Link>
            </Button>
            <Button asChild className="gradient-stockquest border-0">
              <Link to="/dashboard">
                Go to Dashboard
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
