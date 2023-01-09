import styled from "styled-components";
export const Container = styled.div`
  height: 7px;
  width: 100%;
  position: relative;
`;

export const BaseBox = styled.div`
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  border-radius: 3px;
  transition: width .3s ease-in-out;
`;
export const Background = styled(BaseBox)`
  background: grey;
  width: 100%;
`;

export const Progress = styled(BaseBox)`
  background: blue;
  width: ${(props: { percent: number }) => props.percent}%;
`;