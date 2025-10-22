import { useParams } from "react-router-dom";
import { useState } from "react";
import ToolCard from "@/components/ToolCard";
import toolsData from "@/data/tools.json";
import { Button } from "@/components/ui/button";
import { Filter } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const CategoryPage = () => {
  const { categoryId } = useParams();
  const [sortBy, setSortBy] = useState("popular");

  const category = toolsData.categories.find((cat) => cat.id === categoryId);
  const categoryTools = toolsData.tools.filter((tool) => tool.category === categoryId);

  const sortedTools = [...categoryTools].sort((a, b) => {
    if (sortBy === "popular") {
      return (b.popular ? 1 : 0) - (a.popular ? 1 : 0);
    }
    return a.name.localeCompare(b.name);
  });

  if (!category) {
    return (
      <div className="container px-4 md:px-6 py-20">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold">Category Not Found</h1>
          <p className="text-muted-foreground">The category you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container px-4 md:px-6 py-20">
      {/* Header */}
      <div className="space-y-4 mb-12">
        <div className="flex items-center gap-3 mb-4">
          <div className={`flex h-16 w-16 items-center justify-center rounded-2xl ${category.color}`}>
            <span className="text-2xl">🛠️</span>
          </div>
          <div>
            <h1 className="text-4xl font-bold">{category.name}</h1>
            <p className="text-muted-foreground text-lg">{category.description}</p>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-sm text-muted-foreground">
            {categoryTools.length} tools available
          </p>
          <div className="flex items-center gap-3">
            <Button variant="outline" size="sm">
              <Filter className="h-4 w-4 mr-2" />
              Filters
            </Button>
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="popular">Most Popular</SelectItem>
                <SelectItem value="name">Name (A-Z)</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      {/* Tools Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {sortedTools.map((tool) => (
          <ToolCard key={tool.id} {...tool} />
        ))}
      </div>

      {categoryTools.length === 0 && (
        <div className="text-center py-20">
          <p className="text-muted-foreground">No tools found in this category yet.</p>
        </div>
      )}
    </div>
  );
};

export default CategoryPage;
