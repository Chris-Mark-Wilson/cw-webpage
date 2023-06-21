import styled, { css } from "styled-components";

export const Container = styled.div`
  margin: 0px auto;
  max-width: 500px;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
 
`;

export const MainContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100%;
    
  overflow:auto;
`;

export const BarChartContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
 
  margin:0 2% 0 0;
`;

export const Chart = css`
border-radius: 5px 5px 0 0;
  margin-top: 10px;
  width: 56px;
  &:hover {
    opacity: 0.8;
  }
  @media (max-width: 425px) {
    width: 30px;
  }
`;

export const  Temp =  styled.span`
  font-size: 0.8rem;
  text-align: center;
  color: ${(props) => props.color};
`;
export const Time = styled.span`
  font-size: 0.8rem;
  text-align: center;
  color: ${(props) => props.color};
`;

export const MakeBar = styled.div`
  height: ${(props) => props.height}%;
  background-image: linear-gradient(
    to bottom,
    ${(props) => props.colors[0]} ,
    ${(props) => props.colors[1]} 50%,
    ${(props)=> props.colors[2]} 
  );
  ${Chart};
`;

export const BlackLine = styled.div`
  width: 100%;
  height: 5px;
  background-color: grey;
`;
