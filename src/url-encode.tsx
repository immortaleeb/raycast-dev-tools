import { GeneratedContent } from "./GeneratedContent";
import { Clipboard } from "@raycast/api";

export default function URLEncode() {
  return <GeneratedContent generate={() => Clipboard.read().then((content) => encodeURIComponent(content.text))} />;
}
