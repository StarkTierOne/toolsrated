"use client";

import { useEffect } from "react";
import { Analytics as VercelAnalytics } from "@vercel/analytics/next";
import { track } from "@vercel/analytics";

/**
 * Site-wide analytics.
 *
 * Web Analytics was already provisioned on this Vercel project; nothing in the
 * codebase ever loaded the script, so it had collected nothing since being
 * turned on.
 *
 * Beyond pageviews, the one event worth recording here is a click through to
 * InvoiceQuick. ToolsRated carries no affiliate links — every outbound link on
 * the site points at InvoiceQuick — so that click *is* this site's conversion,
 * and "which review actually sends people across" is otherwise unanswerable.
 *
 * Delegated rather than wrapped per link, for the same reason as the sister
 * site: the 35 cross-promotion links live inside article content strings, and
 * hand-instrumenting content is a list that drifts the moment someone writes a
 * new review.
 */
export function Analytics() {
  useEffect(() => {
    function onDocumentClick(event: MouseEvent) {
      const target = event.target;
      if (!(target instanceof Element)) return;

      const anchor = target.closest("a[href]");
      if (!(anchor instanceof HTMLAnchorElement)) return;

      let url: URL;
      try {
        url = new URL(anchor.getAttribute("href") || "", window.location.href);
      } catch {
        return;
      }
      // Same-origin links are ordinary navigation; pageviews already cover them.
      if (url.origin === window.location.origin) return;
      if (!url.hostname.includes("invoicequick")) return;

      track("invoicequick_referral_click", {
        // The concrete page. Vercel stamps events with the route pattern, which
        // would collapse every review into a single "/reviews/[slug]" row and
        // lose the only thing worth knowing here.
        from: window.location.pathname.slice(0, 120),
        label: (anchor.textContent || "").replace(/\s+/g, " ").trim().slice(0, 60) || "unlabelled",
        // Deep links land on /create or a trade template rather than the
        // homepage; worth separating, since intent differs sharply.
        destination: url.pathname.slice(0, 60) || "/",
      });
    }

    document.addEventListener("click", onDocumentClick, true);
    return () => document.removeEventListener("click", onDocumentClick, true);
  }, []);

  return <VercelAnalytics />;
}
