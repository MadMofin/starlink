import { P } from "@/components/ui-ux/P";
import { H1 } from "@/components/ui-ux/H1";
import { H2 } from "@/components/ui-ux/H2";
import { H3 } from "@/components/ui-ux/H3";
import { A } from "@/components/ui-ux/A";
import { Divider } from "@/components/ui-ux/Divider";
import { ListItem } from "@/components/ui-ux/ListItem";
import { List } from "@/components/ui-ux/List";
import { B } from "@/components/ui-ux/B";

export function useMDXComponents(components: any) {
  return {
    h1: H1,
    h2: H2,
    h3: H3,
    p: P,
    a: A,
    hr: Divider,
    li: ListItem,
    ul: List,
    ol: List,
    strong: B,

    ...components,
  };
}
