# Tabela dinâmica com Angular Material

Componente angular dinâmico que ajuda a criar uma tabela utilizando o Angular material, de maneira fácil e rápida.

### Recursos
- tabela com dados dinâmicos
- botões de ações
- paginação
- ordenação de colunas

### Depêndencias
| DynamicTable        | Angular    |       
| ------------- |:-------------:|
| 1.0.0    | 	>= 9.x |

### Install
```javascript
npm install ngx-dynamic-table --save
```

###Setup

1. Adicione o css dos icones o material ao seu , e o css de algum tema do material

```sass
@import "~material-design-icons/iconfont/material-icons.css";
@import "@angular/material/prebuilt-themes/deeppurple-amber.css";
```
2. Adicione o DynamicTableModule ao seu NgModule, e também o browser animations
  ```typescript
    import { CommonModule } from '@angular/common';
    import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

    import { NgxDynamicTableModule } from 'ngx-dynamic-table';

    @NgModule({
      imports: [
        CommonModule,
        BrowserAnimationsModule, // required animations module
        NgxDynamicTableModule // DynamicTable added
      ],
      bootstrap: [App],
      declarations: [App]
    })
    class MainModule {}
  ```

### Como utilizar
```html

  <lib-ngx-dynamic-table
    [dataSource]="dataSource"
    [displayedColumns]="displayedColumns"
    [actions]="actions"
    [filter]="filter"
    (sendClick)="rowAction($event)"
  >
  </lib-ngx-dynamic-table>
  ```
  ```typescript
  public displayedColumns: any = [{ column: 'id', title: 'id' }, { column: 'name', title: 'name' }, { column: 'email', title: 'email' }];
  public actions = [{ column: 'read', title: 'read' }, { column: 'update', title: 'update' },{ column: 'delete', title: 'delete' }];
  public filter = false;
  public dataSource = [
    {
      'id': 1,
      'name': 'Leanne Graham',
      'username': 'Bret',
      'email': 'Sincere@april.biz'
    },
    {
      'id': 2,
      'name': 'Ervin Howell',
      'username': 'Antonette',
      'email': 'Shanna@melissa.tv'
    }   
  ];
  rowAction(row){
    // you can create your callback functions after clicked in actions buttons
    console.log(row)
  }
  ```
### Propriedades

##### Obrigatórios

| propriedades        |   tipo  |   valor padrão | descrição    
| ------------- |:-------------:|:-------------:|:-------------:|
| Input() dataSource    | 	[ ] any  | []    | 	Deve ser a lista de linhas da dados, onde a chave é o nome da coluna e o valor, o valor exibido na linha correspondente a coluna |
| Input() displayedColumns    | 	[ ] < ColumnsConfig > | []    | 	Deve ser a lista de colunas que deverão ser exibidas na sua tabela, onde column = a coluna representada e title = nome a ser exibido  |

##### Opcionais

| propriedades        |   tipo  |   valor padrão | descrição    
| ------------- |:-------------:|:-------------:|:-------------:|
| Input() actions    | 	[ ] < ColumnsConfig > | []    | 	Lista de ações disponiveis que deverão esta disponivel nesta tabela (editar, deletar, etc) |
| Input() filter    | 	boolean | true    | 	Se deve ser exibido um input de filtro na tabela |
| Output() sendClick    | 	EventEmitter |     | 	Evento emitido ao clicar em uma das ações disponiveis da lista, envia a ação clicada e os valores da linha |



##### Configurações

| propriedades        |   tipo  |   valor padrão | descrição    
| ------------- |:-------------:|:-------------:|:-------------:|
| Input () buttonsConfig    | 	Object < ButtonsConfig > | { read: {    icon: 'search',    name: 'read',    tooltip: 'Visualizar'  },  update: {    icon: 'edit',    name: 'edit',    tooltip: 'Editar'  },  delete: {    icon: 'delete',    name: 'delete',    tooltip: 'Excluir'  },  download: {    icon: 'arrow_downward',    name: 'download',    tooltip: 'Download'  }}    | 	Objeto de configurações das ações disponvel no package da tabela dinamica, com o nome, icone, e texto do tooltip dos botões |

### Interfaces

##### ColumnsConfig
| nome        |   descrição     
| ------------- |:-------------:|
| icon: string | classe do icone do botão |
| name: string | nome da coluna |
| tooltip: string | nome de exibição |

##### ButtonsConfig

| nome        |   descrição     
| ------------- |:-------------:|
| column: string | nome de referencia da coluna no objeto dataSource |
| title: string | nome da coluna a ser exibido |
