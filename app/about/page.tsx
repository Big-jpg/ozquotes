export default function About() {
    return (
        <div className="container mx-auto py-12">
            <h1 className="text-3xl font-bold text-center mb-8">About Oz Quotes</h1>
            <p className="text-lg text-gray-600 text-center mb-8">
                Oz Quotes is dedicated to providing you with the most accurate and competitive quotes
                for your energy upgrade projects. With our AI-powered insights and vast database,
                we help homeowners and businesses find the best deals on solar panels, battery systems,
                and other energy-efficient technologies.
            </p>

            <section className="py-12">
                <h2 className="text-2xl font-bold text-center">Our Mission</h2>
                <p className="mt-4 text-lg text-gray-600 text-center">
                    Our mission is to make energy upgrades accessible and affordable for everyone.
                    By leveraging technology and data, we streamline the process of getting quotes
                    and ensure you receive the best options for your needs.
                </p>
            </section>

            <section className="py-12">
                <h2 className="text-2xl font-bold text-center">Why Choose Us?</h2>
                <ul className="mt-8 space-y-4 text-lg text-gray-600 list-disc list-inside">
                    <li>AI-powered analysis for the most competitive pricing.</li>
                    <li>Comprehensive database of top-rated providers.</li>
                    <li>Exclusive rewards and discounts for thorough information.</li>
                    <li>Easy-to-use platform that saves you time and money.</li>
                </ul>
            </section>
        </div>
    );
}
