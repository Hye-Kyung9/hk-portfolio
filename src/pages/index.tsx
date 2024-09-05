/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import bgVideo from '../assets/images/background/bg-blue.mp4';
import bgImage from '../assets/images/background/bg-snow.jpg';

const Container = styled.div`
  height: 80vh;
  background-image: url(${bgImage});
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Title = styled.h1`
  text-align: center;
  line-height: 1.6;
  font-size: 40px;
  margin-bottom: 20px;
`;

const Description = styled.div`
  font-size: 18px;
  padding: 20px;
  opacity: 0.8;
`;

const Main = () => {
  return (
    <>
      <video autoPlay loop muted>
        <source src={bgVideo} type="video/mp4" />
      </video>
      <Container>
        <Title>KOO HYE KYUNG</Title>
      </Container>
      <Description>👉 WORKED FOR...</Description>
    </>
  );
};

export default Main;
