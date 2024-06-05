import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

const CardsFeatures = ({ data }) => (
  <div className="container mx-auto p-4">
    <div className="flex flex-wrap justify-center">
      {data &&
        data.map((card) => (
          <div key={card.id} className="p-4 shadow-md rounded-md">
            <Card x-chunk={card.id} className="relative">
              <Image
                src={card.image}
                alt={card.title}
                width={300}
                height={300}
                // layout="responsive"
                style={{ objectFit: "cover" }}
                priority
                  className="absolute h-full top-0 left-0 object-cover z-1"
                />
              {/* HACK */}
              <div
                className="flex-auto flex relative block z-9 h-[200px] "
                style={{ height: 200, width: 200 }}
              >
                <CardHeader className="flex flex-row pb-2 w-full">
                  {/* <card.icon className="h-4 w-4 mr-2 text-muted-foreground" /> */}
                  <CardTitle className="text-2xl text-center w-full uppercase font-medium">{card.title}</CardTitle>
                </CardHeader>
                {/* <CardContent>
                  <div className="text-2xl font-bold">{card.value}</div>
                  <CardDescription>
                    <p className="text-xs text-muted-foreground">
                      {card.description}
                    </p>
                  </CardDescription>
                </CardContent> */}
              </div>
            </Card>
          </div>
        ))}
    </div>
  </div>
);

export default CardsFeatures;
