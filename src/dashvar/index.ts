import { buildCss } from "./build-css";
import { buildSnippets } from "./build-vs-code-snippets";

function main() {
  console.log("Generating CSS variables...");
  buildCss();

  console.log("Generating VSCode Snippets...");
  buildSnippets();
}

main();
