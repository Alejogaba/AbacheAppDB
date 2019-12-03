import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilChatComponent } from './perfil-chat.component';

describe('PerfilChatComponent', () => {
  let component: PerfilChatComponent;
  let fixture: ComponentFixture<PerfilChatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerfilChatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
