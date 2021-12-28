import { PostTag } from '../../shared-types/tag';
import * as Styled from './styles';
import Link from 'next/link';

export type PostTagsProps = {
  tags?: PostTag[];
};

export const PostTags = ({ tags = [] }: PostTagsProps) => {
  if (tags.length === 0) {
    return null;
  }

  return (
    <Styled.Wrapper>
      tags:{'  '}
      {tags.map((tag) => {
        return (
          <span key={tag.displayName}>
            <Link href={`/tag/${tag.slug}`}>
              <a>{tag.displayName}</a>
            </Link>
          </span>
        );
      })}
    </Styled.Wrapper>
  );
};
