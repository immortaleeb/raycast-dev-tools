import { v4 as uuidv4 } from "uuid";
import { GeneratedContent } from "./GeneratedContent";

export default function GenerateUuid() {
  return <GeneratedContent generate={async () => uuidv4()} />;
}
