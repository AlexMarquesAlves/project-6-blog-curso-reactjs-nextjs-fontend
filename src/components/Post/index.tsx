import * as Styled from './styles';
import { ArticleHeader, ArticleHeaderProps } from '../ArticleHeader';
import { HtmlContent } from '../HtmlContent';

export type PostProps = ArticleHeaderProps & {
  content: string;
};

export const Post = ({
  title,
  author,
  categories,
  content,
  cover,
  createdAt,
  excerpt,
  id,
}: PostProps) => {
  return (
    <Styled.Wrapper>
      <ArticleHeader
        author={author}
        categories={categories}
        title={title}
        cover={cover}
        createdAt={createdAt}
        excerpt={excerpt}
        id={id}
      />
      <HtmlContent html={content} />
    </Styled.Wrapper>
  );
};
