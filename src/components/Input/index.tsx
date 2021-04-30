import React, { InputHTMLAttributes, useCallback } from 'react';

import { cpf, currency } from './masks';

import { Container, PrefixSpan, InputElement } from './styles';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  mask: "cpf" | "currency";
  prefix?: string;
}

const Input: React.FC<InputProps> = ({ mask, prefix,...props}) => {
  
  const handleKeyUp = useCallback((e: React.FormEvent<HTMLInputElement>) => {
    if(mask === 'cpf'){
      cpf(e);
    }

    if(mask === "currency"){
      currency(e);
    }

  }, [mask])

  return(
    <Container>
      {prefix && <PrefixSpan>{prefix}</PrefixSpan>}
      <InputElement {...props} onKeyUp={handleKeyUp} className={prefix && "hasPrefix"}/>
    </Container>
  );
}

export default Input;