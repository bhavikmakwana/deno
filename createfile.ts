const enocoder = new TextEncoder();

const greeting = enocoder.encode("Jai Swaminarayan \nDasNaDas");

await Deno.writeFile("jss.txt", greeting);
