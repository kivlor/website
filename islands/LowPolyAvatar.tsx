import { asset } from "$fresh/runtime.ts";
import { useEffect, useRef, useState } from "preact/hooks";

export default function LowPolyAvatar() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [useImageFallback, setUseImageFallback] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || useImageFallback) return;

    try {
      const ctx = canvas.getContext("2d");
      if (!ctx) {
        setUseImageFallback(true);
        return;
      }

      // Set canvas dimensions
      const size = window.innerWidth < 768 ? 128 : 160; // Match w-32/w-40
      canvas.width = size;
      canvas.height = size;

      // Create low poly bald man with beard
      renderBaldMan(ctx, size);
    } catch (error) {
      console.error("Error rendering low-poly avatar:", error);
      setUseImageFallback(true);
    }
  }, [useImageFallback]);

  // Function to render low-poly bald man with beard
  const renderBaldMan = (ctx: CanvasRenderingContext2D, size: number) => {
    // Create a circular mask
    ctx.beginPath();
    ctx.arc(size / 2, size / 2, size / 2, 0, Math.PI * 2);
    ctx.clip();

    const centerX = size / 2;
    const centerY = size / 2;

    // Background/face color
    ctx.fillStyle = "#F1C27D"; // Skin tone
    ctx.fillRect(0, 0, size, size);

    // Head shape (more defined head)
    ctx.beginPath();
    ctx.fillStyle = "#E0AC69"; // Slightly darker skin tone for shading
    ctx.moveTo(centerX - size * 0.4, centerY);
    ctx.lineTo(centerX - size * 0.3, centerY - size * 0.4);
    ctx.lineTo(centerX + size * 0.3, centerY - size * 0.4);
    ctx.lineTo(centerX + size * 0.4, centerY);
    ctx.lineTo(centerX + size * 0.35, centerY + size * 0.3);
    ctx.lineTo(centerX - size * 0.35, centerY + size * 0.3);
    ctx.closePath();
    ctx.fill();

    // Beard (dark triangular sections)
    const beardColors = [
      "#5D4037", // Brown 700
      "#4E342E", // Brown 800
      "#3E2723", // Brown 900
    ];

    // Sides of beard
    for (let i = 0; i < 8; i++) {
      ctx.beginPath();
      ctx.fillStyle =
        beardColors[Math.floor(Math.random() * beardColors.length)];

      const yPos = centerY + size * 0.1 + (i * size * 0.05);
      const width = Math.min(size * 0.35, size * (0.2 + i * 0.03));

      ctx.moveTo(centerX - width, yPos);
      ctx.lineTo(centerX, yPos + size * 0.1);
      ctx.lineTo(centerX + width, yPos);
      ctx.closePath();
      ctx.fill();
    }

    // Mustache
    ctx.beginPath();
    ctx.fillStyle = beardColors[1];
    ctx.moveTo(centerX - size * 0.2, centerY + size * 0.05);
    ctx.lineTo(centerX, centerY + size * 0.15);
    ctx.lineTo(centerX + size * 0.2, centerY + size * 0.05);
    ctx.closePath();
    ctx.fill();

    // Eyes (simple shapes)
    const eyeSize = size * 0.05;
    const eyeY = centerY - size * 0.1;
    const eyeDistance = size * 0.15;

    // Left eye
    ctx.beginPath();
    ctx.fillStyle = "#3E2723"; // Dark brown
    ctx.moveTo(centerX - eyeDistance - eyeSize, eyeY);
    ctx.lineTo(centerX - eyeDistance, eyeY - eyeSize);
    ctx.lineTo(centerX - eyeDistance + eyeSize, eyeY);
    ctx.closePath();
    ctx.fill();

    // Right eye
    ctx.beginPath();
    ctx.fillStyle = "#3E2723"; // Dark brown
    ctx.moveTo(centerX + eyeDistance - eyeSize, eyeY);
    ctx.lineTo(centerX + eyeDistance, eyeY - eyeSize);
    ctx.lineTo(centerX + eyeDistance + eyeSize, eyeY);
    ctx.closePath();
    ctx.fill();

    // Bald head shine (highlight on top)
    ctx.beginPath();
    ctx.fillStyle = "#F8D9A7"; // Lighter skin tone for highlight
    ctx.moveTo(centerX - size * 0.1, centerY - size * 0.3);
    ctx.lineTo(centerX, centerY - size * 0.4);
    ctx.lineTo(centerX + size * 0.1, centerY - size * 0.3);
    ctx.closePath();
    ctx.fill();
  };

  return (
    <div class="pt-12 pb-8">
      <figure class="m-auto w-32 md:w-40 h-32 md:h-40 bg-gray-300 dark:bg-gray-700 rounded-full overflow-hidden">
        {!useImageFallback
          ? (
            <canvas
              ref={canvasRef}
              class="w-full h-full"
              onError={() => setUseImageFallback(true)}
            />
          )
          : (
            <img
              src={asset("/avatar.png")}
              alt="Kivlor"
              class="w-full h-full"
            />
          )}
      </figure>
    </div>
  );
}
