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
} from "@/components/ui";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const formSchema = z.object({
  email: z.string().email().min(2, {
    message: "Adresa de email este prea scurtă",
    
  }),
  password: z.string().min(8, {
    message: "Parola este prea scurtă",
  }),
});

export const LoginForm = () => {
  const navigate = useNavigate();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
        email: "",
      password: ""
    },
  });

  const postLoginData = (userData: any) => {
    return axios.post("http://localhost:3500/api/auth/login", userData);
  }

  const mutation = useMutation({
    mutationFn: postLoginData,
    onSuccess: ({data}) => {
      if(data?.token){
        localStorage.setItem("token", data.token)
        navigate("/dashboard")
      }     
    }
  });


  const onSubmit = (values: z.infer<typeof formSchema>) => {
    const cv = mutation.mutate(values)
    console.log(cv);
    
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
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};
