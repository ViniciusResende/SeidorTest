import React, { Context } from 'react';
import renderer from 'react-test-renderer';
import List from './List';

describe('List component', () => {
  let realUseContext: <T>(context: Context<T>) => T;
  let mockUseContext: jest.Mock<any, any>;
  beforeEach(() => {
    realUseContext = React.useContext;
    mockUseContext = React.useContext = jest.fn();
  });

  afterEach(() => {
    React.useContext = realUseContext;
  });

  it('renders correctly', () => {
    mockUseContext.mockImplementation(() => {
      return {
        users: [
        {
          name: 'Vinícius Alves',
          cpf: '123.456.067-43',
          salary: 2334433,
          tributeDiscount: 323,
          dependents: 2,
          costIRPF: 32323,
        },
        {
          name: 'Bruno Alves',
          cpf: '123.456.067-43',
          salary: 2334433,
          tributeDiscount: 323,
          dependents: 2,
          costIRPF: 32323,
        }
      ],
        deleteUser: jest.fn()
      }
    });
    // mockUseContext.mockReturnValue({
    //   users: [
    //     {
    //       name: 'Vinícius Alves',
    //       cpf: '123.456.067-43',
    //       salary: 2334433,
    //       tributeDiscount: 323,
    //       dependents: 2,
    //       costIRPF: 32323,
    //     },
    //     {
    //       name: 'Bruno Alves',
    //       cpf: '123.456.067-43',
    //       salary: 2334433,
    //       tributeDiscount: 323,
    //       dependents: 2,
    //       costIRPF: 32323,
    //     }
    //   ],
    //     deleteUser: jest.fn()
    // })
    
    const tree = renderer.create(<List />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
