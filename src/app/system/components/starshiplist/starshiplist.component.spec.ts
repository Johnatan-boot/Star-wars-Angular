import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarshiplistComponent } from './starshiplist.component';

describe('StarshiplistComponent', () => {
  let component: StarshiplistComponent;
  let fixture: ComponentFixture<StarshiplistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StarshiplistComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StarshiplistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
