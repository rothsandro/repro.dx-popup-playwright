import { test, expect } from "@playwright/test";

test("Dialog 3: no deferred rendering + no animation", async ({ page }) => {
  let hasDialog = false;
  page.on("dialog", (dialog) => {
    hasDialog = true;
    dialog.accept();
  });

  await page.goto("http://localhost:5173/");
  await page.getByRole("button", { name: "Show 3" }).click();
  await page.getByRole("button", { name: "Dialog 3" }).click();

  expect(hasDialog).toBeTruthy();
});
