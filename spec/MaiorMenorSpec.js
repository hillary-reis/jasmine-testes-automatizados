describe("MaiorMenor", function() {
  it("Deve entender numeros em ordem nao sequencial", function() {

    var algoritmo = new MaiorMenor();

    algoritmo.encontra([5,15,7,9]);

    expect(algoritmo.pegaMenor()).toEqual(5);
    expect(algoritmo.pegaMaior()).toEqual(15);

  });

  it ("Deve entender numeros em order crescente", function () {
    
    var algoritmo = new MaiorMenor;

    algoritmo.encontra([5,6,7,8]);

    expect(algoritmo.pegaMenor()).toEqual(5);
    expect(algoritmo.pegaMaior()).toEqual(8);
  });

  it ("Deve entender numeros em order decrescente", function () {
    
    var algoritmo = new MaiorMenor;

    algoritmo.encontra([8,7,6,5]);

    expect(algoritmo.pegaMenor()).toEqual(5);
    expect(algoritmo.pegaMaior()).toEqual(8);
  });

  it("Deve entender array com um elemento", function() {

    var algoritmo = new MaiorMenor();

    algoritmo.encontra([9]);

    expect(algoritmo.pegaMenor()).toEqual(9);
    expect(algoritmo.pegaMaior()).toEqual(9);
  });
});
