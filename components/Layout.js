import styled from "styled-components";

const Layout = ({ children }) => {
  return (
    <>
      <StyledHeading>Navigation</StyledHeading>
      {children}
      <footer>
        <p>Designed with ☕️ by B4CKSL4SH</p>
      </footer>
    </>
  );
};

const StyledHeading = styled.h1`
  color: red;
`;

export default Layout;
