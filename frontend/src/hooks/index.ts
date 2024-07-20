import { useEffect, useState } from "react"
import { BACKEND_URL } from "../config";
import axios from "axios";
import { useRecoilState } from "recoil";
import blogsAtom from "../atoms/blogsAtom";



export interface Blog {
      content: string,
      title: string,
      id: string,
      author: {
        name: string
      }
      publishedAt: string
}



export const useBlogs = () => {

    const [loading, setLoading] = useState(true);
    const [blogs, setBlogs] = useRecoilState<Blog[]>(blogsAtom);

     const fetchBlogs = async () => {
        const res = await axios.get(`${BACKEND_URL}/api/v1/blog/bulk`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }
        });
        setBlogs(res.data.blogs);
        setLoading(false);
    }   

    useEffect(() => {
       
        if(blogs.length === 0) {
            fetchBlogs();
        }
        else {
            setLoading(false);
        }
    }, [])

    return {
        loading,
        blogs
    }
}
export const useBlog = ({id} : {id : string}) => {
    const [loading, setLoading] = useState(true);
    const [blog, setBlog] = useState<Blog>();

    useEffect(() => {
        const fetchBlogs = async () => {
            setLoading(true);
            const res = await axios.get(`${BACKEND_URL}/api/v1/blog/${id}`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`
                }
            });
            setBlog(res.data.blog);
            setLoading(false);
        }   
        fetchBlogs();
    }, [])

    return {
        loading,
        blog
    }
}