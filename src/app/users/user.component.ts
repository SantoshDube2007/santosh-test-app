import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { CommonService } from '../services/common.service';
import { usermodel } from '../models/common.model';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.sass']
})
export class UserComponent implements OnInit {
  displayedColumns: string[] = ['name', 'email', 'phone'];
  users: usermodel[] = [];
  dataSource: any;
  isLoading: boolean = true;
  showTiles: boolean = false;
  totalUsers: number= 0;
  @ViewChild(MatPaginator) paginator !: MatPaginator;
  @ViewChild(MatSort) sort !: MatSort;

  constructor(private commonService: CommonService) {
    
  }

  ngOnInit(): void {
    this.GetUsers();
  }

  GetUsers() {
    this.commonService.GetUsers().subscribe(
      (res: usermodel[]) => {
        this.dataSource = new MatTableDataSource<usermodel>(res);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        this.users = res;
        this.totalUsers = res.length;
        this.isLoading = false;
      },
      (error) => {
        console.error('Error caught in user component');
      }
    );
  }

  Search(event:Event){
    const val = (event.target as HTMLInputElement).value;
    this.dataSource.filter = val;
  }

  showListView(type: string) {
    if(type === 'list'){
      this.showTiles = false; 
    }else{
      this.showTiles = true;
    }
  }
}
