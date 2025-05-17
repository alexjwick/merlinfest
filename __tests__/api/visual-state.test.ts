describe("Merlinfest API - Visual State", () => {
  it("should create or update and fetch the visual state", async () => {
    // 1. Set a visual state via POST
    const createStateRes = await fetch(
      "http://localhost:3000/api/visual-state",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          activeTheme: "Cosmic Merlin",
          speed: 1.5,
          intensity: 0.8,
          colorScheme: "galaxy",
          effectIds: ["stars", "nebula", "wizard-cat"],
        }),
      }
    );

    expect(createStateRes.ok).toBe(true);

    const state = await createStateRes.json();

    expect(state).toMatchObject({
      activeTheme: "Cosmic Merlin",
      speed: 1.5,
      intensity: 0.8,
      colorScheme: "galaxy",
    });

    expect(Array.isArray(state.effectIds)).toBe(true);
    expect(state.effectIds).toEqual(
      expect.arrayContaining(["stars", "nebula", "wizard-cat"])
    );

    // 2. Fetch the visual state via GET and ensure it matches what we set
    const getStateRes = await fetch("http://localhost:3000/api/visual-state");
    expect(getStateRes.ok).toBe(true);

    const fetchedState = await getStateRes.json();

    expect(fetchedState).toMatchObject({
      activeTheme: "Cosmic Merlin",
      speed: 1.5,
      intensity: 0.8,
      colorScheme: "galaxy",
    });

    expect(Array.isArray(fetchedState.effectIds)).toBe(true);
    expect(fetchedState.effectIds).toEqual(
      expect.arrayContaining(["stars", "nebula", "wizard-cat"])
    );
  });
});
