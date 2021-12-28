import { PostProps } from '../Post';
import * as Styled from './styles';
import Link from 'next/link';
import { Heading } from '../Heading';

export type PostCardProps = PostProps & {
  slug: string;
};

export const PostCard = ({ title, cover, excerpt, slug }: PostCardProps) => {
  return (
    <Styled.Wrapper>
      <Link href={`/post/${slug}`}>
        <a>
          <Styled.Cover src={cover.url}></Styled.Cover>
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
