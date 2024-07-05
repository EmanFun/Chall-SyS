import { promises as fs } from "fs";
import { Profile } from "@/@types/global";

interface Path {
  [keyof: string]: string;
}

const dataFilePaths: Path = {
  profile: "./public/myProfile.json",

};

async function getData(
  dataType: string
): Promise< Profile | undefined> {
  if (!dataFilePaths.hasOwnProperty(dataType)) {
    throw new Error(`Invalid Data type: ${dataType} `);
  }

  const dataFilePath = dataFilePaths[dataType];
  const dataString = await fs.readFile(dataFilePath, "utf8");
  const data = JSON.parse(dataString);

  console.log(data);

  switch (dataType) {
    case "profile":
      return data;

    default:
      break;
  }
}


export { getData };
