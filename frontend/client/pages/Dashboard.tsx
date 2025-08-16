import { Link } from 'react-router-dom'
import { Button } from '../components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card'
import { Badge } from '../components/ui/badge'
import { Progress } from '../components/ui/progress'
import { Avatar, AvatarFallback, AvatarImage } from '../components/ui/avatar'
import {
  TrendingUp,
  TrendingDown,
  Brain,
  Trophy,
  Target,
  Zap,
  DollarSign,
  LineChart,
  AlertTriangle,
  CheckCircle,
  Clock,
  Star,
  ShoppingCart,
  Banknote
} from 'lucide-react'
import { motion, useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'

// Animated Counter Component
function AnimatedCounter({ end, duration = 2, suffix = "", prefix = "" }: {
  end: number,
  duration?: number,
  suffix?: string,
  prefix?: string
}) {
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

  return <span ref={countRef}>{prefix}{count.toLocaleString()}{suffix}</span>
}

export default function Dashboard() {
  const headerRef = useRef(null)
  const statsRef = useRef(null)
  const insightsRef = useRef(null)

  const headerInView = useInView(headerRef, { once: true })
  const statsInView = useInView(statsRef, { once: true })
  const insightsInView = useInView(insightsRef, { once: true })

  const [portfolio, setPortfolio] = useState<{[key: string]: number}>({})

  const mockStocks = [
    { symbol: 'AAPL', name: 'Apple Inc.', price: 185.25, change: 2.34, changePercent: 1.28, volume: '47.2M', marketCap: '2.85T' },
    { symbol: 'GOOGL', name: 'Alphabet Inc.', price: 2847.91, change: -15.42, changePercent: -0.54, volume: '18.3M', marketCap: '1.82T' },
    { symbol: 'TSLA', name: 'Tesla Inc.', price: 248.87, change: 8.91, changePercent: 3.71, volume: '89.1M', marketCap: '790B' },
    { symbol: 'MSFT', name: 'Microsoft Corp.', price: 337.29, change: 1.84, changePercent: 0.55, volume: '32.7M', marketCap: '2.51T' },
    { symbol: 'AMZN', name: 'Amazon.com Inc.', price: 3127.45, change: -22.15, changePercent: -0.70, volume: '28.9M', marketCap: '1.59T' },
    { symbol: 'NVDA', name: 'NVIDIA Corp.', price: 524.17, change: 15.73, changePercent: 3.09, volume: '56.4M', marketCap: '1.29T' },
    { symbol: 'META', name: 'Meta Platforms', price: 298.52, change: -3.21, changePercent: -1.06, volume: '19.8M', marketCap: '751B' },
    { symbol: 'NFLX', name: 'Netflix Inc.', price: 456.89, change: 12.34, changePercent: 2.78, volume: '7.2M', marketCap: '203B' },
    { symbol: 'AMD', name: 'Advanced Micro Devices', price: 118.67, change: -2.45, changePercent: -2.02, volume: '41.6M', marketCap: '192B' },
    { symbol: 'CRM', name: 'Salesforce Inc.', price: 267.43, change: 4.12, changePercent: 1.56, volume: '5.9M', marketCap: '267B' },
    { symbol: 'ORCL', name: 'Oracle Corp.', price: 109.87, change: 0.93, changePercent: 0.85, volume: '29.3M', marketCap: '312B' },
    { symbol: 'INTC', name: 'Intel Corp.', price: 32.45, change: -0.87, changePercent: -2.61, volume: '35.1M', marketCap: '134B' }
  ]

  const aiInsights = [
    {
      type: 'warning',
      title: 'Emotional Trading Pattern Detected',
      message: 'You tend to panic-sell during market dips. Consider setting stop-losses instead.',
      confidence: 87
    },
    {
      type: 'success',
      title: 'Great Diversification Strategy',
      message: 'Your portfolio shows excellent sector diversification. Keep it up!',
      confidence: 94
    },
    {
      type: 'info',
      title: 'Long-term Mindset Improving',
      message: 'Your holding periods have increased by 40% this month.',
      confidence: 78
    }
  ]

  const handleBuy = (symbol: string, price: number) => {
    setPortfolio(prev => ({
      ...prev,
      [symbol]: (prev[symbol] || 0) + 1
    }))
    console.log(`Bought 1 share of ${symbol} at $${price}`)
  }

  const handleSell = (symbol: string, price: number) => {
    if (portfolio[symbol] && portfolio[symbol] > 0) {
      setPortfolio(prev => ({
        ...prev,
        [symbol]: prev[symbol] - 1
      }))
      console.log(`Sold 1 share of ${symbol} at $${price}`)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-blue-50/30 to-purple-50/20 overflow-hidden">
      {/* Floating background elements */}
      <motion.div
        animate={{
          y: [0, -15, 0],
          x: [0, 10, 0],
          rotate: [0, 3, 0]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-32 left-20 w-24 h-24 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-xl"
      />
      <motion.div
        animate={{
          y: [0, 15, 0],
          x: [0, -8, 0],
          rotate: [0, -2, 0]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
        className="absolute top-64 right-32 w-32 h-32 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full blur-xl"
      />

      {/* Navigation */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="border-b bg-background/80 backdrop-blur-lg sticky top-0 z-50"
      >
        <div className="max-w-none px-4 py-4 flex items-center justify-between">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center space-x-2"
          >
            <motion.div
              whileHover={{ scale: 1.1, rotate: 10 }}
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
              <Link to="/dashboard" className="text-foreground font-medium">
                Dashboard
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
              <Button variant="ghost" asChild>
                <Link to="/">Home</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </motion.nav>

      <div className="max-w-none px-4 py-8 relative z-10">
        {/* Header */}
        <motion.div
          ref={headerRef}
          initial={{ y: 50, opacity: 0 }}
          animate={headerInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={headerInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl font-bold mb-2"
          >
            Welcome back! <motion.span animate={{ rotate: [0, 20, 0] }} transition={{ duration: 0.6, delay: 1 }}>👋</motion.span>
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={headerInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-muted-foreground"
          >
            Here's your financial learning progress and market insights.
          </motion.p>
        </motion.div>

        {/* Quick Stats */}
        <motion.div
          ref={statsRef}
          initial={{ opacity: 0 }}
          animate={statsInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
        >
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={statsInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            whileHover={{
              y: -5,
              scale: 1.02,
              transition: { duration: 0.2 }
            }}
          >
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Portfolio Value</CardTitle>
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <DollarSign className="h-4 w-4 text-muted-foreground" />
                </motion.div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  $<AnimatedCounter end={12847} />.<AnimatedCounter end={92} />
                </div>
                <p className="text-xs text-muted-foreground">
                  <span className="text-green-600">+284.73 (2.28%)</span> from last week
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={statsInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{
              y: -5,
              scale: 1.02,
              transition: { duration: 0.2 }
            }}
          >
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Learning Streak</CardTitle>
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <Zap className="h-4 w-4 text-muted-foreground" />
                </motion.div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  <AnimatedCounter end={23} /> Days
                </div>
                <p className="text-xs text-muted-foreground">
                  Personal best! Keep going 🔥
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={statsInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            whileHover={{
              y: -5,
              scale: 1.02,
              transition: { duration: 0.2 }
            }}
          >
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">AI Confidence</CardTitle>
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                >
                  <Brain className="h-4 w-4 text-muted-foreground" />
                </motion.div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  <AnimatedCounter end={87} />%
                </div>
                <p className="text-xs text-muted-foreground">
                  Risk profile accuracy
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={statsInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{
              y: -5,
              scale: 1.02,
              transition: { duration: 0.2 }
            }}
          >
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Holdings</CardTitle>
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <ShoppingCart className="h-4 w-4 text-muted-foreground" />
                </motion.div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  <AnimatedCounter end={Object.values(portfolio).reduce((sum, shares) => sum + shares, 0)} />
                </div>
                <p className="text-xs text-muted-foreground">
                  Shares owned
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content - Full Width */}
          <div className="lg:col-span-3 space-y-8">
            {/* Real-time Market Data */}
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={insightsInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <motion.div
                      animate={{ rotate: [0, 5, -5, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <LineChart className="w-5 h-5 text-primary" />
                    </motion.div>
                    <span>Live Market Trading</span>
                    <div className="flex items-center space-x-1">
                      <motion.div
                        className="w-2 h-2 bg-green-500 rounded-full"
                        animate={{ scale: [1, 1.5, 1] }}
                        transition={{ duration: 1, repeat: Infinity }}
                      />
                      <span className="text-xs text-green-600">Live</span>
                    </div>
                  </CardTitle>
                  <CardDescription>
                    Buy and sell stocks with real-time market data simulation
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                    {mockStocks.map((stock, index) => (
                      <motion.div
                        key={index}
                        initial={{ y: 30, opacity: 0 }}
                        animate={insightsInView ? { y: 0, opacity: 1 } : {}}
                        transition={{ duration: 0.5, delay: index * 0.05 }}
                        whileHover={{
                          y: -5,
                          scale: 1.02,
                          transition: { duration: 0.2 }
                        }}
                        className="border rounded-lg p-4 hover:bg-muted/50 transition-colors"
                      >
                        <div className="flex items-center space-x-3 mb-3">
                          <motion.div
                            whileHover={{ scale: 1.1, rotate: 10 }}
                            className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center"
                          >
                            <span className="text-white font-bold text-sm">{stock.symbol.charAt(0)}</span>
                          </motion.div>
                          <div className="flex-1 min-w-0">
                            <div className="font-bold text-sm">{stock.symbol}</div>
                            <div className="text-xs text-muted-foreground truncate">{stock.name}</div>
                          </div>
                        </div>
                        
                        <div className="space-y-2 mb-4">
                          <div className="flex justify-between items-center">
                            <span className="text-sm text-muted-foreground">Price:</span>
                            <span className="font-bold">${stock.price.toFixed(2)}</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-sm text-muted-foreground">Change:</span>
                            <motion.div
                              className={`flex items-center space-x-1 ${stock.change >= 0 ? 'text-green-600' : 'text-red-600'}`}
                              whileHover={{ scale: 1.05 }}
                            >
                              <motion.div
                                animate={{
                                  y: stock.change >= 0 ? [-1, 1, -1] : [1, -1, 1]
                                }}
                                transition={{ duration: 2, repeat: Infinity }}
                              >
                                {stock.change >= 0 ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                              </motion.div>
                              <span className="text-xs font-medium">
                                {stock.change >= 0 ? '+' : ''}{stock.change.toFixed(2)} ({stock.changePercent >= 0 ? '+' : ''}{stock.changePercent.toFixed(2)}%)
                              </span>
                            </motion.div>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-sm text-muted-foreground">Volume:</span>
                            <span className="text-xs">{stock.volume}</span>
                          </div>
                          {portfolio[stock.symbol] && portfolio[stock.symbol] > 0 && (
                            <div className="flex justify-between items-center">
                              <span className="text-sm text-muted-foreground">Owned:</span>
                              <Badge variant="secondary">{portfolio[stock.symbol]} shares</Badge>
                            </div>
                          )}
                        </div>

                        <div className="flex space-x-2">
                          <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex-1"
                          >
                            <Button
                              size="sm"
                              className="w-full bg-green-600 hover:bg-green-700 text-white"
                              onClick={() => handleBuy(stock.symbol, stock.price)}
                            >
                              <ShoppingCart className="w-3 h-3 mr-1" />
                              Buy
                            </Button>
                          </motion.div>
                          <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex-1"
                          >
                            <Button
                              size="sm"
                              variant="outline"
                              className="w-full border-red-600 text-red-600 hover:bg-red-600 hover:text-white"
                              onClick={() => handleSell(stock.symbol, stock.price)}
                              disabled={!portfolio[stock.symbol] || portfolio[stock.symbol] === 0}
                            >
                              <Banknote className="w-3 h-3 mr-1" />
                              Sell
                            </Button>
                          </motion.div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* AI Behavioral Insights */}
            <motion.div
              ref={insightsRef}
              initial={{ y: 50, opacity: 0 }}
              animate={insightsInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <motion.div
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <Brain className="w-5 h-5 text-primary" />
                    </motion.div>
                    <span>AI Behavioral Insights</span>
                    <motion.div
                      animate={{ opacity: [1, 0.5, 1] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <Badge variant="secondary">Real-time</Badge>
                    </motion.div>
                  </CardTitle>
                  <CardDescription>
                    Personalized feedback based on your trading patterns and behavioral analysis
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {aiInsights.map((insight, index) => (
                    <motion.div
                      key={index}
                      initial={{ x: -50, opacity: 0 }}
                      animate={insightsInView ? { x: 0, opacity: 1 } : {}}
                      transition={{ duration: 0.6, delay: index * 0.2 }}
                      whileHover={{ scale: 1.02, x: 5 }}
                      className="flex items-start space-x-3 p-4 rounded-lg border"
                    >
                      <motion.div
                        className="flex-shrink-0"
                        whileHover={{ scale: 1.2, rotate: 5 }}
                      >
                        {insight.type === 'warning' && <AlertTriangle className="w-5 h-5 text-yellow-500" />}
                        {insight.type === 'success' && <CheckCircle className="w-5 h-5 text-green-500" />}
                        {insight.type === 'info' && <Brain className="w-5 h-5 text-blue-500" />}
                      </motion.div>
                      <div className="flex-1">
                        <h4 className="font-medium mb-1">{insight.title}</h4>
                        <p className="text-sm text-muted-foreground mb-2">{insight.message}</p>
                        <div className="flex items-center space-x-2">
                          <span className="text-xs text-muted-foreground">Confidence:</span>
                          <motion.div
                            initial={{ width: 0 }}
                            animate={insightsInView ? { width: "5rem" } : {}}
                            transition={{ duration: 1, delay: index * 0.2 + 0.5 }}
                          >
                            <Progress value={insight.confidence} className="w-20 h-2" />
                          </motion.div>
                          <span className="text-xs font-medium">{insight.confidence}%</span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}
