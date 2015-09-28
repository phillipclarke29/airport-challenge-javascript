describe('Javabuzz', function() {

  var javabuzz;

  beforeEach(function() {

    javabuzz = new Javabuzz();
  });


  describe('knows when a number is', function() {

    it('divisible by 3', function() {
      expect(javabuzz.isDivisibleByThree(3)).toBe(true);
    });

    it('divisible by 5', function() {
      expect(javabuzz.isDivisibleByFive(5)).toBe(true);
    });

    it('divisible by 15', function() {
      expect(javabuzz.isDivisibleByFifteen(15)).toBe(true);
    });

  });

  describe('knows when a number NOT', function() {

    it('divisible by 3', function() {
      expect(javabuzz.isDivisibleByThree(1)).toBe(false);
    });

    it('divisible by 5', function() {
      expect(javabuzz.isDivisibleByFive(3)).toBe(false);
    });

    it('divisible by 15', function() {
      expect(javabuzz.isDivisibleByFifteen(13)).toBe(false);
    });

  });

  describe('when playing, gives', function() {

    it('"Java" when a number is divisible by 3', function() {
      expect(javabuzz.says(3)).toEqual("Java");
    });

    it('"Buzz" when a number is divisible by 5', function() {
      expect(javabuzz.says(5)).toEqual("Buzz");
    });

    it('"JavaBuzz" when a number is divisible by 15', function() {
      expect(javabuzz.says(15)).toEqual("JavaBuzz");
    });

    it('the number if it is not divisible by 3 or 5', function() {
      expect(javabuzz.says(4)).toEqual("4");
    });
  });



});
