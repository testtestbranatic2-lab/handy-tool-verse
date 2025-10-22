import { Link } from "react-router-dom";
import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Star } from "lucide-react";

interface ToolCardProps {
  id: string;
  name: string;
  description: string;
  tags: string[];
  popular?: boolean;
}

const ToolCard = ({ id, name, description, tags, popular }: ToolCardProps) => {
  return (
    <Card className="card-hover-effect h-full flex flex-col">
      <CardHeader className="flex-1">
        <div className="flex items-start justify-between mb-2">
          <CardTitle className="text-lg">{name}</CardTitle>
          {popular && (
            <Badge variant="secondary" className="ml-2">
              <Star className="h-3 w-3 mr-1 fill-current" />
              Popular
            </Badge>
          )}
        </div>
        <CardDescription>{description}</CardDescription>
        <div className="flex flex-wrap gap-2 mt-4">
          {tags.map((tag) => (
            <Badge key={tag} variant="outline" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
      </CardHeader>
      <CardFooter>
        <Link to={`/tool/${id}`} className="w-full">
          <Button className="w-full" variant="default">
            Try Now
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default ToolCard;
