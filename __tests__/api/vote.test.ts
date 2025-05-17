describe("Merlinfest API - Vote", () => {
  let user: any;

  beforeAll(async () => {
    const createUserRes = await fetch("http://localhost:3000/api/user", {
      method: "POST",
      body: JSON.stringify({ name: "Test User", email: "test@example.com" }),
      headers: { "Content-Type": "application/json" },
    });

    user = await createUserRes.json();
    expect(createUserRes.ok).toBe(true);
    expect(user.id).toBeDefined();
  });

  it("should create a vote for a user", async () => {
    const createVoteRes = await fetch("http://localhost:3000/api/vote", {
      method: "POST",
      body: JSON.stringify({
        userId: user.id,
        theme: "fantasy",
      }),
      headers: { "Content-Type": "application/json" },
    });

    if (!createVoteRes.ok) {
      const error = await createVoteRes.text();
      console.error("Vote creation failed:", error);
    }

    expect(createVoteRes.ok).toBe(true);

    const vote = await createVoteRes.json();
    expect(vote).toHaveProperty("id");
    expect(vote).toHaveProperty("userId", user.id);
    expect(vote).toHaveProperty("theme", "fantasy");
  });
});
