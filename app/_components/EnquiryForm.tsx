"use client";

import { useState } from "react";
import type { EnquiryFormData } from "../_lib/types";
import { stores } from "../_lib/data";

interface EnquiryFormProps {
  /** Pre-fill with a product ID for product-specific enquiries */
  productId?: string;
  /** Product name to show in the form */
  productName?: string;
}

/**
 * EnquiryForm, Contact / Enquiry form.
 * Fields: name, phone, email, message, preferred store.
 * No backend, UI only with success state.
 *
 * [PLACEHOLDER], Connect to a real backend/API when ready.
 */
export default function EnquiryForm({ productId, productName }: EnquiryFormProps) {
  const [formData, setFormData] = useState<EnquiryFormData>({
    name: "",
    phone: "",
    email: "",
    message: productName ? `I would like to enquire about: ${productName}` : "",
    preferredStore: stores[0]?.id || "",
    productId: productId || undefined,
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<keyof EnquiryFormData, string>>>({});

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof EnquiryFormData, string>> = {};

    if (!formData.name.trim()) newErrors.name = "Please enter your name";
    if (!formData.phone.trim()) newErrors.phone = "Please enter your phone number";
    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (!formData.message.trim()) newErrors.message = "Please enter a message";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      // [PLACEHOLDER], Replace with actual form submission API
      console.log("Enquiry submitted:", formData);
      setIsSubmitted(true);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error on change
    if (errors[name as keyof EnquiryFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  if (isSubmitted) {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-emerald/10 flex items-center justify-center">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#0F5C43" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <h3 className="font-display text-2xl text-ink mb-2">Thank you for your enquiry</h3>
        <p className="text-muted font-body">
          Our team will reach out to you shortly. We look forward to welcoming you.
        </p>
        <hr className="block h-px border-none bg-warm-gold w-16 mx-auto my-6" aria-hidden="true" />
        <button
          onClick={() => {
            setIsSubmitted(false);
            setFormData({
              name: "",
              phone: "",
              email: "",
              message: "",
              preferredStore: stores[0]?.id || "",
            });
          }}
          className="btn-outline !py-2 !px-6 !text-xs"
        >
          Send Another Enquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      {productName && (
        <div className="bg-emerald/5 border border-emerald/10 rounded-sm px-4 py-3">
          <p className="text-kicker text-emerald text-[0.65rem]">Enquiry about</p>
          <p className="font-display text-ink text-lg">{productName}</p>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Name */}
        <div>
          <label htmlFor="enquiry-name" className="block text-sm font-body font-medium text-ink mb-2">
            Full Name <span className="text-warm-gold">*</span>
          </label>
          <input
            id="enquiry-name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your full name"
            className={`w-full px-4 py-3 bg-ivory border ${errors.name ? "border-red-400" : "border-muted/30"} rounded-sm text-ink font-body text-sm focus:outline-none focus:border-emerald transition-colors placeholder:text-muted/50`}
            required
          />
          {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="enquiry-phone" className="block text-sm font-body font-medium text-ink mb-2">
            Phone <span className="text-warm-gold">*</span>
          </label>
          <input
            id="enquiry-phone"
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+91 XXXXX XXXXX"
            className={`w-full px-4 py-3 bg-ivory border ${errors.phone ? "border-red-400" : "border-muted/30"} rounded-sm text-ink font-body text-sm focus:outline-none focus:border-emerald transition-colors placeholder:text-muted/50`}
            required
          />
          {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
        </div>
      </div>

      {/* Email */}
      <div>
        <label htmlFor="enquiry-email" className="block text-sm font-body font-medium text-ink mb-2">
          Email <span className="text-warm-gold">*</span>
        </label>
        <input
          id="enquiry-email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="your@email.com"
          className={`w-full px-4 py-3 bg-ivory border ${errors.email ? "border-red-400" : "border-muted/30"} rounded-sm text-ink font-body text-sm focus:outline-none focus:border-emerald transition-colors placeholder:text-muted/50`}
          required
        />
        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
      </div>

      {/* Preferred Store */}
      <div>
        <label htmlFor="enquiry-store" className="block text-sm font-body font-medium text-ink mb-2">
          Preferred Store
        </label>
        <select
          id="enquiry-store"
          name="preferredStore"
          value={formData.preferredStore}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-ivory border border-muted/30 rounded-sm text-ink font-body text-sm focus:outline-none focus:border-emerald transition-colors"
        >
          {stores.map((store) => (
            <option key={store.id} value={store.id}>
              {store.name}
            </option>
          ))}
        </select>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="enquiry-message" className="block text-sm font-body font-medium text-ink mb-2">
          Message <span className="text-warm-gold">*</span>
        </label>
        <textarea
          id="enquiry-message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell us how we can help you..."
          rows={5}
          className={`w-full px-4 py-3 bg-ivory border ${errors.message ? "border-red-400" : "border-muted/30"} rounded-sm text-ink font-body text-sm focus:outline-none focus:border-emerald transition-colors placeholder:text-muted/50 resize-y`}
          required
        />
        {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
      </div>

      <button type="submit" className="btn-primary w-full md:w-auto">
        Send Enquiry
      </button>
    </form>
  );
}
