/**
 * Pins `backdrop` to the viewport for exactly the scroll span of
 * `children` — not the whole page. The sticky element has zero height so
 * it never affects layout; the absolutely-positioned panel inside it is
 * what actually fills the screen and stays put while the wrapped
 * sections' real content scrolls past on top of it. Once the wrapped
 * content ends, the sticky element releases naturally, same as any
 * `position: sticky` reaching the bottom of its container.
 */
export default function StickyBackdrop({
  backdrop,
  children,
}: {
  backdrop: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className="relative">
      <div aria-hidden className="pointer-events-none sticky top-0 z-0 h-0 overflow-visible">
        <div className="absolute inset-x-0 top-0 h-screen opacity-[0.1]">{backdrop}</div>
      </div>
      <div className="relative z-[1]">{children}</div>
    </div>
  );
}
