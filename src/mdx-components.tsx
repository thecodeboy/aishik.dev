import type { MDXComponents } from 'mdx/types'
import Article from './app/components/Article'
 
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    wrapper: Article
  }
}
