import React, { createContext, ReactNode, useCallback, useState } from "react";

interface AppContextData {
  actualPath: string;
  user: User;
  users: User[];
  menuListHandler: () => void;
  menuRegisterHandler: () => void;
  menuUpdateHandler: () => void;
  handleChange: (e: React.FormEvent<HTMLInputElement>) => void;
  submitUser: () => void;
  updateUser: () => void;
  deleteUser: (cpf: string) => void;
  inputValuesVeryifier: () => boolean;
}

interface CountdownProviderProps {
  children: ReactNode;
}

interface User {
  name: string,
  cpf: string,
  salary: number,
  tributeDiscount: number;
  dependents: number;
  costIRPF: number;
}

export const AppContext = createContext({} as AppContextData);

export function AppProvider({ children }: CountdownProviderProps){

  const [actualPath, setActualPath] = useState<string>(localStorage.getItem("@SeidorTest:actualPath") || '');

  const menuListHandler = () => {
    setActualPath('');
    localStorage.setItem("@SeidorTest:actualPath", '');
  }

  const menuRegisterHandler = () => {
    setActualPath('register');
    localStorage.setItem("@SeidorTest:actualPath", 'register');
  }

  const menuUpdateHandler = () => {
    setActualPath('update');
    localStorage.setItem("@SeidorTest:actualPath", 'update');
  }

  const [user, setUser] = useState<User>({} as User)
  const [users, setUsers] = useState<User[]>(() => {
    const storagedUsers = localStorage.getItem(`@SeidorTest:users`);
    if(storagedUsers){
      return JSON.parse(storagedUsers);
    }

    return [];
  })

  
  const handleChange = useCallback((e: React.FormEvent<HTMLInputElement>) => {
    let value: null | string | number = null;
    if(e.currentTarget.name === "salary" || e.currentTarget.name === "tributeDiscount"){
      // Transform the string coming from the input back to number;
      const stringWithoutComma = e.currentTarget.value.replace(',', "");
      const stringWithoutDot = stringWithoutComma.replace('.', "");
      value = (Number(stringWithoutDot)/100);
    } else {
      value = e.currentTarget.value;
    }
    setUser({
      ...user,
      [e.currentTarget.name]: value
    });
  }, [user])

  const submitUser = () => {
    // verifies if the user exists and update it in the case of
    let userAlreadyExists = false;
    users.find((userStoraged) => {
      if(userStoraged.cpf === user.cpf){
        const notChangedUsers = users.filter((userStoraged) => userStoraged.cpf !== user.cpf);
        const newUser = {
          ...user,
          salary: calculateSalary(user.salary, user.tributeDiscount, user.dependents),
          costIRPF: calculateIRPF(calculateSalary(user.salary, user.tributeDiscount, user.dependents)),
        }
        setUsers([
          ...notChangedUsers,
          newUser
        ])
        userAlreadyExists = true;
      }
    })

    if(!userAlreadyExists){
      const newUser = {
        ...user,
        salary: calculateSalary(user.salary, user.tributeDiscount, user.dependents),
        costIRPF: calculateIRPF(calculateSalary(user.salary, user.tributeDiscount, user.dependents)),
      }
  
      const newUsers = [...users, newUser];
      setUsers(newUsers)
      localStorage.setItem(
        `@SeidorTest:users`, 
        JSON.stringify(newUsers)
      );
    }    
    setActualPath('');
    setUser({} as User);
  }

  const updateUser = () => {
    const oldUser = users.find((userStoraged) => userStoraged.cpf === user.cpf);
    if(oldUser){
      let newUser = {
        ...oldUser,
        ...user
      }

      if(user.salary){
        newUser.costIRPF = calculateIRPF(calculateSalary(newUser.salary, newUser.tributeDiscount, newUser.dependents))
        newUser.salary = calculateSalary(newUser.salary, newUser.tributeDiscount, newUser.dependents)
      }
      // console.log('new',newUser)
      const notChangedUsers = users.filter((userStoraged) => userStoraged.cpf !== user.cpf);
      const newUsers = [...notChangedUsers, newUser];
      setUsers(newUsers);
      localStorage.setItem(
        `@SeidorTest:users`, 
        JSON.stringify(newUsers)
      );
    }
    setActualPath('');
    setUser({} as User);
  }

  const calculateSalary = (salary: number, tributeDiscount: number, dependents: number): number => {
    const discountByDependent = 164.56
    const dependentDiscount = dependents * discountByDependent;

    const salaryIR = salary - tributeDiscount - dependentDiscount;

    // sends the number rounded and with 2 decimal cases
    return Math.round((salaryIR + Number.EPSILON) * 100) / 100;
  }

  const calculateIRPF = (salaryIR: number): number => {
    const aliquot = [0, 7.5, 15, 22.5, 27.5];
    const parcel = [0, 142.8, 354.8, 636.13, 869.36];
    let IRRF = 0;

    if(salaryIR <= 1903.98){
      IRRF = salaryIR*(aliquot[0]/100) - parcel[0];
    } else if(salaryIR <= 2826.65){
      IRRF = salaryIR*(aliquot[1]/100) - parcel[1];
    } else if(salaryIR <= 3751.05){
      IRRF = salaryIR*(aliquot[2]/100) - parcel[2];
    } else if(salaryIR <= 4664.68){
      IRRF = salaryIR*(aliquot[3]/100) - parcel[3];
    } else {
      IRRF = salaryIR*(aliquot[4]/100) - parcel[4];
    }
  
    // sends the number rounded and with 2 decimal cases
    return Math.round((IRRF + Number.EPSILON) * 100) / 100;
  }

  const deleteUser = (cpf: string) => {
    const newUsers = users.filter((userStoraged) => userStoraged.cpf !== cpf);
    setUsers(newUsers);

    localStorage.setItem(
      `@SeidorTest:users`, 
      JSON.stringify(newUsers)
    );
  }

  const inputValuesVeryifier = () => {
    if(
      user.cpf
      && user.name 
      && user.salary 
      && user.tributeDiscount  
      && user.dependents
    ){
      return true;
    } else {
      return false;
    }
  }

  return(
    <AppContext.Provider value={{
      actualPath,
      menuUpdateHandler,
      user,
      users,
      menuListHandler,
      menuRegisterHandler,
      handleChange,
      submitUser,
      updateUser,
      deleteUser,
      inputValuesVeryifier,
    }}>
      {children}
    </AppContext.Provider>
  )
}