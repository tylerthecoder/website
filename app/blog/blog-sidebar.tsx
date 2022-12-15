import Link from "next/link";
import { use } from "react";
import API from "../../services/api";


export default function BlogSidebar() {
	const data = use(API.getAllBlogs());

	return <div className="border-r-4 border-black m-r-4 h-auto min-w-[250px] flex flex-col gap-2">
		{data.map((blog) => (
			<div className="px-5 " key={blog.id}>
				<Link href="/blog/[id]" as={`/blog/${blog.id}`}>
					<b>{blog.title}</b>
				</Link>
			</div>
		))}
	</div>
}