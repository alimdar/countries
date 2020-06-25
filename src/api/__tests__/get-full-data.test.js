import getFullCountryData from "../../__mocks__/full-data";
test("Should get full data for a country", () => {
  expect.assertions(4);
  return getFullCountryData('Americas').then((res) => {
    expect(res.name).toBe('Isle of Man');
    expect(res.holidays.length).toBe(10);
    expect(res.holidays[0].name).toBe('New Year\'s Day');
    expect(res.holidays[0].date).toBeDefined();
  })
});
