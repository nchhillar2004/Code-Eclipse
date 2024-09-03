import Link from "next/link";

interface DevelopmentPricingProps {
    name: string;
    price: number;
    currency: string;
    features: string[];
    tagline: string;
}

function PricingCard({
    name,
    price,
    currency,
    features,
    tagline,
}: DevelopmentPricingProps) {
    return (
        <div className="bg-white lg:w-[30%] h-fit min-h-[560px] w-full rounded-xl mx-1 my-4 shadow-md shadow-green-100">
            <div className="bg-green-400 text-black font-semibold text-sm text-center py-2 rounded-t-xl w-full">
                Save 5% if you pay with INR
            </div>
            <div className="flex flex-col justify-between min-h-[500px]">
                <div className="p-5 flex flex-col space-y-5">
                    <div>
                        <h4 className="text-xl font-semibold uppercase">
                            {name}
                        </h4>
                        <p className="text-zinc-600">{tagline}</p>
                    </div>
                    <div className="flex items-baseline flex-wrap">
                        <h1 className="lg:text-6xl text-nowrap text-4xl font-bold">
                            {currency === "inr" ? "₹" : "$"}{" "}
                            {currency === "inr"
                                ? (price * 80 - 1).toLocaleString()
                                : price}
                        </h1>
                        {currency === "inr" && (
                            <h3 className="lg:text-2xl text-nowrap ml-4 text-xl text-zinc-500 font-medium line-through">
                                {currency === "inr" ? "₹" : "$"}{" "}
                                {currency === "inr"
                                    ? (price * 84).toLocaleString()
                                    : price}
                            </h3>
                        )}
                    </div>
                    <div className="w-full h-[2px] bg-zinc-100"></div>
                    <ul className="list-disc list-inside">
                        <b>Features</b>
                        {features.map((feature, index) => (
                            <li key={index} className="text-sm mt-1">
                                {feature}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="p-5">
                    <div className="bottom-0 w-full cursor-pointer text-lg text-center mt-5 hover:bg-zinc-800 transition-[0.4s] font-semibold rounded-full p-1 bg-black text-white">
                        <Link href={`/checkout/${name.toLowerCase()}`} className="block w-full p-2">
                            Buy {name.toLowerCase()}
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function DevelopmentPricing({ currency }: { currency: string }) {
    return (
        <div className="flex w-full justify-between lg:flex-row flex-col">
            <PricingCard
                name="Basic"
                tagline="Essential Static Site"
                price={50}
                currency={currency}
                features={[
                    "Custom Static Website",
                    "Tailored Design & UI",
                    "Mobile Responsive",
                    "Basic SEO Optimization",
                ]}
            />

            <PricingCard
                name="Medium"
                tagline="Perfect for Small Businesses"
                price={150}
                currency={currency}
                features={[
                    "Dynamic Content",
                    "API Integration",
                    "Contact Form Included",
                    "Database Integration",
                    "Enhanced SEO Features",
                    "Analytics Integration",
                    "Email Newsletter Signup",
                ]}
            />

            <PricingCard
                name="Pro"
                tagline="Large Sites with advanced solutions"
                price={250}
                currency={currency}
                features={[
                    "Dynamic Content",
                    "User Authentication",
                    "Real-Time Updates",
                    "Custom Interactive Features",
                    "NO charges for extra features",
                ]}
            />
        </div>
    );
}
