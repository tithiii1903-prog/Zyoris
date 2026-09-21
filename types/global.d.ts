import "react";

declare module "react" {
  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    animate?: string;
    button?: string;
    "button-text"?: string;
    "card-image"?: string;
    faq_accordion?: string;
    faq_answer?: string;
    "faq_action-line"?: string;
  }
}
