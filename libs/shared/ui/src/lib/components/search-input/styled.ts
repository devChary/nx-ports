import styled, { css, keyframes, StyledComponent } from 'styled-components';

export const commonPlaceholderStyles = css`
  font-size: 1rem;
  color: rgb(0, 0, 0, 0.5);
`;

interface InputProps {
  width?: string;
  height?: string;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const InputComponent: StyledComponent<
  'input',
  any,
  InputProps
> = styled.input<InputProps>`
  padding: 8px;
  margin-bottom: 40px;
  border: none;
  font-size: 1rem;
  color: #000;
  border-bottom: 2px solid lightgray;
  width: ${(props) => props.width || '100%'};
  height: ${(props) => props.height || '50px'};
  &:focus {
    outline: none;
    border-bottom: 2px solid #000;
  }
  ::placeholder,
  ::-webkit-input-placeholder {
    ${commonPlaceholderStyles}
  }
  :-ms-input-placeholder {
    ${commonPlaceholderStyles}
  }
`;

export const PortName = styled.div`
  z-index: 10;
  padding: 2px;
  cursor: pointer;
  width: 100%;
  text-align: left;
  padding: 12px 16px;
  font-size: 0.875rem;
`;

const dropDownAnimation = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;

export const DropDownOptions = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  background: #fff;
  padding: 12px 0px 4px;
  width: 100%;
  max-height: 250px;
  overflow: auto;
  animation: ${dropDownAnimation} 200ms ease-in-out;
  animation-fill-mode: forwards;
  top: 72px;
  z-index: 1;
`;

export const DropDownOption = styled.div`
  cursor: pointer;
  width: 100%;
  text-align: left;
  padding: 12px 16px;
  font-size: 0.875rem;
  &:hover {
    color: #000;
  }
  &:active,
  &:focus {
    outline: none;
  }
  &:last-child {
    border-bottom: none;
  }
`;

export const SearchInputWrapper = styled.div`
  width: 100%;
  margin: 20px;
  position: relative;
`;
