import styled, { keyframes } from "styled-components";
import { useState, useRef, useEffect } from "react";

const Email = ({ text }) => {
  const elRef = useRef(null);
  const [width, setWidth] = useState(100);

  useEffect(() => {
    if (elRef.current) {
      setWidth(elRef.current.offsetWidth);
    }
  }, [elRef.current]);
  //   console.log(width);

  return (
    <Wrapper $width={width}>
      <Span ref={elRef}>{text}</Span>
      <Span>{text}</Span>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: auto;
  height: 25vh;
  border-top: 2px solid black;
  border-bottom: 2px solid black;
  margin-top: -2px;
  overflow: hidden;
  white-space: nowrap;
  animation: ${keyframes`
    from{
        transform: translateX(0px);
    }
    to{
        transform: translateX(-${(props) =>
          props.width ? props.width : "1000"}px);
    `} 4s infinite linear;
`;

const Span = styled.span`
  font-family: "Montserrat", sans-serif;
  font-optical-sizing: auto;
  font-weight: 500;
  font-style: normal;
  font-size: 24vh;
  line-height: 0.9;
  &::after {
    content: "";
    padding: 0 10vw;
  }
`;

export default Email;
