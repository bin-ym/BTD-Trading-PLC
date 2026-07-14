"use client";

import { useState } from "react";
import Link from "next/link";
import {
    Send,
    CheckCircle2,
    ArrowRight,
} from "lucide-react";

export default function ContactForm() {
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSubmitted(true);
        }, 1500);
    };

    if (isSubmitted) {
        return (
            <div className="rounded-3xl border bg-card p-8 shadow-lg">
                <div className="flex min-h-[400px] flex-col items-center justify-center text-center">
                    <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
                        <CheckCircle2 className="h-10 w-10 text-green-600" />
                    </div>
                    <h2 className="text-2xl font-bold">Message Sent!</h2>
                    <p className="mt-4 text-muted-foreground">
                        Thank you for contacting us. We'll get back to you within 24 hours.
                    </p>
                    <Link
                        href="/"
                        className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-medium text-primary-foreground"
                    >
                        Back to Home
                        <ArrowRight className="h-4 w-4" />
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="rounded-3xl border bg-card p-8 shadow-lg">
            <h2 className="text-2xl font-bold">Send Us a Message</h2>
            <p className="mt-2 text-muted-foreground">
                Fill out the form below and we&apos;ll get back to you soon.
            </p>

            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                        <label
                            htmlFor="name"
                            className="mb-2 block text-sm font-medium"
                        >
                            Full Name *
                        </label>
                        <input
                            id="name"
                            type="text"
                            required
                            value={formState.name}
                            onChange={(e) =>
                                setFormState({ ...formState, name: e.target.value })
                            }
                            className="w-full rounded-xl border bg-background px-4 py-3 transition-all focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                            placeholder="John Doe"
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="email"
                            className="mb-2 block text-sm font-medium"
                        >
                            Email Address *
                        </label>
                        <input
                            id="email"
                            type="email"
                            required
                            value={formState.email}
                            onChange={(e) =>
                                setFormState({ ...formState, email: e.target.value })
                            }
                            className="w-full rounded-xl border bg-background px-4 py-3 transition-all focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                            placeholder="john@example.com"
                        />
                    </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                        <label
                            htmlFor="phone"
                            className="mb-2 block text-sm font-medium"
                        >
                            Phone Number
                        </label>
                        <input
                            id="phone"
                            type="tel"
                            value={formState.phone}
                            onChange={(e) =>
                                setFormState({ ...formState, phone: e.target.value })
                            }
                            className="w-full rounded-xl border bg-background px-4 py-3 transition-all focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                            placeholder="+251 XXX XXX XXX"
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="service"
                            className="mb-2 block text-sm font-medium"
                        >
                            Service Interested In
                        </label>
                        <select
                            id="service"
                            value={formState.service}
                            onChange={(e) =>
                                setFormState({ ...formState, service: e.target.value })
                            }
                            className="w-full rounded-xl border bg-background px-4 py-3 transition-all focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                        >
                            <option value="">Select a service</option>
                            <option value="office">Office Cleaning</option>
                            <option value="building">Building Cleaning</option>
                            <option value="commercial">Commercial Cleaning</option>
                            <option value="hospital">Hospital Cleaning</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                </div>

                <div>
                    <label
                        htmlFor="message"
                        className="mb-2 block text-sm font-medium"
                    >
                        Message *
                    </label>
                    <textarea
                        id="message"
                        required
                        rows={5}
                        value={formState.message}
                        onChange={(e) =>
                            setFormState({ ...formState, message: e.target.value })
                        }
                        className="w-full rounded-xl border bg-background px-4 py-3 transition-all focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                        placeholder="Tell us about your cleaning needs..."
                    />
                </div>

                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 py-4 font-medium text-primary-foreground transition-all hover:bg-primary/90 disabled:opacity-50"
                >
                    {isSubmitting ? (
                        <>
                            <svg
                                className="h-5 w-5 animate-spin"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <circle
                                    className="opacity-25"
                                    cx="12"
                                    cy="12"
                                    r="10"
                                    stroke="currentColor"
                                    strokeWidth="4"
                                />
                                <path
                                    className="opacity-75"
                                    fill="currentColor"
                                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                />
                            </svg>
                            Sending...
                        </>
                    ) : (
                        <>
                            Send Message
                            <Send className="h-4 w-4" />
                        </>
                    )}
                </button>
            </form>
        </div>
    );
}