import { Link } from 'react-router-dom'
import { Button } from '../components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card'
import { Badge } from '../components/ui/badge'
import { ArrowRight, Brain, TrendingUp, Target, Users, Shield, Zap, BarChart3, Gamepad2 } from 'lucide-react'
import { motion, useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'

// Animated Counter Component
function AnimatedCounter({ end, duration = 2, suffix = "" }: { end: number, duration?: number, suffix?: string }) {
  const [count, setCount] = useState(0)
  const countRef = useRef(null)
  const isInView = useInView(countRef, { once: true })

  useEffect(() => {
    if (isInView) {
      let start = 0
      const increment = end / (duration * 60)
      const timer = setInterval(() => {
        start += increment
        if (start >= end) {
          setCount(end)
          clearInterval(timer)
        } else {
          setCount(Math.floor(start))
        }
      }, 1000 / 60)
      return () => clearInterval(timer)
    }
  }, [isInView, end, duration])

  return <span ref={countRef}>{count.toLocaleString()}{suffix}</span>
}

export default function Index() {
  const heroRef = useRef(null)
  const featuresRef = useRef(null)
  const ctaRef = useRef(null)

  const heroInView = useInView(heroRef, { once: true })
  const featuresInView = useInView(featuresRef, { once: true })
  const ctaInView = useInView(ctaRef, { once: true })

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-blue-50/30 to-purple-50/20 overflow-hidden">
      {/* Navigation */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="border-b bg-background/80 backdrop-blur-lg sticky top-0 z-50"
      >
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center space-x-2"
          >
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              className="w-8 h-8 gradient-stockquest rounded-lg flex items-center justify-center"
            >
              <TrendingUp className="w-5 h-5 text-white" />
            </motion.div>
            <span className="text-xl font-bold text-gradient">StockQuest</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hidden md:flex items-center space-x-6"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link to="/dashboard" className="text-muted-foreground hover:text-foreground transition-colors">
                Platform
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex items-center space-x-3"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button asChild className="gradient-stockquest border-0">
                <Link to="/dashboard">Start Learning</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section ref={heroRef} className="container mx-auto px-4 py-20 relative">
        {/* Floating background elements */}
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-xl"
        />
        <motion.div
          animate={{
            y: [0, 20, 0],
            rotate: [0, -3, 0]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute top-40 right-20 w-32 h-32 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-xl"
        />

        <div className="text-center max-w-4xl mx-auto relative z-10">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={heroInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Badge className="mb-6 px-4 py-2 bg-blue-100 text-blue-800 border-blue-200">
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Zap className="w-4 h-4 mr-2" />
                </motion.div>
                AI-Powered Financial Learning
              </Badge>
            </motion.div>
          </motion.div>

          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={heroInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
          >
            Master{' '}
            <motion.span
              className="text-gradient inline-block"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Finance
            </motion.span>
            {' '}Through{' '}
            <motion.span
              className="text-gradient inline-block"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              AI-Driven
            </motion.span>
            {' '}Learning
          </motion.h1>

          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={heroInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed"
          >
            The first real-time, event-driven financial learning platform for teens.
            Build wealth-building habits with personalized AI insights and behavioral finance coaching.
            <motion.strong
              initial={{ opacity: 0, scale: 0.8 }}
              animate={heroInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 1 }}
              className="block mt-2 text-gradient"
            >
              Completely Free Forever!
            </motion.strong>
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={heroInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto"
          >
            <motion.div
              whileHover={{ scale: 1.1, y: -10 }}
              className="text-center"
            >
              <div className="text-3xl font-bold text-gradient">
                <AnimatedCounter end={50} suffix="K+" />
              </div>
              <div className="text-sm text-muted-foreground">Teen Learners</div>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1, y: -10 }}
              className="text-center"
            >
              <div className="text-3xl font-bold text-gradient">
                <AnimatedCounter end={98} suffix="%" />
              </div>
              <div className="text-sm text-muted-foreground">Improvement Rate</div>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1, y: -10 }}
              className="text-center"
            >
              <div className="text-3xl font-bold text-gradient">Real-time</div>
              <div className="text-sm text-muted-foreground">Market Data</div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section ref={featuresRef} className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={featuresInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2
            initial={{ y: 30, opacity: 0 }}
            animate={featuresInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl font-bold mb-4"
          >
            Why Choose <span className="text-gradient">StockQuest</span>?
          </motion.h2>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={featuresInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            Our platform combines cutting-edge AI with proven behavioral finance principles
            to create the most effective financial education experience.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-xl">
            <CardHeader>
              <div className="w-12 h-12 gradient-stockquest rounded-lg flex items-center justify-center mb-4">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <CardTitle>AI Behavioral Analysis</CardTitle>
              <CardDescription>
                Real-time detection of trading patterns like FOMO, panic-selling, and overtrading
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                "You panic-sell too quickly — here's how to build long-term investing habits."
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-xl">
            <CardHeader>
              <div className="w-12 h-12 gradient-finance rounded-lg flex items-center justify-center mb-4">
                <BarChart3 className="w-6 h-6 text-white" />
              </div>
              <CardTitle>Real-time Market Simulation</CardTitle>
              <CardDescription>
                Practice with live market data through event-driven streams and microservices
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Experience real market volatility without financial risk
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-xl">
            <CardHeader>
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4">
                <Gamepad2 className="w-6 h-6 text-white" />
              </div>
              <CardTitle>Gamified Learning</CardTitle>
              <CardDescription>
                Level up your financial skills through engaging challenges and achievements
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Turn learning into an addictive, rewarding experience
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-xl">
            <CardHeader>
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-white" />
              </div>
              <CardTitle>Personalized Insights</CardTitle>
              <CardDescription>
                Custom feedback based on your unique behavioral finance profile
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                AI adapts to your learning style and risk tolerance
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-xl">
            <CardHeader>
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-white" />
              </div>
              <CardTitle>Social Learning</CardTitle>
              <CardDescription>
                Connect with peers, share strategies, and learn together
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Build financial confidence through community support
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-xl">
            <CardHeader>
              <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <CardTitle>Cloud-Native Architecture</CardTitle>
              <CardDescription>
                Kubernetes-ready microservices ensuring scalability and reliability
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Enterprise-grade infrastructure built for the future
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Transform Your Financial Future?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join thousands of teens already building wealth-building habits with StockQuest's AI-powered platform.
            <strong className="block mt-2 text-gradient">No sign-up required • Always free</strong>
          </p>
          <Button size="lg" asChild className="gradient-stockquest border-0 text-lg px-12 py-6">
            <Link to="/dashboard">
              Start Your Journey <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-muted/30">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 gradient-stockquest rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold text-gradient">StockQuest</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Democratizing financial literacy for the next generation through AI-powered learning.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Platform</h3>
              <ul className="space-y-2 text-sm">
                <li><Link to="/dashboard" className="text-muted-foreground hover:text-foreground">Dashboard</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2024 StockQuest. All rights reserved. Built for K8s deployment.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
