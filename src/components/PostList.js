import React from 'react'
import { ThemeProvider } from 'styled-components'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import CardList from './CardList'
import Card from './Card'
import theme from '../styles/theme'
import Container from './Container'

export default class IndexPage extends React.Component {
  render() {
    const { posts } = this.props

    return (
      <section className="section">
        <ThemeProvider theme={theme}>
          <Container>
            <CardList>
              {posts.map(({ node: post }) => (
                <Card key={post.id} {...post} />
              ))}
            </CardList>
          </Container>
        </ThemeProvider>
      </section>
    )
  }
}

IndexPage.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string,
}

export const pageQuery = graphql`
  fragment PostListFields on wordpress__POST {
    id
    title
    excerpt
    author {
      name
      slug
      avatar_urls {
        wordpress_48
      }
    }
    date(formatString: "MMMM DD, YYYY")
    slug
    featured_media {
      source_url
      localFile {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`
