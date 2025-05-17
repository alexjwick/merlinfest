describe("Merlinfest API - Interaction", () => {
  it("should create an interaction", async () => {
    // 1. Create a user first (since interaction needs userId)
    const createUserRes = await fetch("http://localhost:3000/api/user", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nickname: "InteractionTester" }),
    });

    expect(createUserRes.ok).toBe(true);

    const user = await createUserRes.json();

    // 2. Post an interaction for that user
    const createInteractionRes = await fetch(
      "http://localhost:3000/api/interaction",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userId: user.id,
          actionType: "vote",
          details: { test: "This is a test interaction" },
        }),
      }
    );

    expect(createInteractionRes.ok).toBe(true);

    const interaction = await createInteractionRes.json();

    // 3. Validate returned interaction
    expect(interaction).toMatchObject({
      userId: user.id,
      actionType: "vote",
    });

    // Optional: Check that details match
    expect(interaction.details).toMatchObject({
      test: "This is a test interaction",
    });
  });
});
