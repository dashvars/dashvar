import fs from "fs";
import path from "path";
import { Variable } from "./types";
import { variables } from "./variables";

type Snippets = {
  [key: string]: Snippet;
};

type Snippet = {
  prefix: string;
  body: string[];
  description: string;
};

const getValueDescription = (variable: Variable): string => {
  if (variable.equivalent !== variable.value) {
    return `${variable.value} / ${variable.equivalent}`;
  }
  return variable.value;
};

/* 
  Generate snippets object in the following shape:
  "Spacing 5 (1.25rem / 20px)": {
    "prefix": ["--s-5"],
    "body": ["var(--s-5)"],
    "description": "Spacing 5 (1.25rem / 20px)"
  }
*/
export function generateVsCodeSnippets(): Snippets {
  let snippets: Snippets = {};

  variables.forEach((variable) => {
    const name = `${variable.name} (${getValueDescription(variable)})`;
    snippets[name] = {
      prefix: `${variable.key}`,
      body: [`var(${variable.key})`],
      description: name,
    };
  });

  return snippets;
}

export function buildSnippets() {
  const snippetsFolder = path.join(
    __dirname,
    "..",
    "..",
    "vs-code-tailvars-snippets",
    "snippets"
  );
  fs.mkdir(snippetsFolder, () => {});

  const snippetsPath = path.join(snippetsFolder, "snippets.code-snippets");
  const snippets = generateVsCodeSnippets();
  fs.writeFileSync(snippetsPath, JSON.stringify(snippets, null, 2));
}
