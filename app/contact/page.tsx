"use client";

import type React from "react";

import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

export default function ContactPage() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, service: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast({
      title: "Message Sent",
      description: "We've received your message and will get back to you soon!",
    });

    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    });
    setIsSubmitting(false);
  };

  return (
    <div className="bg-[#2E2E2E] text-[#FFFFF0] min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-[#252525] py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-start max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-[#FFFFF0]/80 mb-8">
              Have questions or ready to book? Get in touch with our team to
              discuss your project or schedule a studio tour.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-[#2E2E2E]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <Card className="bg-[#3A3A3A] text-[#FFFFF0] border-gray-700">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <Phone className="h-10 w-10 text-purple-400 mb-4" />
                <h3 className="text-lg font-bold mb-2">Phone</h3>
                <p className="text-[#FFFFF0]/80 mb-2">Call us directly</p>
                <a
                  href="tel:+12156019509"
                  className="text-purple-400 hover:underline"
                >
                  (215) 601-9509
                </a>
                <a
                  href="tel:+18562983095"
                  className="text-purple-400 hover:underline"
                >
                  (856) 298-3095
                </a>
              </CardContent>
            </Card>

            <Card className="bg-[#3A3A3A] text-[#FFFFF0] border-gray-700">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <Mail className="h-10 w-10 text-purple-400 mb-4" />
                <h3 className="text-lg font-bold mb-2">Email</h3>
                <p className="text-[#FFFFF0]/80 mb-2">Send us a message</p>
                <a
                  href="mailto:soundslikesoma@gmail.com"
                  className="text-purple-400 hover:underline"
                >
                  soundslikesoma@gmail.com
                </a>
              </CardContent>
            </Card>

            <Card className="bg-[#3A3A3A] text-[#FFFFF0] border-gray-700">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <MapPin className="h-10 w-10 text-purple-400 mb-4" />
                <h3 className="text-lg font-bold mb-2">Location</h3>
                <p className="text-[#FFFFF0]/80 mb-2">Visit our studio</p>
                <address className="not-italic text-purple-400">
                  1554 S Lambert St, Philadelphia, PA 19146
                </address>
              </CardContent>
            </Card>

            <Card className="bg-[#3A3A3A] text-[#FFFFF0] border-gray-700">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <Clock className="h-10 w-10 text-purple-400 mb-4" />
                <h3 className="text-lg font-bold mb-2">Hours</h3>
                <p className="text-[#FFFFF0]/80 mb-2">When we&apos;re open</p>
                <p className="text-purple-400">Mon-Fri: 10am - 12am</p>
                <p className="text-purple-400">Sat-Sun: 12pm - 2am</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                      className="bg-[#3A3A3A] border-gray-700"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Your email"
                      required
                      className="bg-[#3A3A3A] border-gray-700"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone (optional)</Label>
                    <Input
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Your phone number"
                      className="bg-[#3A3A3A] border-gray-700"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="service">Service of Interest</Label>
                    <Select
                      value={formData.service}
                      onValueChange={handleSelectChange}
                    >
                      <SelectTrigger className="bg-[#3A3A3A] border-gray-700">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="recording">Recording</SelectItem>
                        <SelectItem value="mixing">
                          Mixing & Mastering
                        </SelectItem>
                        <SelectItem value="podcast">
                          Podcast Production
                        </SelectItem>
                        <SelectItem value="voiceover">
                          Voice Over Recording
                        </SelectItem>
                        <SelectItem value="rental">Studio Rental</SelectItem>
                        <SelectItem value="video">Video Production</SelectItem>
                        <SelectItem value="website">
                          Website/EPK Design
                        </SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project or inquiry"
                    required
                    className="min-h-[150px] bg-[#3A3A3A] border-gray-700"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-purple-600 hover:bg-purple-700"
                >
                  {isSubmitting ? (
                    <>Sending...</>
                  ) : (
                    <>
                      Send Message <Send className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              </form>
            </div>

            {/* Map */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Find Us</h2>
              <div className="aspect-square md:aspect-video lg:aspect-auto lg:h-full rounded-lg overflow-hidden bg-[#3A3A3A] border border-gray-700">
                {/* Replace with actual map embed */}
                <div className="w-full h-full flex items-center justify-center bg-[#3A3A3A]">
                  <p className="text-[#FFFFF0]/50">Map Embed Goes Here</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-[#252525]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              <div className="bg-[#3A3A3A] rounded-lg p-6 border border-gray-700">
                <h3 className="text-xl font-bold mb-2">
                  How far in advance should I book studio time?
                </h3>
                <p className="text-[#FFFFF0]/80">
                  We recommend booking at least 2-3 weeks in advance for weekday
                  sessions and 3-4 weeks for weekend sessions. For larger
                  projects or specific engineers, earlier booking is advised.
                  Last-minute availability does occur, so don&apos;t hesitate to
                  check with us for short-notice bookings.
                </p>
              </div>
              <div className="bg-[#3A3A3A] rounded-lg p-6 border border-gray-700">
                <h3 className="text-xl font-bold mb-2">
                  Do you offer studio tours?
                </h3>
                <p className="text-[#FFFFF0]/80">
                  Yes, we offer studio tours by appointment. This is a great way
                  to see our facilities, meet our team, and discuss your project
                  in person before booking. Tours typically last 30-45 minutes
                  and can be scheduled via email or phone.
                </p>
              </div>
              <div className="bg-[#3A3A3A] rounded-lg p-6 border border-gray-700">
                <h3 className="text-xl font-bold mb-2">
                  What payment methods do you accept?
                </h3>
                <p className="text-[#FFFFF0]/80">
                  We accept all major credit cards, PayPal, Venmo, Cash App, and
                  cash. For larger projects, we offer payment plans with a
                  deposit. Studio rentals require a 50% deposit to secure your
                  booking, with the balance due on the day of your session.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-purple-900/20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Book Your Session?
          </h2>
          <p className="text-xl text-[#FFFFF0]/80 max-w-2xl mx-auto mb-8">
            Contact us today to schedule your recording session, book studio
            time, or discuss your project needs.
          </p>
          <Button
            size="lg"
            className="bg-purple-600 hover:bg-purple-700 text-lg px-8"
          >
            Book Now
          </Button>
        </div>
      </section>
    </div>
  );
}
