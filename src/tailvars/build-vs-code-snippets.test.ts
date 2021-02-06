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
        "Color Amber 100 (#fef3c7)": Object {
          "body": Array [
            "var(--amber-100)",
          ],
          "description": "Color Amber 100 (#fef3c7)",
          "prefix": "--amber-100",
        },
        "Color Amber 200 (#fde68a)": Object {
          "body": Array [
            "var(--amber-200)",
          ],
          "description": "Color Amber 200 (#fde68a)",
          "prefix": "--amber-200",
        },
        "Color Amber 300 (#fcd34d)": Object {
          "body": Array [
            "var(--amber-300)",
          ],
          "description": "Color Amber 300 (#fcd34d)",
          "prefix": "--amber-300",
        },
        "Color Amber 400 (#fbbf24)": Object {
          "body": Array [
            "var(--amber-400)",
          ],
          "description": "Color Amber 400 (#fbbf24)",
          "prefix": "--amber-400",
        },
        "Color Amber 50 (#fffbeb)": Object {
          "body": Array [
            "var(--amber-50)",
          ],
          "description": "Color Amber 50 (#fffbeb)",
          "prefix": "--amber-50",
        },
        "Color Amber 500 (#f59e0b)": Object {
          "body": Array [
            "var(--amber-500)",
          ],
          "description": "Color Amber 500 (#f59e0b)",
          "prefix": "--amber-500",
        },
        "Color Amber 600 (#d97706)": Object {
          "body": Array [
            "var(--amber-600)",
          ],
          "description": "Color Amber 600 (#d97706)",
          "prefix": "--amber-600",
        },
        "Color Amber 700 (#b45309)": Object {
          "body": Array [
            "var(--amber-700)",
          ],
          "description": "Color Amber 700 (#b45309)",
          "prefix": "--amber-700",
        },
        "Color Amber 800 (#92400e)": Object {
          "body": Array [
            "var(--amber-800)",
          ],
          "description": "Color Amber 800 (#92400e)",
          "prefix": "--amber-800",
        },
        "Color Amber 900 (#78350f)": Object {
          "body": Array [
            "var(--amber-900)",
          ],
          "description": "Color Amber 900 (#78350f)",
          "prefix": "--amber-900",
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
        "Color Emerald 100 (#d1fae5)": Object {
          "body": Array [
            "var(--emerald-100)",
          ],
          "description": "Color Emerald 100 (#d1fae5)",
          "prefix": "--emerald-100",
        },
        "Color Emerald 200 (#a7f3d0)": Object {
          "body": Array [
            "var(--emerald-200)",
          ],
          "description": "Color Emerald 200 (#a7f3d0)",
          "prefix": "--emerald-200",
        },
        "Color Emerald 300 (#6ee7b7)": Object {
          "body": Array [
            "var(--emerald-300)",
          ],
          "description": "Color Emerald 300 (#6ee7b7)",
          "prefix": "--emerald-300",
        },
        "Color Emerald 400 (#34d399)": Object {
          "body": Array [
            "var(--emerald-400)",
          ],
          "description": "Color Emerald 400 (#34d399)",
          "prefix": "--emerald-400",
        },
        "Color Emerald 50 (#ecfdf5)": Object {
          "body": Array [
            "var(--emerald-50)",
          ],
          "description": "Color Emerald 50 (#ecfdf5)",
          "prefix": "--emerald-50",
        },
        "Color Emerald 500 (#10b981)": Object {
          "body": Array [
            "var(--emerald-500)",
          ],
          "description": "Color Emerald 500 (#10b981)",
          "prefix": "--emerald-500",
        },
        "Color Emerald 600 (#059669)": Object {
          "body": Array [
            "var(--emerald-600)",
          ],
          "description": "Color Emerald 600 (#059669)",
          "prefix": "--emerald-600",
        },
        "Color Emerald 700 (#047857)": Object {
          "body": Array [
            "var(--emerald-700)",
          ],
          "description": "Color Emerald 700 (#047857)",
          "prefix": "--emerald-700",
        },
        "Color Emerald 800 (#065f46)": Object {
          "body": Array [
            "var(--emerald-800)",
          ],
          "description": "Color Emerald 800 (#065f46)",
          "prefix": "--emerald-800",
        },
        "Color Emerald 900 (#064e3b)": Object {
          "body": Array [
            "var(--emerald-900)",
          ],
          "description": "Color Emerald 900 (#064e3b)",
          "prefix": "--emerald-900",
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
        "Color Violet 100 (#ede9fe)": Object {
          "body": Array [
            "var(--violet-100)",
          ],
          "description": "Color Violet 100 (#ede9fe)",
          "prefix": "--violet-100",
        },
        "Color Violet 200 (#ddd6fe)": Object {
          "body": Array [
            "var(--violet-200)",
          ],
          "description": "Color Violet 200 (#ddd6fe)",
          "prefix": "--violet-200",
        },
        "Color Violet 300 (#c4b5fd)": Object {
          "body": Array [
            "var(--violet-300)",
          ],
          "description": "Color Violet 300 (#c4b5fd)",
          "prefix": "--violet-300",
        },
        "Color Violet 400 (#a78bfa)": Object {
          "body": Array [
            "var(--violet-400)",
          ],
          "description": "Color Violet 400 (#a78bfa)",
          "prefix": "--violet-400",
        },
        "Color Violet 50 (#f5f3ff)": Object {
          "body": Array [
            "var(--violet-50)",
          ],
          "description": "Color Violet 50 (#f5f3ff)",
          "prefix": "--violet-50",
        },
        "Color Violet 500 (#8b5cf6)": Object {
          "body": Array [
            "var(--violet-500)",
          ],
          "description": "Color Violet 500 (#8b5cf6)",
          "prefix": "--violet-500",
        },
        "Color Violet 600 (#7c3aed)": Object {
          "body": Array [
            "var(--violet-600)",
          ],
          "description": "Color Violet 600 (#7c3aed)",
          "prefix": "--violet-600",
        },
        "Color Violet 700 (#6d28d9)": Object {
          "body": Array [
            "var(--violet-700)",
          ],
          "description": "Color Violet 700 (#6d28d9)",
          "prefix": "--violet-700",
        },
        "Color Violet 800 (#5b21b6)": Object {
          "body": Array [
            "var(--violet-800)",
          ],
          "description": "Color Violet 800 (#5b21b6)",
          "prefix": "--violet-800",
        },
        "Color Violet 900 (#4c1d95)": Object {
          "body": Array [
            "var(--violet-900)",
          ],
          "description": "Color Violet 900 (#4c1d95)",
          "prefix": "--violet-900",
        },
        "Color White (#ffffff)": Object {
          "body": Array [
            "var(--white)",
          ],
          "description": "Color White (#ffffff)",
          "prefix": "--white",
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
        "Size 0 (0px)": Object {
          "body": Array [
            "var(--s-0)",
          ],
          "description": "Size 0 (0px)",
          "prefix": "--s-0",
        },
        "Size 0.5 (0.125rem / 2px)": Object {
          "body": Array [
            "var(--s-0-5)",
          ],
          "description": "Size 0.5 (0.125rem / 2px)",
          "prefix": "--s-0-5",
        },
        "Size 1 (0.25rem / 4px)": Object {
          "body": Array [
            "var(--s-1)",
          ],
          "description": "Size 1 (0.25rem / 4px)",
          "prefix": "--s-1",
        },
        "Size 1.5 (0.375rem / 6px)": Object {
          "body": Array [
            "var(--s-1-5)",
          ],
          "description": "Size 1.5 (0.375rem / 6px)",
          "prefix": "--s-1-5",
        },
        "Size 10 (2.5rem / 40px)": Object {
          "body": Array [
            "var(--s-10)",
          ],
          "description": "Size 10 (2.5rem / 40px)",
          "prefix": "--s-10",
        },
        "Size 11 (2.75rem / 44px)": Object {
          "body": Array [
            "var(--s-11)",
          ],
          "description": "Size 11 (2.75rem / 44px)",
          "prefix": "--s-11",
        },
        "Size 12 (3rem / 48px)": Object {
          "body": Array [
            "var(--s-12)",
          ],
          "description": "Size 12 (3rem / 48px)",
          "prefix": "--s-12",
        },
        "Size 14 (3.5rem / 56px)": Object {
          "body": Array [
            "var(--s-14)",
          ],
          "description": "Size 14 (3.5rem / 56px)",
          "prefix": "--s-14",
        },
        "Size 16 (4rem / 64px)": Object {
          "body": Array [
            "var(--s-16)",
          ],
          "description": "Size 16 (4rem / 64px)",
          "prefix": "--s-16",
        },
        "Size 1px (1px)": Object {
          "body": Array [
            "var(--s-px)",
          ],
          "description": "Size 1px (1px)",
          "prefix": "--s-px",
        },
        "Size 2 (0.5rem / 8px)": Object {
          "body": Array [
            "var(--s-2)",
          ],
          "description": "Size 2 (0.5rem / 8px)",
          "prefix": "--s-2",
        },
        "Size 2.5 (0.625rem / 10px)": Object {
          "body": Array [
            "var(--s-2-5)",
          ],
          "description": "Size 2.5 (0.625rem / 10px)",
          "prefix": "--s-2-5",
        },
        "Size 20 (5rem / 80px)": Object {
          "body": Array [
            "var(--s-20)",
          ],
          "description": "Size 20 (5rem / 80px)",
          "prefix": "--s-20",
        },
        "Size 24 (6rem / 96px)": Object {
          "body": Array [
            "var(--s-24)",
          ],
          "description": "Size 24 (6rem / 96px)",
          "prefix": "--s-24",
        },
        "Size 28 (7rem / 112px)": Object {
          "body": Array [
            "var(--s-28)",
          ],
          "description": "Size 28 (7rem / 112px)",
          "prefix": "--s-28",
        },
        "Size 3 (0.75rem / 12px)": Object {
          "body": Array [
            "var(--s-3)",
          ],
          "description": "Size 3 (0.75rem / 12px)",
          "prefix": "--s-3",
        },
        "Size 3.5 (0.875rem / 14px)": Object {
          "body": Array [
            "var(--s-3-5)",
          ],
          "description": "Size 3.5 (0.875rem / 14px)",
          "prefix": "--s-3-5",
        },
        "Size 32 (8rem / 128px)": Object {
          "body": Array [
            "var(--s-32)",
          ],
          "description": "Size 32 (8rem / 128px)",
          "prefix": "--s-32",
        },
        "Size 36 (9rem / 144px)": Object {
          "body": Array [
            "var(--s-36)",
          ],
          "description": "Size 36 (9rem / 144px)",
          "prefix": "--s-36",
        },
        "Size 4 (1rem / 16px)": Object {
          "body": Array [
            "var(--s-4)",
          ],
          "description": "Size 4 (1rem / 16px)",
          "prefix": "--s-4",
        },
        "Size 40 (10rem / 160px)": Object {
          "body": Array [
            "var(--s-40)",
          ],
          "description": "Size 40 (10rem / 160px)",
          "prefix": "--s-40",
        },
        "Size 44 (11rem / 176px)": Object {
          "body": Array [
            "var(--s-44)",
          ],
          "description": "Size 44 (11rem / 176px)",
          "prefix": "--s-44",
        },
        "Size 48 (12rem / 192px)": Object {
          "body": Array [
            "var(--s-48)",
          ],
          "description": "Size 48 (12rem / 192px)",
          "prefix": "--s-48",
        },
        "Size 5 (1.25rem / 20px)": Object {
          "body": Array [
            "var(--s-5)",
          ],
          "description": "Size 5 (1.25rem / 20px)",
          "prefix": "--s-5",
        },
        "Size 52 (13rem / 208px)": Object {
          "body": Array [
            "var(--s-52)",
          ],
          "description": "Size 52 (13rem / 208px)",
          "prefix": "--s-52",
        },
        "Size 56 (14rem / 224px)": Object {
          "body": Array [
            "var(--s-56)",
          ],
          "description": "Size 56 (14rem / 224px)",
          "prefix": "--s-56",
        },
        "Size 6 (1.5rem / 24px)": Object {
          "body": Array [
            "var(--s-6)",
          ],
          "description": "Size 6 (1.5rem / 24px)",
          "prefix": "--s-6",
        },
        "Size 60 (15rem / 240px)": Object {
          "body": Array [
            "var(--s-60)",
          ],
          "description": "Size 60 (15rem / 240px)",
          "prefix": "--s-60",
        },
        "Size 64 (16rem / 256px)": Object {
          "body": Array [
            "var(--s-64)",
          ],
          "description": "Size 64 (16rem / 256px)",
          "prefix": "--s-64",
        },
        "Size 7 (1.75rem / 28px)": Object {
          "body": Array [
            "var(--s-7)",
          ],
          "description": "Size 7 (1.75rem / 28px)",
          "prefix": "--s-7",
        },
        "Size 72 (18rem / 288px)": Object {
          "body": Array [
            "var(--s-72)",
          ],
          "description": "Size 72 (18rem / 288px)",
          "prefix": "--s-72",
        },
        "Size 8 (2rem / 32px)": Object {
          "body": Array [
            "var(--s-8)",
          ],
          "description": "Size 8 (2rem / 32px)",
          "prefix": "--s-8",
        },
        "Size 80 (20rem / 320px)": Object {
          "body": Array [
            "var(--s-80)",
          ],
          "description": "Size 80 (20rem / 320px)",
          "prefix": "--s-80",
        },
        "Size 9 (2.25rem / 36px)": Object {
          "body": Array [
            "var(--s-9)",
          ],
          "description": "Size 9 (2.25rem / 36px)",
          "prefix": "--s-9",
        },
        "Size 96 (24rem / 384px)": Object {
          "body": Array [
            "var(--s-96)",
          ],
          "description": "Size 96 (24rem / 384px)",
          "prefix": "--s-96",
        },
      }
    `);
  });
});
