import React, {type ReactNode} from 'react';
import clsx from 'clsx';
import {blogPostContainerID} from '@docusaurus/utils-common';
import {useBlogPost} from '@docusaurus/plugin-content-blog/client';
import MDXContent from '@theme/MDXContent';
import type {Props} from '@theme/BlogPostItem/Content';
import Giscus from '@giscus/react';
import { useColorMode } from '@docusaurus/theme-common';
import { useLocation } from '@docusaurus/router';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function BlogPostItemContent({
  children,
  className,
}: Props): ReactNode {
  const {isBlogPostPage} = useBlogPost();
  const {colorMode} = useColorMode();
  const {siteConfig} = useDocusaurusContext();
  const forbiddenGiscusBlogPaths: string[] = (siteConfig.customFields.forbiddenGiscusBlogPaths ?? []) as string[];
  const location = useLocation();
  const giscus = (
    <React.Fragment>
      <hr />
      <br></br>
      <Giscus    
          id="comments"
          repo="IAmKelDev/iamkeldev.github.io"
          repoId="R_kgDOOJt9fA"
          category="Site Comments"
          categoryId="DIC_kwDOOJt9fM4CqL2c"
          mapping="url"
          term="Welcome to @giscus/react component!"
          strict="0"
          reactionsEnabled="1"
          emitMetadata="1"
          inputPosition="top"
          theme={colorMode}
          lang="en"
          loading="lazy"
        />
    </React.Fragment>
  )
  return (
    <div
      // This ID is used for the feed generation to locate the main content
      id={isBlogPostPage ? blogPostContainerID : undefined}
      className={clsx('markdown', className)}>
      <MDXContent>
        {children}
        {isBlogPostPage && !forbiddenGiscusBlogPaths.includes(location.pathname) &&  giscus}
      </MDXContent>
    </div>
  );
}
