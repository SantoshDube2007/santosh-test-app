import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
@NgModule({
  imports: [CommonModule,UserRoutingModule, MatTableModule, 
    MatPaginatorModule,MatSortModule,MatFormFieldModule,MatInputModule,MatProgressSpinnerModule],
  declarations: [UserComponent],
})
export class UserModule {}
