import styled from "styled-components";

export const StyledBlogDetailsPage = styled.div`
  text-align: center;
  margin: 0 auto;
  width: 100%;
  max-width: 1010px;
  overflow: hidden;
}

& .blog-item-title {
  font-family: Montserrat, sans-serif;
  font-weight: 600;
  font-size: 48px;
  line-height: 53px;
  margin-top: 50px;
  color: ${(props) => props.theme.colors.primary.main};
}

& .blog-item-description {
  font-family: Lato, sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: -0.05em;
  text-align: left;
  margin-top: 60px;
  color: ${(props) => props.theme.colors.primary.main};
}
`;
