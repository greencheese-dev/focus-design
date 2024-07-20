import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { delayedScrollYState } from "../../recoil_state";
import { useEffect, useState } from "react";

const NameBox = ({ text, acc }) => {
  const delayScrollY = useRecoilValue(delayedScrollYState);
  const [height, setHeight] = useState();
  let tempHeight = 32;
  useEffect(() => {
    const offset = delayScrollY / acc;
    if (offset <= 32) {
      tempHeight = tempHeight - offset;
      setHeight(tempHeight);
    } else {
      setHeight(0);
    }
  }, [delayScrollY]);

  return (
    <Wrapper $calc={`${height}vh`}>
      {/* <Name>{Math.round(height * 100) / 100}</Name> */}
      <Name>{text}</Name>
      <Hr />
    </Wrapper>
  );
};

const Wrapper = styled.div.attrs((props) => ({
  style: {
    height: props.$calc,
  },
}))`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: -3.8vh;
  padding: 0;
`;

const Name = styled.p`
  padding: 0;
  wight: 100vw;
  height: 32vh;
  font-family: "Montserrat", sans-serif;
  font-optical-sizing: auto;
  font-weight: 500;
  font-style: normal;
  font-size: 40vh;
  line-height: 0.9;
`;

const Hr = styled.hr`
  position: absolute;
  margin-top: 32.8vh;
  color: black;
  width: 100vw;
  height: 3px;
  background-color: black;
  z-index: -1;
`;

export default NameBox;
