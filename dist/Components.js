/** @jsx vNode */
import { vNode } from "../../../../node_modules/@ocdladefense/view/view.js";
const EmailDraft = function (props) {
  let content = props.content;
  return vNode("div", {
    class: "text-center m-2 p-4"
  }, vNode("form", null, vNode("label", {
    for: "recipient"
  }, "Send to: "), vNode("input", {
    type: "text",
    id: "recipient",
    name: "recipient"
  }), vNode("br", null), vNode("label", {
    for: "subject"
  }, "Subject: "), vNode("input", {
    type: "text",
    id: "subject",
    name: "subject"
  }), vNode("br", null), vNode("button", {
    type: "submit",
    "data-action": "send-forecast"
  }, "Send Forecast")), vNode("div", {
    id: "body"
  }, content));
};
export { EmailDraft };