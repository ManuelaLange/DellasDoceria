"use client";

import * as React from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import feedback1 from "../img/feedback.jpg";

export function Clients() {
  const feedbackImg = [feedback1, feedback1, feedback1, feedback1, feedback1];
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div className="w-full mt-10 px-20">
      <Carousel
        opts={{
          align: "start",
        }}
        setApi={setApi}
        className="w-full flex flex-row justify-center items-center mt-10 px-20"
      >
        <CarouselContent>
          {feedbackImg.map((feedback, index) => (
            <CarouselItem key={index} className="lg:basis-1/3 max-h-64">
              <Card className="w-80 p-3">
                <CardContent className="flex items-center justify-center">
                  <Image
                    alt="Foto do produto"
                    src={feedback}
                    className="w-full h-full rounded-xl"
                    loading="lazy"
                  />
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div className="py-2 text-center text-sm font-text text-[#8B4513]">
        {current} de {count}
      </div>
    </div>
  );
}
