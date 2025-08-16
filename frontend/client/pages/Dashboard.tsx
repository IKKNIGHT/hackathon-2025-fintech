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
  Star
} from 'lucide-react'

export default function Dashboard() {
  const mockStocks = [
    { symbol: 'AAPL', price: 185.25, change: 2.34, changePercent: 1.28 },
    { symbol: 'GOOGL', price: 2847.91, change: -15.42, changePercent: -0.54 },
    { symbol: 'TSLA', price: 248.87, change: 8.91, changePercent: 3.71 },
    { symbol: 'MSFT', price: 337.29, change: 1.84, changePercent: 0.55 },
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
            <Link to="/dashboard" className="text-foreground font-medium">
              Dashboard
            </Link>
            <Link to="/portfolio" className="text-muted-foreground hover:text-foreground transition-colors">
              Portfolio
            </Link>
            <Link to="/learn" className="text-muted-foreground hover:text-foreground transition-colors">
              Learn
            </Link>
            <Link to="/challenges" className="text-muted-foreground hover:text-foreground transition-colors">
              Challenges
            </Link>
          </div>

          <div className="flex items-center space-x-3">
            <Button variant="ghost" asChild>
              <Link to="/">Home</Link>
            </Button>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Welcome back, Jordan! 👋</h1>
          <p className="text-muted-foreground">Here's your financial learning progress and market insights.</p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Portfolio Value</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$12,847.92</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-green-600">+284.73 (2.28%)</span> from last week
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Learning Streak</CardTitle>
              <Zap className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">23 Days</div>
              <p className="text-xs text-muted-foreground">
                Personal best! Keep going 🔥
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">AI Confidence</CardTitle>
              <Brain className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">87%</div>
              <p className="text-xs text-muted-foreground">
                Risk profile accuracy
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Level</CardTitle>
              <Trophy className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">7</div>
              <p className="text-xs text-muted-foreground">
                Intermediate Investor
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* AI Behavioral Insights */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Brain className="w-5 h-5 text-primary" />
                  <span>AI Behavioral Insights</span>
                  <Badge variant="secondary">Real-time</Badge>
                </CardTitle>
                <CardDescription>
                  Personalized feedback based on your trading patterns and behavioral analysis
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {aiInsights.map((insight, index) => (
                  <div key={index} className="flex items-start space-x-3 p-4 rounded-lg border">
                    <div className="flex-shrink-0">
                      {insight.type === 'warning' && <AlertTriangle className="w-5 h-5 text-yellow-500" />}
                      {insight.type === 'success' && <CheckCircle className="w-5 h-5 text-green-500" />}
                      {insight.type === 'info' && <Brain className="w-5 h-5 text-blue-500" />}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium mb-1">{insight.title}</h4>
                      <p className="text-sm text-muted-foreground mb-2">{insight.message}</p>
                      <div className="flex items-center space-x-2">
                        <span className="text-xs text-muted-foreground">Confidence:</span>
                        <Progress value={insight.confidence} className="w-20 h-2" />
                        <span className="text-xs font-medium">{insight.confidence}%</span>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Real-time Market Data */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <LineChart className="w-5 h-5 text-primary" />
                  <span>Market Simulation</span>
                  <div className="flex items-center space-x-1">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-xs text-green-600">Live</span>
                  </div>
                </CardTitle>
                <CardDescription>
                  Practice trading with real-time market data
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {mockStocks.map((stock, index) => (
                    <div key={index} className="flex items-center justify-between p-3 rounded-lg border hover:bg-muted/50 transition-colors">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                          <span className="text-white font-bold text-sm">{stock.symbol.charAt(0)}</span>
                        </div>
                        <div>
                          <div className="font-medium">{stock.symbol}</div>
                          <div className="text-sm text-muted-foreground">${stock.price.toFixed(2)}</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className={`flex items-center space-x-1 ${stock.change >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                          {stock.change >= 0 ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
                          <span className="font-medium">{stock.change >= 0 ? '+' : ''}{stock.change.toFixed(2)}</span>
                        </div>
                        <div className={`text-sm ${stock.changePercent >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                          {stock.changePercent >= 0 ? '+' : ''}{stock.changePercent.toFixed(2)}%
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <Button className="w-full mt-4" variant="outline">
                  Open Trading Simulator
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Learning Progress */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Target className="w-5 h-5 text-primary" />
                  <span>Learning Path</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Stock Fundamentals</span>
                    <span>100%</span>
                  </div>
                  <Progress value={100} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Technical Analysis</span>
                    <span>67%</span>
                  </div>
                  <Progress value={67} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Risk Management</span>
                    <span>34%</span>
                  </div>
                  <Progress value={34} className="h-2" />
                </div>
                <Button className="w-full mt-4" size="sm">
                  Continue Learning
                </Button>
              </CardContent>
            </Card>

            {/* Recent Achievements */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Star className="w-5 h-5 text-primary" />
                  <span>Recent Wins</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center">
                    <Trophy className="w-4 h-4 text-yellow-600" />
                  </div>
                  <div>
                    <div className="text-sm font-medium">Portfolio Diversifier</div>
                    <div className="text-xs text-muted-foreground">Spread investments across 5+ sectors</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                  </div>
                  <div>
                    <div className="text-sm font-medium">Risk Manager</div>
                    <div className="text-xs text-muted-foreground">Set stop-losses on all positions</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <Clock className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <div className="text-sm font-medium">Patient Investor</div>
                    <div className="text-xs text-muted-foreground">Hold positions for 30+ days</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button className="w-full" variant="outline" size="sm">
                  Take Challenge
                </Button>
                <Button className="w-full" variant="outline" size="sm">
                  AI Analysis
                </Button>
                <Button className="w-full gradient-stockquest border-0" size="sm">
                  Start Trading
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
