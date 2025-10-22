import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import CategoryCard from "@/components/CategoryCard";
import ToolCard from "@/components/ToolCard";
import toolsData from "@/data/tools.json";
import { ArrowRight, Sparkles, Zap, Shield } from "lucide-react";

const Home = () => {
  const featuredTools = toolsData.tools.filter((tool) => tool.popular).slice(0, 6);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-32">
        <div className="absolute inset-0 hero-gradient opacity-10"></div>
        <div className="container relative px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center space-y-6">
            <div className="inline-flex items-center rounded-full border px-4 py-1.5 text-sm mb-4">
              <Sparkles className="h-3 w-3 mr-2 text-primary" />
              <span>100+ Tools & Growing</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              All Your Handy Online Tools —{" "}
              <span className="text-primary">Free and Fast</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Access a comprehensive collection of productivity tools. No signup required, no limits, completely free.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link to="/categories">
                <Button size="lg" className="w-full sm:w-auto">
                  Explore All Tools
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                Submit a Tool
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 border-t bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center space-y-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-lg">Lightning Fast</h3>
              <p className="text-sm text-muted-foreground">
                All tools run client-side for instant results without server delays
              </p>
            </div>
            <div className="flex flex-col items-center text-center space-y-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-lg">100% Private</h3>
              <p className="text-sm text-muted-foreground">
                Your data never leaves your browser — complete privacy guaranteed
              </p>
            </div>
            <div className="flex flex-col items-center text-center space-y-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Sparkles className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-lg">Always Free</h3>
              <p className="text-sm text-muted-foreground">
                No subscriptions, no hidden fees, no limits on usage
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20">
        <div className="container px-4 md:px-6">
          <div className="space-y-2 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Browse by Category</h2>
            <p className="text-muted-foreground">
              Find the perfect tool for your needs
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {toolsData.categories.map((category) => (
              <CategoryCard key={category.id} {...category} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Tools Section */}
      <section className="py-20 bg-muted/50 border-y">
        <div className="container px-4 md:px-6">
          <div className="flex items-center justify-between mb-12">
            <div className="space-y-2">
              <h2 className="text-3xl md:text-4xl font-bold">Popular Tools</h2>
              <p className="text-muted-foreground">
                Most used tools by our community
              </p>
            </div>
            <Link to="/popular">
              <Button variant="outline">
                View All
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredTools.map((tool) => (
              <ToolCard key={tool.id} {...tool} />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-2xl text-center space-y-6 p-8 md:p-12 rounded-2xl border bg-card">
            <h2 className="text-3xl md:text-4xl font-bold">Stay Updated</h2>
            <p className="text-muted-foreground">
              Get notified when we add new tools and features
            </p>
            <form className="flex flex-col sm:flex-row gap-3">
              <Input
                type="email"
                placeholder="Enter your email"
                className="flex-1"
              />
              <Button type="submit" size="lg">
                Subscribe
              </Button>
            </form>
            <p className="text-xs text-muted-foreground">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
