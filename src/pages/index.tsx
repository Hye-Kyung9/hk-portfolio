/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import { useEffect, useRef, useState } from 'react';

const Container = styled.div`
  height: 80vh;
  background-color: #f0f0f0; /* Set your desired background color */
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column; /* Stack the title and description vertically */
`;

const Title = styled.h1`
  text-align: center;
  line-height: 1.6;
  font-size: 40px;
  margin-bottom: 20px; /* Space between title and description */
`;

const Description = styled.div`
  font-size: 18px;
  padding: 20px;
  opacity: 0.8;
`;

const Main = () => {
  const [word, setWord] = useState('');
  let sentence = '안녕하세요! .';
  const currentIndex = useRef(0);

  // useEffect(() => {
  //   const timerId = setInterval(() => {
  //     setWord((state) => {
  //       const newState = (state += sentence[currentIndex.current]);
  //       currentIndex.current += 1;
  //       return newState;
  //     });
  //   }, 100);

  //   return () => clearTimeout(timerId);
  // }, [sentence]);

  return (
    <>
      <Container>
        <Title>
          {word}
          안녕하세요!
          <br />
          프론트엔드 개발자 구혜경입니다.
        </Title>
      </Container>
      <Description>👉 WORKED FOR...</Description>
    </>
  );
};

export default Main;
