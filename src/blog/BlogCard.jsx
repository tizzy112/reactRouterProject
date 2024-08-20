/* eslint-disable react/prop-types */
import React from "react";
import styled from "styled-components";
import { blogPosts } from "../utils/mockData";
const Wrapper = styled.div`
  border: 1px solid #e1e1e1;
  border-radius: 8px;
  padding: 24px;
  height: 400px;
  display: flex;
  flex-direction: column;
  cursor: pointer;

  .blogPicture {
    height: 60%;
    width: 100%;
    border-radius: 8px 8px 0 0;

    img {
      height: 100%;
      width: 100%;
      border-radius: 8px 8px 0 0;
      object-fit: cover;
    }
  }
  .content {
    padding: 16px;
    display: flex;
    flex-direction: column;
    gap: 8px;

    .contentItem {
      display: flex;
      gap: 8px;

      .contentTitle {
        font-size: 20px;
        font-weight: 500;
        font-style: italic;
      }
      .contentSlug {
        font-size: 20px;
        font-weight: 500;
        font-style: italic;
      }
    }
  }
`;

const BlogCard = ({ post }) => {
  return (
    <Wrapper>
      <div className="blogPicture">
        <img src={post?.picture} alt="" />
      </div>
      <div className="blogContent">
        <div className="contentItem">
          <p className="contentTitle">{post?.title}</p>
        </div>
        <div className="contentItem">
          <p className="contentSlug">{post?.slug}</p>
        </div>
        <div className="contentItem">
          <p className="contentText">{post?.content.substring(0, 200)}</p>
        </div>
      </div>
    </Wrapper>
  );
};

export default BlogCard;
