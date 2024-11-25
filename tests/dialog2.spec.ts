import { test, expect } from "@playwright/test";

test("Dialog 2: no deferred rendering", async ({ page }) => {
  let hasDialog = false;
  page.on("dialog", (dialog) => {
    hasDialog = true;
    dialog.accept();
  });

  await page.goto("http://localhost:5173/");
  await page.getByRole("button", { name: "Show 2" }).click();
  await page.getByRole("button", { name: "Dialog 2" }).click();

  expect(hasDialog).toBeTruthy();
});
