import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages";
import Dashboard from "./pages/Dashboard";
import PlaceholderPage from "./pages/PlaceholderPage";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/dashboard" element={<Dashboard />} />
        
        {/* Placeholder routes */}
        <Route 
          path="/demo" 
          element={
            <PlaceholderPage 
              title="StockQuest Demo" 
              description="See how AI-powered financial learning transforms teen investors"
              features={[
                "Interactive platform walkthrough",
                "Sample AI behavioral feedback",
                "Real-time market simulation preview",
                "Gamification features demonstration"
              ]}
            />
          } 
        />
        <Route 
          path="/portfolio" 
          element={
            <PlaceholderPage 
              title="Portfolio Management" 
              description="Track and analyze your investment performance"
              features={[
                "Real-time portfolio tracking",
                "Performance analytics and insights",
                "Risk assessment tools",
                "Diversification recommendations",
                "AI-powered optimization suggestions"
              ]}
            />
          } 
        />
        <Route 
          path="/learn" 
          element={
            <PlaceholderPage 
              title="Learning Center" 
              description="Master financial concepts through interactive lessons"
              features={[
                "Structured learning paths",
                "Interactive simulations",
                "Video lessons and tutorials",
                "Quizzes and assessments",
                "Progress tracking and certificates"
              ]}
            />
          } 
        />
        <Route 
          path="/challenges" 
          element={
            <PlaceholderPage 
              title="Trading Challenges" 
              description="Test your skills with gamified investing scenarios"
              features={[
                "Weekly trading competitions",
                "Skill-based challenges",
                "Leaderboards and rankings",
                "Achievement unlocks",
                "Peer-to-peer competitions"
              ]}
            />
          } 
        />
        <Route 
          path="/about" 
          element={
            <PlaceholderPage 
              title="About StockQuest" 
              description="Learn about our mission to democratize financial literacy"
              features={[
                "Our story and mission",
                "Team and advisors",
                "Educational philosophy",
                "Technology and innovation",
                "Impact and success stories"
              ]}
            />
          } 
        />
        <Route 
          path="/features" 
          element={
            <PlaceholderPage 
              title="Platform Features" 
              description="Explore all the tools that make StockQuest unique"
              features={[
                "AI behavioral analysis engine",
                "Real-time market data integration",
                "Microservices architecture",
                "Kubernetes-ready deployment",
                "Advanced gamification system"
              ]}
            />
          } 
        />
        <Route 
          path="/tutorials" 
          element={
            <PlaceholderPage 
              title="Tutorials & Guides" 
              description="Step-by-step guides to master the platform"
              features={[
                "Getting started guide",
                "Platform navigation tutorials",
                "Trading simulation walkthroughs",
                "AI insights interpretation",
                "Best practices and tips"
              ]}
            />
          } 
        />
        <Route 
          path="/blog" 
          element={
            <PlaceholderPage 
              title="StockQuest Blog" 
              description="Latest insights on teen financial education and investing"
              features={[
                "Market analysis for beginners",
                "Behavioral finance insights",
                "Success stories from users",
                "Educational content library",
                "Expert interviews and advice"
              ]}
            />
          } 
        />
        <Route 
          path="/community" 
          element={
            <PlaceholderPage 
              title="Community Hub" 
              description="Connect with fellow teen investors and learn together"
              features={[
                "Discussion forums",
                "Study groups and clubs",
                "Peer mentorship program",
                "Investment idea sharing",
                "Social learning features"
              ]}
            />
          } 
        />
        <Route 
          path="/contact" 
          element={
            <PlaceholderPage 
              title="Contact Us" 
              description="Get in touch with the StockQuest team"
              features={[
                "Customer support portal",
                "Technical assistance",
                "Partnership inquiries",
                "Educational institution outreach",
                "Feedback and suggestions"
              ]}
            />
          } 
        />
        <Route 
          path="/careers" 
          element={
            <PlaceholderPage 
              title="Join Our Team" 
              description="Help us democratize financial education for the next generation"
              features={[
                "Engineering positions",
                "Educational content creators",
                "AI/ML specialists",
                "Product design roles",
                "Remote-first culture"
              ]}
            />
          } 
        />
        
        {/* Catch-all route for 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
