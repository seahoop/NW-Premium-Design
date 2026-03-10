"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { Loader2, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { contactSchema, type ContactFormData } from "@/lib/validations";

const SERVICE_OPTIONS = [
  { value: "kitchen-remodel", label: "Kitchen Remodeling" },
  { value: "bathroom-remodel", label: "Bathroom Remodeling" },
  { value: "cabinet-installation", label: "Cabinet Installation" },
  { value: "cabinet-supply", label: "Cabinet Supply & Purchasing" },
  { value: "interior-repairs", label: "Interior Repairs" },
  { value: "other", label: "Other / Not Sure Yet" },
];

const TIMELINE_OPTIONS = [
  { value: "asap", label: "As Soon as Possible" },
  { value: "1-3-months", label: "Within 1–3 Months" },
  { value: "3-6-months", label: "Within 3–6 Months" },
  { value: "planning", label: "Just Planning Ahead" },
];

export function ContactForm() {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error("Request failed");

      toast.success("Message sent!", {
        description:
          "Thanks! Alex will get back to you within 24 hours.",
      });
      reset();
    } catch {
      toast.error("Something went wrong", {
        description:
          "Please try again or call us directly.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-1.5">
          <Label htmlFor="name">Full Name *</Label>
          <Input
            id="name"
            placeholder="Your name"
            {...register("name")}
            className={errors.name ? "border-destructive" : ""}
          />
          {errors.name && (
            <p className="text-xs text-destructive">{errors.name.message}</p>
          )}
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="phone">Phone Number *</Label>
          <Input
            id="phone"
            type="tel"
            placeholder="(206) 555-0100"
            {...register("phone")}
            className={errors.phone ? "border-destructive" : ""}
          />
          {errors.phone && (
            <p className="text-xs text-destructive">{errors.phone.message}</p>
          )}
        </div>
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="email">Email Address *</Label>
        <Input
          id="email"
          type="email"
          placeholder="you@example.com"
          {...register("email")}
          className={errors.email ? "border-destructive" : ""}
        />
        {errors.email && (
          <p className="text-xs text-destructive">{errors.email.message}</p>
        )}
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-1.5">
          <Label>Service Interested In *</Label>
          <Select onValueChange={(v) => setValue("service", v as ContactFormData["service"])}>
            <SelectTrigger className={errors.service ? "border-destructive" : ""}>
              <SelectValue placeholder="Select a service" />
            </SelectTrigger>
            <SelectContent>
              {SERVICE_OPTIONS.map((opt) => (
                <SelectItem key={opt.value} value={opt.value}>
                  {opt.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.service && (
            <p className="text-xs text-destructive">{errors.service.message}</p>
          )}
        </div>
        <div className="space-y-1.5">
          <Label>Project Timeline *</Label>
          <Select onValueChange={(v) => setValue("timeline", v as ContactFormData["timeline"])}>
            <SelectTrigger className={errors.timeline ? "border-destructive" : ""}>
              <SelectValue placeholder="When are you looking?" />
            </SelectTrigger>
            <SelectContent>
              {TIMELINE_OPTIONS.map((opt) => (
                <SelectItem key={opt.value} value={opt.value}>
                  {opt.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.timeline && (
            <p className="text-xs text-destructive">{errors.timeline.message}</p>
          )}
        </div>
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="message">Tell Us About Your Project *</Label>
        <Textarea
          id="message"
          rows={4}
          placeholder="What are you looking to remodel or install? Any details about the space or scope help us give you a better estimate."
          {...register("message")}
          className={errors.message ? "border-destructive" : ""}
        />
        {errors.message && (
          <p className="text-xs text-destructive">{errors.message.message}</p>
        )}
      </div>

      <Button
        type="submit"
        size="lg"
        disabled={loading}
        className="w-full gap-2"
      >
        {loading ? (
          <>
            <Loader2 className="size-4 animate-spin" />
            Sending…
          </>
        ) : (
          <>
            <Send className="size-4" />
            Send Message
          </>
        )}
      </Button>

      <p className="text-center text-xs text-navy/45">
        Free estimate · No obligation · Typically responds within 24 hours
      </p>
    </form>
  );
}
