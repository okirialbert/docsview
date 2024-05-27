import { ChangeDetectorRef, Component, OnDestroy, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';

import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatTreeFlatDataSource, MatTreeFlattener, MatTreeModule } from '@angular/material/tree';
import { FlatTreeControl } from '@angular/cdk/tree';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { BaseChartDirective } from 'ng2-charts';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import { FormGroup, FormControl, FormsModule, ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { JsonPipe } from '@angular/common';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MediaMatcher } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';

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

interface sidenavOption {
  fixed: boolean;
  top: number;
  bottom: number;
}

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [CommonModule, RouterModule, RouterOutlet, MatSidenavModule, MatFormFieldModule, MatSelectModule, MatButtonModule, MatListModule, MatIconModule, MatDividerModule, MatTreeModule, MatMenuModule, MatCardModule, MatChipsModule, BaseChartDirective, MatDatepickerModule, FormsModule, ReactiveFormsModule, JsonPipe, MatToolbarModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent implements OnDestroy {
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

  sidenavOptions: sidenavOption = { fixed: true, bottom: 0, top: 0 }
  private _mobileQueryListener: () => void;
  mobileQuery: MediaQueryList;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.dataSource.data = TREE_DATA;
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
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


}
