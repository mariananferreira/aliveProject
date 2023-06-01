import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Tab } from '@headlessui/react'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import mari from '@/images/mari1.jpg'


export function PrimaryFeatures() {
  const [hideText, setHideText] = useState(false);
  const toggleButton  = () => setHideText(current => !current);
  
  return (
    <section
      id="sobremim"
      aria-label="Features for running your books"
      className="bg-slate-200 pb-28 pt-20 sm:py-32"
    >
      <Container className="relative py-16">
        <div
          className=""
          aria-hidden="true"
        />
        <div className="mx-auto max-w-7xl lg:bg-transparent lg:px-8">
          <div className="lg:grid lg:grid-cols-12">
            <div className="relative z-10 lg:col-span-4 lg:col-start-1 lg:row-start-1 lg:bg-transparent lg:py-16">
              <div
                className="absolute inset-x-0 h-1/2 lg:hidden"
                aria-hidden="true"
              />
              <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-none lg:p-0">
                <div className="aspect-w-10 aspect-h-6 sm:aspect-w-2 sm:aspect-h-1 lg:aspect-w-1">
                  <Image
                    className="rounded-3xl object-cover object-center shadow-2xl"
                    src={mari}
                    alt=""
                    priority
                  />
                </div>
              </div>
            </div>
            <div className="secondary relative lg:col-span-10 lg:col-start-3 lg:row-start-1 lg:grid lg:grid-cols-10 lg:items-center lg:rounded-3xl">
              <div
               className="absolute inset-0 hidden overflow-hidden rounded-3xl lg:block"
               aria-hidden="true"
              >
                <svg
                  className="absolute bottom-full left-full translate-y-1/3 -translate-x-2/3 transform xl:bottom-auto xl:top-0 xl:translate-y-0"
                  width={404}
                  height={384}
                  fill="none"
                  viewBox="0 0 404 384"
                  aria-hidden="true"
                >
                 <defs>
                    <pattern
                      id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d"
                      x={0}
                      y={0}
                      width={20}
                      height={20}
                     patternUnits="userSpaceOnUse"
                    >
                      <rect
                        x={0}
                        y={0}
                        width={4}
                        height={4}
                        className="text-indigo-500"
                        fill="currentColor"
                      />
                    </pattern>
                  </defs>
                  <rect
                    width={404}
                    height={384}
                    fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)"
                  />
                </svg>
                <svg
                  className="absolute top-full -translate-y-1/3 -translate-x-1/3 transform xl:-translate-y-1/2"
                  width={404}
                  height={384}
                  fill="none"
                  viewBox="0 0 404 384"
                  aria-hidden="true"
                >
                  <defs>
                    <pattern
                     id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d"
                     x={0}
                     y={0}
                     width={20}
                     height={20}
                      patternUnits="userSpaceOnUse"
                    >
                      <rect
                        x={0}
                        y={0}
                        width={4}
                        height={4}
                          className=""
                      fill="currentColor"
                      />
                    </pattern>
                  </defs>
                  <rect
                    width={404}
                    height={384}
                   fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)"
                  />
                </svg>
              </div>
              <div className="relative mx-auto max-w-md space-y-6 py-12 px-4 sm:max-w-3xl sm:py-16 sm:px-6 lg:col-span-6 lg:col-start-4 lg:max-w-none lg:p-0">
                <h2 className="name">Mariana Guerreiro,</h2>
                <h2
                  className="text-2xl tracking-tight test"
                  id="join-heading"
                >
                  NUTRICIONISTA <br/>
                                  
                </h2>
                <p className="textAboutMe">
                  Olá!<br/>
                  Sou a Mariana Guerreiro, Nutricionista apaixonada pela área da alimentação e pela implementação de hábitos alimentares saudáveis.<br/>
                  Pretendo ajudá-lo/a a concretizar os seus objetivos de forma eficaz.<br/>
                  Consistência e dedicação são as chaves do sucesso!<br/>Bem-vindo/a ao meu website!</p>
                <button 
                  className="mt-2 inline-flex w-full items-center buttonStyle justify-center rounded-md border border-transparent bg-white px-3 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:ring-offset-2 sm:w-auto"
                  onClick={toggleButton}
                >
                  Saiba mais
                </button>
                {hideText && <p className="textAboutMe">Segui por esta maravilhosa área porque adoro o ramo da saúde, onde posso ter impacto direto na vida das pessoas. A gratificação que se tem ao mudar a vida de alguém para melhor, não tem palavras.<br/>Licenciei-me na Faculdade de Ciências da Nutrição de Universidade do Porto e desde então tenho trabalho na área de Nutrição Clínica. <br/>
                                                      Ao longo do meu percurso como estudante, e como pessoa ativa que sou, não me limitei apenas a estudar. Procurei realizar inúmeros estágios voluntários no sentido de me enriquecer como pessoa e futura profissional. Fazem parte destes: o acompanhamento de consultas de Nutrição em Clínicas privadas, o estágio Hospital da Santa Casa da Misericórdia de Marco de Canaveses e Lar da Santa Casa da Misericórdia de Marco de Canaveses; Centro de Medicina Desportiva do Porto entre outros projetos de educação alimentar em escolas básicas.<br/>
                                                      Como a sabedoria é o bem mais precioso que temos, tirei um curso de Nutricoach para poder dar um serviço diferenciador aos meus pacientes.
                </p>
                }

                <div className="sm:col-span-2 sm:flex sm:justify-end">
                  <ul role="list" className="mt-8 flex space-x-12 socialMedia">
                    <li>
                      <a
                        className="text-white hover:text-indigo-100"
                        href="https://www.facebook.com/nutrimarianaguerreiro"
                        target="blank"
                        rel="noreferrer"
                      >
                        <span className="sr-only">Facebook</span>
                        <svg 
                          width="24" 
                          height="24" 
                          fill="currentColor" 
                          viewBox="0 0 16 16"> 
                            <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/> 
                        </svg>                      
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-white hover:text-indigo-100"
                        href="https://www.instagram.com/nutri_marianaguerreiro/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <span className="sr-only">Instagram</span>
                        <svg 
                            width="24" 
                            height="24" 
                            fill="currentColor" 
                            viewBox="0 0 16 16"> 
                              <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/> 
                          </svg>
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-white hover:text-indigo-100"
                        href="https://api.whatsapp.com/send?phone=938396971&text=Olá, gostaria de marcar uma consulta!"
                        target="blank"
                        rel="noreferrer"
                      >
                        <span className="sr-only">Whatsapp</span>
                        <svg 
                          width="24" 
                          height="24" 
                          fill="currentColor" 
                          viewBox="0 0 16 16"> 
                            <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/> 
                        </svg>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
