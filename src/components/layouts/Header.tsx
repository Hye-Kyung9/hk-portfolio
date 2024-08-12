/** @jsxImportSource @emotion/react */
import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/common/logo-blue.svg';
import menuIcon from '../../assets/images/menu/menu_navigation_icon.svg';
import closeIcon from '../../assets/images/menu/x_icon.svg';
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

const Nav = styled.nav<{ isOpen: boolean }>`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    display: ${(props) => (props.isOpen ? 'flex' : 'none')};
    flex-direction: column;
    position: fixed; /* 화면 전체를 차지하도록 수정 */
    top: 78px; /* Header 높이만큼 내려줌 */
    left: 0;
    width: 100%;
    height: calc(100% - 78px);
    background-color: white;
    justify-content: center;
    align-items: center;
    font-size: ${(props) => props.isOpen && '22px'};
    background-color: aliceblue;
    -webkit-transition: background-color 2s;
    transition: background-color 2s;

    padding-bottom: 55px;
    z-index: 1;
    line-height: 2;
  }
`;

const StyledLink = styled(Link)`
  color: #111;
  padding: 10px;
  text-decoration: none;
  transition: 0.3s ease;

  &:hover {
    color: #007bff;
  }
`;

const ToggleButton = styled.button`
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  position: relative;
  width: 30px;
  height: 30px;

  @media (max-width: 768px) {
    display: flex;
  }

  .menu-icon,
  .close-icon {
    position: absolute;
    width: 30px;
    height: 30px;
    transition:
      opacity 0.3s ease,
      transform 0.3s ease;
  }

  .menu-icon {
    opacity: 1;
    transform: scale(1);
  }

  .close-icon {
    opacity: 0;
    transform: scale(0.5);
  }
  &.open .menu-icon {
    opacity: 0;
    transform: scale(0.5);
  }

  &.open .close-icon {
    opacity: 1;
    transform: scale(1);
  }
`;

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Container>
      <Logo src={logo} onClick={() => alert('home!')} alt="logo" />
      <ToggleButton onClick={toggleMenu} className={isOpen ? 'open' : ''}>
        <img src={menuIcon} alt="menu icon" className="menu-icon" />
        <img src={closeIcon} alt="close icon" className="close-icon" />
      </ToggleButton>
      <Nav isOpen={isOpen}>
        <StyledLink to="/">HOME</StyledLink>
        <StyledLink to="/projects">PROJECT</StyledLink>
        <StyledLink to="/">BLOG</StyledLink>
      </Nav>
    </Container>
  );
}
