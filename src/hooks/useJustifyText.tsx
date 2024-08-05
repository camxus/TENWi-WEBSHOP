import React, { useEffect } from "react";

function useJustifiedText(ref: React.RefObject<HTMLHeadingElement>) {
  const justifyText = () => {
    if (ref.current) {
      const container = ref.current;
      const originalClassName = container.className; // Save the original class name
      const originalStyles = container.getAttribute('style') || ''; // Save inline styles
      const containerWidth = container.parentElement?.offsetWidth || 0;
      const words = container.textContent?.split(" ") || [];

      // Clear the current content
      container.innerHTML = "";

      // Reapply the original class name and styles
      container.className = originalClassName;
      container.setAttribute('style', originalStyles);

      // Create a new line container
      const createLineContainer = () => {
        const line = document.createElement("div");
        line.style.display = "flex";
        line.style.width = "100%";
        line.className = originalClassName; // Inherit class name
        return line;
      };

      let currentLine = createLineContainer();
      container.appendChild(currentLine);

      let currentLineWidth = 0;
      let wordsInLine = 0;

      words.forEach((word, index) => {
        const span = document.createElement("span");
        span.textContent = word;
        span.setAttribute('style', originalStyles); // Inherit inline styles
        span.className = originalClassName; // Inherit class name

        // Temporarily add the span to measure its width
        container.appendChild(span);
        const wordWidth = span.offsetWidth;
        container.removeChild(span);

        // Check if the current word fits in the current line
        if (currentLineWidth + wordWidth <= containerWidth) {
          currentLine.appendChild(span);
          wordsInLine += 1;
          // Add a space after each word except the last one
          if (index < words.length - 1) {
            currentLine.appendChild(document.createTextNode(" "));
            currentLineWidth += span.offsetWidth; // Include space width
          } else {
            currentLineWidth += wordWidth;
          }
        } else {
          // Justify the current line
          justifyLine(currentLine, wordsInLine);

          // Create a new line
          currentLine = createLineContainer();
          container.appendChild(currentLine);

          currentLine.appendChild(span);
          currentLineWidth = wordWidth;
          wordsInLine = 1;

          // Add a space after each word except the last one
          if (index < words.length - 1) {
            currentLine.appendChild(document.createTextNode(" "));
            currentLineWidth += span.offsetWidth; // Include space width
          }
        }
      });

      // Justify the last line
      justifyLine(currentLine, wordsInLine);
    }
  };

  const justifyLine = (line: HTMLElement, wordsInLine: number) => {
    if (wordsInLine > 1) {
      line.style.justifyContent = "space-between";
    } else {
      line.style.justifyContent = "flex-start";
    }
  };

  useEffect(() => {
    justifyText();
    window.addEventListener("resize", justifyText);
    return () => {
      window.removeEventListener("resize", justifyText);
    };
  }, [ref.current?.textContent]);

  return;
}

export default useJustifiedText;
