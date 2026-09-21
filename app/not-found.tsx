"use client";

import { Button } from "@/components/ui-ux/Button";
import { H1 } from "@/components/ui-ux/H1";

export default function NotFound() {
  const goBack = () => window.history.back();

  return (
    <div
      className="
        flex
        h-[calc(100vh-12rem)]
        flex-col
        items-center
        justify-center
        text-center
    "
    >
      <H1 className="!text-9xl text-topbar">404</H1>

      <H1 className="text-topbar">Página no encontrada</H1>

      <Button type="button" onClick={goBack}>
        Volver atrás
      </Button>
    </div>
  );
}
