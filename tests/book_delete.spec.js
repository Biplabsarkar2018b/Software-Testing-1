import { test, expect } from "@playwright/test";
import { selectors } from "@playwright/test";

test("Book Delete Test", async ({ page }) => {
  const title = "The subtle art of not giving a fuck";
  const author = "Mark Mansos";
  await page.goto("https://react-book-management-app.netlify.app");
  var bookCardCount = 0;
  // await page.pause();

  //creating book 1-----------------
  await page.click("text=Add Book");
  await page.fill(
    "input[name=bookname]",
    "The subtle art of not giving a fuck"
  );
  await page.fill("input[name=author]", "Mark Mansos");
  await page.fill("input[name=quantity]", "1");
  await page.fill("input[name=price]", "100");

  await page.click("text=Submit");
  bookCardCount = 1;


  //creating book 2---------------
  await page.click("text=Add Book");
  await page.fill(
    "input[name=bookname]",
    "The subtle art of not giving a fuck"
  );
  await page.fill("input[name=author]", "Mark Mansos");
  await page.fill("input[name=quantity]", "1");
  await page.fill("input[name=price]", "100");

  await page.click("text=Submit");
  bookCardCount = 2;


  //creating book 3---------------

  await page.click("text=Add Book");
  await page.fill(
    "input[name=bookname]",
    "The subtle art of not giving a fuck"
  );
  await page.fill("input[name=author]", "Mark Mansos");
  await page.fill("input[name=quantity]", "1");
  await page.fill("input[name=price]", "100");

  await page.click("text=Submit");
  bookCardCount = 3;




    // console.log('Before Delete:');
  var allele = await page.locator('.book-list>div').count();
  expect(await allele.valueOf(bookCardCount))
//   console.log(allele);
  await page.click('text=Delete');
//   console.log('After Deleting');
  allele = await page.locator('.book-list>div').count();
  expect(await allele.valueOf(bookCardCount));
//   console.log(allele);


  //no of child divs inside tablediv-----------
//   const childDivs = await Array.from(tableDiv.querySelectorAll('div'));
//   console.log(await childDivs.length);

//   //getting the title-------------------
//   const tit = await titleDiv.locator(".book-title");
//   //getting the author---------------------
//   const aut = await titleDiv.locator('.book-details').locator('div:first-child');
//   // printing the author name------------
//   // console.log(await aut.textContent());
//   //checking the author-------------
//   expect((await aut.innerText()).includes(author));
//   //checking the title--------------
//   expect((await tit.innerText()).includes(title));
});
