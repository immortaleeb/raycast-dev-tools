import { GeneratedContent } from "./GeneratedContent";
import { Clipboard } from "@raycast/api";

export default function Base64Encode() {
  return <GeneratedContent generate={() => Clipboard.read().then((content) => atob(content.text))} />;
}
