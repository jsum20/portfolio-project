import React from 'react';
import styled from "styled-components";
import { NavLink } from 'react-router-dom';

const BlogItem = ({ Id, title, description, name, avatar, image, date }) => {
    return (
        <BlogStyled>

            <NavLink className='blogItem-link' to={`/blog/${Id}`} >
            <img className='blogItem-cover' src={image} alt='cover' />
            </NavLink>
            <h3>{title}</h3>
            <p className='blogItem-desc'>{description}</p>
            <footer>
                <div className='blogItem-author'>
                    <img src={avatar} alt='avatar' />
                    <div>
                        <h6>{name}</h6>
                        <p>{date}</p>
                    </div>
                </div>
                <NavLink className='blogItem-link' to={`/blog/${Id}`} >
                    ➝
                </NavLink>
            </footer>
        </BlogStyled>

    )
}

const BlogStyled = styled.div`
    display:flex;
    flex-direction:column;
    padding-left:1rem;
    padding-right:1rem;

    .blogItem-cover {
    width: 100%;
    height: 250px;
    object-fit: cover;
    border-radius: 20px;
    margin-bottom: 0.5rem;
    }

    h3 {
    margin: 0.5rem 0 1rem 0;
    flex: 1;
    color:var(--blog-primary-color);
    }

    h6{
        color:var(--blog-primary-color);
    }

    .blogItem-desc {
    position: relative;
    max-height: 50px;
    overflow: hidden;
    padding-right: 0.6rem;
    font-size: 0.8rem;
    color: var(--blog-primary-color);
    }

    .blogItem-desc::before {
    position: absolute;
    content: '...';
    bottom: 0;
    right: 0;
    }

    footer {
        display: flex;
        align-items: center;
        margin-top: 1rem;
        justify-content: space-between;
    }

    .blogItem-link {
    text-decoration: none;
    color: var(--blog-primary-color);
    }

    .blogItem-author {
    display: flex;
    align-items: center;
    

    img{
        width: 40px;
        height: 40px;
        border-radius: 50%;
        object-fit: cover;
        margin-right: 0.5rem;
    }

    }

    p{
        font-size: 0.6rem;
        color: var(--blog-primary-color);
        font-weight: 600;
    }
`;


export default BlogItem;
