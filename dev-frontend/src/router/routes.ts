import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '/',
        name: 'Login',
        component: () => import('src/pages/LoginPage/index.vue'),
      },
      {
        path: '/',
        name: 'App',
        component: () => import('src/layouts/AppLayout.vue'),
        meta: {
          requiresAuth: true,
          //breadcrumb: [{ name: 'Dashboard', icon: 'fa-solid fa-gauge' }],
        },
        children: [
          {
            path: '/meu-perfil',
            name: 'Meu Perfil',
            component: () => import('src/pages/PerfilPage/index.vue'),
            meta: {
              requiresAuth: true,
              breadcrumb: [
                { name: 'Dashboard', icon: 'fa-solid fa-gauge' },
                { name: 'Meu Perfil', icon: 'fa-solid fa-user-circle' }
              ],
            }
          },
          {
            path: '/dashboard',
            name: 'Dashboard',
            component: () => import('src/pages/DashboardPage/index.vue'),
            meta: {
              requiresAuth: true,
              breadcrumb: [{ name: 'Dashboard', icon: 'fa-solid fa-gauge' }],
            }
          },
          {
            path: '/espaco-colaborador',
            name: 'Espaço Colaborador',
            component: () => import('src/pages/CollaboratorsHUB/index.vue'),
            meta: {
              requiresAuth: true,
              breadcrumb: [
                { name: 'Dashboard', link: '/dashboard', icon: 'fa-solid fa-gauge' },
                {
                  name: 'Espaço Colaborador', icon: 'fa-solid fa-users'
                },
              ],
            },
            children: [
              {
                path: '/espaco-colaborador/ficha-admissao',
                name: 'Ficha de Admissão - Colaborador',
                component: () => import('src/pages/CollaboratorsHUB/FichaAdmissaoColaborador/index.vue'),
                meta: {
                  requiresAuth: true,
                  breadcrumb: [
                    { name: 'Dashboard', link: '/dashboard', icon: 'fa-solid fa-gauge' },
                    {
                      name: 'Espaço Colaborador', icon: 'fa-solid fa-users'
                    },
                    {
                      name: 'Ficha de Admissão', icon: 'fa-regular fa-id-card'
                    },
                  ],
                }
              },
              {
                path: '/espaco-colaborador/questionario-de-desempenho',
                name: 'Questionário de Desempenho - Colaborador',
                component: () => import('src/pages/CollaboratorsHUB/QuestionarioDesempenhoColaborador/index.vue'),
                meta: {
                  requiresAuth: true,
                  breadcrumb: [
                    { name: 'Dashboard', link: '/dashboard', icon: 'fa-solid fa-gauge' },
                    {
                      name: 'Espaço Colaborador', icon: 'fa-solid fa-users'
                    },
                    {
                      name: 'Questinário de Desempenho', icon: 'fa-solid fa-clipboard-question'
                    }
                  ],
                }
              },
            ]
          },
          {
            path: '/rh',
            name: 'Recursos Humanos',
            component: () => import('src/pages/CollaboratorsFunctionalities/index.vue'),
            meta: {
              requiresAuth: true,
              breadcrumb: [
                { name: 'Dashboard', link: '/dashboard', icon: 'fa-solid fa-gauge' },
                {
                  name: 'Recursos Humanos', icon: 'fa-solid fa-users-gear'
                },
              ],
            },
            children: [
              {
                path: '/rh/banco-de-dados',
                name: 'Banco de Dados Colaboradores',
                component: () => import('src/pages/CollaboratorsFunctionalities/BancoDeDados/index.vue'),
                meta: {
                  requiresAuth: true,
                  breadcrumb: [
                    { name: 'Dashboard', link: '/dashboard', icon: 'fa-solid fa-gauge' },
                    {
                      name: 'Recursos Humanos', icon: 'fa-solid fa-users-gear'
                    },
                    {
                      name: 'Banco de Dados Colaboradores', icon: 'fa-solid fa-users'
                    }
                  ],
                }
              },
              {
                path: '/rh/ficha-admissao',
                name: 'Ficha de Admissão - RH',
                component: () => import('src/pages/CollaboratorsFunctionalities/FichaAdmissao/index.vue'),
                meta: {
                  requiresAuth: true,
                  breadcrumb: [
                    { name: 'Dashboard', link: '/dashboard', icon: 'fa-solid fa-gauge' },
                    {
                      name: 'Recursos Humanos', icon: 'fa-solid fa-users-gear'
                    },
                    {
                      name: 'Ficha de Admissão', icon: 'fa-regular fa-id-card'
                    },
                  ],
                }
              },
              {
                path: '/rh/ficha-admissao/:id',
                name: 'Ficha de Admissão - RH - Dynamic URL',
                component: () => import('src/pages/CollaboratorsFunctionalities/FichaAdmissao/index.vue'),
                meta: {
                  requiresAuth: true,
                  breadcrumb: [
                    { name: 'Dashboard', link: '/dashboard', icon: 'fa-solid fa-gauge' },
                    {
                      name: 'Recursos Humanos', icon: 'fa-solid fa-users-gear'
                    },
                    {
                      name: 'Ficha de Admissão', icon: 'fa-regular fa-id-card'
                    },
                  ],
                }
              },
              {
                path: '/rh/questionario-de-desempenho',
                name: 'Questionário de Desempenho - RH',
                component: () => import('src/pages/CollaboratorsFunctionalities/QuestionarioDesempenho/index.vue'),
                meta: {
                  requiresAuth: true,
                  breadcrumb: [
                    { name: 'Dashboard', link: '/dashboard', icon: 'fa-solid fa-gauge' },
                    {
                      name: 'Recursos Humanos', icon: 'fa-solid fa-users-gear'
                    },
                    {
                      name: 'Questinário de Desempenho', icon: 'fa-solid fa-clipboard-question'
                    }
                  ],
                }
              },
            ]
          },
          {
            path: '/configuracoes',
            name: 'Configurações',
            component: () => import('src/pages/ConfiguracoesPage/index.vue'),
            meta: {
              requiresAuth: true,
              breadcrumb: [
                { name: 'Dashboard', link: '/dashboard', icon: 'fa-solid fa-gauge' },
                {
                  name: 'Configurações do Sistema', icon: 'fa-solid fa-gear'
                },
              ],
            },
            children: [
              {
                path: '/configuracoes/cadastro-de-usuarios',
                name: 'Cadastro de Usuários',
                component: () => import('src/pages/ConfiguracoesPage/CadastroUsuario/index.vue'),
                meta: {
                  requiresAuth: true,
                  breadcrumb: [
                    { name: 'Dashboard', link: '/dashboard', icon: 'fa-solid fa-gauge' },
                    {
                      name: 'Configurações do Sistema', icon: 'fa-solid fa-gear'
                    },
                    {
                      name: 'Cadastro de Usuários', icon: 'fa-solid fa-user-plus'
                    }
                  ],
                },
              },
              {
                path: '/configuracoes/editar-usuario/:id',
                name: 'Editar Usuário',
                component: () => import('src/pages/ConfiguracoesPage/EditarUsuario/index.vue'),
                meta: {
                  requiresAuth: true,
                  breadcrumb: [
                    { name: 'Dashboard', link: '/dashboard', icon: 'fa-solid fa-gauge' },
                    {
                      name: 'Configurações do Sistema', icon: 'fa-solid fa-gear'
                    },
                    {
                      name: 'Editar Usuário', icon: 'fa-solid fa-user-pen'
                    }
                  ],
                },
              }
            ]
          }
        ],
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
