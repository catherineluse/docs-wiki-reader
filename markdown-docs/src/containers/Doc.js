import React from 'react'
import { useMarkdownPage } from 'react-static-plugin-md-pages'
import { Link } from 'react-router-dom'
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTopOnMount = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

const Doc = ({children}) => {

  const page = useMarkdownPage()

  const title = page.frontmatter.title;
  const path = page.path;
  console.log(page)



  return (
    <div>
      <ScrollToTopOnMount/>
      <h1>{title}</h1>
      {children}
    </div>
  )
}

export default Doc;