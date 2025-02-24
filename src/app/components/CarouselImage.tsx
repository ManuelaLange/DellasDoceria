"use client";

import * as React from "react";
import Image from "next/image";
import doce1 from "../img/doce1.png";
import doce2 from "../img/doce2.png";
import doce3 from "../img/doce8.png";
import doce4 from "../img/doces4.png";
import doce5 from "../img/doce5.png";
import doce6 from "../img/doce11.png";
import doce7 from "../img/doce7.png";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const images = [doce1, doce2, doce3, doce4, doce5, doce6, doce7];

export function CarouselImage() {
  return (
    <div className="mt-10 px-4 sm:px-14 md:px-16 lg:px-20 w-full">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
        className="w-full flex flex-row justify-center items-center mt-10 px-6 sm:px-6 md:px-10 lg:px-18 "
      >
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem
              key={index}
              className="basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5 pl-1"
            >
              <Card className="w-full max-w-[17rem] mx-auto">
                <CardContent className="flex aspect-square items-center justify-center p-2">
                  <Image
                    alt="Foto do produto"
                    src={image}
                    className="w-full h-full rounded-xl object-cover"
                    loading="lazy"
                  />
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
