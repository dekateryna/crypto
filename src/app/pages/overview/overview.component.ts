import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {
  public balanceCards = [
    { title: 'YOUR BALANCE', number: '$53,231.00', iconPath: 'assets/icons/wallet.svg' },
    { title: 'TOTAL INCOME', number: '$53,231.00', iconPath: 'assets/icons/dollar.svg' },
    { title: 'NUMBER OF TRADERS', number: '1023', iconPath: 'assets/icons/house.svg' }
  ];
  public statisticCards = [
    { bot_name: 'BOT 1', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor', strategy: 'Lorem ipsum dolor sit amet',bot_users: '52', revenue: '$23,321', status: 'Running', action: 'View' },
    { bot_name: 'BOT 1', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor', strategy: 'Lorem ipsum dolor sit amet',bot_users: '52', revenue: '$23,321', status: 'Running', action: 'View' },
    { bot_name: 'BOT 1', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor', strategy: 'Lorem ipsum dolor sit amet',bot_users: '52', revenue: '$23,321', status: 'Running', action: 'View' },
    { bot_name: 'BOT 1', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor', strategy: 'Lorem ipsum dolor sit amet',bot_users: '52', revenue: '$23,321', status: 'Running', action: 'View' },
    { bot_name: 'BOT 1', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor', strategy: 'Lorem ipsum dolor sit amet',bot_users: '52', revenue: '$23,321', status: 'Running', action: 'View' }
  ];
  public newsCards = [
    { title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', time: '52 mins ago', imgPath: 'assets/images/img-news.jpg'},
    { title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', time: '52 mins ago', imgPath: 'assets/images/img-news.jpg'},
    { title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', time: '52 mins ago', imgPath: 'assets/images/img-news.jpg'},
    { title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', time: '52 mins ago', imgPath: 'assets/images/img-news.jpg'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
