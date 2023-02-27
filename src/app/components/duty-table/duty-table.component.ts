import { Component, Input, OnChanges } from '@angular/core';
import { IDuty } from 'src/app/models/duty';
import { DutyTableService } from 'src/app/services/duty-table.service';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-duty-table',
  templateUrl: './duty-table.component.html',
  styleUrls: ['./duty-table.component.css'],
})
export class DutyTableComponent implements OnChanges {
  @Input() userId!: number;
  @Input() userJob!: string;
  data!: IDuty[];
  fileName: string = 'ExcelSheet.xlsx';
  constructor(private dutyTableService: DutyTableService) {}

  ngOnChanges(): void {
    this.uploadData();
  }
  uploadData(): void {
    this.dutyTableService
      .getTableDataByUser(this.userId)
      .subscribe((stream) => {
        this.data = stream;
      });
  }

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
