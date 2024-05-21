import { Request, Response, NextFunction } from 'express';
import * as yup from 'yup';
import { User } from '../types';

const formSchema = yup.object().shape({
    email: yup.string().email().min(2, "Adresa de email este prea scurtă"),
    nume: yup.string().min(2, "Numele trebuie completat"),
    prenume: yup.string().min(2, "Prenumele trebuie completat"),
    password: yup.string().min(8, "Parola este prea scurtă"),
    numarTelefon: yup.string().min(10, "Numarul de telefon nu este valid").max(10),
    adresa: yup.string().min(2, "Adresa este prea scurtă"),
    varsta: yup.string().test('is-number', "Expected number, received a string", (val) => !isNaN(parseInt(val as string, 10))),
    termeni: yup.boolean().test('is-true', "Trebuie să accepți termenii și condițiile", value => value === true),
});

export const validateUser = async (req: Request<User>, res: Response, next: NextFunction) => {
    try {
        await formSchema.validate(req.body as User, { abortEarly: false });
        next();
    } catch (error: any) {
        res.status(400).json({ error: error.errors });
    }
};
