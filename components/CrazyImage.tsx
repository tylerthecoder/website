import Image from "next/image";

type Props = {
	src: StaticImageData;
	alt: string;
	width: number;
	height: number;
}

export const CrazyImage = (props: Props) => {
	const { src, alt, width, height } = props;

	return <div className="flex justify-center">
		<div className="absolute">
			<Image
				src={src}
				alt={alt + " inverted"}
				className="filter invert"
				width={width}
				height={height}
			/>
		</div>
		<div style={{ width: width + "px" }}>
			<div
				style={{ animationName: "imageSlider", animationDuration: "2s", height: height + "px" }}
				className="overflow-x-hidden relative"
			>
				<Image
					src={src}
					alt={alt}
					layout="fill"
					objectFit='cover'
					objectPosition='0% 0%'
				/>
			</div>
		</div>
	</div>
}

