import API from "../../../services/api";
import markdownToHtml from "../../../utils/markdownToHtml";


export default async function Page({ params }: { params: { id: string } }) {
	const blog = await API.getBlog(params.id);


	const html = await markdownToHtml(blog.content);


	return (
		<div>
			<h2 className="text-2xl mb-10"> {blog.title} </h2>
			<div className="math math-display">
				<span className="text-left indent-4 katex-display">
					<div
						dangerouslySetInnerHTML={{ __html: html }}
					/>
				</span>
			</div>
		</div>
	)
}
