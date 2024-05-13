"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
  Button,
  Checkbox,
} from "@/components/ui";

const formSchema = z.object({
  email: z.string().email().min(2, {
    message: "Adresa de email este prea scurtă",
  }),
  password: z.string().min(8, {
    message: "Parola este prea scurtă",
  }),
  confirmPassword: z.string().min(8, {
    message: "Parolele nu coincide",
  }),
  numarTelefon: z.string().min(10, {}).max(10, {
    message: "Numarul de telefon nu este valid",
  }),
  adresa: z.string().min(2, {
    message: "Adresa este prea scurtă",
  }),
  varsta: z.string().refine((val) => !Number.isNaN(parseInt(val, 10)), {
    message: "Expected number, received a string"
  }),
  termeni: z.boolean().refine((value) => value === false, {
    message: "Trebuie sa accepti termenii si conditiile",
  }),
});

export const RegisterForm = () => {
const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
        email: "",
        password: "",
        confirmPassword: "",
        numarTelefon: "",
        adresa: "",
        varsta: "0",
        termeni: false,
    },
});

  
  const onSubmit = (values: z.infer<typeof formSchema>) => {    
    console.log(values);
  };
  
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Adresă de email</FormLabel>
              <FormControl>
                <Input type="email" placeholder="exemplu@utcn.ro" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Parolă</FormLabel>
              <FormControl>
                <Input type="password" placeholder="*******" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Confirma parola</FormLabel>
              <FormControl>
                <Input type="password" placeholder="*******" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="numarTelefon"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Numar Telefon</FormLabel>
              <FormControl>
                <Input type="phone" placeholder="07XXXXXXXX" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="adresa"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Adresa</FormLabel>
              <FormControl>
                <Input
                  type="text"
                  placeholder="Strada, numar, bloc, scara, apartament"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
            control={form.control}
            name="varsta"
            render={({ field }) => (
                <FormItem>
                    <FormLabel>Varsta</FormLabel>
                    <FormControl>
                        <Input type="number" {...field}  placeholder="18"  />
                    </FormControl>
                    <FormMessage />
                </FormItem>
            )}
        />
        <FormField
          control={form.control}
          name="termeni"
          render={({ field }) => (
            <FormItem className="flex gap-x-2 items-center">
            <FormControl>
              <Checkbox name="termeni" value={field.value.toString()} />
            </FormControl>
              <FormLabel className="!m-0">Termeni si Conditii</FormLabel>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit">Inregistreaza-te</Button>
      </form>
    </Form>
  );
};
