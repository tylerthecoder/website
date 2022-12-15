import BlogSidebar from "./blog-sidebar"


export default function BlogLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<div className="flex h-full">
			<BlogSidebar />
			<div className="p-5">
				{children}
			</div>
		</div>
	)
}