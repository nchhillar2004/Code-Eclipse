"use client";
import DevelopmentPricing from "@/components/DevelopmentPricing";
import { useState } from "react";

export default function PricingPage() {
    const [tab, setTab] = useState<string>("dev");
    const [currency, setCurrency] = useState<string>("usd");

    return (
        <div className="pricing">
            <section className="relative h-[60vh] bg-gradient-to-bl from-green-600 to-blue-400">
                <div className="absolute bottom-0 w-full">
                    <div className="flex flex-col text-center mb-5 space-y-2">
                        <h1 className="text-xl tracking-tighter leading-none font-semibold uppercase">
                            Plans & pricing
                        </h1>
                        <h1 className="text-6xl font-semibold lg:w-1/2 m-auto">
                            Explore plans and pricing and pay as you go.
                        </h1>
                        <p className="text-2xl">
                            Choose the best plan for your business and we make
                            it grow.
                        </p>
                    </div>
                </div>
            </section>
            <section className="tabs bg-zinc-100">
                <div className="container py-16 flex flex-col items-center">
                    <div className="flex items-center space-x-4 flex-wrap justify-center mb-2">
                        <div className="flex rounded-full py-1 px-2 border border-green-500 w-fit space-x-2">
                            <button
                                onClick={() => {
                                    setTab("dev");
                                }}
                                className={`py-2 px-4 rounded-full ${
                                    tab === "dev"
                                        ? "bg-black text-white"
                                        : "bg-transparent text-black hover:bg-zinc-200"
                                }`}
                            >
                                Development pricing
                            </button>
                            <button
                                onClick={() => {
                                    setTab("hour");
                                }}
                                className={`py-2 px-4 rounded-full ${
                                    tab === "hour"
                                        ? "bg-black text-white"
                                        : "bg-transparent text-black hover:bg-zinc-200"
                                }`}
                            >
                                Hourly rate
                            </button>
                        </div>
                        <select
                            name="currency"
                            id="currency"
                            value={currency}
                            className="outline-none m-2 border bg-transparent border-zinc-400 rounded-md py-2 px-4"
                            onChange={(e) => {
                                setCurrency(e.target.value);
                            }}
                        >
                            <option value="usd">🇺🇸 USD</option>
                            <option value="inr">🇮🇳 INR</option>
                        </select>
                    </div>
                    <div className="w-full max-lg:max-w-md">
                        {tab === "dev" ? (
                            <DevelopmentPricing currency={currency} />
                        ) : (
                            <></> // <HourlyRate />
                        )}
                    </div>
                </div>
            </section>
        </div>
    );
}
