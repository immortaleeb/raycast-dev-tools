import { Action, ActionPanel, Detail, useNavigation } from "@raycast/api";
import { useEffect, useState } from "react";

interface GeneratedContentProps {
  generate: () => Promise<string>;
}

export function GeneratedContent({ generate }: GeneratedContentProps) {
  const { pop } = useNavigation();
  const [content, setContent] = useState<string | undefined>(undefined);
  useEffect(() => {
    generate().then(content => setContent(content))
  }, [generate]);

  return content ? (
    <Detail
      markdown={content}
      actions={
        <ActionPanel>
          <Action.CopyToClipboard title="Copy to Clipboard" content={content} onCopy={() => pop()} />
          <Action.Paste title="Paste in Active Window" content={content} onPaste={() => pop()} />
        </ActionPanel>
      }
    />
  ) : <Detail markdown={"loading..."} />;
}