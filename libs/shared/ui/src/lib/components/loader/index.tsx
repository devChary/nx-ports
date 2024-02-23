import styled, { keyframes } from 'styled-components';

interface DotProps {
  themeColor: string;
}

export const LoaderWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Dot = styled.div<DotProps>`
  --animation-speed: 1000ms;
  --dot-size: 10px;
  width: var(--dot-size);
  height: var(--dot-size);
  border: calc(var(--dot-size) / 5) solid ${(props) => props.themeColor};
  border-radius: 50%;
  float: left;
  margin: 0 calc(var(--dot-size) / 2);
  transform: scale(0);
  animation: ${({ delay }: any) => animation(delay)} var(--animation-speed) ease
    infinite;

  &:nth-child(2) {
    animation-delay: calc(var(--animation-speed) * 0.3);
  }

  &:nth-child(3) {
    animation-delay: calc(var(--animation-speed) * 0.6);
  }
`;

const animation = (delay: any) => keyframes`
  50% {
    transform: scale(1);
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

export default function Loader(props: DotProps) {
  const { themeColor } = props;
  return (
    <LoaderWrapper>
      <Dot themeColor={themeColor} />
      <Dot themeColor={themeColor} />
      <Dot themeColor={themeColor} />
    </LoaderWrapper>
  );
}
