import { Action, ActionPanel, Form } from "@raycast/api";
import { useState } from "react";
import { GeneratedContent } from "./GeneratedContent";
import { v4 as uuidv4 } from "uuid";

function generateUuids(count: number) {
  return Array.from({length: count}, () => uuidv4()).join("\n");
}

export default function GenerateUuids() {
  const [count, setCount] = useState(0);

  return count <= 0 ? (
    <Form
      actions={
        <ActionPanel>
          <Action.SubmitForm title="Generate Uuids" onSubmit={({count}) => setCount(parseInt(count))} />
        </ActionPanel>
      }
    >
      <Form.TextField id="count" defaultValue="10" />
    </Form>
  ) : <GeneratedContent generate={async () => generateUuids(count)} />;
}
