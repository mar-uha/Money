import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionsComponent } from './transactions.component';
import { TransactionService } from '../transaction.service';
import { of } from 'rxjs';
import { Transaction } from '../models/transaction';

describe('TransactionsComponent', () => {
  let component: TransactionsComponent;
  let fixture: ComponentFixture<TransactionsComponent>;

  const mockTransactionService = jasmine.createSpyObj(['get', 'importTransaction']);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TransactionsComponent],
      providers: [{
        provide: TransactionService,
        useValue: mockTransactionService
      }],
    })
      .compileComponents();

    mockTransactionService.get.and.returnValue(of<Transaction[]>([]));

    fixture = TestBed.createComponent(TransactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
