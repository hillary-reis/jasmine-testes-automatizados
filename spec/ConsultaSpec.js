describe("Consulta", function () {

  var guilherme;

  beforeEach(function setUp() {
    guilherme = new PacienteBuilder().constroi();
  });

  describe("Consultas de retorno", function() {
    it("Nao deve cobrar nada se a consulta for retorno", function () {
      var consulta = new Consulta(guilherme, [], true, true);
  
      expect(consulta.preco()).toEqual(0);
    });
  });

  describe("Consultas particulares", function () {
    it("Deve dobrar o preco se a consulta for particular", function () {
      var consulta = new Consulta(guilherme, ["proc1", "proc2"], true, false);
  
      expect(consulta.preco()).toEqual(50 * 2);
    });

    it("Deve cobrar preos expecificos e dobrar o valor para consulta particular", function() {
      var consulta = new Consulta(guilherme, ["proc1", "raio-x", "proc2", "gesso"], true, false);
  
      expect(consulta.preco()).toEqual((25 + 55 + 25 + 32) * 2);
    });
  });

  describe("Consultas gerais", function () {
    it("Deve cobrar 25 reais por cada procedimento comum feito", function () {
      var consulta = new Consulta(guilherme, ["proc1", "proc2"], false, false);
  
      expect(consulta.preco()).toEqual(50);
    });
  
    it("Deve cobrar preos expecificos dependendo do procedimento", function() {
      var consulta = new Consulta(guilherme, ["proc1", "raio-x", "proc2", "gesso"], false, false);
  
      expect(consulta.preco()).toEqual(25 + 55 + 25 + 32);
    });
  });

});