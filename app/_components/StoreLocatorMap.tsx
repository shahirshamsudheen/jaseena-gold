import type { Store } from "../_lib/types";

interface StoreLocatorMapProps {
  store: Store;
}

/**
 * StoreLocatorMap — Store info card with map placeholder.
 *
 * [PLACEHOLDER] — Google Maps embed URL to be added when confirmed.
 * [PLACEHOLDER CONTACT] — Phone, email, hours to be confirmed by client.
 */
export default function StoreLocatorMap({ store }: StoreLocatorMapProps) {
  return (
    <div className="bg-white rounded-sm overflow-hidden shadow-sm">
      {/* Map Area */}
      <div className="relative aspect-video bg-emerald/5 flex items-center justify-center">
        {store.mapUrl ? (
          <iframe
            src={store.mapUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title={`Map showing ${store.name}`}
            className="absolute inset-0"
          />
        ) : (
          /* Placeholder for when map embed is not yet available */
          <div className="text-center p-8">
            <svg
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#0F5C43"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mx-auto mb-3 opacity-40"
            >
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            <p className="text-muted text-sm font-body">
              Map will be available soon
            </p>
            <p className="text-muted/60 text-xs font-body mt-1">
              {/* [PLACEHOLDER] — Google Maps embed to be added */}
              Google Maps embed coming soon
            </p>
          </div>
        )}
      </div>

      {/* Store Info */}
      <div className="p-6">
        <h3 className="font-display text-xl text-ink font-medium">{store.name}</h3>
        <hr className="block h-px border-none bg-warm-gold w-12 my-4" aria-hidden="true" />

        <address className="not-italic text-muted text-sm font-body leading-relaxed space-y-3">
          <div className="flex gap-3">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="shrink-0 mt-0.5 text-emerald">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            <div>
              <p>{store.address}</p>
              <p>{store.city}, {store.state}</p>
            </div>
          </div>

          <div className="flex gap-3">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="shrink-0 mt-0.5 text-emerald">
              <rect x="2" y="3" width="20" height="18" rx="2" />
              <path d="M8 3v3M16 3v3M2 9h20" />
            </svg>
            <p>{store.hours}</p>
          </div>

          <div className="flex gap-3">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="shrink-0 mt-0.5 text-emerald">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            {/* [PLACEHOLDER CONTACT] */}
            <a href={`tel:${store.phone.replace(/\s/g, "")}`} className="text-emerald hover:text-warm-gold transition-colors min-h-0">
              {store.phone}
            </a>
          </div>

          <div className="flex gap-3">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="shrink-0 mt-0.5 text-emerald">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
            {/* [PLACEHOLDER CONTACT] */}
            <a href={`mailto:${store.email}`} className="text-emerald hover:text-warm-gold transition-colors min-h-0">
              {store.email}
            </a>
          </div>
        </address>

        {/* Get Directions link */}
        <div className="mt-6 flex gap-3">
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(store.address + ", " + store.city)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline !py-2 !px-4 !text-xs"
          >
            Get Directions
          </a>
          {/* [PLACEHOLDER] — WhatsApp number TBC */}
          <a
            href={`https://wa.me/${store.phone.replace(/[^0-9]/g, "")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary !py-2 !px-4 !text-xs"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
