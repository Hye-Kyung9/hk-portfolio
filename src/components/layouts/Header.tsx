/** @jsxImportSource @emotion/react */
import { Link } from 'react-router-dom';
import logo from '../../assets/images/common/logo-blue.svg';
import styled from '@emotion/styled';

const Container = styled.div`
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #111;
`;

const Logo = styled.img`
  width: 180px;
  cursor: pointer;
`;

const StyledLink = styled(Link)`
  color: #111;
  padding: 0 10px;
  text-decoration: none;
  transition: 0.3s ease; /* 트랜지션 추가 */

  &:hover {
    color: #007bff;
  }
`;

export default function Header() {
  return (
    <Container>
      <Logo src={logo} onClick={() => alert('home!')} alt="logo" />
      <div>
        <StyledLink to="/">HOME</StyledLink>
        <StyledLink to="/projects">PROJECT</StyledLink>
        <StyledLink to="/">BLOG</StyledLink>
      </div>
    </Container>
  );
}
