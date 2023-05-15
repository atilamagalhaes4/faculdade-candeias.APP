import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  { path: 'conta', loadChildren: () => import('./pages/conta/conta.module').then( m => m.ContaPageModule)},
  { path: 'sobre', loadChildren: () => import('./pages/sobre/sobre.module').then( m => m.SobrePageModule)},
  { path: 'cadastro', loadChildren: () => import('./pages/cadastro/cadastro.module').then( m => m.CadastroPageModule)},
  { path: 'resultado/:id', loadChildren: () => import('./pages/resultado/resultado.module').then( m => m.ResultadoPageModule)},
  { path: 'inicio', loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule)},
  { path: 'pessoas', loadChildren: () => import('./pages/pessoas/pessoas.module').then( m => m.PessoasPageModule)},
  { path: 'editarpessoas/:id/:nome/:cpf/:rg/:telefone/:nMatricula/:email/:tipo/:senha/:curso', loadChildren: () => import('./pages/editarpessoas/editarpessoas.module').then( m => m.EditarpessoasPageModule)},
  { path: 'visualizartodos/:id/:nome/:cpf/:rg/:telefone/:nMatricula/:email/:tipo/:senha/:curso', loadChildren: () => import('./pages/visualizartodos/visualizartodos.module').then( m => m.VisualizartodosPageModule)},
  { path: 'recuperarsenha', loadChildren: () => import('./pages/recuperarsenha/recuperarsenha.module').then( m => m.RecuperarsenhaPageModule)},
  { path: 'adcionarmaterias', loadChildren: () => import('./pages/adcionarmaterias/adcionarmaterias.module').then( m => m.AdcionarmateriasPageModule)},
  { path: 'colocarconteudo', loadChildren: () => import('./pages/colocarconteudo/colocarconteudo.module').then( m => m.ColocarconteudoPageModule)},
  { path: 'editarmaterias', loadChildren: () => import('./pages/editarmaterias/editarmaterias.module').then( m => m.EditarmateriasPageModule)},
  { path: 'exibirpeditar/:id/:nomeMateria/:nomeProfessor/:turma/:editar/:curso', loadChildren: () => import('./pages/exibirpeditar/exibirpeditar.module').then( m => m.ExibirpeditarPageModule)},
  { path: 'listachamadas', loadChildren: () => import('./pages/listachamadas/listachamadas.module').then( m => m.ListachamadasPageModule)},
  { path: 'aceitarourejeitar', loadChildren: () => import('./pages/aceitarourejeitar/aceitarourejeitar.module').then( m => m.AceitarourejeitarPageModule)},
  { path: 'simsenhor/:retorno1/:retorno2', loadChildren: () => import('./pages/simsenhor/simsenhor.module').then( m => m.SimsenhorPageModule)},
  { path: 'publicarnota/:retorno1/:retorno2', loadChildren: () => import('./pages/publicarnota/publicarnota.module').then( m => m.PublicarnotaPageModule)},
  { path: 'editarpresenca/:disciplina/:turma/:data', loadChildren: () => import('./pages/editarpresenca/editarpresenca.module').then( m => m.EditarpresencaPageModule)},
  { path: 'sobrepostarnotas', loadChildren: () => import('./pages/sobrepostarnotas/sobrepostarnotas.module').then( m => m.SobrepostarnotasPageModule)},
  { path: 'criarnotas/:nomeMateria/:nomealuno/:nomeProfessor/:nMatricula/:turma', loadChildren: () => import('./pages/criarnotas/criarnotas.module').then( m => m.CriarnotasPageModule)},
  { path: 'verminhasnotas/:retorno1/:retorno2', loadChildren: () => import('./pages/verminhasnotas/verminhasnotas.module').then( m => m.VerminhasnotasPageModule)},
  { path: 'paranota', loadChildren: () => import('./pages/paranota/paranota.module').then( m => m.ParanotaPageModule)},
  { path: 'meusdadosaqui', loadChildren: () => import('./pages/meusdadosaqui/meusdadosaqui.module').then( m => m.MeusdadosaquiPageModule)},
  { path: 'sair', loadChildren: () => import('./pages/sair/sair.module').then( m => m.SairPageModule)},
  { path: 'frequencia', loadChildren: () => import('./pages/frequencia/frequencia.module').then( m => m.FrequenciaPageModule)},
  { path: 'removermateriais', loadChildren: () => import('./pages/removermateriais/removermateriais.module').then( m => m.RemovermateriaisPageModule)},
  { path: 'primeiratela', loadChildren: () => import('./pages/primeiratela/primeiratela.module').then( m => m.PrimeiratelaPageModule)},
  { path: 'pagarboleto', loadChildren: () => import('./pages/pagarboleto/pagarboleto.module').then( m => m.PagarboletoPageModule)},
  { path: 'allpdfs', loadChildren: () => import('./pages/allpdfs/allpdfs.module').then( m => m.AllpdfsPageModule)},
  { path: 'pagarpdf', loadChildren: () => import('./pages/pagarpdf/pagarpdf.module').then( m => m.PagarpdfPageModule)},
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
