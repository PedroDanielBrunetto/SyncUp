'use client'

import axios from "axios";
import { useState, ChangeEvent, FormEvent } from "react";
import InputMask from "react-input-mask";

interface FormData {
  name: string;
  email: string;
  cel: string;
  idea: string;
}

export default function SignUp() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    cel: "",
    idea: "",
  });
  const [loading, setLoading] = useState<boolean>(false);
  const [responseMessage, setResponseMessage] = useState<string | null>(null);
  const [responseColor, setResponseColor] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { name, email, cel, idea } = formData;
    const cleanedCel = cel.replace(/\D/g, ""); // Remove all non-digit characters

    setLoading(true);
    setResponseMessage(null);

    try {
      await axios.post(`${process.env.NEXT_PUBLIC_API}register`, {
        name,
        email,
        cel: cleanedCel,
        idea,
      });
      setResponseMessage("Formulário enviado com sucesso!");
      setResponseColor("text-green-500");
    } catch (error) {
      setResponseMessage("Erro ao enviar o formulário. Tente novamente.");
      setResponseColor("text-red-500");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-gradient-to-b from-gray-100 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          {/* Page header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h1 className="h1">Bem-vindo. Conte mais sobre sua ideia.</h1>
          </div>

          {/* Form */}
          <div className="max-w-sm mx-auto">
            <form onSubmit={handleSubmit}>
              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                  <label
                    className="block text-gray-800 text-sm font-medium mb-1"
                    htmlFor="name"
                  >
                    Nome <span className="text-red-600">*</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    className="form-input w-full text-gray-800"
                    placeholder="Digite seu nome"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                  <label
                    className="block text-gray-800 text-sm font-medium mb-1"
                    htmlFor="email"
                  >
                    Email <span className="text-red-600">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="form-input w-full text-gray-800"
                    placeholder="Digite seu endereço de email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                  <label
                    className="block text-gray-800 text-sm font-medium mb-1"
                    htmlFor="cel"
                  >
                    Celular <span className="text-red-600">*</span>
                  </label>
                  <InputMask
                    mask="(99) 99999-9999"
                    value={formData.cel}
                    onChange={(e) =>
                      setFormData({ ...formData, cel: e.target.value })
                    }
                    className="form-input w-full text-gray-800"
                        placeholder="Digite seu celular"
                        id="cel"
                        required
                  >
                  </InputMask>
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                  <label
                    className="block text-gray-800 text-sm font-medium mb-1"
                    htmlFor="idea"
                  >
                    Sua ideia <span className="text-red-600">*</span>
                  </label>
                  <textarea
                    id="idea"
                    className="form-input w-full text-gray-800"
                    placeholder="Digite sua ideia para entendermos melhor"
                    value={formData.idea}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              {responseMessage && (
                <div className={`text-center mb-4 ${responseColor}`}>
                  {responseMessage}
                </div>
              )}
              <div className="flex flex-wrap -mx-3 mt-6">
                <div className="w-full px-3">
                  <button
                    type="submit"
                    className={`btn text-white bg-[#2c29a4] hover:bg-[#232183] w-full ${
                      loading ? "cursor-not-allowed opacity-50" : ""
                    }`}
                    disabled={loading}
                  >
                    {loading ? "Enviando..." : "Enviar"}
                  </button>
                </div>
              </div>
              <div className="text-sm text-gray-500 text-center mt-3">
                Para enviar o registro, você aceita os{" "}
                <a className="underline" href="#0">
                  termos & condições
                </a>
                , e a{" "}
                <a className="underline" href="#0">
                  política de privacidade
                </a>
                .
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
