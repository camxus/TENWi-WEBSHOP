import React, { useEffect, useState } from "react";

function useJustifiedText(ref: React.RefObject<HTMLHeadingElement>) {
  const [wordSpacing, setWordSpacing] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const containerWidth = ref.current.parentElement?.offsetWidth;
      const textWidth = ref.current.offsetWidth;
      const wordsArray = ref.current.textContent?.split(" ");

      if (wordsArray?.length && containerWidth && wordsArray.length > 1) {
        const spaceWidth = containerWidth - textWidth;
        const additionalSpacing = spaceWidth / (wordsArray.length - 1);

        additionalSpacing && setWordSpacing(additionalSpacing);
      }
    }
  }, [ref.current?.innerText]);

  return { wordSpacing };
}

export default useJustifiedText;
