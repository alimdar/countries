import getCountriesPerRegion from "../../__mocks__/countries";
test("should get countries for americas region", () => {
    expect.assertions(3);
    return getCountriesPerRegion('Americas')
      .then((res) => {
          expect(res.length).toBe(3);
          expect(res[0].name).toBe("One");
          expect(res[2].name).toBe("Three")
      })
});
test("should retur error for wrong region", () => {
    expect.assertions(1);
    return expect(getCountriesPerRegion('wrong'))
      .rejects.toEqual({error: "Error fetching countries"})
})
