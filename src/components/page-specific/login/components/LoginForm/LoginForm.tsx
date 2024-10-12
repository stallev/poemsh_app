'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
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
import { useToast } from '@/hooks/use-toast';
import { Input } from "@/components/ui/input";
import { LoginFormProps } from './types';
import { createLoginClientSchema, LoginClientFormValues } from '../../schemas/loginFormClientSchema';
import { loginUserAction } from '@/app/actions/userActions/loginAction';
import { RequestErrors, RequestStatuses } from '@/constants/RequestStatusesErrors';

export const LoginForm: React.FC<LoginFormProps> = ({ translations }) => {
  const router = useRouter();
  const { toast } = useToast()
  const formSchema = createLoginClientSchema(translations);

  const form = useForm<LoginClientFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  
  const [invalidCredentialsError, setInvalidCredentialsError] = useState(false);
  const [globalError, setGlobalError] = useState('');

  const onSubmit = async (values: LoginClientFormValues) => {
    setInvalidCredentialsError(false);
    setGlobalError('');

    try {
      const results = await loginUserAction(values);

      if (results.status === RequestStatuses.success) {
        router.push('/');
      } else if ('error' in results) {
        switch (results.error) {
          case RequestErrors.invalid_credentials:
            setInvalidCredentialsError(true);
            toast({
              description: RequestErrors.invalid_credentials,
            });
            break;
          case RequestErrors.something_wents_wrong:
            setGlobalError('Something went wrong');
            toast({
              description: translations.errors.something_went_wrong,
            });
            break;
          default:
            break;
        }
      }
    } catch (error) {
      console.error('Ошибка при регистрации:', error);
      toast({
        description: translations.errors.something_went_wrong,
      });
    }
  };

  const handleInputChange = () => {
    if (invalidCredentialsError) {
      setInvalidCredentialsError(false); // Сбрасываем индикацию ошибки при изменении полей
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 max-w-lg w-full mx-auto"
      >
        <h2 className="text-3xl font-bold">{translations.labels.title}</h2>

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{translations.labels.email}</FormLabel>
              <FormControl>
                <Input
                  type="email"
                  placeholder={translations.labels.email}
                  {...field}
                  onChange={(e) => {
                    field.onChange(e);
                    handleInputChange();
                  }}
                  className={invalidCredentialsError ? 'border-red-500' : ''}
                />
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
                <Input
                  type="password"
                  placeholder={translations.labels.password}
                  {...field}
                  onChange={(e) => {
                    field.onChange(e);
                    handleInputChange();
                  }}
                  className={invalidCredentialsError ? 'border-red-500' : ''}
                />
              </FormControl>
              {invalidCredentialsError && (
                <p className="text-red-500 text-sm mt-1">
                  {translations.errors.wrong_creds || 'Invalid credentials'}
                </p>
              )}
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit">{translations.labels.submit_button_text}</Button>

        {globalError && (
          <p className="text-red-500 text-sm mt-2">{globalError}</p>
        )}
      </form>
    </Form>
  );
};
