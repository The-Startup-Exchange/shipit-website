"use client";

import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";

const ImageList = ({ demos }: any) => {
  const controls = useAnimation();

  const imageWidth = 300; // Fixed width for each image
  const imageHeight = 200; // Fixed height for each image
  const spacing = 20; // Spacing between images
  useEffect(() => {
    const totalImages = demos.length;
    const totalPathLength = (imageWidth + spacing) * totalImages;

    controls.start({
      x: -totalPathLength,
      transition: {
        repeat: Infinity,
        duration: 4 * totalImages, // Adjusted duration for one extra set
        ease: "linear",
        onRepeat: () => {
          // Instantly reset to start when the first set finishes scrolling
          controls.set({ x: 0 });
        },
      },
    });
  }, [controls, demos.length, imageWidth, spacing]);

  return (
    <div
      className="z-10 py-16"
      style={{ overflow: "hidden", display: "flex", width: "100vw" }}
    >
      <motion.div style={{ display: "flex" }} animate={controls}>
        {/* Duplicate the images for a seamless loop */}
        {[...demos, ...demos].map((demo, index) => (
          <div
            key={index}
            style={{
              marginRight: `${spacing}px`,
              width: `${imageWidth + 4}px`,
              flexShrink: 0,
              marginTop: "-48px",
            }}
            className="border-dashed border-2 border-slate-500"
          >
            <div
              style={{
                position: "relative",
                width: `${imageWidth}px`,
                height: `${imageHeight}px`,
                overflow: "hidden",
              }}
            >
              <Image
                src={demo.image}
                alt="Logo"
                fill
                style={{ objectFit: "cover" }}
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNsrmyuBwAFBgIAtrCyWgAAAABJRU5ErkJggg=="
                priority
              />
            </div>
            <div className="p-4 flex justify-center h-full w-full">
              <p className="text-xs text-center">{demo.oneLiner}</p>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default ImageList;
