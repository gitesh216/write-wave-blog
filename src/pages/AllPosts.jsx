import React, {useState, useEffect} from 'react'
import { Container, PostCard } from '../components'
import appwriteService from "../appwrite/config";

function AllPosts() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        appwriteService.getPosts([])
        .then((posts) => {
            if (posts) {
                setPosts(posts.documents)
            }
        })
        .catch((error) => {
            console.error("Failed to fetch AllPosts: ", error);
        })
    }, []);

  return (
    <div className='w-full py-8'>
        <Container>
            <div className='flex flex-wrap'>
                {Array.isArray(posts) && posts.map((post) => (
                    <div key={post.$id} className='p-2 w-full sm:w-1/2 lg:w-1/4'>
                        <PostCard {...post} />
                        {/* <PostCard id={post.$id} title={post.title} content={post.content} /> */}
                        
                        {/* {posts.length === 0 && <p>No posts available.</p>} */}

                    </div>
                ))}
            </div>
        </Container>
    </div>
  )
}

export default AllPosts