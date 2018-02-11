import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroBComponent } from './cadastro-b.component';

describe('CadastroBComponent', () => {
  let component: CadastroBComponent;
  let fixture: ComponentFixture<CadastroBComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastroBComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
