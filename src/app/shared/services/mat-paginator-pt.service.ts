import { Injectable } from '@angular/core';
import { MatPaginatorIntl } from '@angular/material/paginator';

@Injectable()
export class MatPaginatorPtService extends MatPaginatorIntl {
  itemsPerPageLabel = 'Itens por página';
  nextPageLabel = 'Próxima página';
  previousPageLabel = 'Página anterior';
  firstPageLabel = 'Primeira página';
  lastPageLabel = 'Última página';
  getRangeLabel = (page: number, pageSize: number, length: number) => {
    if (length === 0 || pageSize === 0) {
      return '0 de ' + length;
    }

    const currentIndex = page * pageSize;
    const currentLength = currentIndex + pageSize;
    return `${currentIndex + 1} - ${currentLength} de ${length}`;
  };
}
