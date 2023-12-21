import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";

const ImageList = () => {
  const controls = useAnimation();

  const images = [
    "/ship.png",
    "/ship.png",
    "/ship.png",
    "/ship.png",
    "/ship.png",
    "/ship.png",
  ];

  const imageWidth = 300; // Fixed width for each image
  const spacing = 20; // Spacing between images
  const totalImagesWidth = (imageWidth + spacing) * images.length;
  useEffect(() => {
    const totalImages = images.length;
    const totalPathLength = (imageWidth + spacing) * totalImages;

    controls.start({
      x: -totalPathLength,
      transition: {
        repeat: Infinity,
        duration: 2 * totalImages, // Adjusted duration for one extra set
        ease: "linear",
        onRepeat: () => {
          // Instantly reset to start when the first set finishes scrolling
          controls.set({ x: 0 });
        },
      },
    });
  }, [controls, images.length, imageWidth, spacing]);

  return (
    <div
      className="z-10 py-16"
      style={{ overflow: "hidden", display: "flex", width: "100vw" }}
    >
      <motion.div style={{ display: "flex" }} animate={controls}>
        {/* Duplicate the images for a seamless loop */}
        {[...images, ...images].map((src, index) => (
          <div
            key={index}
            style={{
              marginRight: `${spacing}px`,
              width: `${imageWidth}px`,
              flexShrink: 0,
              marginTop: "-48px",
            }}
            className="border-dashed border-2 border-slate-500"
          >
            <Image
              src={src}
              alt={`Image ${index}`}
              width={imageWidth}
              height={imageWidth}
              layout="fixed"
              priority
            />
            <div className="p-4">
              <p className="text-xs">
                Designed Guide on how to transform apps using AI/ML powered
                frameworks.
              </p>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default ImageList;
