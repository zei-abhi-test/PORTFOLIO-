"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

type MotionSectionProps = HTMLMotionProps<"section">;

export function MotionSection({ className, children, ...props }: MotionSectionProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-120px" }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className={cn("py-20 md:py-28", className)}
      {...props}
    >
      {children}
    </motion.section>
  );
}
