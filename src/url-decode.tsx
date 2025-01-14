import { GeneratedContent } from "./GeneratedContent";
import { Clipboard } from "@raycast/api";

export default function URLDecode() {
  return <GeneratedContent generate={() => Clipboard.read().then((content) => decodeURIComponent(content.text))} />;
}
