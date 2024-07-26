/** @jsxImportSource @emotion/react */
import logo from '../../assets/images/common/logo-blue.svg';
import styled from '@emotion/styled';

const Container = styled.div`
  padding: 20px;
`;

const Logo = styled.img`
  width: 180px;
  cursor: pointer;
`;

export default function Header() {
  return (
    <Container>
      <Logo src={logo} onClick={() => alert('home!')} alt="logo" />
    </Container>
  );
}
