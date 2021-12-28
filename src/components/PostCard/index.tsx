import * as Styled from './styles';
import Link from 'next/link';
import { Heading } from '../Heading';
import { StrapiImage } from '../../shared-types/strapi-image';

export type PostCardProps = {
  id: string;
  slug: string;
  title: string;
  cover: StrapiImage;
  excerpt: string;
};

export const PostCard = ({ title, cover, excerpt, slug }: PostCardProps) => {
  return (
    <Styled.Wrapper>
      <Link href={`/post/${slug}`}>
        <a>
          <Styled.Cover src={cover.url} alt={title}></Styled.Cover>
        </a>
      </Link>
      <Link href={`/post/${slug}`}>
        <Heading as="h2" size="small">
          <a>{title}</a>
        </Heading>
      </Link>
      <Styled.Excerpt>{excerpt}</Styled.Excerpt>
    </Styled.Wrapper>
  );
};
