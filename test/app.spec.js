//testing basico 
function suma(a, b) {
  return a + b;
}

test('sumar 1 + 2 es igual a 3', () => {
  expect(suma(1, 2)).toBe(3);
});  
//testing por objeto
test('asignacion de objeto', () => {
  const data = {uno: 1};
  data['dos'] = 2;
  expect(data).toEqual({uno: 1, dos: 2});
});