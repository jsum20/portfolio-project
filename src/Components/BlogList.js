import React from 'react';
import BlogItem from './BlogItem';
import styled from "styled-components";

const BlogList = ({blogs}) => {
    return (
        <BlogListStyled>
            {blogs.map((blog) => {
                return(
                    <BlogItem 
                    Id={blog.Id}  
                    title={blog.title} 
                    description={blog.description}
                    name={blog.authorName}
                    avatar={blog.authorAvatar}
                    image={blog.coverImage}
                    date={blog.date}
                    />
                )

            })}

        </BlogListStyled>
    )
}

const BlogListStyled = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 3rem;

    @media (max-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 600px) {
        grid-template-columns: repeat(1, 1fr);
    }
`;

export default BlogList;
