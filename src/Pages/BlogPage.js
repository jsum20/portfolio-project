import React, { useState } from 'react';
import BlogList from '../Components/BlogList';
import { BlogData } from '../data/BlogData';
import styled from "styled-components";
import BigTitle from '../Components/BigTitle';

const BlogPage = () => {

    const[blogs, setBlogs] = useState(BlogData);

    return (
        <Box>
        <BigTitle text="My Writing" />
        <BlogList blogs={blogs}/>

        </Box>
    )
}

const Box = styled.div`
background: var(--blog-primary-box);
width: 100vw;
height:100vh;
position: relative;
`;



export default BlogPage;
