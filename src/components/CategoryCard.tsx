import { Link } from "react-router-dom";
import * as Icons from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

interface CategoryCardProps {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
}

const CategoryCard = ({ id, name, description, icon, color }: CategoryCardProps) => {
  const IconComponent = (Icons as any)[icon] || Icons.Folder;

  return (
    <Link to={`/category/${id}`}>
      <Card className="card-hover-effect h-full">
        <CardHeader>
          <div className={`flex h-12 w-12 items-center justify-center rounded-lg mb-4 ${color}`}>
            <IconComponent className="h-6 w-6 text-primary" />
          </div>
          <CardTitle className="text-lg">{name}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
      </Card>
    </Link>
  );
};

export default CategoryCard;
