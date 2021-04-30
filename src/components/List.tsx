import React from 'react'

import { AppContext } from '../contexts/AppContext';
import { 
  Container, 
  HeaderArea, 
  ListContainer, 
  InformationSection,
  Table,
  Line 
} from '../styles/List.styles';

import TrashIcon from '../assets/trash.svg';
import CircleIcon from '../assets/circle.svg';

const List: React.FC = () => {
    const {
      users,
      deleteUser
    } = React.useContext(AppContext);

    const formatCurrencyToString = (currency: number): string => {
      // this function transform a float number into a string with formated value of BRL
      let value = currency.toFixed(2);
      value = value.replace(".", "");
      value = value.replace(/(\d)(\d{2})$/, "$1,$2");
      value = value.replace(/(?=(\d{3})+(\D))\B/g, ".")

      return value;
    }
    return (
    <Container> 
        <HeaderArea>
          <img src={CircleIcon} alt="logo"/>
          <h2>Registrar Funcionarios - Tabelas e cálculos do IRPF</h2>
        </HeaderArea>
        <ListContainer>
          <InformationSection>
            <h2>Tabelas e cálculos do IRPF</h2>
            <p>A tabela do IR é um dos principais instrumentos para auxiliar
              os contribuintes na hora de enviar as informações fiscais para a
              Receita. Afinal, é nesse documento que constam as alíquotas do
              Imposto de Renda.
            </p>
            <p>
              Isso quer dizer que é essa a fonte para você saber qual é o percentual 
              que deve ser aplicado sobre os seus rendimentos.
              Portanto, na hora de fazer o cálculo e declarar seus rendimentos,
              ter essa tabela é fundamental para que você não envie nenhum dado
              errado e, consequentemente, não caia na malha fina.
            </p>
          </InformationSection>

          <h3>Lista de Usuários</h3>
          <Line />
          <Table>
            <thead>
              <tr>
                <th>Nome</th>
                <th>CPF</th>
                <th>Salário</th>
                <th>Desconto</th>
                <th>Dependentes</th>
                <th>Desconto IRPF</th>
                <th>Deletar</th>
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
                  <td>
                    <button onClick={() => deleteUser(user.cpf)}>
                      <img src={TrashIcon} alt="Apagar"/>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </ListContainer>
    </Container>
  )
}

export default List