import { Component, OnInit} from '@angular/core';
import { SmallCardComponent } from "../../components/small-card/small-card.component";
import { MenuTitleComponent } from "../../components/menu-title/menu-title.component";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [SmallCardComponent, MenuTitleComponent],
})
export class homeComponent implements OnInit {

  constructor() {}

}
