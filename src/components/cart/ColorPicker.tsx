import React, { useEffect } from "react";

function ColorPicker({ options, selectedOptions, onClick }: any) {
  const [colorOptions] = options.filter(
    (option: { name: any; options: string[] }) =>
      option.name.toLowerCase() === "color"
  );

  useEffect(() => {
    if (colorOptions && colorOptions.options?.length === 1) {
      onClick({
        label: colorOptions.options[0],
        value: colorOptions.name,
      });
    }
  }, [colorOptions]);

  return (
    <>
      {colorOptions && (
        <div
          key={colorOptions.name}
          className="flex justify-end p-2 px-4 gap-1"
        >
          {colorOptions.options.map((value: any) => (
            <div
              key={value}
              onClick={() =>
                onClick({
                  label: value,
                  value: colorOptions.name,
                })
              }
              className="rounded-full w-4 h-4 border-black border-2 cursor-pointer"
              style={{
                backgroundColor: value,
                opacity:
                  selectedOptions["color"] === value ||
                  selectedOptions["COLOR"] === value
                    ? 1
                    : 0.5,
              }}
            ></div>
          ))}
        </div>
      )}
    </>
  );
}

export default ColorPicker;
