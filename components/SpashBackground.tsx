import { useEffect, useRef } from "react";

type Vector = { x: number, y: number };
const maxY = Math.sqrt(3) / 2;
const points: Array<{ x: number, y: number }> = [{ x: 0, y: 0 }];

function drawCircle(ctx: CanvasRenderingContext2D, pos: Vector, radius: number, color: string) {
	ctx.beginPath();
	ctx.arc(pos.x, pos.y, radius, 0, 2 * Math.PI);
	ctx.fillStyle = color;
	ctx.fill();
}

const getNextPoint = (currentPoint: Vector): Vector => {
	const c = Math.floor(Math.random() * 3);
	if (c == 0) {
		return {
			x: .5 * currentPoint.x,
			y: .5 * currentPoint.y
		}
	} else if (c == 1) {
		return {
			x: .5 * currentPoint.x + 0.25,
			y: .5 * currentPoint.y + Math.sqrt(3) / 4,
		}
	} else if (c == 2) {
		return {
			x: .5 * currentPoint.x + 0.5,
			y: .5 * currentPoint.y,
		}
	}
	throw new Error("Invalid c");
}

const drawPoint = (canvas: HTMLCanvasElement, point: Vector) => {
	const pos = {
		x: point.x * canvas.width,
		y: canvas.height - (point.y * canvas.height * (1 / maxY))
	}
	const ctx = canvas.getContext("2d");
	if (!ctx) return;
	drawCircle(ctx, pos, 1.3, "red");
}

const drawAll = (canvas: HTMLCanvasElement) => {
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	const ctx = canvas.getContext("2d");
	if (!ctx) return;

	ctx.fillStyle = "black";
	ctx.fillRect(0, 0, canvas.width, canvas.height);
	for (const point of points) {
		drawPoint(canvas, point);
	}
}

const drawNext = (canvas: HTMLCanvasElement) => {
	const lastPoint = points[points.length - 1];
	const nextPoint = getNextPoint(lastPoint);
	points.push(nextPoint);
	drawPoint(canvas, nextPoint);
}

const loop = (canvas: HTMLCanvasElement) => {
	for (let i = 0; i < 10; i++) {
		drawNext(canvas);
	}
}


export const SplashBackground = () => {
	const canvasRef = useRef<HTMLCanvasElement>(null);

	useEffect(() => {
		const canvas = canvasRef.current;
		if (!canvas) return;
		const rafIndex = requestAnimationFrame(() => loop(canvas));
		return () => cancelAnimationFrame(rafIndex);
	});

	useEffect(() => {
		const listener = () => {
			const canvas = canvasRef.current;
			if (!canvas) return;
			drawAll(canvas);
		}

		window.addEventListener("resize", listener);
		return () => window.removeEventListener("resize", listener);
	});

	useEffect(() => {
		const canvas = canvasRef.current;
		if (!canvas) return;
		drawAll(canvas);
	})

	return <canvas ref={canvasRef}></canvas>
}
