import React from 'react';
import { BlogData } from '../data/BlogData';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { NavLink } from 'react-router-dom';
import styled from "styled-components";
import FloatingActionButton from './FloatingActionButton';

const IndividualBlog = () => {


    const { id } = useParams();
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        let blog = BlogData.find((blog) => {
            return(
                blog.Id === parseInt(id)
            )
        } ,[])
        setBlogs(blog);
    });

    return (
        <Box>
        <NavlinkStyled>
            <NavLink className='blog-backlink' to='/blog'>
            <span><FloatingActionButton /></span>
            </NavLink>
        </NavlinkStyled>

          <BlogStyled>
            <header>
              <h1>{blogs.title}</h1>
              <p className='blog-date'>{blogs.date}</p>
            </header>

            <img src={blogs.coverImage} alt='cover' />

            <p className='blog-description'>{blogs.description}</p>
          </BlogStyled>
      </Box>
    )
}

const Box = styled.div`
background: var(--individualblog-primary-box);
width: 100vw;
position: relative;
`;

const BlogStyled = styled.div`
    max-width: 700px;
    margin: 0 auto;

    header{
        text-align:center;
        color: var(--individualblog-primary-color);
        padding-top:1rem;

    }

    .blog-date {
    font-size: 0.9rem;
    color: var(--individualblog-primary-color);
    font-weight: 600;
    }

    .blog-description {
    padding: 1rem;
    margin-top: 1.5rem;
    font-weight: 600;
    color: var(--individualblog-primary-color);
    white-space: pre-wrap;
    }

    img{
        width:100%;
    }

`;
const NavlinkStyled = styled.div`

    span {
    text-decoration: none;
    font-size: 2rem;
    font-weight: 500;
    padding:1rem;
    position:fixed;
    color:var(--primary-color);
    }
`;

export default IndividualBlog; 
