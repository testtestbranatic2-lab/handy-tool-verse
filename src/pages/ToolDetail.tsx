import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import ToolCard from "@/components/ToolCard";
import toolsData from "@/data/tools.json";
import { ArrowLeft, Share2, Bookmark, Star } from "lucide-react";

const ToolDetail = () => {
  const { toolId } = useParams();
  const tool = toolsData.tools.find((t) => t.id === toolId);

  if (!tool) {
    return (
      <div className="container px-4 md:px-6 py-20">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold">Tool Not Found</h1>
          <p className="text-muted-foreground">The tool you're looking for doesn't exist.</p>
          <Link to="/">
            <Button>Back to Home</Button>
          </Link>
        </div>
      </div>
    );
  }

  const category = toolsData.categories.find((cat) => cat.id === tool.category);
  const relatedTools = toolsData.tools
    .filter((t) => t.category === tool.category && t.id !== tool.id)
    .slice(0, 3);

  return (
    <div className="container px-4 md:px-6 py-12">
      {/* Back Button */}
      <Link to={`/category/${tool.category}`}>
        <Button variant="ghost" size="sm" className="mb-6">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to {category?.name}
        </Button>
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-8">
          {/* Header */}
          <div className="space-y-4">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h1 className="text-4xl font-bold">{tool.name}</h1>
                  {tool.popular && (
                    <Badge variant="secondary">
                      <Star className="h-3 w-3 mr-1 fill-current" />
                      Popular
                    </Badge>
                  )}
                </div>
                <p className="text-lg text-muted-foreground">{tool.description}</p>
              </div>
              <div className="flex gap-2 ml-4">
                <Button variant="outline" size="icon">
                  <Share2 className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon">
                  <Bookmark className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {tool.tags.map((tag) => (
                <Badge key={tag} variant="outline">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          {/* Tool Working Area */}
          <Card>
            <CardHeader>
              <CardTitle>Try It Now</CardTitle>
              <CardDescription>This is where the tool functionality would be implemented</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="min-h-[400px] flex items-center justify-center border-2 border-dashed rounded-lg">
                <div className="text-center space-y-3">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mx-auto">
                    <span className="text-3xl">🛠️</span>
                  </div>
                  <p className="text-muted-foreground">Tool interface placeholder</p>
                  <p className="text-sm text-muted-foreground max-w-md">
                    In a real implementation, this area would contain the actual tool functionality
                    with input fields, options, and interactive elements.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* FAQ Section */}
          <Card>
            <CardHeader>
              <CardTitle>Frequently Asked Questions</CardTitle>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>How does this tool work?</AccordionTrigger>
                  <AccordionContent>
                    This tool processes your data entirely in your browser. No data is sent to any server,
                    ensuring complete privacy and instant results.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>Is my data secure?</AccordionTrigger>
                  <AccordionContent>
                    Yes, absolutely! All processing happens client-side in your browser. Your data never
                    leaves your device, providing complete security and privacy.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>Are there any usage limits?</AccordionTrigger>
                  <AccordionContent>
                    No limits at all! Use this tool as many times as you need. It's completely free with
                    no restrictions or registration required.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger>Can I use this tool offline?</AccordionTrigger>
                  <AccordionContent>
                    Once the page is loaded, the tool works offline as all processing happens in your
                    browser. You don't need an active internet connection to use it.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Category Info */}
          <Card>
            <CardHeader>
              <CardTitle>Category</CardTitle>
            </CardHeader>
            <CardContent>
              <Link to={`/category/${tool.category}`}>
                <Button variant="outline" className="w-full justify-start">
                  {category?.name}
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* Related Tools */}
          {relatedTools.length > 0 && (
            <Card>
              <CardHeader>
                <CardTitle>Related Tools</CardTitle>
                <CardDescription>You might also like these</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {relatedTools.map((relatedTool) => (
                  <Link key={relatedTool.id} to={`/tool/${relatedTool.id}`}>
                    <div className="p-3 rounded-lg border hover:bg-accent transition-colors">
                      <h4 className="font-medium text-sm mb-1">{relatedTool.name}</h4>
                      <p className="text-xs text-muted-foreground line-clamp-2">
                        {relatedTool.description}
                      </p>
                    </div>
                  </Link>
                ))}
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default ToolDetail;
