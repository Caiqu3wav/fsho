'use client';

import React from "react";
import { Formik, Form } from "formik";
import Link from "next/link";
import * as Yup from "yup";

export default function Login() {
  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Digite um e-mail válido").required("O campo é obrigatório"),
    password: Yup.string().required("O campo é obrigatório"),
  });

  async function handleSubmit() {}

  return (
    <main className="min-h-screen flex items-center justify-center">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ values, handleChange }) => (
          <Form
            noValidate
            className="flex flex-col gap-2 rounded p-4 border border-zinc-300 min-w-[300px] bg-white"
          >
            <input
              name="email"
              type="email"
              value={values.email}
              onChange={handleChange}
              required
              className="border border-gray-300 rounded p-2"
              placeholder="Email"
            />
            <input
              name="password"
              type="password"
              value={values.password}
              onChange={handleChange}
              required
              autoComplete="off"
              className="border border-gray-300 rounded p-2"
              placeholder="Senha"
            />
            <button
              type="submit"
              className="bg-blue-500 text-white rounded p-2 cursor-pointer"
            >
              Entrar
            </button>
            <span className="text-xs text-zinc-500">
              Não possui uma conta?{" "}
              <strong className="text-zinc-700">
                <Link href="/register">Inscreva-se</Link>
              </strong>
            </span>
          </Form>
        )}
      </Formik>
    </main>
  );
}