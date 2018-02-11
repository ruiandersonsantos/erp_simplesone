import { Injectable } from '@angular/core';

declare var $;

@Injectable()
export class ConfigTablesService {

  constructor() { }

  removeDataTable(plc_idTabela){
      $(plc_idTabela).dataTable().fnDestroy();
  }

  setConfigTables(plc_idTabela,pll_paging, pll_lengthChange, pll_searching, pll_ordering, pll_info, pll_autoWidth ){

    let paging = pll_paging;
    let lengthChange = pll_lengthChange;
    let searching = pll_searching;
    let ordering = pll_ordering;
    let info = pll_info;
    let autoWidth = pll_autoWidth;

    return $(function () {

      $(plc_idTabela).DataTable({

        'paging'      :  paging,
        'lengthChange': lengthChange,
        'searching'   : searching,
        'ordering'    : ordering,
        'info'        : info,
        'autoWidth'   : autoWidth,
        'bDestroy': true,

        'language': {
          'sEmptyTable': 'Nenhum registro encontrado',
          'sInfo': 'Mostrando de _START_ até _END_ de _TOTAL_ registros',
          'sInfoEmpty': 'Mostrando 0 até 0 de 0 registros',
          'sInfoFiltered': '(Filtrados de _MAX_ registros)',
          'sInfoPostFix': '',
          'sInfoThousands': '.',
          'sLengthMenu': '_MENU_ resultados por página',
          'sLoadingRecords': 'Carregando...',
          'sProcessing': 'Processando...',
          'sZeroRecords': 'Nenhum registro encontrado',
          'sSearch': 'Pesquisar',
          'oPaginate': {
            'sNext': 'Próximo',
            'sPrevious': 'Anterior',
            'sFirst': 'Primeiro',
            'sLast': 'Último'
          },
          'oAria': {
            'sSortAscending': ': Ordenar colunas de forma ascendente',
            'sSortDescending': ': Ordenar colunas de forma descendente'
          }
        }
      });
    });
  }
}
