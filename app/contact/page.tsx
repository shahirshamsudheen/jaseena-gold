import type { Metadata } from "next";
import AnimatedSection from "../_components/AnimatedSection";
import EnquiryForm from "../_components/EnquiryForm";
import SectionDivider from "../_components/SectionDivider";

export const metadata: Metadata = {
  title: "Contact Us | Book an Appointment",
  description:
    "Get in touch with Jaseena Gold & Diamonds to book an appointment or enquire about our collections.",
};

/**
 * CONTACT PAGE
 * - Main enquiry form
 * - Contact information sidebar
 */
export default function ContactPage() {
  return (
    <>
      <section className="section-ivory py-20 lg:py-28 -mt-20 lg:-mt-24 pt-32 lg:pt-40 bg-ivory/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          
          <div className="text-center mb-16 lg:mb-20">
             <AnimatedSection>
                <p className="text-kicker text-emerald mb-4">Get in Touch</p>
                <h1 className="font-display text-ink font-medium">Contact Us</h1>
                <SectionDivider />
                <p className="text-muted font-body text-lg leading-relaxed max-w-2xl mx-auto">
                  Whether you are planning for a special occasion or simply have a question about our pieces, we are here to assist you.
                </p>
             </AnimatedSection>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
             
             {/* Left Column: Contact Info */}
             <div className="lg:col-span-4 lg:col-start-2">
                <AnimatedSection direction="right">
                   <div className="bg-white p-8 rounded-sm shadow-sm border border-muted/10 h-full">
                      <h2 className="font-display text-2xl text-ink mb-6">Direct Contact</h2>
                      
                      <div className="space-y-8 font-body text-sm">
                         <div>
                            <p className="text-muted mb-1 font-medium">Phone Enquiries</p>
                            {/* [PLACEHOLDER CONTACT] */}
                            <a href="tel:+91XXXXXXXXXX" className="text-emerald hover:text-warm-gold transition-colors text-lg">
                               +91 XXXXX XXXXX
                            </a>
                            <p className="text-muted/70 text-xs mt-1">Available 10 AM - 7 PM, Mon-Sat</p>
                         </div>
                         
                         <div>
                            <p className="text-muted mb-1 font-medium">Email</p>
                            {/* [PLACEHOLDER CONTACT] */}
                            <a href="mailto:info@jaseenagold.com" className="text-emerald hover:text-warm-gold transition-colors">
                               info@jaseenagold.com
                            </a>
                         </div>

                         <div>
                            <p className="text-muted mb-1 font-medium">Quick Chat</p>
                            {/* [PLACEHOLDER] WhatsApp number TBC */}
                            <a href="https://wa.me/91XXXXXXXXXX" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 bg-[#25D366]/10 text-[#075E54] rounded-sm hover:bg-[#25D366]/20 transition-colors mt-2">
                               <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                               </svg>
                               Message on WhatsApp
                            </a>
                         </div>
                      </div>
                   </div>
                </AnimatedSection>
             </div>

             {/* Right Column: Form */}
             <div className="lg:col-span-6">
                <AnimatedSection direction="left" delay={0.2}>
                   <div className="bg-white p-8 lg:p-10 rounded-sm shadow-sm border border-muted/10">
                      <h2 className="font-display text-2xl text-ink mb-2">Send an Enquiry</h2>
                      <p className="text-muted font-body text-sm mb-8">
                         Fill out the form below and we will get back to you as soon as possible.
                      </p>
                      <EnquiryForm />
                   </div>
                </AnimatedSection>
             </div>

          </div>
        </div>
      </section>
    </>
  );
}
