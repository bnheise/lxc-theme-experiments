import { fromEvent } from "rxjs";

export default function () {
  console.group("Sample fragment");
  console.log("fragmentElement", fragmentElement);
  console.log("configuration", configuration);
  console.groupEnd();
  fromEvent(document, "click").subscribe(() => console.log("Clicked!"));
}
