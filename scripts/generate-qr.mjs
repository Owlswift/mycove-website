import QRCode from "qrcode";
import { writeFile } from "node:fs/promises";

const url = "https://mycove.ng/get";

const svg = await QRCode.toString(url, {
  type: "svg",
  margin: 1,
  width: 400,
  color: { dark: "#183d32", light: "#00000000" },
});

await writeFile(new URL("../public/images/app-qr.svg", import.meta.url), svg);
console.log(`QR code generated for ${url}`);
