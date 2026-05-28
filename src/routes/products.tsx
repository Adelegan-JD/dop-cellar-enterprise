import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/common/PageHeader";
import { Products } from "@/components/sections/Products";
import { site } from "@/config/site";

export const Route = createFileRoute("/products")({
  component: ProductsPage,
  head: () => ({
    meta: [
      { title: `Products & Catalog — ${site.name}` },
      {
        name: "description",
        content:
          "Procurement catalog of CCTV cameras, DVR/NVR kits, biometric access control and intrusion alarm systems supplied and installed by DopCellar Merit Global Limited.",
      },
      { property: "og:title", content: `Products & Catalog — ${site.name}` },
      {
        property: "og:description",
        content:
          "CCTV, access control and intrusion alarm products supplied and installed nationwide. Request invoices and quotes directly.",
      },
    ],
  }),
});

function ProductsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Products"
        title="Catalog of security, surveillance and access-control hardware."
        description="Browse the equipment we supply, install and maintain. Request an invoice or quotation for any item directly via WhatsApp or our contact form."
      />
      <Products showFilters />
    </>
  );
}
