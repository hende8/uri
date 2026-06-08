import { ReactNode } from "react";

type Block =
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "p"; text: string };

const parseBlocks = (markdown: string): Block[] => {
  const lines = markdown.split("\n");
  const blocks: Block[] = [];
  let current: Block | null = null;

  const flush = () => {
    if (current) {
      blocks.push(current);
      current = null;
    }
  };

  for (const raw of lines) {
    const line = raw.trim();

    if (!line) {
      flush();
      continue;
    }

    if (line.startsWith("## ")) {
      flush();
      blocks.push({ type: "h2", text: line.slice(3).trim() });
      continue;
    }

    if (line.startsWith("### ")) {
      flush();
      blocks.push({ type: "h3", text: line.slice(4).trim() });
      continue;
    }

    const bulletMatch = /^(\*|-)\s+(.*)$/.exec(line);
    if (bulletMatch) {
      if (!current || current.type !== "ul") {
        flush();
        current = { type: "ul", items: [] };
      }
      current.items.push(bulletMatch[2]);
      continue;
    }

    const orderedMatch = /^\d+\.\s+(.*)$/.exec(line);
    if (orderedMatch) {
      if (!current || current.type !== "ol") {
        flush();
        current = { type: "ol", items: [] };
      }
      current.items.push(orderedMatch[1]);
      continue;
    }

    if (!current || current.type !== "p") {
      flush();
      current = { type: "p", text: line };
    } else {
      current.text += " " + line;
    }
  }

  flush();
  return blocks;
};

const renderInline = (text: string): ReactNode[] => {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={i}>{part.slice(2, -2)}</strong>;
    }
    return <span key={i}>{part}</span>;
  });
};

const paragraphClass =
  "mb-6 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed";

const MarkdownBody = ({ content }: { content: string }) => {
  const blocks = parseBlocks(content);

  return (
    <div>
      {blocks.map((block, i) => {
        switch (block.type) {
          case "h2":
            return (
              <h2
                key={i}
                className="mt-10 mb-5 text-2xl leading-tight font-bold text-black sm:text-3xl sm:leading-tight"
              >
                {renderInline(block.text)}
              </h2>
            );
          case "h3":
            return (
              <h3
                key={i}
                className="mt-8 mb-4 text-xl leading-tight font-bold text-black sm:text-2xl sm:leading-tight"
              >
                {renderInline(block.text)}
              </h3>
            );
          case "ul":
            return (
              <ul
                key={i}
                className="mb-8 list-disc space-y-2 ps-6 text-body-color"
              >
                {block.items.map((item, j) => (
                  <li
                    key={j}
                    className="text-base font-medium leading-relaxed sm:text-lg lg:text-base xl:text-lg"
                  >
                    {renderInline(item)}
                  </li>
                ))}
              </ul>
            );
          case "ol":
            return (
              <ol
                key={i}
                className="mb-8 list-decimal space-y-2 ps-6 text-body-color"
              >
                {block.items.map((item, j) => (
                  <li
                    key={j}
                    className="text-base font-medium leading-relaxed sm:text-lg lg:text-base xl:text-lg"
                  >
                    {renderInline(item)}
                  </li>
                ))}
              </ol>
            );
          case "p":
            return (
              <p key={i} className={paragraphClass}>
                {renderInline(block.text)}
              </p>
            );
        }
      })}
    </div>
  );
};

export default MarkdownBody;
