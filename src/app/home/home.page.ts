import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  constructor(private router: Router, private route: ActivatedRoute) {

  }

  gotoEdit() {
    this.router.navigateByUrl('tabs/(home:edit)');
  }

  gotoEditNavigate() {
    // this.router.navigate([{ outlets: { home: [ 'edit' ] }}]);
    // this.router.navigate(['tabs', 'edit']);
    this.router.navigate(['../edit', 5], {relativeTo: this.route});
  }
}
