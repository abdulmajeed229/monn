import Footer from "../components/footer";
import Navbar from "../components/navbar";

function Privacy() {
    return (
        <div className="h-[100vh] w-full bg-blue-900 flex flex-col justify-between">
            <Navbar />

            <div className="p-8 text-white">
                <h1 className="text-3xl font-bold mb-4">Privacy Policy for VLODD Donation Website</h1>
                <p>
                    <strong>Effective Date:</strong> [Insert Date]
                </p>
                <p>
                    At VLODD, we are committed to protecting the privacy and security of our users&apos; personal information.
                    This Privacy Policy explains how we collect, use, and share information when you visit our website and
                    make donations.
                </p>

                <h2 className="text-2xl font-semibold mt-6">1. Information We Collect</h2>
                <ul className="list-disc ml-6">
                    <li>
                        <strong>Personal Information:</strong> When you make a donation, create an account, or contact us, we
                        may collect personal details such as your name, email address, phone number, mailing address, and
                        payment information.
                    </li>
                    <li>
                        <strong>Payment Information:</strong> To process donations, we collect payment information such as
                        credit/debit card details or bank account information through a secure third-party payment processor.
                        We do not store payment information on our servers.
                    </li>
                    <li>
                        <strong>Automatically Collected Information:</strong> When you browse our website, we may collect
                        certain information automatically, such as your IP address, browser type, operating system, referring
                        URLs, and pages you visited on our site.
                    </li>
                </ul>

                <h2 className="text-2xl font-semibold mt-6">2. How We Use Your Information</h2>
                <p>
                    We use the information we collect for several purposes, including processing donations, sending donation
                    receipts, responding to inquiries, and providing customer support.
                </p>

                <h2 className="text-2xl font-semibold mt-6">3. Sharing Your Information</h2>
                <p>
                    We respect your privacy and do not sell or rent your personal information to third parties. However, we
                    may share your information with service providers, legal entities, or during business transfers, as
                    applicable.
                </p>

                <h2 className="text-2xl font-semibold mt-6">4. Security of Your Information</h2>
                <p>
                    We take appropriate measures to protect your personal information from unauthorized access, loss, or
                    misuse. While we use industry-standard security practices, no online service can guarantee absolute
                    security.
                </p>

                <h2 className="text-2xl font-semibold mt-6">Contact Us</h2>
                <p>
                    If you have any questions or concerns about this Privacy Policy, contact us at:
                </p>
                <ul className="list-disc ml-6">
                    <li>Email: [Insert Contact Email]</li>
                    <li>Phone: [Insert Contact Number]</li>
                    <li>Address: [Insert Address]</li>
                </ul>
            </div>

            <Footer />
        </div>
    );
}

export default Privacy;
