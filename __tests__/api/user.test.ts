// No import needed if you're on Node 18+
describe("Merlinfest API", () => {
  it("should create and fetch a user", async () => {
    const createRes = await fetch("http://localhost:3000/api/user", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nickname: "TestJestUser" }),
    });

    expect(createRes.ok).toBe(true);

    const user = await createRes.json();
    expect(user.nickname).toBe("TestJestUser");

    const fetchRes = await fetch("http://localhost:3000/api/user");
    expect(fetchRes.ok).toBe(true);

    const users = await fetchRes.json();
    expect(users).toEqual(
      expect.arrayContaining([expect.objectContaining({ id: user.id })])
    );
  });
});
