import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

const Post = styled.li`
  position: relative;
  border: 1px solid ${props => props.theme.colors.secondary};
  border-radius: 2px;
  margin: 0 0 1em 0;
  width: 100%;
  transition: background 0.2s;
  @media screen and (min-width: ${props => props.theme.responsive.small}) {
    flex: ${props => (props.featured ? '0 0 100%' : '0 0 49%')};
    margin: 0 0 2vw 0;
  }
  @media screen and (min-width: ${props => props.theme.responsive.medium}) {
    flex: ${props => (props.featured ? '0 0 100%' : '0 0 32%')};
  }
  &:hover {
    background: ${props => props.theme.colors.tertiary};
  }
  a {
    display: flex;
    flex-flow: column;
    height: 100%;
    width: 100%;
    color: ${props => props.theme.colors.base};
    text-decoration: none;
    .gatsby-image-wrapper {
      height: 0;
      padding-bottom: 60%;
      @media screen and (min-width: ${props => props.theme.responsive.small}) {
        padding-bottom: ${props => (props.featured ? '40%' : '60%')};
      }
    }
  }
`

const Title = styled.h2`
  font-size: 1.1em;
  font-weight: 100;
  text-transform: capitalize;
  margin: 0.8rem 0.8rem 0.5rem 0.8rem;
`

const Date = styled.h3`
  margin: 0 1rem 1rem 1rem;
  color: gray;
`

// const Excerpt = styled.p`
//   margin: 0 1rem 1rem 1rem;
//   line-height: 1.6;
// `


const Excerpt = styled.div`
  margin: 0 0.8rem 0.5rem 0.8rem;
  line-height: 1.5;
  font-size: 0.9em;
`

const StyledImg = styled(Img)`
  border-top-left-radius: 1px;
  border-top-right-radius: 1px;
`

const extract = (excerpt) => `${ excerpt.substring(0, 70)}...`;

const Card = ({ slug, featured_media, title, date, excerpt, ...props }) => {
  return (
    <Post featured={props.featured}>
      <Link to={`/${slug}/`}>
        {featured_media ? <StyledImg fluid={featured_media.localFile.childImageSharp.fluid} backgroundColor={'#eeeeee'} /> :
        <img src="http://placehold.jp/24/f3f3f3/696969/300x190.png?text=Keep Reading" />}
        <Title>{title}</Title>
        <Date>{date}</Date>
        <Excerpt>
          <div
            dangerouslySetInnerHTML={{
              __html: extract(excerpt),
            }}
          ></div>
        </Excerpt>
      </Link>
    </Post>
  )
}

export default Card
