import React, { useContext } from 'react'
import { AppContext } from '../contexts/AppContext';
import { Wrapper } from '../styles/List.styles';

const List: React.FC = () => {

    const {
      isListInDisplay,
      users,
    } = useContext(AppContext);

    const formatCurrencyToString = (currency: number): string => {
      // this function transform a float number into a string with formated value of BRL
      let value = currency.toFixed(2);
      value = value.replace(".", "");
      value = value.replace(/(\d)(\d{2})$/, "$1,$2");
      value = value.replace(/(?=(\d{3})+(\D))\B/g, ".")

      return value;
    }
    return (
    <Wrapper>
      {isListInDisplay && (  
        <div className="listContainer">
          <div className="titleArea">
            <h1>Lista</h1>
          </div>

          <h3>Lista de Usuários</h3>
          <div className="line"></div>
          <table>
            <thead>
              <tr>
                <th>Nome</th>
                <th>CPF</th>
                <th>Salário</th>
                <th>Desconto</th>
                <th>Dependentes</th>
                <th>Desconto IRPF</th>
              </tr>
            </thead>
            <tbody>
              { users.map(user =>(
                <tr key={user.cpf}>
                  <td>{user.name}</td>
                  <td>{user.cpf}</td>
                  <td>R$ {formatCurrencyToString(user.salary)}</td>
                  <td>R$ {formatCurrencyToString(user.tributeDiscount)}</td>
                  <td>{user.dependents}</td>
                  <td>R$ {formatCurrencyToString(user.costIRPF)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </Wrapper>
  )
}

export default List