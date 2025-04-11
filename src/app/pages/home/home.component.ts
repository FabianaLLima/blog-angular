import { Component, OnInit} from '@angular/core';
import { SmallCardComponent } from "../../components/small-card/small-card.component";
import { MenuTitleComponent } from "../../components/menu-title/menu-title.component";
import { BigCardComponent } from "../../components/big-card/big-card.component";
import { MenuBarComponent } from "../../components/menu-bar/menu-bar.component";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [SmallCardComponent, MenuTitleComponent, BigCardComponent, MenuBarComponent],
})
export class homeComponent implements OnInit {

  constructor() {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
