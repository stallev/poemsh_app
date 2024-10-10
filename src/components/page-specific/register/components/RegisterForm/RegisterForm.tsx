'use client';

import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { RegistrationFormProps } from './types';
import { createRegistrationSchema, RegistrationFormValues } from '../../schemas/registerFormSchema';
import { registerUserAction } from '@/app/actions/userActions/registerAction';


export const RegistrationForm: React.FC<RegistrationFormProps> = ({ translations }) => {
  const formSchema = createRegistrationSchema(translations);

  const form = useForm<RegistrationFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: RegistrationFormValues) => {
    try {
      const results = await registerUserAction(values);
      console.log('results is', results);
    } catch (error) {
      console.error('Ошибка при регистрации:', error);
      // Здесь можно добавить обработку ошибок, например, показать уведомление пользователю
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 max-w-lg w-full mx-auto"
      >
        <h2 className="text-3xl font-bold">{translations.labels.title}</h2>

        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{translations.labels.name}</FormLabel>
              <FormControl>
                <Input placeholder={translations.labels.name} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{translations.labels.email}</FormLabel>
              <FormControl>
                <Input type="email" placeholder={translations.labels.email} {...field} />
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
              <FormLabel>{translations.labels.password}</FormLabel>
              <FormControl>
                <Input type="password" placeholder={translations.labels.password} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit">{translations.labels.submit_button_text}</Button>
      </form>
    </Form>
  );
};
