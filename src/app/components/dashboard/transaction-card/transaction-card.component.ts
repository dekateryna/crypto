import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transaction-card',
  templateUrl: './transaction-card.component.html',
  styleUrls: ['./transaction-card.component.scss']
})
export class TransactionCardComponent implements OnInit {
  public tableCards = [
    { time: '12/3/2022', assets: 'BTC', amount: '+0,041BTC', status: 'completed' },
    { time: '12/3/2022', assets: 'BTC', amount: '+0,041BTC', status: 'completed'  },
    { time: '12/3/2022', assets: 'BTC', amount: '+0,041BTC', status: 'completed'  },
    { time: '12/3/2022', assets: 'BTC', amount: '+0,041BTC', status: 'pending'  },
    { time: '12/3/2022', assets: 'BTC', amount: '+0,041BTC', status: 'cancelled'  }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
