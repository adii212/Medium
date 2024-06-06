import { Link } from "react-router-dom"

interface BlogCardProps {
    authorName: string,
    title: string,
    content: string,
    publishedDate: string,
    id: number;
}

export const BlogCard = ({
    id,
    authorName,
    title,
    content,
    publishedDate
}: BlogCardProps) => {
    return <Link to={`/blog/${id}`}>
        <div className="border-b-2 border-slate-200 pb-4 w-screen max-w-screen-md cursor-pointer">
                <div className="flex">
                    <div className="flex justify-center flex-col pt-4">
                        <Avatar name={authorName} />
                    </div>
                    <div className="font-extralight pl-2 text-sm flex justify-center flex-col pt-4">
                        {authorName}
                    </div>
                    <div className="flex justify-center flex-col pl-3 pt-4">
                        <Circle />
                    </div>
                    <div className="pl-2 font-thin text-slate-400 text-sm flex justify-center flex-col pt-4">
                        {publishedDate}
                    </div>
                </div>
                <div className="text-xl font-semibold pt-2">
                    {title}
                </div>
                <div className="text-md font-thin">
                    {content.length > 100 ? content.slice(0, 100) + "..." : content}
                </div>
                <div className="text-slate-500 text-sm font-thin pt-2">
                    {`${Math.ceil(content.length / 100)} minute(s) read`}
                </div>
        </div>
    </Link>
}

function Circle() {
    return <div className="h-1 w-1 rounded-full bg-slate-500">

    </div>
}

export function Avatar({name}: {name: string}) {
    return <div className={"relative inline-flex items-center justify-center w-8 h-8 overflow-hidden bg-gray-300 rounded-full dark:bg-gray-600"}>
        <span className="text-xs text-gray-600 dark:text-gray-300">{name[0]}</span>
    </div>
}