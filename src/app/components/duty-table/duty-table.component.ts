import { Component } from '@angular/core';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-duty-table',
  templateUrl: './duty-table.component.html',
  styleUrls: ['./duty-table.component.css'],
})
export class DutyTableComponent {
  fileName: string = 'ExcelSheet.xlsx';
  exportexcel(): void {
    /* pass here the table id */
    let element = document.getElementById('excel-table');
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);

    /* generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

    /* save to file */
    XLSX.writeFile(wb, this.fileName);
  }
}
