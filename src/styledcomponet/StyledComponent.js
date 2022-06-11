import styled from "styled-components";

export const Title = styled.div`
  display: block;
  text-align: center;
  color: #fff;
  font-size: 1.3rem;
  text-transform: uppercase;
  margin-top: 5rem;

  @media screen and (max-width:600px) {
      font-size: 1.6rem;
      margin-top: 10rem;
      
  }
`;

export const ContainerCards = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: -5rem;
  
  @media screen and (max-width: 600px){
    margin: 0 auto;
    width: 100%;
  }
`;
export const TimerCard = styled.div`
  text-align: center;
  margin-right: 1rem;
  position: relative;
`;

export const Timer = styled.div`
  width: 70px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.5rem;
  border-radius: 0.4rem;
  background-color: hsl(236, 21%, 26%);
  color: var(--soft-red);
  letter-spacing: 1px;
  position: relative;

  @media screen and (min-width: 600px) {
      width: 100px;
      height: 100px;
      font-size: 3rem;
  }
`;

export const Line = styled.span`
  position: absolute;
  width: 100%;
  height: 1px;
  background-color: hsl(234, 17%, 12%);
`;

export const LeftCircle = styled.div`
  position: absolute;
  top: 42%;
  left: 0%;
  background: hsl(234, 17%, 12%);
  height: 14px;
  width: 7px;
  border-radius: 0 300px 300px 0;
`;

export const RightCircle = styled.div`
  position: absolute;
  top: 42%;
  right: 0%;
  background: hsl(234, 17%, 12%);
  height: 15px;
  width: 7px;
  border-radius: 300px 0 0 300px;
`;

export const TextCard = styled.div`
  padding: 1rem 0;
  color: hsl(237, 18%, 59%);
  font-size: 0.5rem;
  text-transform: uppercase;
  letter-spacing: 2px;
`;

export const Footer = styled.footer`
  width: 100%;
  color: hsl(237, 18%, 59%);
  position: relative;
  background: url(./assets/pattern-hills.svg);

  & img {
    max-width: 100%;
    position: absolute;
    z-index: -1;
    bottom: 0;
    width: 100%;

  @media screen and (max-width:768px){
      height: 8rem;
      width: 100%;
  }
}
`;

export const Icons = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  margin-bottom: 3rem;

  & svg:hover {
    cursor: pointer;
    path {
      fill: hsl(345, 95%, 68%);
    }
  }
`;
