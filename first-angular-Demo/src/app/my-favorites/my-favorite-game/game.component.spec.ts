import { TestBed, async } from '@angular/core/testing';
import { MyFavoriteGameComponent } from './my-favorite-game.component';
import { DeckEntity } from './DeckEntity';


describe('MyFavoriteGameComponent', () => {
  beforeEach(() => {

  MockAppDataService = {
	getDeck: function() {return { "deck_id": "i9s5mnc3ht1y", "success": true, "remaining": 50, "shuffled": true } }
    };


    TestBed.configureTestingModule({
	  providers:[{provide: appDataService, useValue: MockAppDataService }],
	  declarations: [
        MyFavoriteGameComponent
      ],
    });

	//fixture = TestBed.createComponent(MyFavoriteGameComponent);
    /comp    = fixture.componentInstance;

	// dataService from the root injector
    appDataService = TestBed.get(appDataService);

    TestBed.compileComponents();
  });


  it('should create the Game Component', async(() => {
    const fixture = TestBed.createComponent(MyFavoriteGameComponent);
    const comp = fixture.debugElement.componentInstance;
    expect(comp).toBeTruthy();
  }));

  it('should get a fresh Deck!', async(() => {
    const fixture = TestBed.createComponent(MyFavoriteGameComponent);
    const comp = fixture.debugElement.componentInstance;
    var deck = comp.appDataService.getDeck();
	expect(deck.shuffled).toEqual(true);
  }));

 
});
