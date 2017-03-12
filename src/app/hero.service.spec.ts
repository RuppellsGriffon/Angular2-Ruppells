import { HeroService } from './hero.service';
import { Hero } from './Hero';

describe('Hero Service Test', () => {

    let service: HeroService;

    beforeEach(() => {
        service = new HeroService();
    });

    afterEach(() => {

        service = null;

    });

    it('should return promise', () => {
        expect(service.getHeroes()).toEqual(jasmine.any(Promise));
    });

    it('promise should resolve only heroes', () => {
        service
            .getHeroes()
            .then((heroes) => {
                expect(heroes[0]).toEqual(jasmine.any(Hero));
            });
    });

});