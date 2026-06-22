import fs from "fs";
import path from "path";
import { parse } from "csv-parse/sync";
import Rsvp from "@/components/Rsvp";

async function getCSVData() {
  const filePath = path.join(process.cwd(), "./src/lib/guests.csv");
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const records = parse(fileContent, { skip_empty_lines: true });
  return records;
}

export default async function Page() {
  const data = await getCSVData();

  return <Rsvp data={data} />;
}
