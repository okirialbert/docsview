import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-balances',
  standalone: true,
  imports: [MatTableModule, MatPaginatorModule, MatFormFieldModule, MatInputModule],
  templateUrl: './balances.component.html',
  styleUrl: './balances.component.scss'
})
export class BalancesComponent implements AfterViewInit {
  displayedColumns: string[] = ['customerName', 'customerCode', 'totalAccounts', 'currency', 'availableBalance', 'deposits', 'loans'];
  dataSource = new MatTableDataSource<Account>(accountsData);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}

type Account = {
  customerName: string;
  customerCode: number;
  totalAccounts: number;
  currency: string;
  availableBalance: string;
  deposits: string;
  loans: string;
};

const accountsData: Account[] = [
  {
    customerName: "Mahaya Health Centre",
    customerCode: 102424,
    totalAccounts: 3,
    currency: "KES",
    availableBalance: "410.50 M",
    deposits: "811 M",
    loans: "10.50 M",
  },
  {
    customerName: "Kenya Railways Corporation",
    customerCode: 213535,
    totalAccounts: 5,
    currency: "USD",
    availableBalance: "38.77 B",
    deposits: "76.44 B",
    loans: "8.77 B",
  },
  // ... Rest of the data
];
