import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { DocsComponent } from './docs/docs.component';

import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatTreeFlatDataSource, MatTreeFlattener, MatTreeModule } from '@angular/material/tree';
import { FlatTreeControl } from '@angular/cdk/tree';
import { TrendcardComponent } from './components/trendcard/trendcard.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { BaseChartDirective } from 'ng2-charts';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import { FormGroup, FormControl, FormsModule, ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { JsonPipe } from '@angular/common';
import { MatDatepickerModule } from '@angular/material/datepicker';

interface UserNode {
  name: string;
  children?: UserNode[];
}

const TREE_DATA: UserNode[] = [
  {
    name: 'Ministries',
    children: [{ name: 'Immigration' }, { name: 'Defence' }, { name: 'Trade' }],
  },
  {
    name: 'Parastatals',
    children: [{ name: 'KPLC' }, { name: 'A' }, { name: 'B' }],
  },
  {
    name: 'Primary Schools',
    children: [{ name: 'W' }, { name: 'E' }, { name: 'R' }],
  },
  {
    name: 'Secondary Schools',
    children: [{ name: 'T' }, { name: 'Y' }, { name: 'U' }],
  },
  {
    name: 'Universities',
    children: [{ name: 'F' }, { name: 'G' }, { name: 'H' }],
  },
  {
    name: 'TVETs',
    children: [{ name: 'C' }, { name: 'R' }, { name: 'N' }],
  },
  {
    name: 'Hospitals',
    children: [{ name: 'S' }, { name: 'D' }, { name: 'M' }],
  },
];
/** Flat node with expandable and level information */
interface TreeFlatNode {
  expandable: boolean;
  name: string;
  level: number;
}

export interface TrendCategory {
  name: string;
  value: number;
  pchange: number;
  date: string | Date;
}

interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule, RouterOutlet, DocsComponent, TrendcardComponent, MatSidenavModule, MatFormFieldModule, MatSelectModule, MatButtonModule, MatListModule, MatIconModule, MatDividerModule, MatTreeModule, MatMenuModule, MatCardModule, MatChipsModule, BaseChartDirective, MatDatepickerModule, FormsModule, ReactiveFormsModule, JsonPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'docview'

  private _transformer = (node: UserNode, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      level: level,
    };
  };
  treeControl = new FlatTreeControl<TreeFlatNode>(
    node => node.level,
    node => node.expandable,
  );

  treeFlattener = new MatTreeFlattener(
    this._transformer,
    node => node.level,
    node => node.expandable,
    node => node.children,
  );

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  trendCategories: TrendCategory[] = [
    { name: 'Total Accounts', value: 29879, pchange: +100, date: 'This Month' },
    { name: 'All Entities', value: 23418, pchange: -100, date: 'This Month' },
    { name: 'Active Accounts', value: 19678, pchange: -100, date: 'This Month' },
    { name: 'Total Balance', value: 1.7, pchange: +100, date: 'This Month' },

  ];

  constructor(private _formBuilder: FormBuilder) {
    this.dataSource.data = TREE_DATA;
  }

  hasChild = (_: number, node: TreeFlatNode) => node.expandable;

  industriesList: string[] = ['All Industries', 'Schools', 'Parastatals', 'Hospitals', 'Ministries', 'Dispensaries', 'TVETs'];
  selectedIndustry = this.industriesList[0];

  accountTypeList: string[] = ['All Account Types', 'Current Pay as you Go', 'Savings', 'Pay as you Go', 'Bundled Current', 'Pay as you Go Transactional', 'Mortgage Lien Fund'];
  selectedAccountType = this.accountTypeList[0];

  accountStatusTypeList: string[] = ['All Account Statuses', 'Active', 'Dormant'];
  selectedAccountStatusType = this.accountStatusTypeList[0];

  currenciesList: string[] = ['All Currencies', 'KES', 'USD', 'YEN', 'AUD'];
  selectedCurrencyType = this.currenciesList[0];

  countiesList: string[] = ['All Counties', 'Nairobi', 'Nakuru', 'Nyeri'];
  selectedCounty = this.countiesList[0];

  industries = new FormControl();
  accountTypes = new FormControl('All Account Types');
  accountStatuses = new FormControl('Active');
  currencies = new FormControl('');
  countiesControl = new FormControl('');

  dashboard = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
    industryType: this.industries,
    accountType: this.accountTypes,
    accountStatus: this.accountStatuses,
    currency: this.currencies,
    counties: this.countiesControl

  });

  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'},
  ];
 
  selectedFood = this.foods[2].value;

}
