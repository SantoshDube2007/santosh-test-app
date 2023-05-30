import { Component, OnInit } from '@angular/core';
import { CommonService } from '../services/common.service';
import { blogsmodel, postsmodel } from '../models/common.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  constructor(private commonService: CommonService) {}
  showadd = true;
  showupdate = false;
  submitted: boolean = false;

  blogs: blogsmodel[] = [];
  posts: postsmodel[] = [];

  ngOnInit(): void {
    //this.GetBlogs();
    this.GetPosts();
  }

  GetBlogs() {
    this.commonService.GetBlogs().subscribe(
      (res: blogsmodel[]) => {
        this.blogs = res;
        console.log('res 1',this.blogs)
      },
      (error) => {
        console.error('error caught in home component');
      }
    );
  }

  GetPosts() {
    this.commonService.GetPosts().subscribe(
      (res: postsmodel[]) => {
        this.posts = res;
      },
      (error) => {
        console.error('error caught in home component');
      }
    );
  }
}
