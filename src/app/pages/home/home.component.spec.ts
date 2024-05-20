import {ComponentFixture, TestBed} from '@angular/core/testing';

import {HomeComponent} from './home.component';
import {HttpClientTestingModule, provideHttpClientTesting} from "@angular/common/http/testing";
import {ApiService} from "../../services/api.service";
import {of} from "rxjs";

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    let apiMockService = jasmine.createSpyObj('MockApiService', {getSecondsLeft: of (10)} );

    await TestBed.configureTestingModule({
      imports: [HomeComponent, HttpClientTestingModule],
      providers: [provideHttpClientTesting, {
        provide: ApiService, useValue: apiMockService
      }]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it ('should find a main div', () => {
    const mainDivElement: HTMLElement = fixture.nativeElement;
    const main = mainDivElement.querySelector('#main')!;
    expect(main).toBeTruthy();
  })

  it ('should have api service called', () => {
    component.getTimer();
    expect(component.apiService.getSecondsLeft).toHaveBeenCalled();
  })
});
