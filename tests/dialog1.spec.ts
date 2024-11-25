import { test, expect } from "@playwright/test";

test("Dialog 1: default", async ({ page }) => {
  let hasDialog = false;
  page.on("dialog", (dialog) => {
    hasDialog = true;
    dialog.accept();
  });

  await page.goto("http://localhost:5173/");
  await page.getByRole("button", { name: "Show 1" }).click();
  await page.getByRole("button", { name: "Dialog 1" }).click();

  expect(hasDialog).toBeTruthy();
});
