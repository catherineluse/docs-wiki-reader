import React, {useState} from 'react'
import { Root, Routes, addPrefetchExcludes } from 'react-static'
import { useMarkdownTree } from 'react-static-plugin-md-pages'
import { Switch, Route, Link, BrowserRouter as Router, useHistory } from 'react-router-dom'
import { withRouter } from 'react-router-dom';


// Any routes that start with 'dynamic' will be treated as non-static routes
addPrefetchExcludes(['dynamic']);

const sortPages = (pages) => {
  return pages.sort((a, b) => {
    return a.frontmatter.weight - b.frontmatter.weight;
  })
}

const recursivelyGenerateSecondaryNavOptions = (pages, pathname) => {
  if (pages.length > 0) {
    const sortedPages = sortPages(pages)

    return sortedPages.map((page) => {
      const {key} = page;

      return (
        <div key={key} className="sideNavItem secondaryNav">
            <NavItem page={page} currentPath={pathname}/>
        </div>
      )
    })
  }
}

// const renderHeaderLinks = (headings) => {
//    return headings.map(heading => {
//       const { value, slug, depth } = heading;

//       return (
//         <div key={slug}>
//           <Link to={`/#${slug}`}>{value}
//           </Link>
//         </div>
//       )
//    })
// }


const NavItem = ({page, currentPath, parentBreadcrumbs}) => {
  if (!page || page.originalPath === undefined){
    return null;
  }
  const {
    frontmatter,
    children,
    path,
    originalPath,
    key,
    headings
  } = page;
  
  const { shortTitle, title } = frontmatter;

  // The link hould visually indicate if we are already
  // on this page.
  // We ignore "index."
  const coreOfOriginalPath = "/" + originalPath.split("/index").join("")
  const firstPartOfCurrentPath = currentPath.slice(0, coreOfOriginalPath.length)

  const linkIsActive = () => {
    if (coreOfOriginalPath === firstPartOfCurrentPath){
      return true;
    }
    return false;
  }

  const isInBreadCrumb = () => {
    return firstPartOfCurrentPath.indexOf(coreOfOriginalPath) === 0;
  }
  const active = linkIsActive();
  const breadcrumb = isInBreadCrumb();

  return (
    <div key={key}>
      <div className={`sideNavItem ${active ? "active" : ""} ${breadcrumb ? "breadcrumb" : ""}`}>
        <Link to={`/${path}`}>{shortTitle ? shortTitle : title}</Link>
      </div>
      {/* <ul>{headings.length > 0 ? renderHeaderLinks(headings) : null}</ul> */}
      {active && children.length > 0 ? recursivelyGenerateSecondaryNavOptions(children, currentPath) : null}
    </div>
  )
}
 
const generateSideNav = (tree, pathname) => {
  const topPages = tree.children;

  if (topPages.length > 0) {
    const sortedTopPages = sortPages(topPages)

    return sortedTopPages.map((page) => {
      const originalPath = page.originalPath;

      return (
        <div key={originalPath}>
          <NavItem 
            page={page} 
            currentPath={pathname}
          />
        </div>
        
      )
    })
  }
}

const Content = (props) => {
  let tree = useMarkdownTree()
  const pathname = props.location.pathname;

  return (
    <>
      <div className="menu">
        {tree ? generateSideNav(tree, pathname) : null}
      </div>
      <div className="content container">
        <React.Suspense fallback={<em>Loading...</em>}>
          <Switch>
            <Route render={() => <Routes />} />
          </Switch>
        </React.Suspense>
      </div>
    </>
  )
}

const ContentInRouter = withRouter(Content)

const TopNav = () => {
  return (
    <div className="topnav">
    </div>
  )
}


const App= props => {

  let history = useHistory();

  return (
    <Root>
      <Router history={history}>
        <TopNav/>
        <ContentInRouter/>
      </Router>
    </Root>
  )
}
export default App;