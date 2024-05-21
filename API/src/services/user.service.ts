import { User } from '../types';
import {db} from '../utils/db.server'

export const createUser = async (
    user: Omit<User, "id">
  ): Promise<User> => {
    const { nume, prenume, email, password, numarTelefon, adresa, varsta, termeni } = user;
    return db.user.create({
      data: {
        nume,
        prenume,
        email,
        password,
        numarTelefon,
        adresa,
        varsta,
        termeni
      },
      select: {
        id: true,
        nume: true,
        prenume: true,
        email: true,
        password: true,
        numarTelefon: true,
        adresa: true,
        varsta: true,
        termeni: true
        
      },
    });
  };

export const findUser = async({email}: Pick<User, "email">) => {  
  return db.user.findUnique({
    where: {
      email
    },
    select:{
      id: true,
      email: true,
      password: true,
      nume: true,
      prenume: true
    }
  })

}