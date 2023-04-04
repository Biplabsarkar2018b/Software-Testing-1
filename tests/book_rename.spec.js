import { test, expect } from "@playwright/test";

test("Book Rename Test", async ({ page }) => {
  const title = "The subtle art of not giving a fuck";
  const newTitle = "Game Of Thrones";
  const newAuthor = "G. RR M.";
  const author = "Mark Mansos";
  await page.goto("https://react-book-management-app.netlify.app");
  // await page.pause();
  await page.click("text=Add Book");
  await page.fill(
    "input[name=bookname]",
    "The subtle art of not giving a fuck"
  );
  await page.fill("input[name=author]", "Mark Mansos");
  await page.fill("input[name=quantity]", "1");
  await page.fill("input[name=price]", "100");

  await page.click("text=Submit");
//   await page.pause()

  await page.click('text=Edit');
  await page.fill(
    "input[name=bookname]",
    newTitle
  );
  await page.fill("input[name=author]", newAuthor);
  await page.click('text=Submit');
  const tableDiv = await page.locator(".book-list");
  const lastChild = await tableDiv.last();
  const titleDiv = await lastChild.first();
  //getting the title-------------------
  const tit = await titleDiv.locator(".book-title");
  //getting the author---------------------
  const aut = await titleDiv.locator('.book-details').locator('div:first-child');
  // printing the author name------------
  // console.log(await aut.textContent());
  //checking the author-------------
  expect((await aut.innerText()).includes(newAuthor));
  //checking the title--------------
  expect((await tit.innerText()).includes(newTitle));
});
