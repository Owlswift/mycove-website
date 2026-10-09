import Image from "next/image";

/**
 * The real aerial photo of a MyCove-equipped estate — gate, guards, cars,
 * houses, kids playing on the lawn — sitting behind the "how it works"
 * through Contact sections (see StickyBackdrop.tsx). The photo itself
 * renders at full strength; a semi-transparent ivory scrim sits on top of
 * it (not baked into its opacity) so it stays clearly recognizable while
 * body text on top of it stays readable.
 */
export default function EstateAerialBackdrop() {
  return (
    <div className="relative h-full w-full">
      <Image
        src="/images/photos/estate-aerial.png"
        alt=""
        fill
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-[var(--color-ivory)]/05" />
    </div>
  );
}
