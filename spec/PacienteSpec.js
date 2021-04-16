describe("Paciente", function() {

  it("Deve calcular o IMC do Paciente", function () {
    
    var guilherme = new Paciente("Guilherme", 28, 72, 1.82);

    expect(guilherme.imc()).toEqual(72 / (1.82 * 1.82));
  });

  it("Deve mostrar batimentos cardiacos", function() {
    var guilherme = new Paciente("Guilherme", 28, 72, 1.82);

    expect(guilherme.batimentos()).toEqual(28 * 365 * 24 * 60 * 80);
  });
});