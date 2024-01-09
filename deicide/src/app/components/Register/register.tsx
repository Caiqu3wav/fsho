'use client';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

export default function Register() {
    const validationSchema = Yup.object().shape({
        name: Yup.string().required('Campo obrigatório'),
        email: Yup.string().email('Email inválido').required('Campo obrigatório'),
        password: Yup.string().required('Campo obrigatório').min(6, 'A senha deve ter no mínimo 6 caracteres'),
      });

      const onSubmit = (values: any) => {
        console.log('Novo usuário registrado:', values);
      };

      return (
        <div className="container mx-auto flex flex-col items-center justify-center h-[100vh]">
          <h1 className="text-xl font-bold">Cadastro</h1>
 
          <Formik
            initialValues={{ username: '', email: '', password: '' }}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            <Form className="mt-4">
              <div className="mb-2">
                <Field type="text" name="username" placeholder="Nome de usuário" className="border border-gray-300 p-2 rounded" />
                <ErrorMessage name="username" component="div" className="text-red-500 text-sm" />
              </div>
              <div className="mb-2">
                <Field type="email" name="email" placeholder="Email" className="border border-gray-300 p-2 rounded" />
                <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />
              </div>
              <div className="mb-2">
                <Field type="password" name="password" placeholder="Senha" className="border border-gray-300 p-2 rounded" />
                <ErrorMessage name="password" component="div" className="text-red-500 text-sm" />
              </div>
              <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
                Cadastrar
              </button>
            </Form>
          </Formik>
        </div>
      );
    }