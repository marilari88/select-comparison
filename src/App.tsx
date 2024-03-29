import * as Ariakit from "@ariakit/react";
import * as ReactAria from "react-aria-components";
import React, { ComponentPropsWithoutRef } from "react";
import { comuni } from "./data";

function SelectItem(
  props: ComponentPropsWithoutRef<typeof Ariakit.SelectItem>,
) {
  return <Ariakit.SelectItem {...props} />;
}

function SelectAriaKit() {
  return (
    <Ariakit.SelectProvider>
      <Ariakit.SelectLabel className="label">
        Italian cities
      </Ariakit.SelectLabel>
      <Ariakit.Select className="flex gap-2 items-center py-2 px-3 rounded-md bg-violet-800 text-neutral-50" />
      <Ariakit.SelectPopover
        gutter={4}
        sameWidth
        className="p-1 bg-neutral-50 border-neutral-300 border-1 outline-none flex flex-col max-h-96 overflow-auto"
      >
        {comuni.map((item) => (
          <SelectItem key={item} value={item}>
            {item}
          </SelectItem>
        ))}
      </Ariakit.SelectPopover>
    </Ariakit.SelectProvider>
  );
}

function SelectReactAria() {
  return (
    <ReactAria.Select defaultSelectedKey={"Baggio"}>
      <ReactAria.Label>Italian cities</ReactAria.Label>
      <ReactAria.Button className="flex gap-2 items-center py-2 px-3 rounded-md bg-violet-800 text-neutral-50">
        <ReactAria.SelectValue />
        <span aria-hidden="true">▼</span>
      </ReactAria.Button>
      <ReactAria.Popover
        className="p-1 bg-neutral-50 border-neutral-300 border-1 outline-none
        flex flex-col max-h-96 overflow-auto"
      >
        <ReactAria.ListBox className="p-1 bg-neutral-50 border-neutral-300 border-1 outline-none flex flex-col max-h-96 overflow-auto">
          {comuni.map((item) => (
            <ReactAria.ListBoxItem key={item}>{item}</ReactAria.ListBoxItem>
          ))}
        </ReactAria.ListBox>
      </ReactAria.Popover>
    </ReactAria.Select>
  );
}

function App() {
  const [isOpenAriaKit, setIsOpenAriaKit] = React.useState(false);
  const [isOpenReactAria, setIsOpenReactAria] = React.useState(false);

  return (
    <div className="grid grid-cols-2">
      <div className="flex flex-col items-center gap-4 p-4">
        <h1 className="text-2xl font-bold">AriaKit</h1>
        <button
          className="bg-violet-800 text-neutral-50 rounded-md p-2"
          onClick={() => {
            setIsOpenAriaKit((a) => !a);
          }}
        >
          {isOpenAriaKit ? "Close" : "Open"}
        </button>
        {isOpenAriaKit && (
          <div className="p-3">
            <SelectAriaKit />
            <SelectAriaKit />
          </div>
        )}
      </div>
      <div className="flex flex-col items-center gap-4 p-4">
        <h1 className="text-2xl font-bold">React Aria Component</h1>
        <button
          className="bg-violet-800 text-neutral-50 rounded-md p-2"
          onClick={() => {
            setIsOpenReactAria((a) => !a);
          }}
        >
          {isOpenReactAria ? "Close" : "Open"}
        </button>
        {isOpenReactAria && (
          <div className="p-3">
            <SelectReactAria />
            <SelectReactAria />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
