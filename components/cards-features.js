import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const CardsFeatures = ({ data }) => (
  <div className="container mx-auto p-4">
 
    <div className="flex flex-wrap justify-center">
      
      {data &&
        data.map((card) => (
          <div key={card.id} className="p-4 shadow-md rounded-md">
            <Card x-chunk={card.id}>
              <CardHeader className="flex flex-row items-center space-y-0 pb-2">
                {/* <card.icon className="h-4 w-4 mr-2 text-muted-foreground" /> */}
                <CardTitle className="text-sm font-medium">
                  {card.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{card.value}</div>
                <CardDescription>
                  <p className="text-xs text-muted-foreground">
                    {card.description}
                  </p>
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        ))}
    </div>
  </div>
);

export default CardsFeatures;
