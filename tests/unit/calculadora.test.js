const calculadora = require("../../models/calculadora.js");

test("Somar 2 + 2 deveria retornar 4", () => {
  const resultado = calculadora.somar(2, 2);
  expect(resultado).toBe(4);
});

test("Somar 100 + 5 deveria retornar 105", () => {
  const resultado = calculadora.somar(100, 5);
  expect(resultado).toBe(105);
});

test("Somar 'banana' + 5 deveria retornar 'Erro'", () => {
  const resultado = calculadora.somar("banana", 5);
  expect(resultado).toBe("Erro");
});

test("Somar usando apenas 1 número deveria retornar 'Erro'", () => {
  const resultado = calculadora.somar(5);
  expect(resultado).toBe("Erro");
});
