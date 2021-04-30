import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  border-radius: 2px 4px 4px 0px;
`;

export const PrefixSpan = styled.span`
  display: flex;
  align-items: center;
  padding: 6px 12px;

  font-size: 14px;
  color: var(--gray-800);
  background-color: var(--ice);
  box-shadow: 0px 2px 2px rgba(187, 204, 221, 0.4);
  border-right: 0;
  border-radius: 4px 0px 0px 4px;
`;

export const InputElement = styled.input`
  flex: 1;
  padding: 6px 12px;
  border: 1px solid var(--gray-800);
  border-radius: 2px 4px 4px 0px;

  &.hasPrefix {
    border-radius: 0px 4px 4px 0px !important;
  }
`;