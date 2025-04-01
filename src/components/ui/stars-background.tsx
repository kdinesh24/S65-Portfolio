"use client";
import { cn } from "@/lib/utils";
import React, { useState, useEffect, useRef, useCallback } from "react";

interface StarProps {
    x: number;
    y: number;
    radius: number;
    opacity: number;
    twinkleSpeed: number | null;
}

interface StarBackgroundProps {
    starDensity?: number;
    allStarsTwinkle?: boolean;
    twinkleProbability?: number;
    minTwinkleSpeed?: number;
    maxTwinkleSpeed?: number;
    className?: string;
}

export const StarsBackground: React.FC<StarBackgroundProps> = ({
    starDensity = 0.00015,
    allStarsTwinkle = true,
    twinkleProbability = 0.7,
    minTwinkleSpeed = 0.5,
    maxTwinkleSpeed = 1,
    className,
}) => {
    const [stars, setStars] = useState<StarProps[]>([]);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const starsRef = useRef<StarProps[]>([]);
    const requestRef = useRef<number | undefined>(undefined);

    const generateStars = useCallback(
        (width: number, height: number): StarProps[] => {
            const area = width * height;
            const numStars = Math.floor(area * starDensity);
            return Array.from({ length: numStars }, () => {
                const shouldTwinkle =
                    allStarsTwinkle || Math.random() < twinkleProbability;
                return {
                    x: Math.random() * width,
                    y: Math.random() * height,
                    radius: Math.random() * 0.05 + 0.5,
                    opacity: Math.random() * 0.5 + 0.5,
                    twinkleSpeed: shouldTwinkle
                        ? minTwinkleSpeed +
                          Math.random() * (maxTwinkleSpeed - minTwinkleSpeed)
                        : null,
                };
            });
        },
        [
            starDensity,
            allStarsTwinkle,
            twinkleProbability,
            minTwinkleSpeed,
            maxTwinkleSpeed,
        ]
    );

    useEffect(() => {
        const updateStars = () => {
            if (canvasRef.current) {
                const canvas = canvasRef.current;
                const ctx = canvas.getContext("2d");
                if (!ctx) return;

                const { width, height } = canvas.getBoundingClientRect();
                canvas.width = width;
                canvas.height = height;
                setStars(generateStars(width, height));
            }
        };

        updateStars();

        const resizeObserver = new ResizeObserver(updateStars);
        if (canvasRef.current) {
            resizeObserver.observe(canvasRef.current);
        }

        return () => {
            if (canvasRef.current) {
                resizeObserver.unobserve(canvasRef.current);
            }
        };
    }, [
        starDensity,
        allStarsTwinkle,
        twinkleProbability,
        minTwinkleSpeed,
        maxTwinkleSpeed,
        generateStars,
    ]);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let animationFrameId = 0;

        const render = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            stars.forEach((star) => {
                ctx.beginPath();
                ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
                ctx.fill();

                if (star.twinkleSpeed !== null) {
                    star.opacity =
                        0.5 +
                        Math.abs(
                            Math.sin((Date.now() * 0.001) / star.twinkleSpeed) *
                                0.5
                        );
                }
            });

            animationFrameId = requestAnimationFrame(render);
        };

        render();

        return () => {
            if (animationFrameId) {
                cancelAnimationFrame(animationFrameId);
            }
        };
    }, [stars]);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let w = window.innerWidth;
        let h = window.innerHeight;
        canvas.width = w;
        canvas.height = h;

        const numStars = Math.floor(w * h * starDensity);
        starsRef.current = [];
        for (let i = 0; i < numStars; i++) {
            starsRef.current.push({
                x: Math.random() * w - w / 2,
                y: Math.random() * h - h / 2,
                radius: Math.random() * 0.05 + 0.5,
                opacity: Math.random() * 0.5 + 0.5,
                twinkleSpeed: null,
            });
        }

        // Store current request ID to avoid closure issues
        let animationFrameId: number | undefined;

        const draw = () => {
            // Use the canvas reference from closure to avoid stale refs
            const currentCanvas = canvas;
            const currentCtx = ctx;

            if (!currentCanvas || !currentCtx) return;

            currentCtx.fillStyle = "black";
            currentCtx.fillRect(0, 0, w, h);
            currentCtx.save();
            currentCtx.translate(w / 2, h / 2);

            starsRef.current.forEach((star) => {
                star.x -= 0.2; // Speed of stars moving towards the viewer
                if (star.x <= -w / 2) {
                    star.x = w / 2;
                }

                const k = w / star.x;
                const px = star.x * k + w / 2;
                const py = star.y * k + h / 2;

                if (px >= 0 && px < w && py >= 0 && py < h) {
                    const size = (1 - star.x / w) * 5;
                    const shade = parseInt(((1 - star.x / w) * 255).toString());
                    currentCtx.fillStyle = `rgb(${shade}, ${shade}, ${shade})`;
                    currentCtx.beginPath();
                    currentCtx.arc(
                        px - w / 2,
                        py - h / 2,
                        size / 2,
                        0,
                        Math.PI * 2
                    );
                    currentCtx.fill();
                }
            });

            currentCtx.restore();
            animationFrameId = requestAnimationFrame(draw);
            requestRef.current = animationFrameId;
        };

        draw();

        const handleResize = () => {
            w = window.innerWidth;
            h = window.innerHeight;
            if (canvas) {
                canvas.width = w;
                canvas.height = h;
                const newNumStars = Math.floor(w * h * starDensity);
                starsRef.current = [];
                for (let i = 0; i < newNumStars; i++) {
                    starsRef.current.push({
                        x: Math.random() * w - w / 2,
                        y: Math.random() * h - h / 2,
                        radius: Math.random() * 0.05 + 0.5,
                        opacity: Math.random() * 0.5 + 0.5,
                        twinkleSpeed: null,
                    });
                }
            }
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
            if (animationFrameId) {
                cancelAnimationFrame(animationFrameId);
            }
        };
    }, [starDensity]); // Keep dependency on starDensity as it affects initialization

    return (
        <canvas
            ref={canvasRef}
            className={cn("fixed top-0 left-0 w-full h-full", className)}
            style={{ zIndex: -2 }}
        />
    );
};
