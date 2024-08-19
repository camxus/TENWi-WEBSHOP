import React from "react";

function ColorPicker({ options, selectedOptions, onClick }: any) {
  return (
    <>
      {options.length &&
        options
          .filter(
            (option: { name: any; options: string[] }) =>
              option.name === "color"
          )
          .map((option: { name: any; options: any[] }) => (
            <div key={option.name} className="flex justify-end p-2 px-4 gap-1">
              {option.options.map((value: any) => (
                <div
                  key={value}
                  onClick={() =>
                    onClick({
                      label: value,
                      value: option.name,
                    })
                  }
                  className="rounded-full w-4 h-4 border-black border-2 cursor-pointer"
                  style={{
                    backgroundColor: value,
                    opacity: selectedOptions["color"] === value ? 1 : 0.5,
                  }}
                ></div>
              ))}
            </div>
          ))}
    </>
  );
}

export default ColorPicker;
