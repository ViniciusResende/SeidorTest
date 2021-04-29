import React, { InputHTMLAttributes, useCallback } from 'react';

import { cpf, currency } from './masks';

import './styles.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
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
    <div className="input-group prefix">
      {prefix && <span className="prefix-span">{prefix}</span>}
      <input {...props} onKeyUp={handleKeyUp} className={prefix && "hasPrefix"}/>
    </div>
  );
}

export default Input;