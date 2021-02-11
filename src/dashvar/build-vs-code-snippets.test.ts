import { generateVsCodeSnippets } from "./build-vs-code-snippets";

describe("VS Code Snippets", () => {
  let snippets: any;
  beforeAll(() => {
    snippets = generateVsCodeSnippets();
  });

  it("builds one snippet correctly", () => {
    const snippet = snippets["Spacing 5 (1.25rem)"];
    expect(snippet).toMatchInlineSnapshot(`undefined`);
  });

  it("builds the snippets correctly", () => {
    expect(snippets).toMatchInlineSnapshot(`
      Object {
        "Border Radius 0 (0px)": Object {
          "body": Array [
            "var(--border-radius-0)",
          ],
          "description": "Border Radius 0 (0px)",
          "prefix": "--border-radius-0",
        },
        "Border Radius 1 (0.125rem / 2px)": Object {
          "body": Array [
            "var(--border-radius-1)",
          ],
          "description": "Border Radius 1 (0.125rem / 2px)",
          "prefix": "--border-radius-1",
        },
        "Border Radius 2 (0.25rem / 4px)": Object {
          "body": Array [
            "var(--border-radius-2)",
          ],
          "description": "Border Radius 2 (0.25rem / 4px)",
          "prefix": "--border-radius-2",
        },
        "Border Radius 3 (0.5rem / 8px)": Object {
          "body": Array [
            "var(--border-radius-3)",
          ],
          "description": "Border Radius 3 (0.5rem / 8px)",
          "prefix": "--border-radius-3",
        },
        "Border Radius 4 (0.75rem / 12px)": Object {
          "body": Array [
            "var(--border-radius-4)",
          ],
          "description": "Border Radius 4 (0.75rem / 12px)",
          "prefix": "--border-radius-4",
        },
        "Border Radius 5 (1rem / 16px)": Object {
          "body": Array [
            "var(--border-radius-5)",
          ],
          "description": "Border Radius 5 (1rem / 16px)",
          "prefix": "--border-radius-5",
        },
        "Border Radius 6 (1.5rem / 24px)": Object {
          "body": Array [
            "var(--border-radius-6)",
          ],
          "description": "Border Radius 6 (1.5rem / 24px)",
          "prefix": "--border-radius-6",
        },
        "Border Radius 7 (2rem / 32px)": Object {
          "body": Array [
            "var(--border-radius-7)",
          ],
          "description": "Border Radius 7 (2rem / 32px)",
          "prefix": "--border-radius-7",
        },
        "Border Radius 8 (3rem / 48px)": Object {
          "body": Array [
            "var(--border-radius-8)",
          ],
          "description": "Border Radius 8 (3rem / 48px)",
          "prefix": "--border-radius-8",
        },
        "Border Radius 9 (4rem / 64px)": Object {
          "body": Array [
            "var(--border-radius-9)",
          ],
          "description": "Border Radius 9 (4rem / 64px)",
          "prefix": "--border-radius-9",
        },
        "Border Radius Full (9999px)": Object {
          "body": Array [
            "var(--border-radius-full)",
          ],
          "description": "Border Radius Full (9999px)",
          "prefix": "--border-radius-full",
        },
        "Border Width 0 (0px)": Object {
          "body": Array [
            "var(--border-width-0)",
          ],
          "description": "Border Width 0 (0px)",
          "prefix": "--border-width-0",
        },
        "Border Width 1 (1px)": Object {
          "body": Array [
            "var(--border-width-1)",
          ],
          "description": "Border Width 1 (1px)",
          "prefix": "--border-width-1",
        },
        "Border Width 2 (0.125rem / 2px)": Object {
          "body": Array [
            "var(--border-width-2)",
          ],
          "description": "Border Width 2 (0.125rem / 2px)",
          "prefix": "--border-width-2",
        },
        "Border Width 3 (0.25rem / 4px)": Object {
          "body": Array [
            "var(--border-width-3)",
          ],
          "description": "Border Width 3 (0.25rem / 4px)",
          "prefix": "--border-width-3",
        },
        "Border Width 4 (0.5rem / 8px)": Object {
          "body": Array [
            "var(--border-width-4)",
          ],
          "description": "Border Width 4 (0.5rem / 8px)",
          "prefix": "--border-width-4",
        },
        "Border Width 5 (0.75rem / 12px)": Object {
          "body": Array [
            "var(--border-width-5)",
          ],
          "description": "Border Width 5 (0.75rem / 12px)",
          "prefix": "--border-width-5",
        },
        "Border Width 6 (1rem / 16px)": Object {
          "body": Array [
            "var(--border-width-6)",
          ],
          "description": "Border Width 6 (1rem / 16px)",
          "prefix": "--border-width-6",
        },
        "Box Shadow 0 (0 0 #0000)": Object {
          "body": Array [
            "var(--box-shadow-0)",
          ],
          "description": "Box Shadow 0 (0 0 #0000)",
          "prefix": "--box-shadow-0",
        },
        "Box Shadow 1 (0 1px 2px 0 rgba(0, 0, 0, 0.05))": Object {
          "body": Array [
            "var(--box-shadow-1)",
          ],
          "description": "Box Shadow 1 (0 1px 2px 0 rgba(0, 0, 0, 0.05))",
          "prefix": "--box-shadow-1",
        },
        "Box Shadow 2 (0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06))": Object {
          "body": Array [
            "var(--box-shadow-2)",
          ],
          "description": "Box Shadow 2 (0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06))",
          "prefix": "--box-shadow-2",
        },
        "Box Shadow 3 (0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06))": Object {
          "body": Array [
            "var(--box-shadow-3)",
          ],
          "description": "Box Shadow 3 (0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06))",
          "prefix": "--box-shadow-3",
        },
        "Box Shadow 4 (0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05))": Object {
          "body": Array [
            "var(--box-shadow-4)",
          ],
          "description": "Box Shadow 4 (0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05))",
          "prefix": "--box-shadow-4",
        },
        "Box Shadow 5 (0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04))": Object {
          "body": Array [
            "var(--box-shadow-5)",
          ],
          "description": "Box Shadow 5 (0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04))",
          "prefix": "--box-shadow-5",
        },
        "Box Shadow 6 (0 25px 50px -12px rgba(0, 0, 0, 0.25))": Object {
          "body": Array [
            "var(--box-shadow-6)",
          ],
          "description": "Box Shadow 6 (0 25px 50px -12px rgba(0, 0, 0, 0.25))",
          "prefix": "--box-shadow-6",
        },
        "Box Shadow Inner (inset 0 2px 4px 0 rgba(0, 0, 0, 0.06))": Object {
          "body": Array [
            "var(--box-shadow-inner)",
          ],
          "description": "Box Shadow Inner (inset 0 2px 4px 0 rgba(0, 0, 0, 0.06))",
          "prefix": "--box-shadow-inner",
        },
        "Color Black (#000000)": Object {
          "body": Array [
            "var(--black)",
          ],
          "description": "Color Black (#000000)",
          "prefix": "--black",
        },
        "Color Blue 100 (#dbeafe)": Object {
          "body": Array [
            "var(--blue-100)",
          ],
          "description": "Color Blue 100 (#dbeafe)",
          "prefix": "--blue-100",
        },
        "Color Blue 200 (#bfdbfe)": Object {
          "body": Array [
            "var(--blue-200)",
          ],
          "description": "Color Blue 200 (#bfdbfe)",
          "prefix": "--blue-200",
        },
        "Color Blue 300 (#93c5fd)": Object {
          "body": Array [
            "var(--blue-300)",
          ],
          "description": "Color Blue 300 (#93c5fd)",
          "prefix": "--blue-300",
        },
        "Color Blue 400 (#60a5fa)": Object {
          "body": Array [
            "var(--blue-400)",
          ],
          "description": "Color Blue 400 (#60a5fa)",
          "prefix": "--blue-400",
        },
        "Color Blue 50 (#eff6ff)": Object {
          "body": Array [
            "var(--blue-50)",
          ],
          "description": "Color Blue 50 (#eff6ff)",
          "prefix": "--blue-50",
        },
        "Color Blue 500 (#3b82f6)": Object {
          "body": Array [
            "var(--blue-500)",
          ],
          "description": "Color Blue 500 (#3b82f6)",
          "prefix": "--blue-500",
        },
        "Color Blue 600 (#2563eb)": Object {
          "body": Array [
            "var(--blue-600)",
          ],
          "description": "Color Blue 600 (#2563eb)",
          "prefix": "--blue-600",
        },
        "Color Blue 700 (#1d4ed8)": Object {
          "body": Array [
            "var(--blue-700)",
          ],
          "description": "Color Blue 700 (#1d4ed8)",
          "prefix": "--blue-700",
        },
        "Color Blue 800 (#1e40af)": Object {
          "body": Array [
            "var(--blue-800)",
          ],
          "description": "Color Blue 800 (#1e40af)",
          "prefix": "--blue-800",
        },
        "Color Blue 900 (#1e3a8a)": Object {
          "body": Array [
            "var(--blue-900)",
          ],
          "description": "Color Blue 900 (#1e3a8a)",
          "prefix": "--blue-900",
        },
        "Color Gray 100 (#f3f4f6)": Object {
          "body": Array [
            "var(--gray-100)",
          ],
          "description": "Color Gray 100 (#f3f4f6)",
          "prefix": "--gray-100",
        },
        "Color Gray 200 (#e5e7eb)": Object {
          "body": Array [
            "var(--gray-200)",
          ],
          "description": "Color Gray 200 (#e5e7eb)",
          "prefix": "--gray-200",
        },
        "Color Gray 300 (#d1d5db)": Object {
          "body": Array [
            "var(--gray-300)",
          ],
          "description": "Color Gray 300 (#d1d5db)",
          "prefix": "--gray-300",
        },
        "Color Gray 400 (#9ca3af)": Object {
          "body": Array [
            "var(--gray-400)",
          ],
          "description": "Color Gray 400 (#9ca3af)",
          "prefix": "--gray-400",
        },
        "Color Gray 50 (#f9fafb)": Object {
          "body": Array [
            "var(--gray-50)",
          ],
          "description": "Color Gray 50 (#f9fafb)",
          "prefix": "--gray-50",
        },
        "Color Gray 500 (#6b7280)": Object {
          "body": Array [
            "var(--gray-500)",
          ],
          "description": "Color Gray 500 (#6b7280)",
          "prefix": "--gray-500",
        },
        "Color Gray 600 (#4b5563)": Object {
          "body": Array [
            "var(--gray-600)",
          ],
          "description": "Color Gray 600 (#4b5563)",
          "prefix": "--gray-600",
        },
        "Color Gray 700 (#374151)": Object {
          "body": Array [
            "var(--gray-700)",
          ],
          "description": "Color Gray 700 (#374151)",
          "prefix": "--gray-700",
        },
        "Color Gray 800 (#1f2937)": Object {
          "body": Array [
            "var(--gray-800)",
          ],
          "description": "Color Gray 800 (#1f2937)",
          "prefix": "--gray-800",
        },
        "Color Gray 900 (#111827)": Object {
          "body": Array [
            "var(--gray-900)",
          ],
          "description": "Color Gray 900 (#111827)",
          "prefix": "--gray-900",
        },
        "Color Green 100 (#d1fae5)": Object {
          "body": Array [
            "var(--green-100)",
          ],
          "description": "Color Green 100 (#d1fae5)",
          "prefix": "--green-100",
        },
        "Color Green 200 (#a7f3d0)": Object {
          "body": Array [
            "var(--green-200)",
          ],
          "description": "Color Green 200 (#a7f3d0)",
          "prefix": "--green-200",
        },
        "Color Green 300 (#6ee7b7)": Object {
          "body": Array [
            "var(--green-300)",
          ],
          "description": "Color Green 300 (#6ee7b7)",
          "prefix": "--green-300",
        },
        "Color Green 400 (#34d399)": Object {
          "body": Array [
            "var(--green-400)",
          ],
          "description": "Color Green 400 (#34d399)",
          "prefix": "--green-400",
        },
        "Color Green 50 (#ecfdf5)": Object {
          "body": Array [
            "var(--green-50)",
          ],
          "description": "Color Green 50 (#ecfdf5)",
          "prefix": "--green-50",
        },
        "Color Green 500 (#10b981)": Object {
          "body": Array [
            "var(--green-500)",
          ],
          "description": "Color Green 500 (#10b981)",
          "prefix": "--green-500",
        },
        "Color Green 600 (#059669)": Object {
          "body": Array [
            "var(--green-600)",
          ],
          "description": "Color Green 600 (#059669)",
          "prefix": "--green-600",
        },
        "Color Green 700 (#047857)": Object {
          "body": Array [
            "var(--green-700)",
          ],
          "description": "Color Green 700 (#047857)",
          "prefix": "--green-700",
        },
        "Color Green 800 (#065f46)": Object {
          "body": Array [
            "var(--green-800)",
          ],
          "description": "Color Green 800 (#065f46)",
          "prefix": "--green-800",
        },
        "Color Green 900 (#064e3b)": Object {
          "body": Array [
            "var(--green-900)",
          ],
          "description": "Color Green 900 (#064e3b)",
          "prefix": "--green-900",
        },
        "Color Indigo 100 (#e0e7ff)": Object {
          "body": Array [
            "var(--indigo-100)",
          ],
          "description": "Color Indigo 100 (#e0e7ff)",
          "prefix": "--indigo-100",
        },
        "Color Indigo 200 (#c7d2fe)": Object {
          "body": Array [
            "var(--indigo-200)",
          ],
          "description": "Color Indigo 200 (#c7d2fe)",
          "prefix": "--indigo-200",
        },
        "Color Indigo 300 (#a5b4fc)": Object {
          "body": Array [
            "var(--indigo-300)",
          ],
          "description": "Color Indigo 300 (#a5b4fc)",
          "prefix": "--indigo-300",
        },
        "Color Indigo 400 (#818cf8)": Object {
          "body": Array [
            "var(--indigo-400)",
          ],
          "description": "Color Indigo 400 (#818cf8)",
          "prefix": "--indigo-400",
        },
        "Color Indigo 50 (#eef2ff)": Object {
          "body": Array [
            "var(--indigo-50)",
          ],
          "description": "Color Indigo 50 (#eef2ff)",
          "prefix": "--indigo-50",
        },
        "Color Indigo 500 (#6366f1)": Object {
          "body": Array [
            "var(--indigo-500)",
          ],
          "description": "Color Indigo 500 (#6366f1)",
          "prefix": "--indigo-500",
        },
        "Color Indigo 600 (#4f46e5)": Object {
          "body": Array [
            "var(--indigo-600)",
          ],
          "description": "Color Indigo 600 (#4f46e5)",
          "prefix": "--indigo-600",
        },
        "Color Indigo 700 (#4338ca)": Object {
          "body": Array [
            "var(--indigo-700)",
          ],
          "description": "Color Indigo 700 (#4338ca)",
          "prefix": "--indigo-700",
        },
        "Color Indigo 800 (#3730a3)": Object {
          "body": Array [
            "var(--indigo-800)",
          ],
          "description": "Color Indigo 800 (#3730a3)",
          "prefix": "--indigo-800",
        },
        "Color Indigo 900 (#312e81)": Object {
          "body": Array [
            "var(--indigo-900)",
          ],
          "description": "Color Indigo 900 (#312e81)",
          "prefix": "--indigo-900",
        },
        "Color Pink 100 (#fce7f3)": Object {
          "body": Array [
            "var(--pink-100)",
          ],
          "description": "Color Pink 100 (#fce7f3)",
          "prefix": "--pink-100",
        },
        "Color Pink 200 (#fbcfe8)": Object {
          "body": Array [
            "var(--pink-200)",
          ],
          "description": "Color Pink 200 (#fbcfe8)",
          "prefix": "--pink-200",
        },
        "Color Pink 300 (#f9a8d4)": Object {
          "body": Array [
            "var(--pink-300)",
          ],
          "description": "Color Pink 300 (#f9a8d4)",
          "prefix": "--pink-300",
        },
        "Color Pink 400 (#f472b6)": Object {
          "body": Array [
            "var(--pink-400)",
          ],
          "description": "Color Pink 400 (#f472b6)",
          "prefix": "--pink-400",
        },
        "Color Pink 50 (#fdf2f8)": Object {
          "body": Array [
            "var(--pink-50)",
          ],
          "description": "Color Pink 50 (#fdf2f8)",
          "prefix": "--pink-50",
        },
        "Color Pink 500 (#ec4899)": Object {
          "body": Array [
            "var(--pink-500)",
          ],
          "description": "Color Pink 500 (#ec4899)",
          "prefix": "--pink-500",
        },
        "Color Pink 600 (#db2777)": Object {
          "body": Array [
            "var(--pink-600)",
          ],
          "description": "Color Pink 600 (#db2777)",
          "prefix": "--pink-600",
        },
        "Color Pink 700 (#be185d)": Object {
          "body": Array [
            "var(--pink-700)",
          ],
          "description": "Color Pink 700 (#be185d)",
          "prefix": "--pink-700",
        },
        "Color Pink 800 (#9d174d)": Object {
          "body": Array [
            "var(--pink-800)",
          ],
          "description": "Color Pink 800 (#9d174d)",
          "prefix": "--pink-800",
        },
        "Color Pink 900 (#831843)": Object {
          "body": Array [
            "var(--pink-900)",
          ],
          "description": "Color Pink 900 (#831843)",
          "prefix": "--pink-900",
        },
        "Color Purple 100 (#ede9fe)": Object {
          "body": Array [
            "var(--purple-100)",
          ],
          "description": "Color Purple 100 (#ede9fe)",
          "prefix": "--purple-100",
        },
        "Color Purple 200 (#ddd6fe)": Object {
          "body": Array [
            "var(--purple-200)",
          ],
          "description": "Color Purple 200 (#ddd6fe)",
          "prefix": "--purple-200",
        },
        "Color Purple 300 (#c4b5fd)": Object {
          "body": Array [
            "var(--purple-300)",
          ],
          "description": "Color Purple 300 (#c4b5fd)",
          "prefix": "--purple-300",
        },
        "Color Purple 400 (#a78bfa)": Object {
          "body": Array [
            "var(--purple-400)",
          ],
          "description": "Color Purple 400 (#a78bfa)",
          "prefix": "--purple-400",
        },
        "Color Purple 50 (#f5f3ff)": Object {
          "body": Array [
            "var(--purple-50)",
          ],
          "description": "Color Purple 50 (#f5f3ff)",
          "prefix": "--purple-50",
        },
        "Color Purple 500 (#8b5cf6)": Object {
          "body": Array [
            "var(--purple-500)",
          ],
          "description": "Color Purple 500 (#8b5cf6)",
          "prefix": "--purple-500",
        },
        "Color Purple 600 (#7c3aed)": Object {
          "body": Array [
            "var(--purple-600)",
          ],
          "description": "Color Purple 600 (#7c3aed)",
          "prefix": "--purple-600",
        },
        "Color Purple 700 (#6d28d9)": Object {
          "body": Array [
            "var(--purple-700)",
          ],
          "description": "Color Purple 700 (#6d28d9)",
          "prefix": "--purple-700",
        },
        "Color Purple 800 (#5b21b6)": Object {
          "body": Array [
            "var(--purple-800)",
          ],
          "description": "Color Purple 800 (#5b21b6)",
          "prefix": "--purple-800",
        },
        "Color Purple 900 (#4c1d95)": Object {
          "body": Array [
            "var(--purple-900)",
          ],
          "description": "Color Purple 900 (#4c1d95)",
          "prefix": "--purple-900",
        },
        "Color Red 100 (#fee2e2)": Object {
          "body": Array [
            "var(--red-100)",
          ],
          "description": "Color Red 100 (#fee2e2)",
          "prefix": "--red-100",
        },
        "Color Red 200 (#fecaca)": Object {
          "body": Array [
            "var(--red-200)",
          ],
          "description": "Color Red 200 (#fecaca)",
          "prefix": "--red-200",
        },
        "Color Red 300 (#fca5a5)": Object {
          "body": Array [
            "var(--red-300)",
          ],
          "description": "Color Red 300 (#fca5a5)",
          "prefix": "--red-300",
        },
        "Color Red 400 (#f87171)": Object {
          "body": Array [
            "var(--red-400)",
          ],
          "description": "Color Red 400 (#f87171)",
          "prefix": "--red-400",
        },
        "Color Red 50 (#fef2f2)": Object {
          "body": Array [
            "var(--red-50)",
          ],
          "description": "Color Red 50 (#fef2f2)",
          "prefix": "--red-50",
        },
        "Color Red 500 (#ef4444)": Object {
          "body": Array [
            "var(--red-500)",
          ],
          "description": "Color Red 500 (#ef4444)",
          "prefix": "--red-500",
        },
        "Color Red 600 (#dc2626)": Object {
          "body": Array [
            "var(--red-600)",
          ],
          "description": "Color Red 600 (#dc2626)",
          "prefix": "--red-600",
        },
        "Color Red 700 (#b91c1c)": Object {
          "body": Array [
            "var(--red-700)",
          ],
          "description": "Color Red 700 (#b91c1c)",
          "prefix": "--red-700",
        },
        "Color Red 800 (#991b1b)": Object {
          "body": Array [
            "var(--red-800)",
          ],
          "description": "Color Red 800 (#991b1b)",
          "prefix": "--red-800",
        },
        "Color Red 900 (#7f1d1d)": Object {
          "body": Array [
            "var(--red-900)",
          ],
          "description": "Color Red 900 (#7f1d1d)",
          "prefix": "--red-900",
        },
        "Color White (#ffffff)": Object {
          "body": Array [
            "var(--white)",
          ],
          "description": "Color White (#ffffff)",
          "prefix": "--white",
        },
        "Color Yellow 100 (#fef3c7)": Object {
          "body": Array [
            "var(--yellow-100)",
          ],
          "description": "Color Yellow 100 (#fef3c7)",
          "prefix": "--yellow-100",
        },
        "Color Yellow 200 (#fde68a)": Object {
          "body": Array [
            "var(--yellow-200)",
          ],
          "description": "Color Yellow 200 (#fde68a)",
          "prefix": "--yellow-200",
        },
        "Color Yellow 300 (#fcd34d)": Object {
          "body": Array [
            "var(--yellow-300)",
          ],
          "description": "Color Yellow 300 (#fcd34d)",
          "prefix": "--yellow-300",
        },
        "Color Yellow 400 (#fbbf24)": Object {
          "body": Array [
            "var(--yellow-400)",
          ],
          "description": "Color Yellow 400 (#fbbf24)",
          "prefix": "--yellow-400",
        },
        "Color Yellow 50 (#fffbeb)": Object {
          "body": Array [
            "var(--yellow-50)",
          ],
          "description": "Color Yellow 50 (#fffbeb)",
          "prefix": "--yellow-50",
        },
        "Color Yellow 500 (#f59e0b)": Object {
          "body": Array [
            "var(--yellow-500)",
          ],
          "description": "Color Yellow 500 (#f59e0b)",
          "prefix": "--yellow-500",
        },
        "Color Yellow 600 (#d97706)": Object {
          "body": Array [
            "var(--yellow-600)",
          ],
          "description": "Color Yellow 600 (#d97706)",
          "prefix": "--yellow-600",
        },
        "Color Yellow 700 (#b45309)": Object {
          "body": Array [
            "var(--yellow-700)",
          ],
          "description": "Color Yellow 700 (#b45309)",
          "prefix": "--yellow-700",
        },
        "Color Yellow 800 (#92400e)": Object {
          "body": Array [
            "var(--yellow-800)",
          ],
          "description": "Color Yellow 800 (#92400e)",
          "prefix": "--yellow-800",
        },
        "Color Yellow 900 (#78350f)": Object {
          "body": Array [
            "var(--yellow-900)",
          ],
          "description": "Color Yellow 900 (#78350f)",
          "prefix": "--yellow-900",
        },
        "Font Family Mono (ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \\"Liberation Mono\\", \\"Courier New\\", monospace)": Object {
          "body": Array [
            "var(--font-family-mono)",
          ],
          "description": "Font Family Mono (ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \\"Liberation Mono\\", \\"Courier New\\", monospace)",
          "prefix": "--font-family-mono",
        },
        "Font Family Sans (ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \\"Segoe UI\\", Roboto, \\"Helvetica Neue\\", Arial, \\"Noto Sans\\", sans-serif, \\"Apple Color Emoji\\", \\"Segoe UI Emoji\\", \\"Segoe UI Symbol\\", \\"Noto Color Emoji\\")": Object {
          "body": Array [
            "var(--font-family-sans)",
          ],
          "description": "Font Family Sans (ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \\"Segoe UI\\", Roboto, \\"Helvetica Neue\\", Arial, \\"Noto Sans\\", sans-serif, \\"Apple Color Emoji\\", \\"Segoe UI Emoji\\", \\"Segoe UI Symbol\\", \\"Noto Color Emoji\\")",
          "prefix": "--font-family-sans",
        },
        "Font Family Serif (ui-serif, Georgia, Cambria, \\"Times New Roman\\", Times, serif)": Object {
          "body": Array [
            "var(--font-family-serif)",
          ],
          "description": "Font Family Serif (ui-serif, Georgia, Cambria, \\"Times New Roman\\", Times, serif)",
          "prefix": "--font-family-serif",
        },
        "Font Size 0 (0.75rem)": Object {
          "body": Array [
            "var(--font-size-0)",
          ],
          "description": "Font Size 0 (0.75rem)",
          "prefix": "--font-size-0",
        },
        "Font Size 1 (0.875rem)": Object {
          "body": Array [
            "var(--font-size-1)",
          ],
          "description": "Font Size 1 (0.875rem)",
          "prefix": "--font-size-1",
        },
        "Font Size 1 (4.5rem)": Object {
          "body": Array [
            "var(--font-size-10)",
          ],
          "description": "Font Size 1 (4.5rem)",
          "prefix": "--font-size-10",
        },
        "Font Size 1 (6rem)": Object {
          "body": Array [
            "var(--font-size-11)",
          ],
          "description": "Font Size 1 (6rem)",
          "prefix": "--font-size-11",
        },
        "Font Size 1 (8rem)": Object {
          "body": Array [
            "var(--font-size-12)",
          ],
          "description": "Font Size 1 (8rem)",
          "prefix": "--font-size-12",
        },
        "Font Size 2 (1rem)": Object {
          "body": Array [
            "var(--font-size-2)",
          ],
          "description": "Font Size 2 (1rem)",
          "prefix": "--font-size-2",
        },
        "Font Size 3 (1.125rem)": Object {
          "body": Array [
            "var(--font-size-3)",
          ],
          "description": "Font Size 3 (1.125rem)",
          "prefix": "--font-size-3",
        },
        "Font Size 4 (1.25rem)": Object {
          "body": Array [
            "var(--font-size-4)",
          ],
          "description": "Font Size 4 (1.25rem)",
          "prefix": "--font-size-4",
        },
        "Font Size 5 (1.5rem)": Object {
          "body": Array [
            "var(--font-size-5)",
          ],
          "description": "Font Size 5 (1.5rem)",
          "prefix": "--font-size-5",
        },
        "Font Size 6 (1.875rem)": Object {
          "body": Array [
            "var(--font-size-6)",
          ],
          "description": "Font Size 6 (1.875rem)",
          "prefix": "--font-size-6",
        },
        "Font Size 7 (2.25rem)": Object {
          "body": Array [
            "var(--font-size-7)",
          ],
          "description": "Font Size 7 (2.25rem)",
          "prefix": "--font-size-7",
        },
        "Font Size 8 (3rem)": Object {
          "body": Array [
            "var(--font-size-8)",
          ],
          "description": "Font Size 8 (3rem)",
          "prefix": "--font-size-8",
        },
        "Font Size 9 (3.75rem)": Object {
          "body": Array [
            "var(--font-size-9)",
          ],
          "description": "Font Size 9 (3.75rem)",
          "prefix": "--font-size-9",
        },
        "Font Weight Black (900)": Object {
          "body": Array [
            "var(--font-weight-black)",
          ],
          "description": "Font Weight Black (900)",
          "prefix": "--font-weight-black",
        },
        "Font Weight Bold (700)": Object {
          "body": Array [
            "var(--font-weight-bold)",
          ],
          "description": "Font Weight Bold (700)",
          "prefix": "--font-weight-bold",
        },
        "Font Weight Extrabold (800)": Object {
          "body": Array [
            "var(--font-weight-extrabold)",
          ],
          "description": "Font Weight Extrabold (800)",
          "prefix": "--font-weight-extrabold",
        },
        "Font Weight Extralight (200)": Object {
          "body": Array [
            "var(--font-weight-extralight)",
          ],
          "description": "Font Weight Extralight (200)",
          "prefix": "--font-weight-extralight",
        },
        "Font Weight Light (300)": Object {
          "body": Array [
            "var(--font-weight-light)",
          ],
          "description": "Font Weight Light (300)",
          "prefix": "--font-weight-light",
        },
        "Font Weight Normal (400)": Object {
          "body": Array [
            "var(--font-weight-normal)",
          ],
          "description": "Font Weight Normal (400)",
          "prefix": "--font-weight-normal",
        },
        "Font Weight Semibold (600)": Object {
          "body": Array [
            "var(--font-weight-semibold)",
          ],
          "description": "Font Weight Semibold (600)",
          "prefix": "--font-weight-semibold",
        },
        "Font Weight Thin (100)": Object {
          "body": Array [
            "var(--font-weight-thin)",
          ],
          "description": "Font Weight Thin (100)",
          "prefix": "--font-weight-thin",
        },
        "Font Weight medium (500)": Object {
          "body": Array [
            "var(--font-weight-medium)",
          ],
          "description": "Font Weight medium (500)",
          "prefix": "--font-weight-medium",
        },
        "Letter Spacing 0 (-0.025em)": Object {
          "body": Array [
            "var(--letter-spacing-1)",
          ],
          "description": "Letter Spacing 0 (-0.025em)",
          "prefix": "--letter-spacing-1",
        },
        "Letter Spacing 0 (-0.05em)": Object {
          "body": Array [
            "var(--letter-spacing-0)",
          ],
          "description": "Letter Spacing 0 (-0.05em)",
          "prefix": "--letter-spacing-0",
        },
        "Letter Spacing 0 (0.025em)": Object {
          "body": Array [
            "var(--letter-spacing-3)",
          ],
          "description": "Letter Spacing 0 (0.025em)",
          "prefix": "--letter-spacing-3",
        },
        "Letter Spacing 0 (0.05em)": Object {
          "body": Array [
            "var(--letter-spacing-4)",
          ],
          "description": "Letter Spacing 0 (0.05em)",
          "prefix": "--letter-spacing-4",
        },
        "Letter Spacing 0 (0.1em)": Object {
          "body": Array [
            "var(--letter-spacing-5)",
          ],
          "description": "Letter Spacing 0 (0.1em)",
          "prefix": "--letter-spacing-5",
        },
        "Letter Spacing 0 (0em)": Object {
          "body": Array [
            "var(--letter-spacing-2)",
          ],
          "description": "Letter Spacing 0 (0em)",
          "prefix": "--letter-spacing-2",
        },
        "Line Height 0 (1rem)": Object {
          "body": Array [
            "var(--line-height-0)",
          ],
          "description": "Line Height 0 (1rem)",
          "prefix": "--line-height-0",
        },
        "Line Height 1 (1)": Object {
          "body": Array [
            "var(--line-height-12)",
          ],
          "description": "Line Height 1 (1)",
          "prefix": "--line-height-12",
        },
        "Line Height 1 (1.25rem)": Object {
          "body": Array [
            "var(--line-height-1)",
          ],
          "description": "Line Height 1 (1.25rem)",
          "prefix": "--line-height-1",
        },
        "Line Height 2 (1.5rem)": Object {
          "body": Array [
            "var(--line-height-2)",
          ],
          "description": "Line Height 2 (1.5rem)",
          "prefix": "--line-height-2",
        },
        "Line Height 3 (1.75rem)": Object {
          "body": Array [
            "var(--line-height-3)",
          ],
          "description": "Line Height 3 (1.75rem)",
          "prefix": "--line-height-3",
        },
        "Line Height 4 (1.75rem)": Object {
          "body": Array [
            "var(--line-height-4)",
          ],
          "description": "Line Height 4 (1.75rem)",
          "prefix": "--line-height-4",
        },
        "Line Height 5 (2rem)": Object {
          "body": Array [
            "var(--line-height-5)",
          ],
          "description": "Line Height 5 (2rem)",
          "prefix": "--line-height-5",
        },
        "Line Height 6 (2.25rem)": Object {
          "body": Array [
            "var(--line-height-6)",
          ],
          "description": "Line Height 6 (2.25rem)",
          "prefix": "--line-height-6",
        },
        "Line Height 7 (2.5rem)": Object {
          "body": Array [
            "var(--line-height-7)",
          ],
          "description": "Line Height 7 (2.5rem)",
          "prefix": "--line-height-7",
        },
        "Line Height 8 (1)": Object {
          "body": Array [
            "var(--line-height-8)",
          ],
          "description": "Line Height 8 (1)",
          "prefix": "--line-height-8",
        },
        "Line Height 9 (1)": Object {
          "body": Array [
            "var(--line-height-9)",
          ],
          "description": "Line Height 9 (1)",
          "prefix": "--line-height-9",
        },
        "Opacity 0 (0)": Object {
          "body": Array [
            "var(--opacity-0)",
          ],
          "description": "Opacity 0 (0)",
          "prefix": "--opacity-0",
        },
        "Opacity 1 (0.2)": Object {
          "body": Array [
            "var(--opacity-1)",
          ],
          "description": "Opacity 1 (0.2)",
          "prefix": "--opacity-1",
        },
        "Opacity 2 (0.4)": Object {
          "body": Array [
            "var(--opacity-2)",
          ],
          "description": "Opacity 2 (0.4)",
          "prefix": "--opacity-2",
        },
        "Opacity 3 (0.6)": Object {
          "body": Array [
            "var(--opacity-3)",
          ],
          "description": "Opacity 3 (0.6)",
          "prefix": "--opacity-3",
        },
        "Opacity 4 (0.8)": Object {
          "body": Array [
            "var(--opacity-4)",
          ],
          "description": "Opacity 4 (0.8)",
          "prefix": "--opacity-4",
        },
        "Opacity 5 (1)": Object {
          "body": Array [
            "var(--opacity-5)",
          ],
          "description": "Opacity 5 (1)",
          "prefix": "--opacity-5",
        },
        "Outline Black (2px dotted black)": Object {
          "body": Array [
            "var(--outline-black)",
          ],
          "description": "Outline Black (2px dotted black)",
          "prefix": "--outline-black",
        },
        "Outline None (2px solid transparent)": Object {
          "body": Array [
            "var(--outline-none)",
          ],
          "description": "Outline None (2px solid transparent)",
          "prefix": "--outline-none",
        },
        "Outline Offset 0 (0px)": Object {
          "body": Array [
            "var(--outline-offset-0)",
          ],
          "description": "Outline Offset 0 (0px)",
          "prefix": "--outline-offset-0",
        },
        "Outline Offset 1 (2px)": Object {
          "body": Array [
            "var(--outline-offset-1)",
          ],
          "description": "Outline Offset 1 (2px)",
          "prefix": "--outline-offset-1",
        },
        "Outline Offset 2 (4px)": Object {
          "body": Array [
            "var(--outline-offset-2)",
          ],
          "description": "Outline Offset 2 (4px)",
          "prefix": "--outline-offset-2",
        },
        "Outline White (2px dotted white)": Object {
          "body": Array [
            "var(--outline-white)",
          ],
          "description": "Outline White (2px dotted white)",
          "prefix": "--outline-white",
        },
        "Size 00 (0px)": Object {
          "body": Array [
            "var(--size-00)",
          ],
          "description": "Size 00 (0px)",
          "prefix": "--size-00",
        },
        "Size 01 (0.125rem / 2px)": Object {
          "body": Array [
            "var(--size-01)",
          ],
          "description": "Size 01 (0.125rem / 2px)",
          "prefix": "--size-01",
        },
        "Size 02 (0.25rem / 4px)": Object {
          "body": Array [
            "var(--size-02)",
          ],
          "description": "Size 02 (0.25rem / 4px)",
          "prefix": "--size-02",
        },
        "Size 03 (0.5rem / 8px)": Object {
          "body": Array [
            "var(--size-03)",
          ],
          "description": "Size 03 (0.5rem / 8px)",
          "prefix": "--size-03",
        },
        "Size 04 (0.75rem / 12px)": Object {
          "body": Array [
            "var(--size-04)",
          ],
          "description": "Size 04 (0.75rem / 12px)",
          "prefix": "--size-04",
        },
        "Size 05 (1rem / 16px)": Object {
          "body": Array [
            "var(--size-05)",
          ],
          "description": "Size 05 (1rem / 16px)",
          "prefix": "--size-05",
        },
        "Size 06 (1.5rem / 24px)": Object {
          "body": Array [
            "var(--size-06)",
          ],
          "description": "Size 06 (1.5rem / 24px)",
          "prefix": "--size-06",
        },
        "Size 07 (2rem / 32px)": Object {
          "body": Array [
            "var(--size-07)",
          ],
          "description": "Size 07 (2rem / 32px)",
          "prefix": "--size-07",
        },
        "Size 08 (3rem / 48px)": Object {
          "body": Array [
            "var(--size-08)",
          ],
          "description": "Size 08 (3rem / 48px)",
          "prefix": "--size-08",
        },
        "Size 09 (4rem / 64px)": Object {
          "body": Array [
            "var(--size-09)",
          ],
          "description": "Size 09 (4rem / 64px)",
          "prefix": "--size-09",
        },
        "Size 10 (6rem / 96px)": Object {
          "body": Array [
            "var(--size-10)",
          ],
          "description": "Size 10 (6rem / 96px)",
          "prefix": "--size-10",
        },
        "Size 11 (8rem / 128px)": Object {
          "body": Array [
            "var(--size-11)",
          ],
          "description": "Size 11 (8rem / 128px)",
          "prefix": "--size-11",
        },
        "Size 12 (12rem / 192px)": Object {
          "body": Array [
            "var(--size-12)",
          ],
          "description": "Size 12 (12rem / 192px)",
          "prefix": "--size-12",
        },
        "Size 13 (16rem / 256px)": Object {
          "body": Array [
            "var(--size-13)",
          ],
          "description": "Size 13 (16rem / 256px)",
          "prefix": "--size-13",
        },
        "Size 14 (24rem / 384px)": Object {
          "body": Array [
            "var(--size-14)",
          ],
          "description": "Size 14 (24rem / 384px)",
          "prefix": "--size-14",
        },
        "Size 15 (32rem / 512px)": Object {
          "body": Array [
            "var(--size-15)",
          ],
          "description": "Size 15 (32rem / 512px)",
          "prefix": "--size-15",
        },
        "Size 16 (48rem / 768px)": Object {
          "body": Array [
            "var(--size-16)",
          ],
          "description": "Size 16 (48rem / 768px)",
          "prefix": "--size-16",
        },
        "Size 17 (64rem / 1024px)": Object {
          "body": Array [
            "var(--size-17)",
          ],
          "description": "Size 17 (64rem / 1024px)",
          "prefix": "--size-17",
        },
        "Size 18 (90rem / 1440px)": Object {
          "body": Array [
            "var(--size-18)",
          ],
          "description": "Size 18 (90rem / 1440px)",
          "prefix": "--size-18",
        },
        "Transition All (all var(--transition-duration-0) var(--transition-timing-function-ease-in-out))": Object {
          "body": Array [
            "var(--transition-all)",
          ],
          "description": "Transition All (all var(--transition-duration-0) var(--transition-timing-function-ease-in-out))",
          "prefix": "--transition-all",
        },
        "Transition Box Shadow (box-shadow var(--transition-duration-0) var(--transition-timing-function-ease-in-out))": Object {
          "body": Array [
            "var(--transition-box-shadow)",
          ],
          "description": "Transition Box Shadow (box-shadow var(--transition-duration-0) var(--transition-timing-function-ease-in-out))",
          "prefix": "--transition-box-shadow",
        },
        "Transition Colors (background-color var(--transition-duration-0) var(--transition-timing-function-ease-in-out), border-color var(--transition-duration-0) var(--transition-timing-function-ease-in-out), color var(--transition-duration-0) var(--transition-timing-function-ease-in-out), fill var(--transition-duration-0) var(--transition-timing-function-ease-in-out), stroke var(--transition-duration-0) var(--transition-timing-function-ease-in-out))": Object {
          "body": Array [
            "var(--transition-colors)",
          ],
          "description": "Transition Colors (background-color var(--transition-duration-0) var(--transition-timing-function-ease-in-out), border-color var(--transition-duration-0) var(--transition-timing-function-ease-in-out), color var(--transition-duration-0) var(--transition-timing-function-ease-in-out), fill var(--transition-duration-0) var(--transition-timing-function-ease-in-out), stroke var(--transition-duration-0) var(--transition-timing-function-ease-in-out))",
          "prefix": "--transition-colors",
        },
        "Transition Delay 0 (0.15s)": Object {
          "body": Array [
            "var(--transition-delay-0)",
          ],
          "description": "Transition Delay 0 (0.15s)",
          "prefix": "--transition-delay-0",
        },
        "Transition Delay 1 (0.3s)": Object {
          "body": Array [
            "var(--transition-delay-1)",
          ],
          "description": "Transition Delay 1 (0.3s)",
          "prefix": "--transition-delay-1",
        },
        "Transition Delay 2 (0.5s)": Object {
          "body": Array [
            "var(--transition-delay-2)",
          ],
          "description": "Transition Delay 2 (0.5s)",
          "prefix": "--transition-delay-2",
        },
        "Transition Delay 3 (1s)": Object {
          "body": Array [
            "var(--transition-delay-3)",
          ],
          "description": "Transition Delay 3 (1s)",
          "prefix": "--transition-delay-3",
        },
        "Transition Duration 0 (0.15s)": Object {
          "body": Array [
            "var(--transition-duration-0)",
          ],
          "description": "Transition Duration 0 (0.15s)",
          "prefix": "--transition-duration-0",
        },
        "Transition Duration 1 (0.3s)": Object {
          "body": Array [
            "var(--transition-duration-1)",
          ],
          "description": "Transition Duration 1 (0.3s)",
          "prefix": "--transition-duration-1",
        },
        "Transition Duration 2 (0.5s)": Object {
          "body": Array [
            "var(--transition-duration-2)",
          ],
          "description": "Transition Duration 2 (0.5s)",
          "prefix": "--transition-duration-2",
        },
        "Transition Duration 3 (1s)": Object {
          "body": Array [
            "var(--transition-duration-3)",
          ],
          "description": "Transition Duration 3 (1s)",
          "prefix": "--transition-duration-3",
        },
        "Transition None (none)": Object {
          "body": Array [
            "var(--transition-none)",
          ],
          "description": "Transition None (none)",
          "prefix": "--transition-none",
        },
        "Transition Opacity (opacity var(--transition-duration-0) var(--transition-timing-function-ease-in-out))": Object {
          "body": Array [
            "var(--transition-opacity)",
          ],
          "description": "Transition Opacity (opacity var(--transition-duration-0) var(--transition-timing-function-ease-in-out))",
          "prefix": "--transition-opacity",
        },
        "Transition Timing Function Ease In (cubic-bezier(0.4, 0, 1, 1))": Object {
          "body": Array [
            "var(--transition-timing-function-ease-in)",
          ],
          "description": "Transition Timing Function Ease In (cubic-bezier(0.4, 0, 1, 1))",
          "prefix": "--transition-timing-function-ease-in",
        },
        "Transition Timing Function Ease In Out (cubic-bezier(0, 0, 0.2, 1))": Object {
          "body": Array [
            "var(--transition-timing-function-ease-out)",
          ],
          "description": "Transition Timing Function Ease In Out (cubic-bezier(0, 0, 0.2, 1))",
          "prefix": "--transition-timing-function-ease-out",
        },
        "Transition Timing Function Ease In Out (cubic-bezier(0.4, 0, 0.2, 1))": Object {
          "body": Array [
            "var(--transition-timing-function-ease-in-out)",
          ],
          "description": "Transition Timing Function Ease In Out (cubic-bezier(0.4, 0, 0.2, 1))",
          "prefix": "--transition-timing-function-ease-in-out",
        },
        "Transition Transform (transform var(--transition-duration-0) var(--transition-timing-function-ease-in-out))": Object {
          "body": Array [
            "var(--transition-transform)",
          ],
          "description": "Transition Transform (transform var(--transition-duration-0) var(--transition-timing-function-ease-in-out))",
          "prefix": "--transition-transform",
        },
        "Z-Index 0 (0)": Object {
          "body": Array [
            "var(--z-index-0)",
          ],
          "description": "Z-Index 0 (0)",
          "prefix": "--z-index-0",
        },
        "Z-Index 1 (10)": Object {
          "body": Array [
            "var(--z-index-1)",
          ],
          "description": "Z-Index 1 (10)",
          "prefix": "--z-index-1",
        },
        "Z-Index 2 (20)": Object {
          "body": Array [
            "var(--z-index-2)",
          ],
          "description": "Z-Index 2 (20)",
          "prefix": "--z-index-2",
        },
        "Z-Index 3 (30)": Object {
          "body": Array [
            "var(--z-index-3)",
          ],
          "description": "Z-Index 3 (30)",
          "prefix": "--z-index-3",
        },
        "Z-Index 4 (40)": Object {
          "body": Array [
            "var(--z-index-4)",
          ],
          "description": "Z-Index 4 (40)",
          "prefix": "--z-index-4",
        },
        "Z-Index 5 (50)": Object {
          "body": Array [
            "var(--z-index-5)",
          ],
          "description": "Z-Index 5 (50)",
          "prefix": "--z-index-5",
        },
      }
    `);
  });
});
