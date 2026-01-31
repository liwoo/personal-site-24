import { jsx } from 'react/jsx-runtime';
import { useRef, useEffect } from 'react';
import mermaid from 'mermaid';

function Mermaid({ chart }) {
  const containerRef = useRef(null);
  useEffect(() => {
    if (containerRef.current) {
      mermaid.initialize({
        startOnLoad: false,
        theme: "default"
      });
      const renderChart = async () => {
        try {
          const { svg } = await mermaid.render(`mermaid-${Date.now()}`, chart);
          if (containerRef.current) {
            containerRef.current.innerHTML = svg;
          }
        } catch (error) {
          console.error("Mermaid rendering error:", error);
          if (containerRef.current) {
            containerRef.current.innerHTML = `<div style="color: red;">Error rendering diagram</div>`;
          }
        }
      };
      renderChart();
    }
  }, [chart]);
  return /* @__PURE__ */ jsx("div", { ref: containerRef, className: "mermaid-container flex justify-center my-8" });
}

export { Mermaid as M };
